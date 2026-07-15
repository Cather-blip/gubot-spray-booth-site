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
from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
SPEC_SOURCE = ROOT / "catalog" / "specifications.js"
CATALOG_SOURCE = ROOT / "catalog" / "catalog.js"
PRODUCT_IMAGE = ROOT / "catalog" / "assets" / "booth-white-20260712.webp"
WHATSAPP_QR_IMAGE = ROOT / "catalog" / "assets" / "gubot-whatsapp-qr.png"
WECHAT_QR_IMAGE = ROOT / "catalog" / "assets" / "gubot-wechat-qr.png"
LOGO_IMAGE = ROOT / "assets" / "logo-combo.png"

SUPPORTED_LOCALES = ("en", "fr", "es", "zh", "it", "de")
PDF_FILENAMES = {
    "en": "GUBOT-Automotive-Spray-Booth-Catalog-2026.pdf",
    "fr": "GUBOT-Automotive-Spray-Booth-Catalog-2026-FR.pdf",
    "es": "GUBOT-Automotive-Spray-Booth-Catalog-2026-ES.pdf",
    "zh": "GUBOT-Automotive-Spray-Booth-Catalog-2026-ZH.pdf",
    "it": "GUBOT-Automotive-Spray-Booth-Catalog-2026-IT.pdf",
    "de": "GUBOT-Automotive-Spray-Booth-Catalog-2026-DE.pdf",
}
DEFAULT_OUTPUTS = {locale: ROOT / "output" / "pdf" / filename for locale, filename in PDF_FILENAMES.items()}
WEB_DOWNLOADS = {locale: ROOT / "downloads" / filename for locale, filename in PDF_FILENAMES.items()}
DEFAULT_OUTPUT = DEFAULT_OUTPUTS["en"]

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

FUEL_COLORS = {"E": ELECTRIC, "NG": GAS, "D": DIESEL}
FUEL_COPY_KEYS = {"E": "electric", "NG": "naturalGas", "D": "diesel"}
TIER_COPY_KEYS = {"ECO": "eco", "PLUS": "plus", "PRO": "pro"}
SPEC_INDEX = {
    "product": 0,
    "wall": 5,
    "base": 6,
    "front_door": 7,
    "heating": 14,
    "power": 18,
    "confirmation": 19,
}

