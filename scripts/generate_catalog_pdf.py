#!/usr/bin/env python3
"""Generate the customer-facing GUBOT PDF catalog from website specifications."""

from __future__ import annotations

import argparse
import html
import json
import shutil
import subprocess
from pathlib import Path

from PIL import Image
from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "output" / "pdf" / "GUBOT-Automotive-Spray-Booth-Catalog-2026.pdf"
WEB_DOWNLOAD = ROOT / "downloads" / "GUBOT-Automotive-Spray-Booth-Catalog-2026.pdf"
SPEC_SOURCE = ROOT / "catalog" / "specifications.js"
PRODUCT_IMAGE = ROOT / "catalog" / "assets" / "booth-white-20260712.webp"
LOGO_IMAGE = ROOT / "assets" / "logo-combo.png"

PAGE_W, PAGE_H = A4
MARGIN = 36

NAVY = HexColor("#071A2D")
DARK_BLUE = HexColor("#0B2A47")
BLUE = HexColor("#0B82F0")
BLUE_DARK = HexColor("#0662B8")
BLUE_SOFT = HexColor("#EAF5FF")
BLUE_PALE = HexColor("#F5FAFF")
INK = HexColor("#152435")
MUTED = HexColor("#5D6B79")
LINE = HexColor("#D5E0EA")
PAPER = HexColor("#FBFDFF")
ELECTRIC = HexColor("#0B82F0")
GAS = HexColor("#149B82")
DIESEL = HexColor("#C98218")

MODEL_ORDER = [
    "GBT-SB6900-E-ECO",
    "GBT-SB6900-E-PLUS",
    "GBT-SB6900-E-PRO",
    "GBT-SB6900-NG-ECO",
    "GBT-SB6900-NG-PLUS",
    "GBT-SB6900-NG-PRO",
    "GBT-SB6900-D-ECO",
    "GBT-SB6900-D-PLUS",
    "GBT-SB6900-D-PRO",
]

FUEL_NAMES = {
    "E": "Electric Heating",
    "NG": "Natural Gas Heating",
    "D": "Diesel Heating",
}

FUEL_COLORS = {"E": ELECTRIC, "NG": GAS, "D": DIESEL}

FUEL_BENEFITS = {
    "E": (
        "Direct infrared heating",
        "A practical choice where adequate electrical capacity is available. It avoids on-site fuel storage and uses eight infrared heating sets with 24 kW total heating power.",
    ),
    "NG": (
        "Burner heating for regular curing",
        "Suitable for workshops with a compliant natural-gas connection. Riello FS10 or FS20 burner selection follows the configuration level.",
    ),
    "D": (
        "Independent fuel heating",
        "Suitable for projects without piped natural gas, subject to local fuel-storage and safety rules. Each model uses a Riello G10 diesel burner.",
    ),
}

TIER_BENEFITS = {
    "ECO": (
        "Practical core specification",
        "For price-conscious daily refinishing: EPS wall panels, aluminum-wound ventilation motors and a standard galvanized base support.",
    ),
    "PLUS": (
        "Balanced upgrade",
        "Adds fire-resistant rock-wool panels, copper-wound ventilation motors, heavier grating and the higher-grade SF-700G ceiling filter.",
    ),
    "PRO": (
        "Professional specification",
        "Adds 0.5 mm panel skins, a No. 12 channel-steel base, 5 x 30 grating and a four-leaf aluminum-alloy glazed main door.",
    ),
}


def register_fonts() -> None:
    regular_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    ]
    bold_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ]

    regular = next((path for path in regular_candidates if path.exists()), None)
    bold = next((path for path in bold_candidates if path.exists()), None)
    if regular and bold:
        pdfmetrics.registerFont(TTFont("GubotSans", str(regular)))
        pdfmetrics.registerFont(TTFont("GubotSans-Bold", str(bold)))
    else:
        # Helvetica covers the English customer edition when local fonts are unavailable.
        pdfmetrics.registerFont(pdfmetrics.Font("GubotSans", "Helvetica", "WinAnsiEncoding"))
        pdfmetrics.registerFont(pdfmetrics.Font("GubotSans-Bold", "Helvetica-Bold", "WinAnsiEncoding"))


