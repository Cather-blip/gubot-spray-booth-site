(function () {
  "use strict";

  var modelDefinitions = [
    { code: "GBT-SB6900-E-ECO", fuel: "electric", tier: "eco" },
    { code: "GBT-SB6900-E-PLUS", fuel: "electric", tier: "plus" },
    { code: "GBT-SB6900-E-PRO", fuel: "electric", tier: "pro" },
    { code: "GBT-SB6900-NG-ECO", fuel: "naturalGas", tier: "eco" },
    { code: "GBT-SB6900-NG-PLUS", fuel: "naturalGas", tier: "plus" },
    { code: "GBT-SB6900-NG-PRO", fuel: "naturalGas", tier: "pro" },
    { code: "GBT-SB6900-D-ECO", fuel: "diesel", tier: "eco" },
    { code: "GBT-SB6900-D-PLUS", fuel: "diesel", tier: "plus" },
    { code: "GBT-SB6900-D-PRO", fuel: "diesel", tier: "pro" }
  ];

  var translations = {
    zh: {
      labels: {
        product: "产品名称", model: "型号", level: "配置等级", internal: "房体内径", external: "房体外径",
        wall: "房体系统", base: "地台", frontDoor: "正面大门", serviceDoor: "工作门", plenum: "静压室",
        supply: "送风系统", exhaust: "排风系统", airBox: "送排风箱", duct: "排风管", heating: "加热系统",
        lighting: "照明系统", filter: "过滤系统", control: "电控系统", power: "电源要求", note: "项目确认"
      },
      products: { electric: "电加热汽车喷烤漆房", naturalGas: "天然气加热汽车喷烤漆房", diesel: "柴油加热汽车喷烤漆房" },
      levels: { eco: "低配 / ECO 标准型", plus: "中配 / PLUS 增强型", pro: "高配 / PRO 专业型" },
      internal: "6900 × 3900 × 2600 mm（长 × 宽 × 高）",
      external: "7000 × 5100 × 3250 mm（长 × 宽 × 高），单侧风箱",
      serviceDoor: "1套侧置铝合金包边工作门，尺寸700 × 1800 mm（宽 × 高），配压力锁及铝合金包边钢化玻璃观察窗。",
      plenum: "大筋支架与方管焊接结构，房体顶板兼作静压室顶板；过滤棉托架及连接件采用0.6 mm镀锌板折弯制作，便于更换耗材。",
      airBox: "40 × 40 mm喷塑方管框架，配0.6 mm彩钢板制作。",
      duct: "标准配置含两节直管和一个弯头。",
      control: "正泰（CHINT）或同等级电器元件，旋钮式外挂控制箱；主回路具备漏电、缺相、短路、定时及过载保护。",
      tiers: {
        eco: {
          wall: "50 mm EPS夹芯墙板，内外0.426 mm彩钢板；顶板0.7 mm镀锌板，顶部槽盒0.8 mm、底部槽盒1.2 mm。EPS芯材密度按最终技术协议确认。",
          base: "三排2.3 mm花纹板、两排3 × 30钢格栅，底部采用镀锌板折弯支架。",
          frontDoor: "三扇铝合金包边正面大门。",
          supply: "两台YDW 3 kW送风机，铝芯电机（天意或同等级）。",
          exhaust: "一台YDW 5.5 kW排风机，铝芯电机（恒康或同等级）。",
          filter: "进风初效过滤可捕捉大于10 µm尘粒；顶部SF-600G喷胶过滤棉可捕捉大于4 µm尘粒，捕捉率≥99%；底部采用中效玻璃纤维过滤棉。"
        },
        plus: {
          wall: "50 mm保温防火岩棉复合墙板，内外0.426 mm彩钢板，岩棉密度100 kg/m³；顶板0.7 mm镀锌板，顶部槽盒0.8 mm、底部槽盒1.2 mm。",
          base: "三排2.3 mm花纹板、两排4 × 30钢格栅，底部采用镀锌板折弯支架。",
          frontDoor: "三扇钣金正面大门。",
          supply: "两台YDW 3 kW送风机，铜芯电机（天意或同等级）。",
          exhaust: "一台YDW 5.5 kW排风机，铜芯电机（恒康或同等级）。",
          filter: "进风初效过滤可捕捉大于10 µm尘粒；顶部SF-700G喷胶过滤棉可捕捉大于4 µm尘粒，捕捉率≥99%；底部采用中效玻璃纤维过滤棉。"
        },
        pro: {
          wall: "50 mm保温防火岩棉复合墙板，内外0.5 mm彩钢板，岩棉密度100 kg/m³；顶板0.7 mm镀锌板，顶部槽盒0.8 mm、底部槽盒1.2 mm。",
          base: "三排2.3 mm花纹板、两排5 × 30钢格栅，底部采用12#槽钢支架。",
          frontDoor: "四扇铝合金玻璃正面大门。",
          supply: "两台YDW 3 kW送风机，铜芯电机。",
          exhaust: "一台YDW 5.5 kW排风机，铜芯电机。",
          filter: "进风初效过滤可捕捉大于10 µm尘粒；顶部SF-700G喷胶过滤棉可捕捉大于4 µm尘粒，捕捉率≥99%；底部采用中效玻璃纤维过滤棉。"
        }
      },
      heating: {
        electric: {
          eco: "8组红外线加热，每组3 kW，总加热功率24 kW。",
          plus: "8组升级型豪华红外线加热，每组3 kW，总加热功率24 kW。",
          pro: "8组升级型豪华红外线加热，每组3 kW，总加热功率24 kW。"
        },
        naturalGas: {
          eco: "意大利进口利雅路FS10天然气燃烧器。",
          plus: "意大利进口利雅路FS10天然气燃烧器。",
          pro: "意大利进口利雅路FS20天然气燃烧器。"
        },
        diesel: {
          eco: "意大利进口利雅路G10柴油燃烧器，201不锈钢热能交换器，厚度1.5 mm。",
          plus: "意大利进口利雅路G10柴油燃烧器，201不锈钢热能交换器，厚度2.0 mm。",
          pro: "意大利进口利雅路G10柴油燃烧器，201不锈钢热能交换器，厚度2.0 mm。"
        }
      },
      lighting: {
        electric: "顶部8组 × 4支，共32支24 W LED灯管；电加热布置不配置腰灯。灯箱框架采用0.6 mm喷粉镀锌板。",
        fuel: "顶部8组 × 4支，共32支24 W LED灯管；腰部16组 × 2支，共32支24 W LED灯管。灯箱框架采用0.6 mm喷粉镀锌板。"
      },
      power: {
        electric: "380/220 V，三相四线，50 Hz；红外线加热功率24 kW，整机总装机功率按最终电气图确认。",
        fuel: "380/220 V，三相四线，50 Hz；参考电气负载约12 kW（不含燃烧器热功率），最终装机功率按项目电气图确认。"
      },
      note: "电压、燃料接口、排风路径及当地安全要求须在生产前通过双方技术协议确认。"
    },
    en: {
      labels: {
        product: "Product", model: "Model", level: "Configuration level", internal: "Internal size", external: "External size",
        wall: "Booth body", base: "Base platform", frontDoor: "Front door", serviceDoor: "Service door", plenum: "Plenum chamber",
        supply: "Air supply system", exhaust: "Exhaust system", airBox: "Air box", duct: "Exhaust duct", heating: "Heating system",
        lighting: "Lighting system", filter: "Filter system", control: "Electric control", power: "Power requirement", note: "Project confirmation"
      },
      products: { electric: "Electric Heating Automotive Spray / Baking Booth", naturalGas: "Natural Gas Heating Automotive Spray / Baking Booth", diesel: "Diesel Heating Automotive Spray / Baking Booth" },
      levels: { eco: "Entry-level / ECO Standard", plus: "Mid-range / PLUS Enhanced", pro: "High-end / PRO Professional" },
      internal: "6900 × 3900 × 2600 mm (L × W × H)",
      external: "7000 × 5100 × 3250 mm (L × W × H), single-side air box",
      serviceDoor: "One side-mounted service door, 700 × 1800 mm (W × H), with aluminum-alloy edging, pressure lock and tempered-glass viewing window.",
      plenum: "Welded reinforcing-rib and square-tube structure. The booth roof doubles as the plenum roof; filter supports and connectors are made from 0.6 mm bent galvanized sheet for convenient filter replacement.",
      airBox: "40 × 40 mm powder-coated square-tube frame clad with 0.6 mm color-coated steel sheet.",
      duct: "Standard configuration includes two straight duct sections and one elbow.",
      control: "CHINT or equivalent electrical components in an external rotary control box. The main circuit includes leakage, phase-loss, short-circuit, timing and overload protection.",
      tiers: {
        eco: {
          wall: "50 mm EPS sandwich wall panels with 0.426 mm color-coated steel sheets on both sides; 0.7 mm galvanized roof panel, 0.8 mm top channel and 1.2 mm bottom channel. EPS core density is confirmed in the final technical agreement.",
          base: "Three rows of 2.3 mm checker plate and two rows of 3 × 30 steel grating, supported by bent galvanized-sheet brackets.",
          frontDoor: "Three-leaf main door with aluminum-alloy edging.",
          supply: "Two YDW 3 kW supply fans with aluminum-wound motors, Tianyi or equivalent.",
          exhaust: "One YDW 5.5 kW exhaust fan with aluminum-wound motor, Hengkang or equivalent.",
          filter: "Inlet pre-filter captures particles above 10 µm. SF-600G adhesive ceiling filter captures particles above 4 µm with at least 99% efficiency. Medium-efficiency fiberglass floor filter."
        },
        plus: {
          wall: "50 mm fire-resistant rock-wool composite wall panels with 0.426 mm color-coated steel sheets on both sides and 100 kg/m³ rock-wool density; 0.7 mm galvanized roof panel, 0.8 mm top channel and 1.2 mm bottom channel.",
          base: "Three rows of 2.3 mm checker plate and two rows of 4 × 30 steel grating, supported by bent galvanized-sheet brackets.",
          frontDoor: "Three-leaf sheet-metal main door.",
          supply: "Two YDW 3 kW supply fans with copper-wound motors, Tianyi or equivalent.",
          exhaust: "One YDW 5.5 kW exhaust fan with copper-wound motor, Hengkang or equivalent.",
          filter: "Inlet pre-filter captures particles above 10 µm. SF-700G adhesive ceiling filter captures particles above 4 µm with at least 99% efficiency. Medium-efficiency fiberglass floor filter."
        },
        pro: {
          wall: "50 mm fire-resistant rock-wool composite wall panels with 0.5 mm color-coated steel sheets on both sides and 100 kg/m³ rock-wool density; 0.7 mm galvanized roof panel, 0.8 mm top channel and 1.2 mm bottom channel.",
          base: "Three rows of 2.3 mm checker plate and two rows of 5 × 30 steel grating, supported by No. 12 channel steel.",
          frontDoor: "Four-leaf aluminum-alloy glazed main door.",
          supply: "Two YDW 3 kW supply fans with copper-wound motors.",
          exhaust: "One YDW 5.5 kW exhaust fan with copper-wound motor.",
          filter: "Inlet pre-filter captures particles above 10 µm. SF-700G adhesive ceiling filter captures particles above 4 µm with at least 99% efficiency. Medium-efficiency fiberglass floor filter."
        }
      },
      heating: {
        electric: {
          eco: "Eight infrared heating sets, 3 kW each, total heating power 24 kW.",
          plus: "Eight upgraded luxury infrared heating sets, 3 kW each, total heating power 24 kW.",
          pro: "Eight upgraded luxury infrared heating sets, 3 kW each, total heating power 24 kW."
        },
        naturalGas: {
          eco: "Imported Italian Riello FS10 natural-gas burner.",
          plus: "Imported Italian Riello FS10 natural-gas burner.",
          pro: "Imported Italian Riello FS20 natural-gas burner."
        },
        diesel: {
          eco: "Imported Italian Riello G10 diesel burner with 1.5 mm 201 stainless-steel heat exchanger.",
          plus: "Imported Italian Riello G10 diesel burner with 2.0 mm 201 stainless-steel heat exchanger.",
          pro: "Imported Italian Riello G10 diesel burner with 2.0 mm 201 stainless-steel heat exchanger."
        }
      },
      lighting: {
        electric: "Ceiling lighting: 8 sets × 4 tubes = 32 pcs 24 W LED tubes. No waist lights are fitted with the electric-heating layout. Light-box frames use 0.6 mm powder-coated galvanized sheet.",
        fuel: "Ceiling lighting: 8 sets × 4 tubes = 32 pcs 24 W LED tubes. Waist lighting: 16 sets × 2 tubes = 32 pcs 24 W LED tubes. Light-box frames use 0.6 mm powder-coated galvanized sheet."
      },
      power: {
        electric: "380/220 V, 3 phase 4 wire, 50 Hz. Infrared heating load is 24 kW; final total connected load is confirmed by the project electrical drawing.",
        fuel: "380/220 V, 3 phase 4 wire, 50 Hz. Reference electrical load is approx. 12 kW, excluding burner thermal output; final connected load is confirmed by the project electrical drawing."
      },
      note: "Voltage, fuel connection, exhaust routing and local safety requirements must be confirmed in the mutually approved technical agreement before production."
    },
    fr: {
      labels: {
        product: "Produit", model: "Modèle", level: "Niveau de configuration", internal: "Dimensions intérieures", external: "Dimensions extérieures",
        wall: "Structure de cabine", base: "Soubassement", frontDoor: "Porte frontale", serviceDoor: "Porte de service", plenum: "Plénum",
        supply: "Système de soufflage", exhaust: "Système d’extraction", airBox: "Caisson d’air", duct: "Conduit d’extraction", heating: "Système de chauffage",
        lighting: "Système d’éclairage", filter: "Système de filtration", control: "Commande électrique", power: "Alimentation électrique", note: "Validation du projet"
      },
      products: { electric: "Cabine automobile de peinture et d’étuvage à chauffage électrique", naturalGas: "Cabine automobile de peinture et d’étuvage au gaz naturel", diesel: "Cabine automobile de peinture et d’étuvage au diesel" },
      levels: { eco: "Entrée de gamme / ECO Standard", plus: "Milieu de gamme / PLUS Renforcée", pro: "Haut de gamme / PRO Professionnelle" },
      internal: "6900 × 3900 × 2600 mm (L × l × H)",
      external: "7000 × 5100 × 3250 mm (L × l × H), caisson d’air latéral",
      serviceDoor: "Une porte de service latérale de 700 × 1800 mm (l × H), bordée d’aluminium, avec serrure à pression et fenêtre en verre trempé.",
      plenum: "Structure soudée avec nervures renforcées et tubes carrés. Le toit de la cabine sert de toit au plénum ; supports de filtres et raccords en tôle galvanisée pliée de 0,6 mm pour faciliter le remplacement.",
      airBox: "Cadre en tube carré 40 × 40 mm thermolaqué, habillé de tôle d’acier prélaquée de 0,6 mm.",
      duct: "La configuration standard comprend deux sections droites et un coude.",
      control: "Composants électriques CHINT ou équivalents dans un coffret externe à commandes rotatives. Le circuit principal comprend les protections contre fuite, perte de phase, court-circuit, temporisation et surcharge.",
      tiers: {
        eco: {
          wall: "Panneaux sandwich EPS de 50 mm avec parements acier prélaqué de 0,426 mm sur les deux faces ; toit galvanisé de 0,7 mm, profil supérieur de 0,8 mm et profil inférieur de 1,2 mm. La densité EPS est confirmée dans l’accord technique final.",
          base: "Trois rangées de tôle antidérapante de 2,3 mm et deux rangées de caillebotis acier 3 × 30, sur supports en tôle galvanisée pliée.",
          frontDoor: "Porte principale à trois vantaux bordés d’aluminium.",
          supply: "Deux ventilateurs de soufflage YDW de 3 kW à bobinage aluminium, Tianyi ou équivalent.",
          exhaust: "Un ventilateur d’extraction YDW de 5,5 kW à bobinage aluminium, Hengkang ou équivalent.",
          filter: "Préfiltre d’entrée pour particules supérieures à 10 µm. Filtre plafond adhésif SF-600G pour particules supérieures à 4 µm, efficacité ≥99 %. Filtre de sol en fibre de verre à efficacité moyenne."
        },
        plus: {
          wall: "Panneaux composites coupe-feu en laine de roche de 50 mm, parements acier prélaqué de 0,426 mm sur les deux faces, densité 100 kg/m³ ; toit galvanisé de 0,7 mm, profil supérieur de 0,8 mm et profil inférieur de 1,2 mm.",
          base: "Trois rangées de tôle antidérapante de 2,3 mm et deux rangées de caillebotis acier 4 × 30, sur supports en tôle galvanisée pliée.",
          frontDoor: "Porte principale en tôle à trois vantaux.",
          supply: "Deux ventilateurs de soufflage YDW de 3 kW à bobinage cuivre, Tianyi ou équivalent.",
          exhaust: "Un ventilateur d’extraction YDW de 5,5 kW à bobinage cuivre, Hengkang ou équivalent.",
          filter: "Préfiltre d’entrée pour particules supérieures à 10 µm. Filtre plafond adhésif SF-700G pour particules supérieures à 4 µm, efficacité ≥99 %. Filtre de sol en fibre de verre à efficacité moyenne."
        },
        pro: {
          wall: "Panneaux composites coupe-feu en laine de roche de 50 mm, parements acier prélaqué de 0,5 mm sur les deux faces, densité 100 kg/m³ ; toit galvanisé de 0,7 mm, profil supérieur de 0,8 mm et profil inférieur de 1,2 mm.",
          base: "Trois rangées de tôle antidérapante de 2,3 mm et deux rangées de caillebotis acier 5 × 30, sur profilé U n°12.",
          frontDoor: "Porte principale vitrée à quatre vantaux en aluminium.",
          supply: "Deux ventilateurs de soufflage YDW de 3 kW à bobinage cuivre.",
          exhaust: "Un ventilateur d’extraction YDW de 5,5 kW à bobinage cuivre.",
          filter: "Préfiltre d’entrée pour particules supérieures à 10 µm. Filtre plafond adhésif SF-700G pour particules supérieures à 4 µm, efficacité ≥99 %. Filtre de sol en fibre de verre à efficacité moyenne."
        }
      },
      heating: {
        electric: { eco: "Huit ensembles infrarouges de 3 kW chacun, puissance totale 24 kW.", plus: "Huit ensembles infrarouges renforcés de 3 kW chacun, puissance totale 24 kW.", pro: "Huit ensembles infrarouges renforcés de 3 kW chacun, puissance totale 24 kW." },
        naturalGas: { eco: "Brûleur gaz naturel italien Riello FS10 importé.", plus: "Brûleur gaz naturel italien Riello FS10 importé.", pro: "Brûleur gaz naturel italien Riello FS20 importé." },
        diesel: { eco: "Brûleur diesel italien Riello G10 importé avec échangeur inox 201 de 1,5 mm.", plus: "Brûleur diesel italien Riello G10 importé avec échangeur inox 201 de 2,0 mm.", pro: "Brûleur diesel italien Riello G10 importé avec échangeur inox 201 de 2,0 mm." }
      },
      lighting: {
        electric: "Éclairage plafond : 8 ensembles × 4 tubes = 32 tubes LED de 24 W. Aucun éclairage latéral bas avec l’implantation électrique. Caissons en tôle galvanisée thermolaquée de 0,6 mm.",
        fuel: "Éclairage plafond : 8 ensembles × 4 tubes = 32 tubes LED de 24 W. Éclairage latéral : 16 ensembles × 2 tubes = 32 tubes LED de 24 W. Caissons en tôle galvanisée thermolaquée de 0,6 mm."
      },
      power: {
        electric: "380/220 V, triphasé 4 fils, 50 Hz. Chauffage infrarouge 24 kW ; puissance totale raccordée selon le schéma électrique du projet.",
        fuel: "380/220 V, triphasé 4 fils, 50 Hz. Charge électrique indicative env. 12 kW, hors puissance thermique du brûleur ; valeur finale selon le schéma du projet."
      },
      note: "La tension, le raccordement combustible, le tracé d’extraction et les exigences locales de sécurité doivent être validés dans l’accord technique avant production."
    },
    es: {
      labels: {
        product: "Producto", model: "Modelo", level: "Nivel de configuración", internal: "Dimensiones internas", external: "Dimensiones externas",
        wall: "Estructura de cabina", base: "Base", frontDoor: "Puerta frontal", serviceDoor: "Puerta de servicio", plenum: "Cámara plenum",
        supply: "Sistema de impulsión", exhaust: "Sistema de extracción", airBox: "Caja de aire", duct: "Conducto de extracción", heating: "Sistema de calefacción",
        lighting: "Sistema de iluminación", filter: "Sistema de filtración", control: "Control eléctrico", power: "Alimentación eléctrica", note: "Confirmación del proyecto"
      },
      products: { electric: "Cabina de pintura y secado automotriz con calefacción eléctrica", naturalGas: "Cabina de pintura y secado automotriz con gas natural", diesel: "Cabina de pintura y secado automotriz con diésel" },
      levels: { eco: "Gama básica / ECO Estándar", plus: "Gama media / PLUS Mejorada", pro: "Gama alta / PRO Profesional" },
      internal: "6900 × 3900 × 2600 mm (L × An × Al)",
      external: "7000 × 5100 × 3250 mm (L × An × Al), caja de aire lateral",
      serviceDoor: "Una puerta de servicio lateral de 700 × 1800 mm (An × Al), con borde de aluminio, cerradura de presión y ventana de vidrio templado.",
      plenum: "Estructura soldada con nervios reforzados y tubo cuadrado. El techo de la cabina sirve como techo del plenum; soportes de filtro y conectores de chapa galvanizada plegada de 0,6 mm para facilitar el mantenimiento.",
      airBox: "Bastidor de tubo cuadrado de 40 × 40 mm con pintura en polvo y revestimiento de chapa prepintada de 0,6 mm.",
      duct: "La configuración estándar incluye dos tramos rectos y un codo.",
      control: "Componentes eléctricos CHINT o equivalentes en caja de control externa con mandos giratorios. Protección contra fugas, pérdida de fase, cortocircuito, temporización y sobrecarga.",
      tiers: {
        eco: {
          wall: "Paneles sándwich EPS de 50 mm con chapa prepintada de 0,426 mm en ambas caras; techo galvanizado de 0,7 mm, perfil superior de 0,8 mm y perfil inferior de 1,2 mm. La densidad del EPS se confirma en el acuerdo técnico final.",
          base: "Tres filas de chapa estriada de 2,3 mm y dos filas de rejilla de acero 3 × 30, con soportes de chapa galvanizada plegada.",
          frontDoor: "Puerta principal de tres hojas con borde de aluminio.",
          supply: "Dos ventiladores de impulsión YDW de 3 kW con bobinado de aluminio, Tianyi o equivalente.",
          exhaust: "Un ventilador de extracción YDW de 5,5 kW con bobinado de aluminio, Hengkang o equivalente.",
          filter: "Prefiltro de entrada para partículas mayores de 10 µm. Filtro adhesivo de techo SF-600G para partículas mayores de 4 µm, eficiencia ≥99 %. Filtro de suelo de fibra de vidrio de eficiencia media."
        },
        plus: {
          wall: "Paneles compuestos ignífugos de lana de roca de 50 mm, chapa prepintada de 0,426 mm en ambas caras y densidad 100 kg/m³; techo galvanizado de 0,7 mm, perfil superior de 0,8 mm y perfil inferior de 1,2 mm.",
          base: "Tres filas de chapa estriada de 2,3 mm y dos filas de rejilla de acero 4 × 30, con soportes de chapa galvanizada plegada.",
          frontDoor: "Puerta principal de chapa de tres hojas.",
          supply: "Dos ventiladores de impulsión YDW de 3 kW con bobinado de cobre, Tianyi o equivalente.",
          exhaust: "Un ventilador de extracción YDW de 5,5 kW con bobinado de cobre, Hengkang o equivalente.",
          filter: "Prefiltro de entrada para partículas mayores de 10 µm. Filtro adhesivo de techo SF-700G para partículas mayores de 4 µm, eficiencia ≥99 %. Filtro de suelo de fibra de vidrio de eficiencia media."
        },
        pro: {
          wall: "Paneles compuestos ignífugos de lana de roca de 50 mm, chapa prepintada de 0,5 mm en ambas caras y densidad 100 kg/m³; techo galvanizado de 0,7 mm, perfil superior de 0,8 mm y perfil inferior de 1,2 mm.",
          base: "Tres filas de chapa estriada de 2,3 mm y dos filas de rejilla de acero 5 × 30, sobre acero canal n.º 12.",
          frontDoor: "Puerta principal acristalada de aluminio de cuatro hojas.",
          supply: "Dos ventiladores de impulsión YDW de 3 kW con bobinado de cobre.",
          exhaust: "Un ventilador de extracción YDW de 5,5 kW con bobinado de cobre.",
          filter: "Prefiltro de entrada para partículas mayores de 10 µm. Filtro adhesivo de techo SF-700G para partículas mayores de 4 µm, eficiencia ≥99 %. Filtro de suelo de fibra de vidrio de eficiencia media."
        }
      },
      heating: {
        electric: { eco: "Ocho conjuntos infrarrojos de 3 kW cada uno, potencia total 24 kW.", plus: "Ocho conjuntos infrarrojos mejorados de 3 kW cada uno, potencia total 24 kW.", pro: "Ocho conjuntos infrarrojos mejorados de 3 kW cada uno, potencia total 24 kW." },
        naturalGas: { eco: "Quemador de gas natural italiano Riello FS10 importado.", plus: "Quemador de gas natural italiano Riello FS10 importado.", pro: "Quemador de gas natural italiano Riello FS20 importado." },
        diesel: { eco: "Quemador diésel italiano Riello G10 importado con intercambiador de acero inoxidable 201 de 1,5 mm.", plus: "Quemador diésel italiano Riello G10 importado con intercambiador de acero inoxidable 201 de 2,0 mm.", pro: "Quemador diésel italiano Riello G10 importado con intercambiador de acero inoxidable 201 de 2,0 mm." }
      },
      lighting: {
        electric: "Iluminación de techo: 8 conjuntos × 4 tubos = 32 tubos LED de 24 W. La versión eléctrica no incorpora luces laterales bajas. Cajas de luz en chapa galvanizada de 0,6 mm con pintura en polvo.",
        fuel: "Iluminación de techo: 8 conjuntos × 4 tubos = 32 tubos LED de 24 W. Iluminación lateral: 16 conjuntos × 2 tubos = 32 tubos LED de 24 W. Cajas de luz en chapa galvanizada de 0,6 mm con pintura en polvo."
      },
      power: {
        electric: "380/220 V, trifásico 4 hilos, 50 Hz. Calefacción infrarroja de 24 kW; carga total según el plano eléctrico del proyecto.",
        fuel: "380/220 V, trifásico 4 hilos, 50 Hz. Carga eléctrica de referencia aprox. 12 kW, sin incluir la potencia térmica del quemador; valor final según el plano del proyecto."
      },
      note: "La tensión, la conexión de combustible, el recorrido de extracción y los requisitos locales de seguridad deben confirmarse en el acuerdo técnico antes de producción."
    },
    it: {
      labels: {
        product: "Prodotto", model: "Modello", level: "Livello di configurazione", internal: "Dimensioni interne", external: "Dimensioni esterne",
        wall: "Struttura cabina", base: "Basamento", frontDoor: "Portone frontale", serviceDoor: "Porta di servizio", plenum: "Camera di pressurizzazione",
        supply: "Sistema di mandata", exhaust: "Sistema di estrazione", airBox: "Cassa aria", duct: "Condotto di scarico", heating: "Sistema di riscaldamento",
        lighting: "Sistema di illuminazione", filter: "Sistema di filtrazione", control: "Quadro elettrico", power: "Alimentazione elettrica", note: "Conferma progetto"
      },
      products: { electric: "Cabina auto di verniciatura e cottura con riscaldamento elettrico", naturalGas: "Cabina auto di verniciatura e cottura a gas naturale", diesel: "Cabina auto di verniciatura e cottura diesel" },
      levels: { eco: "Fascia base / ECO Standard", plus: "Fascia media / PLUS Potenziata", pro: "Fascia alta / PRO Professionale" },
      internal: "6900 × 3900 × 2600 mm (L × P × H)",
      external: "7000 × 5100 × 3250 mm (L × P × H), cassa aria laterale",
      serviceDoor: "Una porta di servizio laterale da 700 × 1800 mm (L × H), con bordo in alluminio, serratura a pressione e finestra in vetro temperato.",
      plenum: "Struttura saldata con nervature rinforzate e tubi quadri. Il tetto cabina funge da tetto del plenum; supporti filtro e raccordi in lamiera zincata piegata da 0,6 mm per una facile sostituzione.",
      airBox: "Telaio in tubo quadro 40 × 40 mm verniciato a polvere con rivestimento in lamiera preverniciata da 0,6 mm.",
      duct: "La configurazione standard include due tratti diritti e una curva.",
      control: "Componenti elettrici CHINT o equivalenti in quadro esterno con comandi rotativi. Protezioni da dispersione, mancanza fase, cortocircuito, temporizzazione e sovraccarico.",
      tiers: {
        eco: {
          wall: "Pannelli sandwich EPS da 50 mm con lamiera preverniciata da 0,426 mm su entrambi i lati; tetto zincato da 0,7 mm, profilo superiore da 0,8 mm e inferiore da 1,2 mm. La densità EPS è confermata nell’accordo tecnico finale.",
          base: "Tre file di lamiera mandorlata da 2,3 mm e due file di grigliato in acciaio 3 × 30, con supporti in lamiera zincata piegata.",
          frontDoor: "Portone principale a tre ante con bordo in alluminio.",
          supply: "Due ventilatori di mandata YDW da 3 kW con avvolgimento in alluminio, Tianyi o equivalente.",
          exhaust: "Un ventilatore di estrazione YDW da 5,5 kW con avvolgimento in alluminio, Hengkang o equivalente.",
          filter: "Prefiltro ingresso per particelle oltre 10 µm. Filtro adesivo a soffitto SF-600G per particelle oltre 4 µm, efficienza ≥99%. Filtro a pavimento in fibra di vetro a media efficienza."
        },
        plus: {
          wall: "Pannelli compositi ignifughi in lana di roccia da 50 mm, lamiera preverniciata da 0,426 mm su entrambi i lati, densità 100 kg/m³; tetto zincato da 0,7 mm, profilo superiore da 0,8 mm e inferiore da 1,2 mm.",
          base: "Tre file di lamiera mandorlata da 2,3 mm e due file di grigliato in acciaio 4 × 30, con supporti in lamiera zincata piegata.",
          frontDoor: "Portone principale in lamiera a tre ante.",
          supply: "Due ventilatori di mandata YDW da 3 kW con avvolgimento in rame, Tianyi o equivalente.",
          exhaust: "Un ventilatore di estrazione YDW da 5,5 kW con avvolgimento in rame, Hengkang o equivalente.",
          filter: "Prefiltro ingresso per particelle oltre 10 µm. Filtro adesivo a soffitto SF-700G per particelle oltre 4 µm, efficienza ≥99%. Filtro a pavimento in fibra di vetro a media efficienza."
        },
        pro: {
          wall: "Pannelli compositi ignifughi in lana di roccia da 50 mm, lamiera preverniciata da 0,5 mm su entrambi i lati, densità 100 kg/m³; tetto zincato da 0,7 mm, profilo superiore da 0,8 mm e inferiore da 1,2 mm.",
          base: "Tre file di lamiera mandorlata da 2,3 mm e due file di grigliato in acciaio 5 × 30, su profilato U n. 12.",
          frontDoor: "Portone principale vetrato in alluminio a quattro ante.",
          supply: "Due ventilatori di mandata YDW da 3 kW con avvolgimento in rame.",
          exhaust: "Un ventilatore di estrazione YDW da 5,5 kW con avvolgimento in rame.",
          filter: "Prefiltro ingresso per particelle oltre 10 µm. Filtro adesivo a soffitto SF-700G per particelle oltre 4 µm, efficienza ≥99%. Filtro a pavimento in fibra di vetro a media efficienza."
        }
      },
      heating: {
        electric: { eco: "Otto gruppi infrarossi da 3 kW ciascuno, potenza totale 24 kW.", plus: "Otto gruppi infrarossi potenziati da 3 kW ciascuno, potenza totale 24 kW.", pro: "Otto gruppi infrarossi potenziati da 3 kW ciascuno, potenza totale 24 kW." },
        naturalGas: { eco: "Bruciatore a gas naturale italiano Riello FS10 importato.", plus: "Bruciatore a gas naturale italiano Riello FS10 importato.", pro: "Bruciatore a gas naturale italiano Riello FS20 importato." },
        diesel: { eco: "Bruciatore diesel italiano Riello G10 importato con scambiatore inox 201 da 1,5 mm.", plus: "Bruciatore diesel italiano Riello G10 importato con scambiatore inox 201 da 2,0 mm.", pro: "Bruciatore diesel italiano Riello G10 importato con scambiatore inox 201 da 2,0 mm." }
      },
      lighting: {
        electric: "Illuminazione a soffitto: 8 gruppi × 4 tubi = 32 tubi LED da 24 W. La versione elettrica non prevede luci laterali basse. Cassonetti in lamiera zincata da 0,6 mm verniciata a polvere.",
        fuel: "Illuminazione a soffitto: 8 gruppi × 4 tubi = 32 tubi LED da 24 W. Illuminazione laterale: 16 gruppi × 2 tubi = 32 tubi LED da 24 W. Cassonetti in lamiera zincata da 0,6 mm verniciata a polvere."
      },
      power: {
        electric: "380/220 V, trifase 4 fili, 50 Hz. Riscaldamento infrarosso 24 kW; carico totale secondo lo schema elettrico del progetto.",
        fuel: "380/220 V, trifase 4 fili, 50 Hz. Carico elettrico indicativo circa 12 kW, esclusa la potenza termica del bruciatore; valore finale secondo lo schema del progetto."
      },
      note: "Tensione, collegamento combustibile, percorso di estrazione e requisiti di sicurezza locali devono essere confermati nell’accordo tecnico prima della produzione."
    },
    de: {
      labels: {
        product: "Produkt", model: "Modell", level: "Ausführungsstufe", internal: "Innenabmessungen", external: "Außenabmessungen",
        wall: "Kabinenaufbau", base: "Unterbau", frontDoor: "Fronttor", serviceDoor: "Servicetür", plenum: "Druckkammer",
        supply: "Zuluftsystem", exhaust: "Abluftsystem", airBox: "Luftkasten", duct: "Abluftkanal", heating: "Heizsystem",
        lighting: "Beleuchtungssystem", filter: "Filtersystem", control: "Elektrische Steuerung", power: "Stromversorgung", note: "Projektbestätigung"
      },
      products: { electric: "Elektrisch beheizte Fahrzeug-Lackier- und Trockenkabine", naturalGas: "Erdgasbeheizte Fahrzeug-Lackier- und Trockenkabine", diesel: "Dieselbeheizte Fahrzeug-Lackier- und Trockenkabine" },
      levels: { eco: "Einstieg / ECO Standard", plus: "Mittelklasse / PLUS Verstärkt", pro: "Oberklasse / PRO Professionell" },
      internal: "6900 × 3900 × 2600 mm (L × B × H)",
      external: "7000 × 5100 × 3250 mm (L × B × H), seitlicher Luftkasten",
      serviceDoor: "Eine seitliche Servicetür 700 × 1800 mm (B × H) mit Aluminium-Einfassung, Druckverschluss und Sichtfenster aus Einscheiben-Sicherheitsglas.",
      plenum: "Geschweißte Konstruktion aus Verstärkungsrippen und Vierkantrohren. Das Kabinendach dient zugleich als Druckkammerdach; Filterhalter und Verbinder aus 0,6 mm gekantetem verzinktem Blech erleichtern den Filterwechsel.",
      airBox: "Pulverbeschichteter Vierkantrohrrahmen 40 × 40 mm mit Verkleidung aus 0,6 mm farbbeschichtetem Stahlblech.",
      duct: "Standardausstattung mit zwei geraden Kanalstücken und einem Bogen.",
      control: "Elektrische Komponenten von CHINT oder gleichwertig in externem Drehschalter-Schaltschrank. Schutz gegen Fehlerstrom, Phasenausfall, Kurzschluss und Überlast sowie Zeitsteuerung.",
      tiers: {
        eco: {
          wall: "50-mm-EPS-Sandwichpaneele mit beidseitig 0,426 mm farbbeschichtetem Stahlblech; 0,7 mm verzinktes Dachblech, 0,8 mm oberes und 1,2 mm unteres Profil. Die EPS-Kerndichte wird in der finalen technischen Vereinbarung bestätigt.",
          base: "Drei Reihen 2,3-mm-Riffelblech und zwei Reihen Stahlgitterrost 3 × 30 auf Haltern aus gekantetem verzinktem Blech.",
          frontDoor: "Dreiflügeliges Haupttor mit Aluminium-Einfassung.",
          supply: "Zwei YDW-Zuluftventilatoren mit je 3 kW und Aluminiumwicklung, Tianyi oder gleichwertig.",
          exhaust: "Ein YDW-Abluftventilator mit 5,5 kW und Aluminiumwicklung, Hengkang oder gleichwertig.",
          filter: "Zuluft-Vorfilter für Partikel über 10 µm. Haftendes Deckenfiltermedium SF-600G für Partikel über 4 µm, Abscheidegrad ≥99 %. Mittelfeines Glasfaser-Bodenfiltermedium."
        },
        plus: {
          wall: "50-mm-Brandschutz-Verbundpaneele aus Steinwolle mit beidseitig 0,426 mm farbbeschichtetem Stahlblech und 100 kg/m³ Dichte; 0,7 mm verzinktes Dachblech, 0,8 mm oberes und 1,2 mm unteres Profil.",
          base: "Drei Reihen 2,3-mm-Riffelblech und zwei Reihen Stahlgitterrost 4 × 30 auf Haltern aus gekantetem verzinktem Blech.",
          frontDoor: "Dreiflügeliges Haupttor aus Stahlblech.",
          supply: "Zwei YDW-Zuluftventilatoren mit je 3 kW und Kupferwicklung, Tianyi oder gleichwertig.",
          exhaust: "Ein YDW-Abluftventilator mit 5,5 kW und Kupferwicklung, Hengkang oder gleichwertig.",
          filter: "Zuluft-Vorfilter für Partikel über 10 µm. Haftendes Deckenfiltermedium SF-700G für Partikel über 4 µm, Abscheidegrad ≥99 %. Mittelfeines Glasfaser-Bodenfiltermedium."
        },
        pro: {
          wall: "50-mm-Brandschutz-Verbundpaneele aus Steinwolle mit beidseitig 0,5 mm farbbeschichtetem Stahlblech und 100 kg/m³ Dichte; 0,7 mm verzinktes Dachblech, 0,8 mm oberes und 1,2 mm unteres Profil.",
          base: "Drei Reihen 2,3-mm-Riffelblech und zwei Reihen Stahlgitterrost 5 × 30 auf U-Profil-Unterbau Nr. 12.",
          frontDoor: "Vierflügeliges verglastes Haupttor aus Aluminium.",
          supply: "Zwei YDW-Zuluftventilatoren mit je 3 kW und Kupferwicklung.",
          exhaust: "Ein YDW-Abluftventilator mit 5,5 kW und Kupferwicklung.",
          filter: "Zuluft-Vorfilter für Partikel über 10 µm. Haftendes Deckenfiltermedium SF-700G für Partikel über 4 µm, Abscheidegrad ≥99 %. Mittelfeines Glasfaser-Bodenfiltermedium."
        }
      },
      heating: {
        electric: { eco: "Acht Infrarot-Heizeinheiten mit je 3 kW, Gesamtheizleistung 24 kW.", plus: "Acht verstärkte Infrarot-Heizeinheiten mit je 3 kW, Gesamtheizleistung 24 kW.", pro: "Acht verstärkte Infrarot-Heizeinheiten mit je 3 kW, Gesamtheizleistung 24 kW." },
        naturalGas: { eco: "Importierter italienischer Riello-FS10-Erdgasbrenner.", plus: "Importierter italienischer Riello-FS10-Erdgasbrenner.", pro: "Importierter italienischer Riello-FS20-Erdgasbrenner." },
        diesel: { eco: "Importierter italienischer Riello-G10-Dieselbrenner mit 1,5 mm Wärmetauscher aus Edelstahl 201.", plus: "Importierter italienischer Riello-G10-Dieselbrenner mit 2,0 mm Wärmetauscher aus Edelstahl 201.", pro: "Importierter italienischer Riello-G10-Dieselbrenner mit 2,0 mm Wärmetauscher aus Edelstahl 201." }
      },
      lighting: {
        electric: "Deckenbeleuchtung: 8 Einheiten × 4 Röhren = 32 LED-Röhren mit 24 W. Bei elektrischer Heizung entfallen seitliche Hüftleuchten. Leuchtenkästen aus 0,6 mm pulverbeschichtetem verzinktem Blech.",
        fuel: "Deckenbeleuchtung: 8 Einheiten × 4 Röhren = 32 LED-Röhren mit 24 W. Seitenbeleuchtung: 16 Einheiten × 2 Röhren = 32 LED-Röhren mit 24 W. Leuchtenkästen aus 0,6 mm pulverbeschichtetem verzinktem Blech."
      },
      power: {
        electric: "380/220 V, 3-phasig, 4-Leiter, 50 Hz. Infrarotheizung 24 kW; gesamte Anschlussleistung gemäß projektbezogenem Stromlaufplan.",
        fuel: "380/220 V, 3-phasig, 4-Leiter, 50 Hz. Elektrische Referenzlast ca. 12 kW, ohne thermische Brennerleistung; Endwert gemäß projektbezogenem Stromlaufplan."
      },
      note: "Spannung, Brennstoffanschluss, Abluftführung und örtliche Sicherheitsanforderungen sind vor Produktionsbeginn in der technischen Vereinbarung zu bestätigen."
    }
  };

  function buildItems(locale, model) {
    var text = translations[locale];
    var tier = text.tiers[model.tier];
    var fuelLighting = model.fuel === "electric" ? text.lighting.electric : text.lighting.fuel;
    var power = model.fuel === "electric" ? text.power.electric : text.power.fuel;

    return [
      [text.labels.product, text.products[model.fuel]],
      [text.labels.model, model.code],
      [text.labels.level, text.levels[model.tier]],
      [text.labels.internal, text.internal],
      [text.labels.external, text.external],
      [text.labels.wall, tier.wall],
      [text.labels.base, tier.base],
      [text.labels.frontDoor, tier.frontDoor],
      [text.labels.serviceDoor, text.serviceDoor],
      [text.labels.plenum, text.plenum],
      [text.labels.supply, tier.supply],
      [text.labels.exhaust, tier.exhaust],
      [text.labels.airBox, text.airBox],
      [text.labels.duct, text.duct],
      [text.labels.heating, text.heating[model.fuel][model.tier]],
      [text.labels.lighting, fuelLighting],
      [text.labels.filter, tier.filter],
      [text.labels.control, text.control],
      [text.labels.power, power],
      [text.labels.note, text.note]
    ];
  }

  var models = {};
  modelDefinitions.forEach(function (model) {
    var locales = {};
    Object.keys(translations).forEach(function (locale) {
      locales[locale] = buildItems(locale, model);
    });
    models[model.code] = { status: "complete", locales: locales };
  });

  window.GubotCatalogSpecifications = { models: models };
})();