# The detailed technical rows come from catalog/specifications.js. This dictionary
# contains only the print-layout copy that is not already shared with the website.
PDF_TEXT = {
    "en": {
        "customer_edition": "CUSTOMER EDITION | 2026",
        "fuel_short": {"E": "ELECTRIC", "NG": "NATURAL GAS", "D": "DIESEL"},
        "cover_levels": "3 heating systems | 3 specification levels",
        "cover_items": "20 technical items for every model",
        "selection_outline": "Selection Guide",
        "selection_header": "Selection guide",
        "selection_kicker": "SELECT BY PROJECT CONDITIONS",
        "selection_title": "Choose the heating system first, then the specification level",
        "compare_title": "Compare ECO, PLUS and PRO",
        "best_fit": "Best fit",
        "ventilation": "Ventilation",
        "aluminum_motor": "Aluminum-wound motors",
        "copper_motor": "Copper-wound motors",
        "model_code": "MODEL CODE SYSTEM",
        "custom_project": "Custom dimensions and interfaces are available by project.",
        "product_specification": "Product specification",
        "why_choose": "WHY CHOOSE THIS MODEL",
        "contact_outline": "Project Inquiry",
        "contact_header": "Project inquiry",
        "project_information": "PROJECT INFORMATION",
        "checklist": [
            ["Installation site", "Country, city, workshop length, width, height and available installation space."],
            ["Target vehicles", "Passenger cars, SUVs, vans or other vehicle types, plus required door clearance."],
            ["Power and fuel", "Voltage, phase, frequency, available electrical capacity and preferred heating source."],
            ["Exhaust route", "Outdoor discharge point, duct direction and any local environmental requirements."],
            ["Daily workflow", "Expected daily paint volume, curing frequency and preferred operating schedule."],
            ["Delivery scope", "Destination, installation support requirements and requested optional equipment."],
        ],
        "contact_gubot": "Contact GUBOT",
        "phone": "WhatsApp / Tel",
        "email": "Email",
        "website": "Website",
        "address_label": "Address",
        "address": "Changlin Road, Minhang District, Shanghai, China",
        "website_qr": "WEBSITE",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "This catalog is a product-selection reference and is not a binding quotation.",
        "agreement_note": "Final dimensions, voltage, fuel connections, optional equipment and delivery scope are confirmed in the signed technical agreement.",
    },
    "fr": {
        "customer_edition": "ÉDITION CLIENT | 2026",
        "fuel_short": {"E": "ÉLECTRIQUE", "NG": "GAZ NATUREL", "D": "DIESEL"},
        "cover_levels": "3 systèmes de chauffage | 3 niveaux de configuration",
        "cover_items": "20 paramètres techniques pour chaque modèle",
        "selection_outline": "Guide de sélection",
        "selection_header": "Guide de sélection",
        "selection_kicker": "CHOISIR SELON LES CONDITIONS DU PROJET",
        "selection_title": "Choisissez d'abord le chauffage, puis le niveau de configuration",
        "compare_title": "Comparer ECO, PLUS et PRO",
        "best_fit": "Utilisation conseillée",
        "ventilation": "Ventilation",
        "aluminum_motor": "Moteurs à bobinage aluminium",
        "copper_motor": "Moteurs à bobinage cuivre",
        "model_code": "SYSTÈME DE CODIFICATION",
        "custom_project": "Dimensions et interfaces personnalisables selon le projet.",
        "product_specification": "Fiche technique du produit",
        "why_choose": "POURQUOI CHOISIR CE MODÈLE",
        "contact_outline": "Demande de projet",
        "contact_header": "Demande de projet",
        "project_information": "INFORMATIONS DU PROJET",
        "checklist": [
            ["Site d'installation", "Pays, ville, longueur, largeur, hauteur et espace disponible dans l'atelier."],
            ["Véhicules cibles", "Voitures, SUV, utilitaires ou autres véhicules, avec le passage de porte requis."],
            ["Énergie et combustible", "Tension, phases, fréquence, puissance disponible et source de chauffage souhaitée."],
            ["Parcours d'extraction", "Point de rejet extérieur, direction des gaines et exigences environnementales locales."],
            ["Rythme de travail", "Volume de peinture quotidien, fréquence de cuisson et horaires d'exploitation."],
            ["Étendue de livraison", "Destination, besoin d'aide à l'installation et équipements optionnels demandés."],
        ],
        "contact_gubot": "Contacter GUBOT",
        "phone": "WhatsApp / Tel",
        "email": "E-mail",
        "website": "Site web",
        "address_label": "Adresse",
        "address": "Changlin Road, Minhang District, Shanghai, Chine",
        "website_qr": "SITE WEB",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "Ce catalogue est un guide de sélection et ne constitue pas une offre contractuelle.",
        "agreement_note": "Les dimensions, la tension, les raccordements, les options et la livraison sont confirmés dans l'accord technique signé.",
    },
    "es": {
        "customer_edition": "EDICIÓN PARA CLIENTES | 2026",
        "fuel_short": {"E": "ELÉCTRICA", "NG": "GAS NATURAL", "D": "DIÉSEL"},
        "cover_levels": "3 sistemas de calefacción | 3 niveles de configuración",
        "cover_items": "20 parámetros técnicos para cada modelo",
        "selection_outline": "Guía de selección",
        "selection_header": "Guía de selección",
        "selection_kicker": "SELECCIÓN SEGÚN LAS CONDICIONES DEL PROYECTO",
        "selection_title": "Elija primero la calefacción y después el nivel de configuración",
        "compare_title": "Comparación de ECO, PLUS y PRO",
        "best_fit": "Uso recomendado",
        "ventilation": "Ventilación",
        "aluminum_motor": "Motores con bobinado de aluminio",
        "copper_motor": "Motores con bobinado de cobre",
        "model_code": "SISTEMA DE CÓDIGOS",
        "custom_project": "Dimensiones e interfaces personalizables según el proyecto.",
        "product_specification": "Especificación del producto",
        "why_choose": "POR QUÉ ELEGIR ESTE MODELO",
        "contact_outline": "Consulta de proyecto",
        "contact_header": "Consulta de proyecto",
        "project_information": "INFORMACIÓN DEL PROYECTO",
        "checklist": [
            ["Lugar de instalación", "País, ciudad, largo, ancho, alto y espacio disponible en el taller."],
            ["Vehículos objetivo", "Turismos, SUV, furgonetas u otros vehículos y altura libre necesaria en la puerta."],
            ["Energía y combustible", "Voltaje, fases, frecuencia, capacidad eléctrica y fuente de calefacción preferida."],
            ["Ruta de extracción", "Punto de descarga exterior, dirección del conducto y requisitos ambientales locales."],
            ["Flujo de trabajo", "Volumen diario de pintura, frecuencia de curado y horario de funcionamiento."],
            ["Alcance de suministro", "Destino, asistencia de instalación y equipos opcionales solicitados."],
        ],
        "contact_gubot": "Contactar con GUBOT",
        "phone": "WhatsApp / Tel",
        "email": "Correo",
        "website": "Sitio web",
        "address_label": "Dirección",
        "address": "Changlin Road, Minhang District, Shanghai, China",
        "website_qr": "SITIO WEB",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "Este catálogo es una referencia de selección y no constituye una oferta vinculante.",
        "agreement_note": "Las dimensiones, voltaje, conexiones, opciones y entrega finales se confirman en el acuerdo técnico firmado.",
    },
    "zh": {
        "customer_edition": "客户版 | 2026",
        "fuel_short": {"E": "电加热", "NG": "天然气", "D": "柴油"},
        "cover_levels": "3种加热方式 | 3种配置等级",
        "cover_items": "每款机型包含20项技术参数",
        "selection_outline": "选型指南",
        "selection_header": "选型指南",
        "selection_kicker": "按项目条件选型",
        "selection_title": "先选加热方式，再选配置等级",
        "compare_title": "ECO、PLUS 与 PRO 配置对比",
        "best_fit": "适用场景",
        "ventilation": "送排风系统",
        "aluminum_motor": "铝线电机",
        "copper_motor": "铜线电机",
        "model_code": "型号命名规则",
        "custom_project": "可根据项目定制尺寸和现场接口。",
        "product_specification": "产品技术参数",
        "why_choose": "选择该型号的价值",
        "contact_outline": "项目询盘",
        "contact_header": "项目询盘",
        "project_information": "项目信息",
        "checklist": [
            ["安装场地", "国家、城市、车间长宽高及可用安装空间。"],
            ["目标车辆", "轿车、SUV、厢式车或其他车型，以及所需门洞净空。"],
            ["电源与燃料", "电压、相数、频率、可用电容量和首选加热方式。"],
            ["排风路径", "室外排放点、风管方向以及当地环保要求。"],
            ["日常作业", "每日喷漆量、烤漆频率和计划作业时间。"],
            ["交付范围", "目的地、安装指导需求和所需选配设备。"],
        ],
        "contact_gubot": "联系 GUBOT",
        "phone": "WhatsApp / 电话",
        "email": "邮箱",
        "website": "官网",
        "address_label": "地址",
        "address": "中国上海市闵行区长林路",
        "website_qr": "官网",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "本产品册仅作选型参考，不构成具有约束力的报价。",
        "agreement_note": "最终尺寸、电压、燃料接口、选配设备和交付范围以双方签署的技术协议为准。",
    },
    "it": {
        "customer_edition": "EDIZIONE CLIENTE | 2026",
        "fuel_short": {"E": "ELETTRICO", "NG": "GAS NATURALE", "D": "DIESEL"},
        "cover_levels": "3 sistemi di riscaldamento | 3 livelli di configurazione",
        "cover_items": "20 parametri tecnici per ogni modello",
        "selection_outline": "Guida alla scelta",
        "selection_header": "Guida alla scelta",
        "selection_kicker": "SCELTA IN BASE ALLE CONDIZIONI DEL PROGETTO",
        "selection_title": "Scegliere prima il riscaldamento, poi il livello di configurazione",
        "compare_title": "Confronto tra ECO, PLUS e PRO",
        "best_fit": "Impiego consigliato",
        "ventilation": "Ventilazione",
        "aluminum_motor": "Motori con avvolgimento in alluminio",
        "copper_motor": "Motori con avvolgimento in rame",
        "model_code": "SISTEMA DI CODIFICA",
        "custom_project": "Dimensioni e interfacce personalizzabili in base al progetto.",
        "product_specification": "Specifiche del prodotto",
        "why_choose": "PERCHÉ SCEGLIERE QUESTO MODELLO",
        "contact_outline": "Richiesta di progetto",
        "contact_header": "Richiesta di progetto",
        "project_information": "INFORMAZIONI SUL PROGETTO",
        "checklist": [
            ["Sito di installazione", "Paese, città, lunghezza, larghezza, altezza e spazio disponibile in officina."],
            ["Veicoli target", "Auto, SUV, furgoni o altri veicoli e luce di passaggio richiesta per la porta."],
            ["Energia e combustibile", "Tensione, fasi, frequenza, potenza disponibile e fonte di riscaldamento preferita."],
            ["Percorso di estrazione", "Punto di scarico esterno, direzione del condotto e requisiti ambientali locali."],
            ["Flusso di lavoro", "Volume giornaliero di verniciatura, frequenza di cottura e orario operativo."],
            ["Fornitura", "Destinazione, supporto all'installazione e dotazioni opzionali richieste."],
        ],
        "contact_gubot": "Contatta GUBOT",
        "phone": "WhatsApp / Tel",
        "email": "E-mail",
        "website": "Sito web",
        "address_label": "Indirizzo",
        "address": "Changlin Road, Minhang District, Shanghai, Cina",
        "website_qr": "SITO WEB",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "Questo catalogo è un riferimento per la selezione e non costituisce un'offerta vincolante.",
        "agreement_note": "Dimensioni, tensione, collegamenti, optional e consegna finali sono confermati nell'accordo tecnico firmato.",
    },
    "de": {
        "customer_edition": "KUNDENAUSGABE | 2026",
        "cover_title": "Lackierkabinen-\nKatalog 2026",
        "fuel_short": {"E": "ELEKTRISCH", "NG": "ERDGAS", "D": "DIESEL"},
        "cover_levels": "3 Heizsysteme | 3 Ausstattungsstufen",
        "cover_items": "20 technische Angaben je Modell",
        "selection_outline": "Auswahlhilfe",
        "selection_header": "Auswahlhilfe",
        "selection_kicker": "AUSWAHL NACH PROJEKTBEDINGUNGEN",
        "selection_title": "Zuerst das Heizsystem, dann die Ausstattungsstufe wählen",
        "compare_title": "ECO, PLUS und PRO im Vergleich",
        "best_fit": "Empfohlener Einsatz",
        "ventilation": "Belüftung",
        "aluminum_motor": "Motoren mit Aluminiumwicklung",
        "copper_motor": "Motoren mit Kupferwicklung",
        "model_code": "MODELLCODE-SYSTEM",
        "custom_project": "Abmessungen und Schnittstellen sind projektspezifisch anpassbar.",
        "product_specification": "Produktspezifikation",
        "why_choose": "VORTEILE DIESES MODELLS",
        "contact_outline": "Projektanfrage",
        "contact_header": "Projektanfrage",
        "project_information": "PROJEKTINFORMATIONEN",
        "checklist": [
            ["Installationsort", "Land, Stadt, Werkstattlänge, -breite, -höhe und verfügbarer Einbauraum."],
            ["Zielfahrzeuge", "Pkw, SUV, Transporter oder andere Fahrzeuge sowie erforderliche Türdurchfahrt."],
            ["Energie und Brennstoff", "Spannung, Phasen, Frequenz, verfügbare Leistung und bevorzugte Heizquelle."],
            ["Abluftführung", "Ausblasstelle im Freien, Kanalrichtung und lokale Umweltanforderungen."],
            ["Arbeitsablauf", "Tägliches Lackiervolumen, Trocknungshäufigkeit und geplanter Betriebszeitraum."],
            ["Lieferumfang", "Bestimmungsort, Montageunterstützung und gewünschte Zusatzausstattung."],
        ],
        "contact_gubot": "GUBOT kontaktieren",
        "phone": "WhatsApp / Tel",
        "email": "E-Mail",
        "website": "Website",
        "address_label": "Adresse",
        "address": "Changlin Road, Minhang District, Shanghai, China",
        "website_qr": "WEBSITE",
        "whatsapp_qr": "WHATSAPP",
        "reference_note": "Dieser Katalog dient als Auswahlhilfe und stellt kein verbindliches Angebot dar.",
        "agreement_note": "Endabmessungen, Spannung, Anschlüsse, Optionen und Lieferumfang werden in der unterzeichneten technischen Vereinbarung bestätigt.",
    },
}