def load_specifications() -> dict[str, list[list[str]]]:
    node = shutil.which("node")
    if not node:
        raise RuntimeError("Node.js is required to read catalog/specifications.js")

    loader = """
const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync(process.argv[1], 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: process.argv[1] });
process.stdout.write(JSON.stringify(sandbox.window.GubotCatalogSpecifications));
"""
    result = subprocess.run(
        [node, "-e", loader, str(SPEC_SOURCE)],
        check=True,
        capture_output=True,
        text=True,
    )
    payload = json.loads(result.stdout)
    models = payload.get("models", {})
    missing = [code for code in MODEL_ORDER if code not in models]
    if missing:
        raise RuntimeError("Missing model specifications: " + ", ".join(missing))
    return {code: models[code]["locales"]["en"] for code in MODEL_ORDER}


def parse_model_code(code: str) -> tuple[str, str]:
    parts = code.split("-")
    return parts[-2], parts[-1]


def as_spec_map(items: list[list[str]]) -> dict[str, str]:
    return {label: value for label, value in items}


def paragraph(text: str, style: ParagraphStyle) -> Paragraph:
    safe = html.escape(str(text), quote=False).replace("\n", "<br/>")
    return Paragraph(safe, style)


def draw_paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    style: ParagraphStyle,
) -> float:
    p = paragraph(text, style)
    _, height = p.wrap(width, PAGE_H)
    p.drawOn(c, x, top - height)
    return height


def draw_contain_image(
    c: canvas.Canvas,
    path: Path,
    x: float,
    y: float,
    width: float,
    height: float,
    padding: float = 0,
) -> tuple[float, float, float, float]:
    with Image.open(path) as image:
        source_w, source_h = image.size
    usable_w = max(1, width - padding * 2)
    usable_h = max(1, height - padding * 2)
    scale = min(usable_w / source_w, usable_h / source_h)
    draw_w = source_w * scale
    draw_h = source_h * scale
    draw_x = x + (width - draw_w) / 2
    draw_y = y + (height - draw_h) / 2
    c.drawImage(
        ImageReader(str(path)),
        draw_x,
        draw_y,
        width=draw_w,
        height=draw_h,
        preserveAspectRatio=True,
        mask="auto",
    )
    return draw_x, draw_y, draw_w, draw_h


def draw_logo(c: canvas.Canvas, x: float, y: float, width: float) -> float:
    with Image.open(LOGO_IMAGE) as image:
        source_w, source_h = image.size
    height = width * source_h / source_w
    c.drawImage(ImageReader(str(LOGO_IMAGE)), x, y, width=width, height=height, mask="auto")
    return height


def draw_round_box(
    c: canvas.Canvas,
    x: float,
    y: float,
    width: float,
    height: float,
    fill: Color,
    stroke: Color = LINE,
    radius: float = 8,
    line_width: float = 0.7,
) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(line_width)
    c.roundRect(x, y, width, height, radius, fill=1, stroke=1)


def add_link(c: canvas.Canvas, url: str, x: float, y: float, width: float, height: float) -> None:
    c.linkURL(url, (x, y, x + width, y + height), relative=0, thickness=0)


def draw_header(c: canvas.Canvas, section: str, page_number: int) -> None:
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 12, PAGE_W, 12, fill=1, stroke=0)
    draw_logo(c, MARGIN, PAGE_H - 49, 104)
    c.setFillColor(MUTED)
    c.setFont("GubotSans-Bold", 7.5)
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 31, section.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(MARGIN, PAGE_H - 58, PAGE_W - MARGIN, PAGE_H - 58)
    draw_footer(c, page_number)


def draw_footer(c: canvas.Canvas, page_number: int) -> None:
    c.setStrokeColor(LINE)
    c.setLineWidth(0.45)
    c.line(MARGIN, 34, PAGE_W - MARGIN, 34)
    c.setFont("GubotSans", 7)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 21, "www.gubotspraybooth.com")
    c.drawCentredString(PAGE_W / 2, 21, "GUBOT AUTOMOTIVE SPRAY BOOTH CATALOG 2026")
    c.drawRightString(PAGE_W - MARGIN, 21, f"{page_number:02d}")


