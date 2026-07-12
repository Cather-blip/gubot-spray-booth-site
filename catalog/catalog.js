(function () {
  "use strict";

  var TOTAL_PAGES = 13;
  var TURN_DURATION = 620;
  var supportedLocales = ["zh", "en", "fr", "es", "it", "de"];

  var copy = {
    zh: {
      htmlLang: "zh-CN",
      language: "语言",
      previous: "上一页",
      next: "下一页",
      hint: "使用方向键或左右滑动翻页",
      introEyebrow: "GUBOT · 汽车涂装设备",
      introTitle: "2026 喷烤漆房产品册",
      introSeries: "电加热 · 天然气 · 柴油",
      coverEyebrow: "GUBOT 汽车涂装设备｜2026 产品目录",
      coverTitle: "GUBOT 喷烤漆房系列",
      coverSubtitle: "专业汽车喷涂与烘干解决方案",
      coverRange: "电加热 · 天然气 · 柴油｜ECO · PLUS · PRO",
      coverButton: "浏览产品系列",
      contentsEyebrow: "GBT-SB6900 系列",
      contentsTitle: "产品目录",
      contentsIntro: "三种加热方式，九款标准机型，满足从常规维修到高强度专业作业的不同需求。",
      contentsFooter: "更多尺寸及配置可根据项目需求定制。",
      electric: "电加热系列",
      naturalGas: "天然气系列",
      diesel: "柴油系列",
      eco: "标准型 ECO",
      plus: "增强型 PLUS",
      pro: "专业型 PRO",
      fuelText: {
        electric: "适合供电稳定、希望减少现场燃料管理的维修与涂装场地。",
        naturalGas: "适合具备天然气条件、重视连续烘干效率的专业车间。",
        diesel: "适合无稳定管道燃气、具备合规燃油条件的项目现场。"
      },
      tierText: {
        eco: "面向日常钣喷维修的实用基础配置。",
        plus: "升级结构、送排风与照明配置，兼顾效率与耐用性。",
        pro: "面向高频作业与专业车间的高规格配置。"
      },
      labels: { wall: "墙体系统", base: "底台与地面", air: "送风与排风", heat: "加热系统", light: "照明", control: "控制系统" },
      dimensions: "标准尺寸",
      internal: "内尺寸",
      external: "外尺寸",
      technicalNote: "最终规格以双方确认的技术协议为准。",
      standardsEyebrow: "系列工程标准",
      standardsTitle: "为专业喷涂作业而设计",
      standardsIntro: "GBT-SB6900 系列围绕气流组织、过滤、照明、安全控制与维护便利性进行系统配置。",
      standardItems: [
        ["工作空间", "6900 × 3900 × 2600 mm 标准内尺寸"],
        ["车辆通行", "三扇式正面大门与独立工作门"],
        ["空气过滤", "进风初效、顶部过滤与地棉过滤组合"],
        ["电气保护", "漏电、缺相、短路、过载与超温保护"],
        ["照明系统", "高亮LED照明，布局随配置档位升级"],
        ["项目适配", "电压、排风路径及现场接口可按项目确认"]
      ],
      contactEyebrow: "GUBOT 全球项目支持",
      contactTitle: "选择适合您车间的喷烤漆房",
      contactText: "告诉我们安装国家与城市、车辆类型、首选热源、可用电源及现场尺寸，我们将为您提供专业选型建议。",
      contactButton: "联系 GUBOT",
      whatsappButton: "WhatsApp 咨询",
      websiteButton: "返回官网产品页",
      contactFooter: "上海古博汽车科技有限公司",
      photoCaption: "产品图片仅供系列展示",
      whatsappText: "您好，我想了解 GBT-SB6900 喷烤漆房系列。"
    },
    en: {
      htmlLang: "en",
      language: "Language",
      previous: "Previous",
      next: "Next",
      hint: "Use the arrow keys or swipe to turn pages",
      introEyebrow: "GUBOT · AUTOMOTIVE REFINISHING SYSTEMS",
      introTitle: "2026 Spray Booth Catalogue",
      introSeries: "Electric · Natural Gas · Diesel",
      coverEyebrow: "GUBOT AUTOMOTIVE REFINISHING SYSTEMS | 2026 CATALOGUE",
      coverTitle: "GUBOT Spray Booth Series",
      coverSubtitle: "Professional solutions for automotive refinishing and curing",
      coverRange: "Electric · Natural Gas · Diesel | ECO · PLUS · PRO",
      coverButton: "Explore the range",
      contentsEyebrow: "GBT-SB6900 SERIES",
      contentsTitle: "Product Range",
      contentsIntro: "Three heating systems and nine standard models, designed for applications from everyday refinishing to high-throughput professional workshops.",
      contentsFooter: "Custom dimensions and configurations are available for specific project requirements.",
      electric: "Electric Heating",
      naturalGas: "Natural Gas Heating",
      diesel: "Diesel Heating",
      eco: "ECO · Standard",
      plus: "PLUS · Enhanced",
      pro: "PRO · Professional",
      fuelText: {
        electric: "For workshops with stable electrical capacity and no requirement for on-site fuel handling.",
        naturalGas: "For professional facilities with a suitable natural-gas supply and regular curing demand.",
        diesel: "For projects without stable piped gas where compliant fuel supply and storage are available."
      },
      tierText: {
        eco: "A practical core specification for everyday refinishing work.",
        plus: "Upgraded structure, airflow and lighting for balanced productivity and durability.",
        pro: "A higher specification for frequent operation and professional workshops."
      },
      labels: { wall: "Wall system", base: "Base and floor", air: "Supply and exhaust", heat: "Heating system", light: "Lighting", control: "Controls" },
      dimensions: "Standard dimensions",
      internal: "Internal",
      external: "External",
      technicalNote: "Final specifications are subject to the mutually confirmed technical agreement.",
      standardsEyebrow: "SERIES ENGINEERING STANDARDS",
      standardsTitle: "Designed for professional refinishing",
      standardsIntro: "The GBT-SB6900 series brings airflow, filtration, lighting, safety controls and service access together in a coordinated workshop solution.",
      standardItems: [
        ["Working space", "6,900 × 3,900 × 2,600 mm standard internal size"],
        ["Vehicle access", "Three-leaf front door and separate personnel door"],
        ["Air filtration", "Inlet pre-filter, ceiling filter and floor filter combination"],
        ["Electrical safety", "Leakage, phase-loss, short-circuit, overload and overheat protection"],
        ["Lighting", "High-output LED lighting upgraded by configuration level"],
        ["Project adaptation", "Voltage, exhaust routing and site interfaces confirmed for each project"]
      ],
      contactEyebrow: "GUBOT GLOBAL PROJECT SUPPORT",
      contactTitle: "Choose the right spray booth for your workshop",
      contactText: "Send us the installation country and city, vehicle type, preferred heating system, available power supply and site dimensions. Our team will recommend a suitable configuration.",
      contactButton: "Contact GUBOT",
      whatsappButton: "Talk on WhatsApp",
      websiteButton: "Back to product page",
      contactFooter: "Shanghai Gubot Automobile Technology Co., Ltd.",
      photoCaption: "Product image for series presentation",
      whatsappText: "Hello, I would like to learn more about the GBT-SB6900 spray booth series."
    },
    fr: {
      htmlLang: "fr",
      language: "Langue",
      previous: "Précédent",
      next: "Suivant",
      hint: "Utilisez les flèches ou balayez pour tourner les pages",
      introEyebrow: "GUBOT · SYSTÈMES DE CARROSSERIE-PEINTURE",
      introTitle: "Catalogue cabines de peinture 2026",
      introSeries: "Électrique · Gaz naturel · Diesel",
      coverEyebrow: "GUBOT SYSTÈMES DE CARROSSERIE-PEINTURE | CATALOGUE 2026",
      coverTitle: "Gamme de cabines de peinture GUBOT",
      coverSubtitle: "Solutions professionnelles de pulvérisation et d’étuvage automobile",
      coverRange: "Électrique · Gaz naturel · Diesel | ECO · PLUS · PRO",
      coverButton: "Découvrir la gamme",
      contentsEyebrow: "SÉRIE GBT-SB6900",
      contentsTitle: "Gamme de produits",
      contentsIntro: "Trois systèmes de chauffage et neuf modèles standards, pour les ateliers de carrosserie, de l’activité courante aux cadences intensives.",
      contentsFooter: "Dimensions et configurations personnalisées disponibles selon les exigences du projet.",
      electric: "Chauffage électrique",
      naturalGas: "Chauffage au gaz naturel",
      diesel: "Chauffage au diesel",
      eco: "ECO · Standard",
      plus: "PLUS · Renforcée",
      pro: "PRO · Professionnelle",
      fuelText: {
        electric: "Pour les ateliers disposant d’une alimentation électrique stable, sans gestion de combustible sur site.",
        naturalGas: "Pour les ateliers professionnels dotés d’une alimentation en gaz naturel adaptée.",
        diesel: "Pour les sites sans réseau de gaz stable disposant d’un stockage de combustible conforme."
      },
      tierText: {
        eco: "Une configuration essentielle et pratique pour les travaux quotidiens.",
        plus: "Structure, ventilation et éclairage renforcés pour plus de productivité.",
        pro: "Une configuration supérieure pour un usage fréquent et professionnel."
      },
      labels: { wall: "Parois", base: "Soubassement et sol", air: "Soufflage et extraction", heat: "Chauffage", light: "Éclairage", control: "Commande" },
      dimensions: "Dimensions standards",
      internal: "Intérieures",
      external: "Extérieures",
      technicalNote: "Les spécifications finales sont soumises à l’accord technique confirmé par les deux parties.",
      standardsEyebrow: "STANDARDS D’INGÉNIERIE DE LA GAMME",
      standardsTitle: "Conçue pour la carrosserie professionnelle",
      standardsIntro: "La série GBT-SB6900 associe ventilation, filtration, éclairage, commandes de sécurité et facilité d’entretien.",
      standardItems: [
        ["Espace de travail", "Dimensions intérieures standards : 6 900 × 3 900 × 2 600 mm"],
        ["Accès véhicule", "Portail frontal à trois vantaux et porte de service séparée"],
        ["Filtration", "Préfiltre d’entrée, filtre de plafond et filtre de sol"],
        ["Sécurité électrique", "Protections contre fuite, perte de phase, court-circuit, surcharge et surchauffe"],
        ["Éclairage", "Éclairage LED haute intensité selon le niveau de configuration"],
        ["Adaptation projet", "Tension, extraction et interfaces du site confirmées pour chaque projet"]
      ],
      contactEyebrow: "ASSISTANCE PROJET INTERNATIONALE GUBOT",
      contactTitle: "Choisissez la cabine adaptée à votre atelier",
      contactText: "Indiquez-nous le pays et la ville d’installation, le type de véhicule, le chauffage souhaité, l’alimentation disponible et les dimensions du site.",
      contactButton: "Contacter GUBOT",
      whatsappButton: "Échanger sur WhatsApp",
      websiteButton: "Retour aux produits",
      contactFooter: "Shanghai Gubot Automobile Technology Co., Ltd.",
      photoCaption: "Image de présentation de la gamme",
      whatsappText: "Bonjour, je souhaite en savoir plus sur la gamme de cabines GBT-SB6900."
    },
    es: {
      htmlLang: "es",
      language: "Idioma",
      previous: "Anterior",
      next: "Siguiente",
      hint: "Use las flechas o deslice para pasar de página",
      introEyebrow: "GUBOT · SISTEMAS DE REPINTADO AUTOMOTRIZ",
      introTitle: "Catálogo de cabinas de pintura 2026",
      introSeries: "Eléctrica · Gas natural · Diésel",
      coverEyebrow: "GUBOT SISTEMAS DE REPINTADO AUTOMOTRIZ | CATÁLOGO 2026",
      coverTitle: "Gama de cabinas de pintura GUBOT",
      coverSubtitle: "Soluciones profesionales para pintura y secado de vehículos",
      coverRange: "Eléctrica · Gas natural · Diésel | ECO · PLUS · PRO",
      coverButton: "Descubrir la gama",
      contentsEyebrow: "SERIE GBT-SB6900",
      contentsTitle: "Gama de productos",
      contentsIntro: "Tres sistemas de calefacción y nueve modelos estándar, diseñados para cubrir desde el repintado diario hasta talleres profesionales de alta productividad.",
      contentsFooter: "Disponibles dimensiones y configuraciones personalizadas según las necesidades del proyecto.",
      electric: "Calefacción eléctrica",
      naturalGas: "Calefacción a gas natural",
      diesel: "Calefacción diésel",
      eco: "ECO · Estándar",
      plus: "PLUS · Mejorada",
      pro: "PRO · Profesional",
      fuelText: {
        electric: "Para talleres con capacidad eléctrica estable y sin gestión de combustible en la instalación.",
        naturalGas: "Para instalaciones profesionales con suministro de gas natural adecuado.",
        diesel: "Para proyectos sin red de gas estable y con suministro de combustible conforme."
      },
      tierText: {
        eco: "Configuración práctica y esencial para el repintado diario.",
        plus: "Estructura, ventilación e iluminación mejoradas para mayor productividad.",
        pro: "Especificación superior para uso frecuente y talleres profesionales."
      },
      labels: { wall: "Paneles", base: "Base y suelo", air: "Impulsión y extracción", heat: "Calefacción", light: "Iluminación", control: "Control" },
      dimensions: "Dimensiones estándar",
      internal: "Interior",
      external: "Exterior",
      technicalNote: "Las especificaciones finales están sujetas al acuerdo técnico confirmado por ambas partes.",
      standardsEyebrow: "ESTÁNDARES DE INGENIERÍA DE LA SERIE",
      standardsTitle: "Diseñada para el repintado profesional",
      standardsIntro: "La serie GBT-SB6900 integra flujo de aire, filtración, iluminación, seguridad y facilidad de mantenimiento.",
      standardItems: [
        ["Espacio de trabajo", "Dimensiones interiores estándar: 6.900 × 3.900 × 2.600 mm"],
        ["Acceso del vehículo", "Puerta frontal de tres hojas y puerta de servicio separada"],
        ["Filtración", "Prefiltro de entrada, filtro de techo y filtro de suelo"],
        ["Seguridad eléctrica", "Protección contra fugas, pérdida de fase, cortocircuito, sobrecarga y sobretemperatura"],
        ["Iluminación", "LED de alta intensidad según el nivel de configuración"],
        ["Adaptación al proyecto", "Tensión, extracción e interfaces del sitio confirmadas para cada proyecto"]
      ],
      contactEyebrow: "SOPORTE INTERNACIONAL DE PROYECTOS GUBOT",
      contactTitle: "Elija la cabina adecuada para su taller",
      contactText: "Indíquenos el país y la ciudad, el tipo de vehículo, la calefacción preferida, la alimentación disponible y las dimensiones del sitio.",
      contactButton: "Contactar con GUBOT",
      whatsappButton: "Hablar por WhatsApp",
      websiteButton: "Volver a productos",
      contactFooter: "Shanghai Gubot Automobile Technology Co., Ltd.",
      photoCaption: "Imagen de presentación de la gama",
      whatsappText: "Hola, quisiera saber más sobre la serie de cabinas GBT-SB6900."
    },
    it: {
      htmlLang: "it",
      language: "Lingua",
      previous: "Precedente",
      next: "Successivo",
      hint: "Usa le frecce o scorri per cambiare pagina",
      introEyebrow: "GUBOT · SISTEMI DI VERNICIATURA AUTOMOTIVE",
      introTitle: "Catalogo cabine di verniciatura 2026",
      introSeries: "Elettrico · Gas naturale · Diesel",
      coverEyebrow: "GUBOT SISTEMI DI VERNICIATURA AUTOMOTIVE | CATALOGO 2026",
      coverTitle: "Gamma cabine di verniciatura GUBOT",
      coverSubtitle: "Soluzioni professionali per la verniciatura e l’essiccazione dei veicoli",
      coverRange: "Elettrico · Gas naturale · Diesel | ECO · PLUS · PRO",
      coverButton: "Scopri la gamma",
      contentsEyebrow: "SERIE GBT-SB6900",
      contentsTitle: "Gamma prodotti",
      contentsIntro: "Tre sistemi di riscaldamento e nove modelli standard, pensati per le attività quotidiane e per le carrozzerie professionali ad alta produttività.",
      contentsFooter: "Dimensioni e configurazioni personalizzate disponibili in base alle esigenze del progetto.",
      electric: "Riscaldamento elettrico",
      naturalGas: "Riscaldamento a gas naturale",
      diesel: "Riscaldamento diesel",
      eco: "ECO · Standard",
      plus: "PLUS · Potenziata",
      pro: "PRO · Professionale",
      fuelText: {
        electric: "Per officine con capacità elettrica stabile e senza gestione del combustibile in loco.",
        naturalGas: "Per carrozzerie professionali con una fornitura di gas naturale adeguata.",
        diesel: "Per progetti senza rete del gas stabile e con approvvigionamento conforme."
      },
      tierText: {
        eco: "Configurazione pratica ed essenziale per il lavoro quotidiano.",
        plus: "Struttura, ventilazione e illuminazione potenziate per una maggiore produttività.",
        pro: "Specifiche superiori per uso frequente e carrozzerie professionali."
      },
      labels: { wall: "Pareti", base: "Basamento e pavimento", air: "Mandata ed espulsione", heat: "Riscaldamento", light: "Illuminazione", control: "Controllo" },
      dimensions: "Dimensioni standard",
      internal: "Interne",
      external: "Esterne",
      technicalNote: "Le specifiche finali sono soggette all’accordo tecnico confermato da entrambe le parti.",
      standardsEyebrow: "STANDARD TECNICI DELLA GAMMA",
      standardsTitle: "Progettata per la verniciatura professionale",
      standardsIntro: "La serie GBT-SB6900 integra ventilazione, filtrazione, illuminazione, controlli di sicurezza e facilità di manutenzione.",
      standardItems: [
        ["Spazio di lavoro", "Dimensioni interne standard: 6.900 × 3.900 × 2.600 mm"],
        ["Accesso veicolo", "Portone frontale a tre ante e porta di servizio separata"],
        ["Filtrazione", "Prefiltro in ingresso, filtro a soffitto e filtro a pavimento"],
        ["Sicurezza elettrica", "Protezione da dispersione, mancanza fase, cortocircuito, sovraccarico e sovratemperatura"],
        ["Illuminazione", "LED ad alta intensità secondo il livello di configurazione"],
        ["Adattamento progetto", "Tensione, espulsione e interfacce del sito confermate per ogni progetto"]
      ],
      contactEyebrow: "SUPPORTO PROGETTI INTERNAZIONALI GUBOT",
      contactTitle: "Scegli la cabina giusta per la tua officina",
      contactText: "Comunica Paese e città, tipo di veicolo, riscaldamento preferito, alimentazione disponibile e dimensioni del sito.",
      contactButton: "Contatta GUBOT",
      whatsappButton: "Parla su WhatsApp",
      websiteButton: "Torna ai prodotti",
      contactFooter: "Shanghai Gubot Automobile Technology Co., Ltd.",
      photoCaption: "Immagine di presentazione della gamma",
      whatsappText: "Salve, vorrei maggiori informazioni sulla serie di cabine GBT-SB6900."
    },
    de: {
      htmlLang: "de",
      language: "Sprache",
      previous: "Zurück",
      next: "Weiter",
      hint: "Mit Pfeiltasten oder Wischen blättern",
      introEyebrow: "GUBOT · PROFESSIONELLE FAHRZEUGLACKIERTECHNIK",
      introTitle: "Lackierkabinen-Katalog 2026",
      introSeries: "Elektro · Erdgas · Diesel",
      coverEyebrow: "GUBOT PROFESSIONELLE FAHRZEUGLACKIERTECHNIK | KATALOG 2026",
      coverTitle: "GUBOT Lackier- und Trockenkabinen",
      coverSubtitle: "Professionelle Lösungen für Fahrzeuglackierung und -trocknung",
      coverRange: "Elektro · Erdgas · Diesel | ECO · PLUS · PRO",
      coverButton: "Baureihe entdecken",
      contentsEyebrow: "BAUREIHE GBT-SB6900",
      contentsTitle: "Produktübersicht",
      contentsIntro: "Drei Heizsysteme und neun Standardmodelle – für Anwendungen vom täglichen Reparaturlackieren bis zum professionellen Hochdurchsatzbetrieb.",
      contentsFooter: "Sonderabmessungen und projektspezifische Konfigurationen sind auf Anfrage erhältlich.",
      electric: "Elektroheizung",
      naturalGas: "Erdgasheizung",
      diesel: "Dieselheizung",
      eco: "ECO · Standard",
      plus: "PLUS · Erweitert",
      pro: "PRO · Professionell",
      fuelText: {
        electric: "Für Werkstätten mit stabiler Stromversorgung ohne Kraftstoffhandling vor Ort.",
        naturalGas: "Für professionelle Betriebe mit geeigneter Erdgasversorgung.",
        diesel: "Für Projekte ohne stabile Gasleitung und mit vorschriftsmäßiger Kraftstoffversorgung."
      },
      tierText: {
        eco: "Eine praxisgerechte Grundausstattung für tägliche Lackierarbeiten.",
        plus: "Verstärkte Struktur, Lüftung und Beleuchtung für höhere Produktivität.",
        pro: "Höhere Spezifikation für häufigen Einsatz und professionelle Betriebe."
      },
      labels: { wall: "Kabinenwände", base: "Unterbau und Boden", air: "Zu- und Abluft", heat: "Heizsystem", light: "Beleuchtung", control: "Steuerung" },
      dimensions: "Standardabmessungen",
      internal: "Innen",
      external: "Außen",
      technicalNote: "Die endgültigen Spezifikationen richten sich nach der beiderseits bestätigten technischen Vereinbarung.",
      standardsEyebrow: "TECHNISCHE STANDARDS DER BAUREIHE",
      standardsTitle: "Für professionelle Lackierarbeiten entwickelt",
      standardsIntro: "Die Baureihe GBT-SB6900 verbindet Luftführung, Filterung, Beleuchtung, Sicherheitssteuerung und Wartungszugang.",
      standardItems: [
        ["Arbeitsraum", "Standard-Innenmaß: 6.900 × 3.900 × 2.600 mm"],
        ["Fahrzeugzugang", "Dreiflügeliges Fronttor und separate Personaltür"],
        ["Luftfilterung", "Vorfilter, Deckenfilter und Bodenfilter"],
        ["Elektrische Sicherheit", "Schutz gegen Fehlerstrom, Phasenausfall, Kurzschluss, Überlast und Übertemperatur"],
        ["Beleuchtung", "Leistungsstarke LED-Beleuchtung je nach Ausstattungsstufe"],
        ["Projektanpassung", "Spannung, Abluftführung und Standort-Schnittstellen werden projektbezogen bestätigt"]
      ],
      contactEyebrow: "INTERNATIONALE PROJEKTUNTERSTÜTZUNG VON GUBOT",
      contactTitle: "Die passende Lackierkabine für Ihre Werkstatt",
      contactText: "Nennen Sie uns Installationsland und -ort, Fahrzeugtyp, bevorzugte Heizung, verfügbare Stromversorgung und Standortabmessungen.",
      contactButton: "GUBOT kontaktieren",
      whatsappButton: "Über WhatsApp sprechen",
      websiteButton: "Zurück zu den Produkten",
      contactFooter: "Shanghai Gubot Automobile Technology Co., Ltd.",
      photoCaption: "Produktbild zur Darstellung der Baureihe",
      whatsappText: "Guten Tag, ich möchte mehr über die Lackierkabinen der Baureihe GBT-SB6900 erfahren."
    }
  };

  var terms = {
    zh: {
      eps: "50 mm EPS夹芯板 · 0.4 mm · 12 kg/m³",
      rock: "50 mm 岩棉板",
      rock04: "50 mm 岩棉板 · 0.4 mm",
      rock05: "50 mm 岩棉板 · 0.5 mm",
      rockPro: "50 mm 岩棉板 · 0.5 mm · 100 kg/m³",
      galvanized: "300 mm 镀锌折弯支架 · 4×30 镀锌格栅",
      channel: "12#槽钢底台 · 5×30 镀锌格栅",
      channelPro: "12#槽钢底台 · 5排 5×30 镀锌格栅",
      fixedIr: "8×3 kW 固定红外线 · 24 kW",
      doorIr: "带保护门红外线 · 约24 kW",
      radiant: "高效辐射加热组件 · 按项目确认",
      gas201: "FS20天然气燃烧器 · 201不锈钢换热器 1.5 mm",
      gas201Plus: "FS20天然气燃烧器 · 201不锈钢换热器 2.0 mm",
      gas304: "FS20天然气燃烧器 · 304不锈钢换热器 2.0 mm",
      dieselEco: "G10柴油燃烧器 · 100,000 kcal",
      diesel201: "G20级柴油燃烧器 · 201不锈钢换热器 2.0 mm",
      diesel304: "G20级柴油燃烧器 · 304不锈钢换热器 2.0 mm",
      ceiling32: "32×24 W 顶部LED",
      ceilingWaist: "32组顶部LED + 16组腰灯LED",
      proLight: "10组顶部LED + 8组腰灯LED",
      vfd: "变频控制",
      linkedVfd: "送排风变频联动",
      gasAlarm: "可燃气体报警",
      gasProControl: "可燃气体报警 · 气动喷/烤切换",
      glassVfd: "大视窗玻璃门 · 变频联动",
      projectControl: "控制配置按项目确认"
    },
    en: {
      eps: "50 mm EPS panel · 0.4 mm · 12 kg/m³",
      rock: "50 mm rock-wool panel",
      rock04: "50 mm rock-wool panel · 0.4 mm",
      rock05: "50 mm rock-wool panel · 0.5 mm",
      rockPro: "50 mm rock-wool panel · 0.5 mm · 100 kg/m³",
      galvanized: "300 mm galvanized support · 4×30 galvanized grating",
      channel: "No. 12 channel-steel base · 5×30 galvanized grating",
      channelPro: "No. 12 channel-steel base · five rows of 5×30 grating",
      fixedIr: "8×3 kW fixed infrared heating · 24 kW",
      doorIr: "Infrared heating with protective doors · approx. 24 kW",
      radiant: "High-efficiency radiant heating · project-specific",
      gas201: "FS20 natural-gas burner · 201 stainless heat exchanger, 1.5 mm",
      gas201Plus: "FS20 natural-gas burner · 201 stainless heat exchanger, 2.0 mm",
      gas304: "FS20 natural-gas burner · 304 stainless heat exchanger, 2.0 mm",
      dieselEco: "G10 diesel burner · 100,000 kcal",
      diesel201: "G20-class diesel burner · 201 stainless heat exchanger, 2.0 mm",
      diesel304: "G20-class diesel burner · 304 stainless heat exchanger, 2.0 mm",
      ceiling32: "32×24 W ceiling LED",
      ceilingWaist: "32 ceiling LED sets + 16 waist-light sets",
      proLight: "10 ceiling LED sets + 8 waist-light sets",
      vfd: "Variable-frequency control",
      linkedVfd: "Linked supply/exhaust VFD control",
      gasAlarm: "Combustible-gas alarm",
      gasProControl: "Combustible-gas alarm · pneumatic spray/bake switching",
      glassVfd: "Large-view glazed door · linked VFD control",
      projectControl: "Controls confirmed for the project"
    },
    fr: {
      eps: "Panneau EPS 50 mm · 0,4 mm · 12 kg/m³",
      rock: "Panneau laine de roche 50 mm",
      rock04: "Panneau laine de roche 50 mm · 0,4 mm",
      rock05: "Panneau laine de roche 50 mm · 0,5 mm",
      rockPro: "Panneau laine de roche 50 mm · 0,5 mm · 100 kg/m³",
      galvanized: "Support galvanisé 300 mm · caillebotis galvanisé 4×30",
      channel: "Base en profilé U n°12 · caillebotis galvanisé 5×30",
      channelPro: "Base en profilé U n°12 · cinq rangées de caillebotis 5×30",
      fixedIr: "8×3 kW infrarouge fixe · 24 kW",
      doorIr: "Infrarouge avec capots de protection · env. 24 kW",
      radiant: "Chauffage rayonnant haute efficacité · selon projet",
      gas201: "Brûleur gaz naturel FS20 · échangeur inox 201, 1,5 mm",
      gas201Plus: "Brûleur gaz naturel FS20 · échangeur inox 201, 2,0 mm",
      gas304: "Brûleur gaz naturel FS20 · échangeur inox 304, 2,0 mm",
      dieselEco: "Brûleur diesel G10 · 100 000 kcal",
      diesel201: "Brûleur diesel classe G20 · échangeur inox 201, 2,0 mm",
      diesel304: "Brûleur diesel classe G20 · échangeur inox 304, 2,0 mm",
      ceiling32: "32×24 W LED plafond",
      ceilingWaist: "32 ensembles LED plafond + 16 ensembles LED latérales",
      proLight: "10 ensembles LED plafond + 8 ensembles LED latérales",
      vfd: "Commande par variateur",
      linkedVfd: "Variateurs soufflage/extraction synchronisés",
      gasAlarm: "Détecteur de gaz combustible",
      gasProControl: "Détecteur de gaz · commutation pneumatique pulvérisation/étuvage",
      glassVfd: "Porte vitrée grand format · variateurs synchronisés",
      projectControl: "Commande confirmée selon le projet"
    },
    es: {
      eps: "Panel EPS de 50 mm · 0,4 mm · 12 kg/m³",
      rock: "Panel de lana de roca de 50 mm",
      rock04: "Panel de lana de roca de 50 mm · 0,4 mm",
      rock05: "Panel de lana de roca de 50 mm · 0,5 mm",
      rockPro: "Panel de lana de roca de 50 mm · 0,5 mm · 100 kg/m³",
      galvanized: "Soporte galvanizado de 300 mm · rejilla galvanizada 4×30",
      channel: "Base de acero canal n.º 12 · rejilla galvanizada 5×30",
      channelPro: "Base de acero canal n.º 12 · cinco filas de rejilla 5×30",
      fixedIr: "8×3 kW infrarrojo fijo · 24 kW",
      doorIr: "Infrarrojo con tapas de protección · aprox. 24 kW",
      radiant: "Calefacción radiante de alta eficiencia · según proyecto",
      gas201: "Quemador de gas FS20 · intercambiador inox 201, 1,5 mm",
      gas201Plus: "Quemador de gas FS20 · intercambiador inox 201, 2,0 mm",
      gas304: "Quemador de gas FS20 · intercambiador inox 304, 2,0 mm",
      dieselEco: "Quemador diésel G10 · 100.000 kcal",
      diesel201: "Quemador diésel clase G20 · intercambiador inox 201, 2,0 mm",
      diesel304: "Quemador diésel clase G20 · intercambiador inox 304, 2,0 mm",
      ceiling32: "32×24 W LED de techo",
      ceilingWaist: "32 conjuntos LED de techo + 16 conjuntos LED laterales",
      proLight: "10 conjuntos LED de techo + 8 conjuntos LED laterales",
      vfd: "Control por variador",
      linkedVfd: "Variadores coordinados de impulsión/extracción",
      gasAlarm: "Alarma de gas combustible",
      gasProControl: "Alarma de gas · selector neumático pintura/secado",
      glassVfd: "Puerta acristalada panorámica · variadores coordinados",
      projectControl: "Control confirmado según el proyecto"
    },
    it: {
      eps: "Pannello EPS 50 mm · 0,4 mm · 12 kg/m³",
      rock: "Pannello in lana di roccia 50 mm",
      rock04: "Pannello in lana di roccia 50 mm · 0,4 mm",
      rock05: "Pannello in lana di roccia 50 mm · 0,5 mm",
      rockPro: "Pannello in lana di roccia 50 mm · 0,5 mm · 100 kg/m³",
      galvanized: "Supporto zincato 300 mm · grigliato zincato 4×30",
      channel: "Base in profilato n. 12 · grigliato zincato 5×30",
      channelPro: "Base in profilato n. 12 · cinque file di grigliato 5×30",
      fixedIr: "8×3 kW infrarosso fisso · 24 kW",
      doorIr: "Infrarosso con protezioni · circa 24 kW",
      radiant: "Riscaldamento radiante ad alta efficienza · su progetto",
      gas201: "Bruciatore a gas FS20 · scambiatore inox 201, 1,5 mm",
      gas201Plus: "Bruciatore a gas FS20 · scambiatore inox 201, 2,0 mm",
      gas304: "Bruciatore a gas FS20 · scambiatore inox 304, 2,0 mm",
      dieselEco: "Bruciatore diesel G10 · 100.000 kcal",
      diesel201: "Bruciatore diesel classe G20 · scambiatore inox 201, 2,0 mm",
      diesel304: "Bruciatore diesel classe G20 · scambiatore inox 304, 2,0 mm",
      ceiling32: "32×24 W LED a soffitto",
      ceilingWaist: "32 set LED a soffitto + 16 set LED laterali",
      proLight: "10 set LED a soffitto + 8 set LED laterali",
      vfd: "Controllo inverter",
      linkedVfd: "Controllo inverter coordinato mandata/espulsione",
      gasAlarm: "Allarme gas combustibile",
      gasProControl: "Allarme gas · commutazione pneumatica verniciatura/essiccazione",
      glassVfd: "Portone vetrato panoramico · inverter coordinati",
      projectControl: "Controllo confermato per il progetto"
    },
    de: {
      eps: "50-mm-EPS-Paneel · 0,4 mm · 12 kg/m³",
      rock: "50-mm-Steinwollpaneel",
      rock04: "50-mm-Steinwollpaneel · 0,4 mm",
      rock05: "50-mm-Steinwollpaneel · 0,5 mm",
      rockPro: "50-mm-Steinwollpaneel · 0,5 mm · 100 kg/m³",
      galvanized: "300 mm verzinkter Unterbau · verzinkter Gitterrost 4×30",
      channel: "Unterbau aus U-Profil Nr. 12 · verzinkter Gitterrost 5×30",
      channelPro: "Unterbau aus U-Profil Nr. 12 · fünf Reihen Gitterrost 5×30",
      fixedIr: "8×3 kW festes Infrarotsystem · 24 kW",
      doorIr: "Infrarot mit Schutzklappen · ca. 24 kW",
      radiant: "Hocheffiziente Strahlungsheizung · projektbezogen",
      gas201: "FS20-Erdgasbrenner · Wärmetauscher Edelstahl 201, 1,5 mm",
      gas201Plus: "FS20-Erdgasbrenner · Wärmetauscher Edelstahl 201, 2,0 mm",
      gas304: "FS20-Erdgasbrenner · Wärmetauscher Edelstahl 304, 2,0 mm",
      dieselEco: "G10-Dieselbrenner · 100.000 kcal",
      diesel201: "Dieselbrenner G20-Klasse · Wärmetauscher Edelstahl 201, 2,0 mm",
      diesel304: "Dieselbrenner G20-Klasse · Wärmetauscher Edelstahl 304, 2,0 mm",
      ceiling32: "32×24 W Decken-LED",
      ceilingWaist: "32 Decken-LED-Sätze + 16 Seiten-LED-Sätze",
      proLight: "10 Decken-LED-Sätze + 8 Seiten-LED-Sätze",
      vfd: "Frequenzregelung",
      linkedVfd: "Gekoppelte Frequenzregelung für Zu-/Abluft",
      gasAlarm: "Brenngaswarnanlage",
      gasProControl: "Brenngaswarnanlage · pneumatische Spritz-/Trocknungsumschaltung",
      glassVfd: "Großflächiges Glastor · gekoppelte Frequenzregelung",
      projectControl: "Steuerung projektbezogen bestätigt"
    }
  };

  function buildModels(locale) {
    var c = copy[locale];
    var t = terms[locale];
    return [
      { code: "GBT-SB6900-E-ECO", fuel: "electric", tier: "eco", image: "assets/booth-white-20260712.webp", specs: [["wall", t.eps], ["base", t.galvanized], ["air", "2×3 kW + 1×4 kW"], ["heat", t.fixedIr], ["light", t.ceiling32]] },
      { code: "GBT-SB6900-E-PLUS", fuel: "electric", tier: "plus", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock05], ["base", t.channel], ["air", "2×3 kW + 1×5.5 kW"], ["heat", t.doorIr], ["control", t.vfd]] },
      { code: "GBT-SB6900-E-PRO", fuel: "electric", tier: "pro", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock], ["base", t.channelPro], ["heat", t.radiant], ["control", t.glassVfd], ["light", t.proLight]] },
      { code: "GBT-SB6900-NG-ECO", fuel: "naturalGas", tier: "eco", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock04], ["base", t.galvanized], ["air", "2×3 kW + 1×5.5 kW"], ["heat", t.gas201], ["control", t.gasAlarm]] },
      { code: "GBT-SB6900-NG-PLUS", fuel: "naturalGas", tier: "plus", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock05], ["base", t.channel], ["air", "2×3 kW + 1×5.5 kW · " + t.vfd], ["heat", t.gas201Plus], ["light", t.ceilingWaist]] },
      { code: "GBT-SB6900-NG-PRO", fuel: "naturalGas", tier: "pro", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rockPro], ["base", t.channel], ["air", "2×3 kW + 1×5.5 kW · " + t.linkedVfd], ["heat", t.gas304], ["control", t.gasProControl]] },
      { code: "GBT-SB6900-D-ECO", fuel: "diesel", tier: "eco", image: "assets/booth-white-20260712.webp", specs: [["wall", t.eps], ["base", t.galvanized], ["air", "2×3 kW + 1×5.5 kW"], ["heat", t.dieselEco], ["light", t.ceilingWaist]] },
      { code: "GBT-SB6900-D-PLUS", fuel: "diesel", tier: "plus", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock05], ["base", t.channel], ["air", "1×5.5 kW · " + t.vfd], ["heat", t.diesel201], ["control", t.projectControl]] },
      { code: "GBT-SB6900-D-PRO", fuel: "diesel", tier: "pro", image: "assets/booth-white-20260712.webp", specs: [["wall", t.rock], ["base", t.channelPro], ["air", t.linkedVfd], ["heat", t.diesel304], ["control", t.glassVfd]] }
    ].map(function (model) {
      model.fuelName = c[model.fuel];
      model.tierName = c[model.tier];
      model.description = c.fuelText[model.fuel] + " " + c.tierText[model.tier];
      model.external = model.fuel === "electric" ? "7000 × 5000 × 3250 mm" : "7000 × 5100 × 3250 mm";
      return model;
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getTranslateLanguage() {
    var match = document.cookie.split("; ").find(function (item) { return item.indexOf("googtrans=") === 0; });
    if (!match) return "";
    var parts = decodeURIComponent(match.split("=")[1] || "").split("/");
    return parts[2] === "zh-CN" ? "zh" : (parts[2] || "");
  }

  function setSiteLanguage(locale) {
    var expires = "Fri, 31 Dec 9999 23:59:59 GMT";
    var code = locale === "zh" ? "zh-CN" : locale;
    var host = window.location.hostname;
    if (locale === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      if (host) document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + host;
      return;
    }
    var value = "/en/" + code;
    document.cookie = "googtrans=" + value + "; expires=" + expires + "; path=/";
    if (host) document.cookie = "googtrans=" + value + "; expires=" + expires + "; path=/; domain=" + host;
  }

  var book = document.getElementById("catalogBook");
  var previousButton = document.getElementById("catalogPrev");
  var nextButton = document.getElementById("catalogNext");
  var counter = document.getElementById("catalogCounter");
  var languageSelect = document.getElementById("catalogLanguage");
  if (!book || !previousButton || !nextButton || !counter || !languageSelect) return;

  var params = new URLSearchParams(window.location.search);
  var requestedLocale = params.get("lang");
  var cookieLocale = getTranslateLanguage();
  var locale = supportedLocales.indexOf(requestedLocale) >= 0 ? requestedLocale : (supportedLocales.indexOf(cookieLocale) >= 0 ? cookieLocale : "en");
  var requestedPage = parseInt(params.get("page"), 10);
  var currentPage = Number.isFinite(requestedPage) ? Math.max(0, Math.min(TOTAL_PAGES - 1, requestedPage - 1)) : 0;
  var isAnimating = false;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep the surrounding website chrome in the same language as a shared catalog link.
  // The catalog itself is protected by translate="no" and uses reviewed human translations.
  setSiteLanguage(locale);

  function pageShell(classes, inner) {
    var article = document.createElement("article");
    article.className = "catalog-sheet " + classes;
    article.setAttribute("aria-label", String(currentPage + 1) + " / " + String(TOTAL_PAGES));
    article.innerHTML = inner;
    return article;
  }

  function buildCover(c) {
    return pageShell("catalog-cover", [
      '<img class="catalog-cover__image" src="assets/booth-white-20260712.webp" alt="Gubot professional automotive spray booth">',
      '<div class="catalog-cover__overlay"></div>',
      '<div class="catalog-cover__content">',
        '<p class="catalog-cover__eyebrow">' + escapeHtml(c.coverEyebrow) + '</p>',
        '<h2>' + escapeHtml(c.coverTitle) + '</h2>',
        '<p class="catalog-cover__subtitle">' + escapeHtml(c.coverSubtitle) + '</p>',
        '<p class="catalog-cover__range">' + escapeHtml(c.coverRange) + '</p>',
        '<button class="catalog-cover__button" type="button" data-page="2">' + escapeHtml(c.coverButton) + ' <span aria-hidden="true">→</span></button>',
      '</div>',
      '<div class="catalog-cover__footer"><span>GUBOT</span><span>GBT-SB6900</span><span>2026</span></div>'
    ].join(""));
  }

  function modelLink(model, pageNumber) {
    return '<button class="catalog-index__model" type="button" data-page="' + pageNumber + '"><span>' + escapeHtml(model.tierName.split("·")[0].trim()) + '</span><strong>' + escapeHtml(model.code) + '</strong></button>';
  }

  function buildContents(c, models) {
    var groups = [
      ["electric", c.electric, models.slice(0, 3), 3],
      ["naturalGas", c.naturalGas, models.slice(3, 6), 6],
      ["diesel", c.diesel, models.slice(6, 9), 9]
    ];
    var groupHtml = groups.map(function (group) {
      return '<section class="catalog-index__group catalog-index__group--' + group[0] + '"><h3>' + escapeHtml(group[1]) + '</h3><div>' + group[2].map(function (model, index) { return modelLink(model, group[3] + index); }).join("") + '</div></section>';
    }).join("");
    return pageShell("catalog-contents", [
      '<div class="catalog-contents__main">',
        '<p class="catalog-sheet__kicker">' + escapeHtml(c.contentsEyebrow) + '</p>',
        '<h2 class="catalog-sheet__title">' + escapeHtml(c.contentsTitle) + '</h2>',
        '<p class="catalog-contents__intro">' + escapeHtml(c.contentsIntro) + '</p>',
        '<div class="catalog-index">' + groupHtml + '</div>',
        '<p class="catalog-contents__footer">' + escapeHtml(c.contentsFooter) + '</p>',
      '</div>',
      '<div class="catalog-contents__visual"><img src="assets/booth-white-20260712.webp" alt="Gubot professional automotive spray booth"><span>GBT-SB6900</span></div>'
    ].join(""));
  }

  function buildProduct(c, model) {
    var specs = model.specs.map(function (spec) {
      return '<div class="catalog-spec"><dt>' + escapeHtml(c.labels[spec[0]]) + '</dt><dd>' + escapeHtml(spec[1]) + '</dd></div>';
    }).join("");
    return pageShell("catalog-product-page catalog-product-page--" + model.fuel, [
      '<div class="catalog-sheet__media catalog-product__media">',
        '<img src="' + model.image + '" alt="' + escapeHtml(model.fuelName + " " + model.code) + '">',
        '<div class="catalog-product__photo-label"><span>' + escapeHtml(model.fuelName) + '</span><small>' + escapeHtml(c.photoCaption) + '</small></div>',
      '</div>',
      '<div class="catalog-sheet__content catalog-product__content">',
        '<header class="catalog-product__header">',
          '<p class="catalog-sheet__kicker">' + escapeHtml(model.fuelName) + ' · ' + escapeHtml(model.tierName) + '</p>',
          '<h2 class="catalog-sheet__title">' + escapeHtml(model.tierName) + '</h2>',
          '<span class="catalog-sheet__model">' + escapeHtml(model.code) + '</span>',
          '<p class="catalog-product__description">' + escapeHtml(model.description) + '</p>',
        '</header>',
        '<dl class="catalog-specs">' + specs + '</dl>',
        '<div class="catalog-dimensions"><strong>' + escapeHtml(c.dimensions) + '</strong><span>' + escapeHtml(c.internal) + ' 6900 × 3900 × 2600 mm</span><span>' + escapeHtml(c.external) + ' ' + escapeHtml(model.external) + '</span></div>',
        '<p class="catalog-technical-note">' + escapeHtml(c.technicalNote) + '</p>',
      '</div>'
    ].join(""));
  }

  function buildStandards(c) {
    var items = c.standardItems.map(function (item, index) {
      return '<li><span>' + String(index + 1).padStart(2, "0") + '</span><div><strong>' + escapeHtml(item[0]) + '</strong><p>' + escapeHtml(item[1]) + '</p></div></li>';
    }).join("");
    return pageShell("catalog-standards", [
      '<div class="catalog-standards__visual"><img src="assets/booth-white-20260712.webp" alt="Gubot professional automotive spray booth"><div><span>GBT-SB6900</span><strong>ECO · PLUS · PRO</strong></div></div>',
      '<div class="catalog-standards__content">',
        '<p class="catalog-sheet__kicker">' + escapeHtml(c.standardsEyebrow) + '</p>',
        '<h2 class="catalog-sheet__title">' + escapeHtml(c.standardsTitle) + '</h2>',
        '<p class="catalog-standards__intro">' + escapeHtml(c.standardsIntro) + '</p>',
        '<ol class="catalog-standards__list">' + items + '</ol>',
        '<p class="catalog-technical-note">' + escapeHtml(c.technicalNote) + '</p>',
      '</div>'
    ].join(""));
  }

  function buildContact(c) {
    var whatsappHref = "https://api.whatsapp.com/send?phone=8613386039948&text=" + encodeURIComponent(c.whatsappText);
    return pageShell("catalog-contact-page", [
      '<img class="catalog-contact-page__image" src="assets/booth-white-20260712.webp" alt="Gubot professional automotive spray booth">',
      '<div class="catalog-contact-page__overlay"></div>',
      '<div class="catalog-contact-page__content">',
        '<p class="catalog-sheet__kicker">' + escapeHtml(c.contactEyebrow) + '</p>',
        '<h2>' + escapeHtml(c.contactTitle) + '</h2>',
        '<p class="catalog-contact-page__text">' + escapeHtml(c.contactText) + '</p>',
        '<div class="catalog-contact-page__actions">',
          '<a class="catalog-contact-page__button catalog-contact-page__button--primary" href="mailto:contact@gubotspraybooth.com">' + escapeHtml(c.contactButton) + '</a>',
          '<a class="catalog-contact-page__button" href="' + escapeHtml(whatsappHref) + '">' + escapeHtml(c.whatsappButton) + '</a>',
          '<a class="catalog-contact-page__link" href="../product.html">' + escapeHtml(c.websiteButton) + ' →</a>',
        '</div>',
        '<div class="catalog-contact-page__details"><a href="mailto:contact@gubotspraybooth.com">contact@gubotspraybooth.com</a><a href="tel:+8613386039948">+86 133 8603 9948</a><span>www.gubotspraybooth.com</span></div>',
      '</div>',
      '<div class="catalog-contact-page__footer"><span>GUBOT</span><span>' + escapeHtml(c.contactFooter) + '</span></div>'
    ].join(""));
  }

  function buildPage(index) {
    var c = copy[locale];
    var models = buildModels(locale);
    if (index === 0) return buildCover(c);
    if (index === 1) return buildContents(c, models);
    if (index >= 2 && index <= 10) return buildProduct(c, models[index - 2]);
    if (index === 11) return buildStandards(c);
    return buildContact(c);
  }

  function updateUrl() {
    var url = new URL(window.location.href);
    var cleanPath = url.pathname.replace(/\/+$/, "") || "/catalog";

    // Keep the cover URL short and presentation-ready, regardless of language.
    if (currentPage === 0) {
      window.history.replaceState({ page: 1, lang: locale }, "", cleanPath);
      return;
    }

    url.searchParams.set("lang", locale);
    url.searchParams.set("page", String(currentPage + 1));
    window.history.replaceState({ page: currentPage + 1, lang: locale }, "", cleanPath + url.search + url.hash);
  }

  function updateInterface() {
    var c = copy[locale];
    document.documentElement.lang = c.htmlLang;
    document.title = c.introTitle + " | Gubot";
    languageSelect.value = locale;
    var introEyebrow = document.querySelector(".catalog-intro__eyebrow");
    var introTitle = document.querySelector(".catalog-intro h1");
    var introSeries = document.querySelector(".catalog-intro__series");
    var languageLabel = document.querySelector(".catalog-language__label");
    var hint = document.querySelector(".catalog-status__hint");
    if (introEyebrow) introEyebrow.textContent = c.introEyebrow;
    if (introTitle) introTitle.textContent = c.introTitle;
    if (introSeries) introSeries.textContent = c.introSeries;
    if (languageLabel) languageLabel.innerHTML = '<i class="fa-solid fa-globe" aria-hidden="true"></i> ' + escapeHtml(c.language);
    previousButton.querySelector("span").textContent = c.previous;
    nextButton.querySelector("span").textContent = c.next;
    previousButton.setAttribute("aria-label", c.previous);
    nextButton.setAttribute("aria-label", c.next);
    if (hint) hint.innerHTML = '<i class="fa-solid fa-arrows-left-right" aria-hidden="true"></i> ' + escapeHtml(c.hint);
    previousButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === TOTAL_PAGES - 1;
    counter.textContent = String(currentPage + 1).padStart(2, "0") + " / " + String(TOTAL_PAGES).padStart(2, "0");
  }

  function render(index, direction, animate) {
    if (isAnimating || index < 0 || index >= TOTAL_PAGES) return;
    var oldPage = book.querySelector(".catalog-sheet.is-active");
    currentPage = index;
    var newPage = buildPage(index);
    updateInterface();
    updateUrl();

    if (!oldPage || !animate || direction === 0 || reduceMotion) {
      book.replaceChildren(newPage);
      newPage.classList.add("is-active");
      return;
    }

    isAnimating = true;
    newPage.classList.add(direction > 0 ? "is-entering-next" : "is-entering-prev");
    book.appendChild(newPage);
    oldPage.classList.remove("is-active");
    oldPage.classList.add(direction > 0 ? "is-exiting-next" : "is-exiting-prev");

    window.setTimeout(function () {
      oldPage.remove();
      newPage.classList.remove("is-entering-next", "is-entering-prev");
      newPage.classList.add("is-active");
      isAnimating = false;
    }, TURN_DURATION + 40);
  }

  function goTo(index) {
    if (index === currentPage) return;
    render(index, index > currentPage ? 1 : -1, true);
  }

  previousButton.addEventListener("click", function () { goTo(currentPage - 1); });
  nextButton.addEventListener("click", function () { goTo(currentPage + 1); });

  languageSelect.addEventListener("change", function () {
    if (supportedLocales.indexOf(languageSelect.value) < 0) return;
    locale = languageSelect.value;
    setSiteLanguage(locale);
    render(currentPage, 0, false);
  });

  book.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-page]");
    if (!trigger) return;
    var page = parseInt(trigger.getAttribute("data-page"), 10);
    if (Number.isFinite(page)) goTo(page - 1);
  });

  document.addEventListener("keydown", function (event) {
    var tag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : "";
    if (tag === "select" || tag === "input" || tag === "textarea") return;
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goTo(currentPage + 1);
    } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goTo(currentPage - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(TOTAL_PAGES - 1);
    }
  });

  var pointerStart = null;
  book.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  });
  book.addEventListener("pointerup", function (event) {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    var dx = event.clientX - pointerStart.x;
    var dy = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) <= Math.abs(dy) * 1.15) return;
    if (dx < 0) goTo(currentPage + 1);
    else goTo(currentPage - 1);
  });
  book.addEventListener("pointercancel", function () { pointerStart = null; });

  window.addEventListener("popstate", function () {
    var nextParams = new URLSearchParams(window.location.search);
    var nextLocale = nextParams.get("lang");
    var nextPage = parseInt(nextParams.get("page"), 10);
    if (supportedLocales.indexOf(nextLocale) >= 0) locale = nextLocale;
    render(Number.isFinite(nextPage) ? Math.max(0, Math.min(TOTAL_PAGES - 1, nextPage - 1)) : 0, 0, false);
  });

  render(currentPage, 0, false);
})();