def register_fonts() -> None:
    if {"GubotSans", "GubotSans-Bold"}.issubset(pdfmetrics.getRegisteredFontNames()):
        return
    regular_candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf"),
        Path("/System/Library/Fonts/STHeiti Light.ttc"),
        Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    ]
    bold_candidates = [
        Path("/System/Library/Fonts/STHeiti Medium.ttc"),
        Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ]

    regular = next((path for path in regular_candidates if path.exists()), None)
    bold = next((path for path in bold_candidates if path.exists()), None)
    if regular and bold:
        pdfmetrics.registerFont(TTFont("GubotSans", str(regular)))
        pdfmetrics.registerFont(TTFont("GubotSans-Bold", str(bold)))
    else:
        # Helvetica is enough for Latin-only editions when local fonts are unavailable.
        pdfmetrics.registerFont(pdfmetrics.Font("GubotSans", "Helvetica", "WinAnsiEncoding"))
        pdfmetrics.registerFont(pdfmetrics.Font("GubotSans-Bold", "Helvetica-Bold", "WinAnsiEncoding"))


def load_catalog_data(locale: str) -> tuple[dict[str, list[list[str]]], dict]:
    if locale not in SUPPORTED_LOCALES:
        raise ValueError(f"Unsupported locale: {locale}")

    node = shutil.which("node")
    if not node:
        raise RuntimeError("Node.js is required to read the shared catalog data")

    loader = """
const fs = require('fs');
const vm = require('vm');
const specsSource = fs.readFileSync(process.argv[1], 'utf8');
const catalogSource = fs.readFileSync(process.argv[2], 'utf8')
  .replace('var copy = {', 'var copy = window.GubotCatalogCopy = {')
  .replace('var terms = {', 'var terms = window.GubotCatalogTerms = {');
const sandbox = {
  window: {},
  document: {
    getElementById: function () { return null; },
    documentElement: {},
    cookie: ''
  },
  URLSearchParams: URLSearchParams,
  console: console
};
vm.runInNewContext(specsSource, sandbox, { filename: process.argv[1] });
vm.runInNewContext(catalogSource, sandbox, { filename: process.argv[2] });
const locale = process.argv[3];
process.stdout.write(JSON.stringify({
  specifications: sandbox.window.GubotCatalogSpecifications,
  copy: sandbox.window.GubotCatalogCopy[locale]
}));
"""
    result = subprocess.run(
        [node, "-e", loader, str(SPEC_SOURCE), str(CATALOG_SOURCE), locale],
        check=True,
        capture_output=True,
        text=True,
    )
    payload = json.loads(result.stdout)
    models = payload.get("specifications", {}).get("models", {})
    ui_copy = payload.get("copy")
    if not ui_copy:
        raise RuntimeError(f"Missing website catalog copy for locale: {locale}")
    missing = [code for code in MODEL_ORDER if code not in models]
    if missing:
        raise RuntimeError("Missing model specifications: " + ", ".join(missing))
    localized = {}
    for code in MODEL_ORDER:
        locale_rows = models[code].get("locales", {}).get(locale)
        if not locale_rows:
            raise RuntimeError(f"Missing {locale} specifications for {code}")
        localized[code] = locale_rows
    return localized, ui_copy