def draw_badge(c: canvas.Canvas, label: str, x: float, y: float, color: Color, width: float) -> None:
    c.setFillColor(color)
    c.roundRect(x, y, width, 22, 11, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 8)
    c.drawCentredString(x + width / 2, y + 7, label)


def draw_qr(c: canvas.Canvas, url: str, x: float, y: float, size: float) -> None:
    widget = QrCodeWidget(url)
    x1, y1, x2, y2 = widget.getBounds()
    scale = size / max(x2 - x1, y2 - y1)
    drawing = Drawing(size, size, transform=[scale, 0, 0, scale, 0, 0])
    drawing.add(widget)
    renderPDF.draw(drawing, c, x, y)


def draw_cover(c: canvas.Canvas) -> None:
    c.setPageSize(A4)
    c.bookmarkPage("cover")
    c.addOutlineEntry("Cover", "cover", level=0)
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 18, PAGE_W, 18, fill=1, stroke=0)
    c.setFillColor(BLUE_SOFT)
    c.roundRect(278, 118, 317, 530, 24, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.rect(0, 0, 12, PAGE_H, fill=1, stroke=0)

    draw_logo(c, 42, 744, 142)
    c.setFillColor(BLUE_DARK)
    c.setFont("GubotSans-Bold", 8.5)
    c.drawRightString(PAGE_W - 42, 775, "CUSTOMER EDITION · 2026")

    title_style = ParagraphStyle(
        "cover-title",
        fontName="GubotSans-Bold",
        fontSize=34,
        leading=37,
        textColor=NAVY,
        spaceAfter=0,
    )
    draw_paragraph(c, "Automotive Spray Booth Catalog", 42, 690, 350, title_style)

    subtitle_style = ParagraphStyle(
        "cover-subtitle",
        fontName="GubotSans",
        fontSize=12,
        leading=18,
        textColor=MUTED,
    )
    draw_paragraph(
        c,
        "Nine standard configurations for professional automotive refinishing workshops.",
        42,
        598,
        330,
        subtitle_style,
    )

    draw_badge(c, "ELECTRIC", 42, 531, ELECTRIC, 72)
    draw_badge(c, "NATURAL GAS", 122, 531, GAS, 92)
    draw_badge(c, "DIESEL", 222, 531, DIESEL, 54)

    c.setFillColor(DARK_BLUE)
    c.setFont("GubotSans-Bold", 12)
    c.drawString(42, 477, "GBT-SB6900 SERIES")
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 10)
    c.drawString(42, 455, "ECO · PLUS · PRO")
    c.drawString(42, 434, "3 heating systems · 3 specification levels")
    c.drawString(42, 413, "20 technical items for every model")

    draw_round_box(c, 290, 185, 270, 380, white, LINE, 16)
    draw_contain_image(c, PRODUCT_IMAGE, 306, 214, 238, 325, padding=4)
    c.setFillColor(DARK_BLUE)
    c.setFont("GubotSans-Bold", 8)
    c.drawCentredString(425, 201, "PRODUCT IMAGE FOR SERIES PRESENTATION")

    c.setFillColor(NAVY)
    c.roundRect(42, 92, 518, 56, 9, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 10)
    c.drawString(58, 124, "Shanghai Gubot Automobile Technology Co., Ltd.")
    c.setFont("GubotSans", 8.4)
    c.drawString(58, 106, "contact@gubotspraybooth.com · +86 133 8603 9948 · www.gubotspraybooth.com")
    add_link(c, "https://www.gubotspraybooth.com/", 42, 92, 518, 56)

    c.setFillColor(MUTED)
    c.setFont("GubotSans", 7.5)
    c.drawString(42, 57, "Final voltage, interfaces and project details are confirmed in the technical agreement.")
    c.showPage()


def draw_selection_page(c: canvas.Canvas, specs: dict[str, list[list[str]]], page_number: int) -> None:
    c.bookmarkPage("selection-guide")
    c.addOutlineEntry("Selection Guide", "selection-guide", level=0)
    draw_header(c, "Selection guide", page_number)

    kicker = ParagraphStyle("kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=BLUE_DARK)
    title = ParagraphStyle("page-title", fontName="GubotSans-Bold", fontSize=23, leading=27, textColor=NAVY)
    body = ParagraphStyle("body", fontName="GubotSans", fontSize=8.3, leading=11.2, textColor=MUTED)
    card_title = ParagraphStyle("card-title", fontName="GubotSans-Bold", fontSize=10, leading=12, textColor=INK)

    draw_paragraph(c, "SELECT BY PROJECT CONDITIONS", MARGIN, 758, 320, kicker)
    draw_paragraph(c, "Choose the heating system first, then the specification level", MARGIN, 736, 500, title)
    draw_paragraph(
        c,
        "The nine models share the same standard working chamber. The main differences are the heating source, wall construction, base support, ventilation motor winding, main door and filtration grade.",
        MARGIN,
        674,
        512,
        body,
    )

    fuel_cards = [
        ("E", "Electric heating", "24 kW infrared heating. Best where electrical capacity is available and fuel handling is not preferred."),
        ("NG", "Natural gas heating", "Riello FS10 or FS20 burner. Best where a compliant natural-gas connection is available."),
        ("D", "Diesel heating", "Riello G10 burner with stainless-steel heat exchanger. Best where piped gas is unavailable."),
    ]
    card_w = 164
    for index, (fuel, name, text) in enumerate(fuel_cards):
        x = MARGIN + index * (card_w + 16)
        draw_round_box(c, x, 500, card_w, 130, white, LINE, 10)
        c.setFillColor(FUEL_COLORS[fuel])
        c.roundRect(x + 14, 596, 34, 20, 10, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("GubotSans-Bold", 8)
        c.drawCentredString(x + 31, 603, fuel)
        draw_paragraph(c, name, x + 14, 584, card_w - 28, card_title)
        draw_paragraph(c, text, x + 14, 553, card_w - 28, body)

    c.setFillColor(NAVY)
    c.setFont("GubotSans-Bold", 14)
    c.drawString(MARGIN, 464, "Compare ECO, PLUS and PRO")

    e_spec = {tier: as_spec_map(specs[f"GBT-SB6900-E-{tier}"]) for tier in ("ECO", "PLUS", "PRO")}
    comparison_rows = [
        ["", "ECO", "PLUS", "PRO"],
        ["Best fit", "Daily refinishing and value-focused projects", "Balanced fire resistance, airflow and durability", "Frequent operation and higher structural specification"],
        ["Wall panels", e_spec["ECO"]["Booth body"], e_spec["PLUS"]["Booth body"], e_spec["PRO"]["Booth body"]],
        ["Base platform", e_spec["ECO"]["Base platform"], e_spec["PLUS"]["Base platform"], e_spec["PRO"]["Base platform"]],
        ["Ventilation", "Aluminum-wound motors", "Copper-wound motors", "Copper-wound motors"],
        ["Main door", e_spec["ECO"]["Front door"], e_spec["PLUS"]["Front door"], e_spec["PRO"]["Front door"]],
    ]
    table_body = ParagraphStyle("compare-body", fontName="GubotSans", fontSize=6.4, leading=8.1, textColor=INK)
    table_head = ParagraphStyle("compare-head", fontName="GubotSans-Bold", fontSize=7.2, leading=8.8, textColor=NAVY)
    formatted = []
    for row_index, row in enumerate(comparison_rows):
        style = table_head if row_index == 0 else table_body
        formatted.append([paragraph(value, style) for value in row])
    compare = Table(formatted, colWidths=[72, 146, 146, 146], repeatRows=1)
    compare.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), DARK_BLUE),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("BACKGROUND", (0, 1), (0, -1), BLUE_SOFT),
        ("FONTNAME", (0, 0), (-1, 0), "GubotSans-Bold"),
        ("FONTNAME", (0, 1), (0, -1), "GubotSans-Bold"),
        ("GRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    _, table_h = compare.wrap(510, 310)
    compare.drawOn(c, MARGIN, 445 - table_h)

    c.setFillColor(BLUE_DARK)
    c.setFont("GubotSans-Bold", 8)
    c.drawString(MARGIN, 88, "MODEL CODE SYSTEM")
    c.setFont("GubotSans", 7.6)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 72, "GBT-SB6900-[E / NG / D]-[ECO / PLUS / PRO]")
    c.drawRightString(PAGE_W - MARGIN, 72, "Custom dimensions and interfaces are available by project.")
    c.showPage()