def parse_model_code(code: str) -> tuple[str, str]:
    parts = code.split("-")
    return parts[-2], parts[-1]


def as_spec_map(items: list[list[str]]) -> dict[str, str]:
    return {label: value for label, value in items}


def fuel_name(ui_copy: dict, fuel: str) -> str:
    return ui_copy[FUEL_COPY_KEYS[fuel]]


def tier_name(ui_copy: dict, tier: str) -> str:
    return ui_copy[TIER_COPY_KEYS[tier]]


def set_fitted_font(
    c: canvas.Canvas,
    text: str,
    font_name: str,
    max_size: float,
    min_size: float,
    max_width: float,
) -> float:
    size = max_size
    while size > min_size and pdfmetrics.stringWidth(text, font_name, size) > max_width:
        size -= 0.25
    c.setFont(font_name, size)
    return size


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


def draw_header(c: canvas.Canvas, section: str, page_number: int, ui_copy: dict) -> None:
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 12, PAGE_W, 12, fill=1, stroke=0)
    draw_logo(c, MARGIN, PAGE_H - 49, 104)
    c.setFillColor(MUTED)
    set_fitted_font(c, section.upper(), "GubotSans-Bold", 7.5, 5.8, 230)
    c.drawRightString(PAGE_W - MARGIN, PAGE_H - 31, section.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(MARGIN, PAGE_H - 58, PAGE_W - MARGIN, PAGE_H - 58)
    draw_footer(c, page_number, ui_copy)


def draw_footer(c: canvas.Canvas, page_number: int, ui_copy: dict) -> None:
    c.setStrokeColor(LINE)
    c.setLineWidth(0.45)
    c.line(MARGIN, 34, PAGE_W - MARGIN, 34)
    c.setFont("GubotSans", 7)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 21, "www.gubotspraybooth.com")
    footer_title = f"GUBOT | {ui_copy['introTitle']}"
    set_fitted_font(c, footer_title, "GubotSans", 7, 5.8, 270)
    c.drawCentredString(PAGE_W / 2, 21, footer_title)
    c.drawRightString(PAGE_W - MARGIN, 21, f"{page_number:02d}")