def build_spec_table(rows: list[list[str]], width: float, font_size: float) -> Table:
    label_style = ParagraphStyle(
        "spec-label",
        fontName="GubotSans-Bold",
        fontSize=font_size - 0.2,
        leading=font_size + 1.6,
        textColor=BLUE_DARK,
    )
    value_style = ParagraphStyle(
        "spec-value",
        fontName="GubotSans",
        fontSize=font_size,
        leading=font_size + 1.8,
        textColor=INK,
    )
    data = [[paragraph(label, label_style), paragraph(value, value_style)] for label, value in rows]
    table = Table(data, colWidths=[72, width - 72])
    commands = [
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
        ("BACKGROUND", (0, 0), (0, -1), BLUE_PALE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 3.6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3.6),
    ]
    for row_index in range(len(rows)):
        if row_index % 2:
            commands.append(("BACKGROUND", (1, row_index), (1, row_index), HexColor("#FAFCFE")))
        if rows[row_index][0] in {"Heating system", "Power requirement", "Project confirmation"}:
            commands.append(("BACKGROUND", (0, row_index), (-1, row_index), BLUE_SOFT))
    table.setStyle(TableStyle(commands))
    return table


def balanced_spec_tables(items: list[list[str]], width: float, max_height: float) -> tuple[Table, Table, float, float]:
    for font_size in (7.5, 7.2, 6.9, 6.6):
        best = None
        for split in range(8, 13):
            left = build_spec_table(items[:split], width, font_size)
            right = build_spec_table(items[split:], width, font_size)
            _, left_h = left.wrap(width, max_height)
            _, right_h = right.wrap(width, max_height)
            score = max(left_h, right_h)
            if best is None or score < best[0]:
                best = (score, left, right, left_h, right_h)
        if best and best[0] <= max_height:
            return best[1], best[2], best[3], best[4]
    if not best:
        raise RuntimeError("Unable to lay out specification tables")
    return best[1], best[2], best[3], best[4]


def draw_model_page(
    c: canvas.Canvas,
    code: str,
    items: list[list[str]],
    model_index: int,
    page_number: int,
) -> None:
    fuel, tier = parse_model_code(code)
    fuel_color = FUEL_COLORS[fuel]
    spec_map = as_spec_map(items)
    c.bookmarkPage(code)
    c.addOutlineEntry(code, code, level=0)
    draw_header(c, "Product specification", page_number)

    kicker_style = ParagraphStyle("model-kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=fuel_color)
    title_style = ParagraphStyle("model-title", fontName="GubotSans-Bold", fontSize=20, leading=23, textColor=NAVY)
    subtitle_style = ParagraphStyle("model-subtitle", fontName="GubotSans", fontSize=8.5, leading=11, textColor=MUTED)
    small_style = ParagraphStyle("small", fontName="GubotSans", fontSize=7.2, leading=9.3, textColor=MUTED)
    benefit_title = ParagraphStyle("benefit-title", fontName="GubotSans-Bold", fontSize=9.5, leading=11.5, textColor=INK)

    draw_paragraph(c, f"{FUEL_NAMES[fuel].upper()} · {tier}", MARGIN, 763, 330, kicker_style)
    draw_paragraph(c, code, MARGIN, 742, 330, title_style)
    draw_paragraph(c, spec_map["Product"], MARGIN, 711, 400, subtitle_style)
    c.setFillColor(BLUE_SOFT)
    c.roundRect(PAGE_W - 96, 718, 60, 28, 14, fill=1, stroke=0)
    c.setFillColor(BLUE_DARK)
    c.setFont("GubotSans-Bold", 8)
    c.drawCentredString(PAGE_W - 66, 728, f"{model_index:02d} / 09")

    draw_round_box(c, MARGIN, 510, 239, 181, white, LINE, 10)
    draw_contain_image(c, PRODUCT_IMAGE, MARGIN + 10, 526, 219, 149, padding=2)
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 6.7)
    c.drawCentredString(MARGIN + 119.5, 517, "Product image for series presentation")

    draw_round_box(c, 291, 510, 268, 181, BLUE_PALE, HexColor("#BBDCF7"), 10)
    draw_paragraph(c, "WHY CHOOSE THIS MODEL", 307, 673, 235, kicker_style)
    fuel_title, fuel_text = FUEL_BENEFITS[fuel]
    tier_title, tier_text = TIER_BENEFITS[tier]
    draw_paragraph(c, fuel_title, 307, 651, 235, benefit_title)
    draw_paragraph(c, fuel_text, 307, 633, 235, small_style)
    draw_paragraph(c, tier_title, 307, 585, 235, benefit_title)
    draw_paragraph(c, tier_text, 307, 567, 235, small_style)
    c.setFillColor(fuel_color)
    c.roundRect(307, 521, 118, 19, 9, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 7)
    c.drawCentredString(366, 528, FUEL_NAMES[fuel].upper())

    c.setFillColor(NAVY)
    c.setFont("GubotSans-Bold", 11)
    c.drawString(MARGIN, 487, "Detailed technical specification")
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 7)
    c.drawRightString(PAGE_W - MARGIN, 487, "20 technical items")

    column_gap = 12
    table_w = (PAGE_W - MARGIN * 2 - column_gap) / 2
    max_table_h = 432
    left_table, right_table, left_h, right_h = balanced_spec_tables(items, table_w, max_table_h)
    left_table.drawOn(c, MARGIN, 474 - left_h)
    right_table.drawOn(c, MARGIN + table_w + column_gap, 474 - right_h)
    c.showPage()