def draw_badge(c: canvas.Canvas, label: str, x: float, y: float, color: Color, width: float) -> None:
    c.setFillColor(color)
    c.roundRect(x, y, width, 22, 11, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 8)
    c.drawCentredString(x + width / 2, y + 7, label)


def draw_cover(c: canvas.Canvas, ui_copy: dict, pdf_text: dict) -> None:
    c.setPageSize(A4)
    c.bookmarkPage("cover")
    c.addOutlineEntry(ui_copy["introTitle"], "cover", level=0)
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
    set_fitted_font(c, pdf_text["customer_edition"], "GubotSans-Bold", 8.5, 6.5, 220)
    c.drawRightString(PAGE_W - 42, 775, pdf_text["customer_edition"])

    title_style = ParagraphStyle(
        "cover-title",
        fontName="GubotSans-Bold",
        fontSize=34,
        leading=37,
        textColor=NAVY,
        spaceAfter=0,
    )
    draw_paragraph(c, pdf_text.get("cover_title", ui_copy["introTitle"]), 42, 690, 350, title_style)

    subtitle_style = ParagraphStyle(
        "cover-subtitle",
        fontName="GubotSans",
        fontSize=12,
        leading=18,
        textColor=MUTED,
    )
    draw_paragraph(
        c,
        ui_copy["coverSubtitle"],
        42,
        598,
        330,
        subtitle_style,
    )

    badge_x = 42
    for fuel in ("E", "NG", "D"):
        label = pdf_text["fuel_short"][fuel]
        badge_width = max(54, min(104, pdfmetrics.stringWidth(label, "GubotSans-Bold", 8) + 24))
        draw_badge(c, label, badge_x, 531, FUEL_COLORS[fuel], badge_width)
        badge_x += badge_width + 8

    c.setFillColor(DARK_BLUE)
    c.setFont("GubotSans-Bold", 12)
    c.drawString(42, 477, ui_copy["contentsEyebrow"])
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 10)
    draw_paragraph(c, ui_copy["coverRange"], 42, 459, 226, ParagraphStyle("cover-range", fontName="GubotSans", fontSize=9, leading=11, textColor=MUTED))
    draw_paragraph(c, pdf_text["cover_levels"], 42, 432, 226, ParagraphStyle("cover-levels", fontName="GubotSans", fontSize=8.4, leading=10.5, textColor=MUTED))
    draw_paragraph(c, pdf_text["cover_items"], 42, 409, 226, ParagraphStyle("cover-items", fontName="GubotSans", fontSize=8.4, leading=10.5, textColor=MUTED))

    draw_round_box(c, 290, 185, 270, 380, white, LINE, 16)
    draw_contain_image(c, PRODUCT_IMAGE, 306, 214, 238, 325, padding=4)
    c.setFillColor(DARK_BLUE)
    c.setFont("GubotSans-Bold", 8)
    set_fitted_font(c, ui_copy["photoCaption"], "GubotSans-Bold", 8, 6, 230)
    c.drawCentredString(425, 201, ui_copy["photoCaption"].upper())

    c.setFillColor(NAVY)
    c.roundRect(42, 92, 518, 56, 9, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("GubotSans-Bold", 10)
    set_fitted_font(c, ui_copy["contactFooter"], "GubotSans-Bold", 10, 7.2, 480)
    c.drawString(58, 124, ui_copy["contactFooter"])
    c.setFont("GubotSans", 8.4)
    c.drawString(58, 106, "contact@gubotspraybooth.com · +86 133 8603 9948 · www.gubotspraybooth.com")
    add_link(c, "https://www.gubotspraybooth.com/", 42, 92, 518, 56)

    c.setFillColor(MUTED)
    c.setFont("GubotSans", 7.5)
    set_fitted_font(c, ui_copy["technicalNote"], "GubotSans", 7.5, 5.8, 510)
    c.drawString(42, 57, ui_copy["technicalNote"])
    c.showPage()


def draw_selection_page(
    c: canvas.Canvas,
    specs: dict[str, list[list[str]]],
    ui_copy: dict,
    pdf_text: dict,
    page_number: int,
) -> None:
    c.bookmarkPage("selection-guide")
    c.addOutlineEntry(pdf_text["selection_outline"], "selection-guide", level=0)
    draw_header(c, pdf_text["selection_header"], page_number, ui_copy)

    kicker = ParagraphStyle("kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=BLUE_DARK)
    title = ParagraphStyle("page-title", fontName="GubotSans-Bold", fontSize=23, leading=27, textColor=NAVY)
    body = ParagraphStyle("body", fontName="GubotSans", fontSize=8.3, leading=11.2, textColor=MUTED)
    card_title = ParagraphStyle("card-title", fontName="GubotSans-Bold", fontSize=10, leading=12, textColor=INK)

    draw_paragraph(c, pdf_text["selection_kicker"], MARGIN, 758, 320, kicker)
    draw_paragraph(c, pdf_text["selection_title"], MARGIN, 736, 500, title)
    draw_paragraph(
        c,
        ui_copy["contentsIntro"],
        MARGIN,
        674,
        512,
        body,
    )

    fuel_cards = [
        (fuel, fuel_name(ui_copy, fuel), ui_copy["fuelText"][FUEL_COPY_KEYS[fuel]])
        for fuel in ("E", "NG", "D")
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
    c.drawString(MARGIN, 464, pdf_text["compare_title"])

    e_spec = {tier: specs[f"GBT-SB6900-E-{tier}"] for tier in ("ECO", "PLUS", "PRO")}
    comparison_rows = [
        ["", tier_name(ui_copy, "ECO"), tier_name(ui_copy, "PLUS"), tier_name(ui_copy, "PRO")],
        [pdf_text["best_fit"], ui_copy["tierText"]["eco"], ui_copy["tierText"]["plus"], ui_copy["tierText"]["pro"]],
        [e_spec["ECO"][SPEC_INDEX["wall"]][0], e_spec["ECO"][SPEC_INDEX["wall"]][1], e_spec["PLUS"][SPEC_INDEX["wall"]][1], e_spec["PRO"][SPEC_INDEX["wall"]][1]],
        [e_spec["ECO"][SPEC_INDEX["base"]][0], e_spec["ECO"][SPEC_INDEX["base"]][1], e_spec["PLUS"][SPEC_INDEX["base"]][1], e_spec["PRO"][SPEC_INDEX["base"]][1]],
        [pdf_text["ventilation"], pdf_text["aluminum_motor"], pdf_text["copper_motor"], pdf_text["copper_motor"]],
        [e_spec["ECO"][SPEC_INDEX["front_door"]][0], e_spec["ECO"][SPEC_INDEX["front_door"]][1], e_spec["PLUS"][SPEC_INDEX["front_door"]][1], e_spec["PRO"][SPEC_INDEX["front_door"]][1]],
    ]
    table_body = ParagraphStyle("compare-body", fontName="GubotSans", fontSize=6.4, leading=8.1, textColor=INK)
    table_head = ParagraphStyle("compare-head", fontName="GubotSans-Bold", fontSize=7.2, leading=8.8, textColor=white)
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
    c.drawString(MARGIN, 88, pdf_text["model_code"])
    c.setFont("GubotSans", 7.6)
    c.setFillColor(MUTED)
    c.drawString(MARGIN, 72, "GBT-SB6900-[E / NG / D]-[ECO / PLUS / PRO]")
    set_fitted_font(c, pdf_text["custom_project"], "GubotSans", 7.6, 5.8, 270)
    c.drawRightString(PAGE_W - MARGIN, 72, pdf_text["custom_project"])
    c.showPage()


def build_spec_table(
    rows: list[list[str]],
    width: float,
    font_size: float,
    highlight_labels: set[str],
) -> Table:
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
        if rows[row_index][0] in highlight_labels:
            commands.append(("BACKGROUND", (0, row_index), (-1, row_index), BLUE_SOFT))
    table.setStyle(TableStyle(commands))
    return table


def balanced_spec_tables(items: list[list[str]], width: float, max_height: float) -> tuple[Table, Table, float, float]:
    highlight_labels = {
        items[SPEC_INDEX["heating"]][0],
        items[SPEC_INDEX["power"]][0],
        items[SPEC_INDEX["confirmation"]][0],
    }
    for font_size in (7.5, 7.2, 6.9, 6.6):
        best = None
        for split in range(8, 13):
            left = build_spec_table(items[:split], width, font_size, highlight_labels)
            right = build_spec_table(items[split:], width, font_size, highlight_labels)
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
    ui_copy: dict,
    pdf_text: dict,
    page_number: int,
) -> None:
    fuel, tier = parse_model_code(code)
    fuel_color = FUEL_COLORS[fuel]
    c.bookmarkPage(code)
    c.addOutlineEntry(code, code, level=0)
    draw_header(c, pdf_text["product_specification"], page_number, ui_copy)

    kicker_style = ParagraphStyle("model-kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=fuel_color)
    title_style = ParagraphStyle("model-title", fontName="GubotSans-Bold", fontSize=20, leading=23, textColor=NAVY)
    subtitle_style = ParagraphStyle("model-subtitle", fontName="GubotSans", fontSize=8.5, leading=11, textColor=MUTED)
    small_style = ParagraphStyle("small", fontName="GubotSans", fontSize=6.8, leading=8.8, textColor=MUTED)
    benefit_title = ParagraphStyle("benefit-title", fontName="GubotSans-Bold", fontSize=9.5, leading=11.5, textColor=INK)

    draw_paragraph(c, f"{fuel_name(ui_copy, fuel).upper()} | {tier_name(ui_copy, tier)}", MARGIN, 763, 390, kicker_style)
    draw_paragraph(c, code, MARGIN, 742, 330, title_style)
    draw_paragraph(c, items[SPEC_INDEX["product"]][1], MARGIN, 711, 400, subtitle_style)
    c.setFillColor(BLUE_SOFT)
    c.roundRect(PAGE_W - 96, 718, 60, 28, 14, fill=1, stroke=0)
    c.setFillColor(BLUE_DARK)
    c.setFont("GubotSans-Bold", 8)
    c.drawCentredString(PAGE_W - 66, 728, f"{model_index:02d} / 09")

    draw_round_box(c, MARGIN, 510, 239, 181, white, LINE, 10)
    draw_contain_image(c, PRODUCT_IMAGE, MARGIN + 10, 526, 219, 149, padding=2)
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 6.7)
    set_fitted_font(c, ui_copy["photoCaption"], "GubotSans", 6.7, 5.4, 205)
    c.drawCentredString(MARGIN + 119.5, 517, ui_copy["photoCaption"])

    draw_round_box(c, 291, 510, 268, 181, BLUE_PALE, HexColor("#BBDCF7"), 10)
    draw_paragraph(c, pdf_text["why_choose"], 307, 673, 235, kicker_style)
    fuel_title = fuel_name(ui_copy, fuel)
    fuel_text = ui_copy["fuelText"][FUEL_COPY_KEYS[fuel]]
    tier_title = tier_name(ui_copy, tier)
    tier_text = ui_copy["tierText"][TIER_COPY_KEYS[tier]]
    draw_paragraph(c, fuel_title, 307, 651, 235, benefit_title)
    draw_paragraph(c, fuel_text, 307, 633, 235, small_style)
    draw_paragraph(c, tier_title, 307, 585, 235, benefit_title)
    draw_paragraph(c, tier_text, 307, 567, 235, small_style)
    c.setFillColor(fuel_color)
    c.roundRect(307, 521, 118, 19, 9, fill=1, stroke=0)
    c.setFillColor(white)
    badge_label = pdf_text["fuel_short"][fuel]
    set_fitted_font(c, badge_label, "GubotSans-Bold", 7, 5.8, 104)
    c.drawCentredString(366, 528, badge_label)

    c.setFillColor(NAVY)
    c.setFont("GubotSans-Bold", 11)
    c.drawString(MARGIN, 487, ui_copy["detailsTitle"])
    c.setFillColor(MUTED)
    c.setFont("GubotSans", 7)
    set_fitted_font(c, ui_copy["detailsReady"], "GubotSans", 7, 5.8, 190)
    c.drawRightString(PAGE_W - MARGIN, 487, ui_copy["detailsReady"])

    column_gap = 12
    table_w = (PAGE_W - MARGIN * 2 - column_gap) / 2
    max_table_h = 432
    left_table, right_table, left_h, right_h = balanced_spec_tables(items, table_w, max_table_h)
    left_table.drawOn(c, MARGIN, 474 - left_h)
    right_table.drawOn(c, MARGIN + table_w + column_gap, 474 - right_h)
    c.showPage()


def draw_contact_page(c: canvas.Canvas, ui_copy: dict, pdf_text: dict, page_number: int) -> None:
    c.bookmarkPage("contact")
    c.addOutlineEntry(pdf_text["contact_outline"], "contact", level=0)
    draw_header(c, pdf_text["contact_header"], page_number, ui_copy)

    kicker = ParagraphStyle("contact-kicker", fontName="GubotSans-Bold", fontSize=8, leading=10, textColor=BLUE_DARK)
    title = ParagraphStyle("contact-title", fontName="GubotSans-Bold", fontSize=25, leading=29, textColor=NAVY)
    body = ParagraphStyle("contact-body", fontName="GubotSans", fontSize=9, leading=13, textColor=MUTED)
    card_title = ParagraphStyle("contact-card-title", fontName="GubotSans-Bold", fontSize=10, leading=12, textColor=INK)

    draw_paragraph(c, pdf_text["project_information"], MARGIN, 758, 260, kicker)
    draw_paragraph(c, ui_copy["contactTitle"], MARGIN, 735, 500, title)
    draw_paragraph(
        c,
        ui_copy["contactText"],
        MARGIN,
        674,
        500,
        body,
    )

    checklist = [
        (str(index).zfill(2), heading, text)
        for index, (heading, text) in enumerate(pdf_text["checklist"], start=1)
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
    c.drawString(MARGIN + 22, 246, pdf_text["contact_gubot"])
    c.setFont("GubotSans", 8.5)
    set_fitted_font(c, ui_copy["contactFooter"], "GubotSans", 8.5, 6.5, 265)
    c.drawString(MARGIN + 22, 224, ui_copy["contactFooter"])
    contact_lines = [
        (200, f"{pdf_text['phone']}    +86 133 8603 9948"),
        (178, f"{pdf_text['email']}    contact@gubotspraybooth.com"),
        (156, f"{pdf_text['website']}    www.gubotspraybooth.com"),
        (134, f"{pdf_text['address_label']}    {pdf_text['address']}"),
    ]
    for y, line in contact_lines:
        set_fitted_font(c, line, "GubotSans", 8.5, 6, 275)
        c.drawString(MARGIN + 22, y, line)

    draw_round_box(c, 354, 112, 96, 126, white, white, 8)
    draw_round_box(c, 458, 112, 96, 126, white, white, 8)
    draw_contain_image(c, WHATSAPP_QR_IMAGE, 358, 138, 88, 88, padding=3)
    draw_contain_image(c, WECHAT_QR_IMAGE, 462, 138, 88, 88, padding=3)
    c.setFillColor(NAVY)
    c.setFont("GubotSans-Bold", 6.5)
    c.drawCentredString(402, 124, pdf_text["whatsapp_qr"])
    c.drawCentredString(506, 124, "WECHAT")

    add_link(c, "https://api.whatsapp.com/send?phone=8613386039948", MARGIN + 22, 190, 225, 20)
    add_link(c, "mailto:contact@gubotspraybooth.com", MARGIN + 22, 168, 260, 20)
    add_link(c, "https://www.gubotspraybooth.com/", MARGIN + 22, 146, 245, 20)
    add_link(c, "https://api.whatsapp.com/send?phone=8613386039948", 354, 112, 96, 126)

    note_style = ParagraphStyle("contact-note", fontName="GubotSans", fontSize=6.7, leading=8.2, textColor=MUTED)
    draw_paragraph(c, pdf_text["reference_note"], MARGIN, 76, PAGE_W - MARGIN * 2, note_style)
    draw_paragraph(c, pdf_text["agreement_note"], MARGIN, 59, PAGE_W - MARGIN * 2, note_style)
    c.showPage()


def generate(output: Path, locale: str = "en") -> None:
    register_fonts()
    specs, ui_copy = load_catalog_data(locale)
    pdf_text = PDF_TEXT[locale]
    output.parent.mkdir(parents=True, exist_ok=True)

    c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    c.setTitle(f"{ui_copy['introTitle']} | GUBOT")
    c.setAuthor("Shanghai Gubot Automobile Technology Co., Ltd.")
    c.setSubject(ui_copy["contentsIntro"])
    c.setKeywords("automotive spray booth, paint booth, car spray booth, GUBOT, GBT-SB6900")

    draw_cover(c, ui_copy, pdf_text)
    draw_selection_page(c, specs, ui_copy, pdf_text, page_number=2)
    for index, code in enumerate(MODEL_ORDER, start=1):
        draw_model_page(c, code, specs[code], index, ui_copy, pdf_text, page_number=index + 2)
    draw_contact_page(c, ui_copy, pdf_text, page_number=12)
    c.save()

    # Keep the customer download in sync with the print-ready source artifact.
    if output.resolve() == DEFAULT_OUTPUTS[locale].resolve():
        WEB_DOWNLOADS[locale].parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(output, WEB_DOWNLOADS[locale])


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--locale", choices=SUPPORTED_LOCALES, default="en", help="Catalog language")
    parser.add_argument("--all-languages", action="store_true", help="Generate all supported language editions")
    parser.add_argument("--output", type=Path, help="Output PDF path for one language")
    args = parser.parse_args()
    if args.all_languages and args.output:
        parser.error("--output cannot be used with --all-languages")

    if args.all_languages:
        for locale in SUPPORTED_LOCALES:
            output = DEFAULT_OUTPUTS[locale].resolve()
            generate(output, locale)
            print(output)
        return

    output = (args.output or DEFAULT_OUTPUTS[args.locale]).resolve()
    generate(output, args.locale)
    print(output)


if __name__ == "__main__":
    main()