def draw_contact_page(c: canvas.Canvas, page_number: int) -> None:
    c.bookmarkPage("contact")
    c.addOutlineEntry("Project Inquiry", "contact", level=0)
    draw_header(c, "Project inquiry", page_number)

    kicker = ParagraphStyle("contact-kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=BLUE_DARK)
    title = ParagraphStyle("contact-title", fontName="GubotSans-Bold", fontSize=25, leading=29, textColor=NAVY)
    body = ParagraphStyle("contact-body", fontName="GubotSans", fontSize=9, leading=13, textColor=MUTED)
    card_title = ParagraphStyle("contact-card-title", fontName="GubotSans-Bold", fontSize=10, leading=12, textColor=INK)

    draw_paragraph(c, "PROJECT INFORMATION", MARGIN, 758, 260, kicker)
    draw_paragraph(c, "Request a spray booth quotation", MARGIN, 735, 430, title)
    draw_paragraph(
        c,
        "Send the information below so our team can recommend the appropriate heating system, specification level and site interfaces for your workshop.",
        MARGIN,
        674,
        500,
        body,
    )

    checklist = [
        ("01", "Installation site", "Country, city, workshop length, width, height and available installation space."),
        ("02", "Target vehicles", "Passenger cars, SUVs, vans or other vehicle types, plus required door clearance."),
        ("03", "Power and fuel", "Voltage, phase, frequency, available electrical capacity and preferred heating source."),
        ("04", "Exhaust route", "Outdoor discharge point, duct direction and any local environmental requirements."),
        ("05", "Daily workflow", "Expected daily paint volume, curing frequency and preferred operating schedule."),
        ("06", "Delivery scope", "Destination, installation support requirements and requested optional equipment."),
    ]
    card_w = 252
    card_h = 74
    for index, (number, heading, text) in enumerate(checklist):
        col = index % 2
        row = index // 2
        x = MARGIN + col * (card_w + 19)
        y = 548 - row * (card_h + 12)
        draw_round_box(c, x, y, card_w, card_h, white, LINE, 8)
        c.setFillColor(BLUE_SOFT)
        c.roundRect(x + 12, y + 40, 28, 22, 6, fill=1, stroke=0)
        c.setFillColor(BLUE_DARK)
        c.setFont("GubotSans-Bold", 7.5)
        c.drawCentredString(x + 26, y + 48, number)
        draw_paragraph(c, heading, x + 49, y + 61, card_w - 61, card_title)
        draw_paragraph(c, text, x + 49, y + 40, card_w - 61, ParagraphStyle("check", parent=body, fontSize=7.2, leading=9.2))

    c.setFillColor(NAVY)
    c.roundRect(MARGIN, 95, PAGE_W - MARGIN * 2, 185, 12, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 15)
    c.drawString(MARGIN + 22, 246, "Contact GUBOT")
    c.setFont("GubotSans", 8.5)
    c.drawString(MARGIN + 22, 224, "Shanghai Gubot Automobile Technology Co., Ltd.")
    c.drawString(MARGIN + 22, 200, "WhatsApp / Tel    +86 133 8603 9948")
    c.drawString(MARGIN + 22, 178, "Email             contact@gubotspraybooth.com")
    c.drawString(MARGIN + 22, 156, "Website           www.gubotspraybooth.com")
    c.drawString(MARGIN + 22, 134, "Address           Changlin Road, Minhang District, Shanghai, China")

    draw_round_box(c, 354, 112, 96, 126, white, white, 8)
    draw_round_box(c, 458, 112, 96, 126, white, white, 8)
    draw_qr(c, "https://www.gubotspraybooth.com/", 362, 142, 80)
    draw_qr(c, "https://api.whatsapp.com/send?phone=8613386039948", 466, 142, 80)
    c.setFillColor(NAVY)
    c.setFont("GubotSans-Bold", 6.5)
    c.drawCentredString(402, 124, "WEBSITE")
    c.drawCentredString(506, 124, "WHATSAPP")

    add_link(c, "https://api.whatsapp.com/send?phone=8613386039948", MARGIN + 22, 190, 225, 20)
    add_link(c, "mailto:contact@gubotspraybooth.com", MARGIN + 22, 168, 260, 20)
    add_link(c, "https://www.gubotspraybooth.com/", MARGIN + 22, 146, 245, 20)
    add_link(c, "https://www.gubotspraybooth.com/", 354, 112, 96, 126)
    add_link(c, "https://api.whatsapp.com/send?phone=8613386039948", 458, 112, 96, 126)

    c.setFillColor(MUTED)
    c.setFont("GubotSans", 7.2)
    c.drawString(MARGIN, 69, "This catalog is a product-selection reference and is not a binding quotation.")
    c.drawString(MARGIN, 55, "Final dimensions, voltage, fuel connections, optional equipment and delivery scope are confirmed in the signed technical agreement.")
    c.showPage()


def generate(output: Path) -> None:
    register_fonts()
    specs = load_specifications()
    output.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle("GUBOT Automotive Spray Booth Catalog 2026")
    c.setAuthor("Shanghai Gubot Automobile Technology Co., Ltd.")
    c.setSubject("Electric, natural gas and diesel automotive spray booth configurations")
    c.setKeywords("automotive spray booth, paint booth, car spray booth, GUBOT, GBT-SB6900")

    draw_cover(c)
    draw_selection_page(c, specs, page_number=2)
    for index, code in enumerate(MODEL_ORDER, start=1):
        draw_model_page(c, code, specs[code], index, page_number=index + 2)
    draw_contact_page(c, page_number=12)
    c.save()

    # Keep the customer download in sync with the print-ready source artifact.
    if output.resolve() == DEFAULT_OUTPUT.resolve():
        WEB_DOWNLOAD.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(output, WEB_DOWNLOAD)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="Output PDF path")
    args = parser.parse_args()
    generate(args.output.resolve())
    print(args.output.resolve())


if __name__ == "__main__":
    main()
