(function () {
  const iconPaths = {
    "badge-dollar-sign": ['<circle cx="12" cy="12" r="9"/>', '<path d="M12 7v10"/>', '<path d="M9.6 9.3c.7-.8 4.3-.9 4.8.8.6 2.5-5.2 1.2-4.7 4 .4 1.8 4.1 1.7 4.9.5"/>'],
    "map-pin": ['<path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/>', '<circle cx="12" cy="10" r="2.4"/>'],
    "shield-check": ['<path d="M12 3 19 6v5c0 4.5-2.8 8.1-7 10-4.2-1.9-7-5.5-7-10V6l7-3Z"/>', '<path d="m9 12 2 2 4-5"/>'],
    "rotate-ccw": ['<path d="M3 12a9 9 0 1 0 3-6.7"/>', '<path d="M3 4v5h5"/>'],
    "briefcase-business": ['<rect x="3" y="7" width="18" height="13" rx="2"/>', '<path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"/>', '<path d="M3 12h18"/>'],
    "clipboard-list": ['<rect x="6" y="4" width="12" height="17" rx="2"/>', '<path d="M9 4a3 3 0 0 1 6 0"/>', '<path d="M9 11h6M9 15h6"/>'],
    "copy": ['<rect x="8" y="8" width="12" height="12" rx="2"/>', '<path d="M4 16V6a2 2 0 0 1 2-2h10"/>'],
    "printer": ['<path d="M7 8V4h10v4"/>', '<rect x="6" y="14" width="12" height="7" rx="1"/>', '<rect x="4" y="8" width="16" height="8" rx="2"/>'],
    "send": ['<path d="M22 2 11 13"/>', '<path d="m22 2-7 20-4-9-9-4 20-7Z"/>'],
    "receipt-text": ['<path d="M6 2h12v20l-3-2-3 2-3-2-3 2V2Z"/>', '<path d="M9 7h6M9 11h6M9 15h4"/>'],
    "check": ['<path d="m5 12 4 4L19 6"/>'],
    "link-2": ['<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/>', '<path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>'],
    "minus": ['<path d="M5 12h14"/>'],
    "plus": ['<path d="M12 5v14M5 12h14"/>'],
    "panels-top-left": ['<rect x="3" y="3" width="18" height="18" rx="2"/>', '<path d="M9 3v18M3 9h18"/>'],
    "wind": ['<path d="M4 8h10a2 2 0 1 0-2-2"/>', '<path d="M4 12h14a2 2 0 1 1-2 2"/>', '<path d="M4 16h7"/>'],
    "circuit-board": ['<rect x="4" y="4" width="16" height="16" rx="2"/>', '<path d="M9 4v4H4M15 20v-4h5M8 12h8M12 8v8"/>'],
    "paint-bucket": ['<path d="m7 3 10 10-5 5-8-8 3-7Z"/>', '<path d="m8 8 7 7M18 16s2 2 2 3a2 2 0 0 1-4 0c0-1 2-3 2-3Z"/>'],
    "circle": ['<circle cx="12" cy="12" r="9"/>']
  };

  function makeIcon(name, attrs) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', attrs.width || '24');
    svg.setAttribute('height', attrs.height || '24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', attrs.stroke || 'currentColor');
    svg.setAttribute('stroke-width', attrs['stroke-width'] || '1.8');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.classList.add('lucide', `lucide-${name}`);
    svg.innerHTML = (iconPaths[name] || iconPaths.circle).join('');
    return svg;
  }

  window.lucide = window.lucide || {
    createIcons(options = {}) {
      const attrs = options.attrs || {};
      document.querySelectorAll('i[data-lucide]').forEach((node) => {
        const name = node.getAttribute('data-lucide') || 'circle';
        const svg = makeIcon(name, attrs);
        Array.from(node.attributes).forEach((attr) => {
          if (attr.name !== 'data-lucide') svg.setAttribute(attr.name, attr.value);
        });
        node.replaceWith(svg);
      });
    }
  };
})();

const DATA = {"currency":"USD","wallPanels":[{"id":"eps04","label":{"en":"EPS 12 kg/m³ · 0.4 mm steel skins","zh":"EPS 12 kg/m³ · 0.4 mm彩钢板","fr":"EPS 12 kg/m³ · parements acier 0,4 mm","es":"EPS 12 kg/m³ · chapas de acero de 0,4 mm","it":"EPS 12 kg/m³ · lamiere d'acciaio da 0,4 mm","de":"EPS 12 kg/m³ · 0,4-mm-Stahlbleche"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":770},{"id":"eps05","label":{"en":"EPS 12 kg/m³ · 0.5 mm steel skins","zh":"EPS 12 kg/m³ · 0.5 mm彩钢板","fr":"EPS 12 kg/m³ · parements acier 0,5 mm","es":"EPS 12 kg/m³ · chapas de acero de 0,5 mm","it":"EPS 12 kg/m³ · lamiere d'acciaio da 0,5 mm","de":"EPS 12 kg/m³ · 0,5-mm-Stahlbleche"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":830},{"id":"rock04","label":{"en":"Rock wool · 0.4 mm steel skins","zh":"岩棉板 · 0.4 mm彩钢板","fr":"Laine de roche · parements acier 0,4 mm","es":"Lana de roca · chapas de acero de 0,4 mm","it":"Lana di roccia · lamiere d'acciaio da 0,4 mm","de":"Steinwolle · 0,4-mm-Stahlbleche"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":940},{"id":"rock05","label":{"en":"Rock wool · 0.5 mm steel skins","zh":"岩棉板 · 0.5 mm彩钢板","fr":"Laine de roche · parements acier 0,5 mm","es":"Lana de roca · chapas de acero de 0,5 mm","it":"Lana di roccia · lamiere d'acciaio da 0,5 mm","de":"Steinwolle · 0,5-mm-Stahlbleche"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":1020},{"id":"manual04","label":{"en":"Handmade purification panel · 0.4 mm","zh":"手工净化板 · 0.4 mm","fr":"Panneau de purification fabriqué à la main · 0,4 mm","es":"Panel de purificación manual · 0,4 mm","it":"Pannello di purificazione artigianale · 0,4 mm","de":"Handgefertigtes Reinraumpaneel · 0,4 mm"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":1060},{"id":"manual05","label":{"en":"Handmade purification panel · 0.5 mm","zh":"手工净化板 · 0.5 mm","fr":"Panneau de purification fabriqué à la main · 0,5 mm","es":"Panel de purificación manual · 0,5 mm","it":"Pannello di purificazione artigianale · 0,5 mm","de":"Handgefertigtes Reinraumpaneel · 0,5 mm"},"note":{"en":"57 m² package","zh":"57 m²整套","fr":"Forfait 57 m²","es":"Paquete de 57 m²","it":"Pacchetto 57 m²","de":"57-m²-Paket"},"price":1120}],"frontDoors":[{"id":"aluminum","label":{"en":"Aluminum-alloy front door","zh":"铝合金正面门","fr":"Porte frontale en alliage d'aluminium","es":"Puerta frontal de aleación de aluminio","it":"Porta frontale in lega di alluminio","de":"Fronttor aus Aluminiumlegierung"},"note":{"en":"","zh":""},"price":570},{"id":"sheet","label":{"en":"Three-leaf sheet-metal front door","zh":"三扇钣金正面门","fr":"Porte frontale en tôle à trois vantaux","es":"Puerta frontal de chapa de tres hojas","it":"Porta frontale in lamiera a tre ante","de":"Dreiflügeliges Fronttor aus Stahlblech"},"note":{"en":"","zh":""},"price":690},{"id":"glass","label":{"en":"Full glass front door","zh":"玻璃大门","fr":"Porte frontale entièrement vitrée","es":"Puerta frontal totalmente acristalada","it":"Porta frontale interamente in vetro","de":"Vollverglastes Fronttor"},"note":{"en":"","zh":""},"price":1050},{"id":"noBase","label":{"en":"No-base-platform front door set","zh":"无底台正面门套装","fr":"Ensemble porte frontale sans soubassement","es":"Conjunto de puerta frontal sin plataforma","it":"Gruppo porta frontale senza basamento","de":"Fronttor-Satz ohne Unterbau"},"note":{"en":"","zh":""},"price":1140}],"checkerPlate":[{"id":"checker1","label":{"en":"2.3 mm checker plate · 1 run","zh":"2.3 mm花纹板 · 1趟","fr":"Tôle antidérapante 2,3 mm · 1 rangée","es":"Chapa estriada de 2,3 mm · 1 fila","it":"Lamiera mandorlata da 2,3 mm · 1 fila","de":"2,3-mm-Riffelblech · 1 Reihe"},"note":{"en":"","zh":""},"price":160},{"id":"checker2","label":{"en":"2.3 mm checker plate · 2 runs","zh":"2.3 mm花纹板 · 2趟","fr":"Tôle antidérapante 2,3 mm · 2 rangées","es":"Chapa estriada de 2,3 mm · 2 filas","it":"Lamiera mandorlata da 2,3 mm · 2 file","de":"2,3-mm-Riffelblech · 2 Reihen"},"note":{"en":"","zh":""},"price":330},{"id":"checker3","label":{"en":"2.3 mm checker plate · 3 runs","zh":"2.3 mm花纹板 · 3趟","fr":"Tôle antidérapante 2,3 mm · 3 rangées","es":"Chapa estriada de 2,3 mm · 3 filas","it":"Lamiera mandorlata da 2,3 mm · 3 file","de":"2,3-mm-Riffelblech · 3 Reihen"},"note":{"en":"","zh":""},"price":490}],"gratings":[{"id":"g3-1","label":{"en":"3 × 30 grating · 1 run","zh":"3 × 30钢格栅 · 1趟","fr":"Caillebotis 3 × 30 · 1 rangée","es":"Rejilla 3 × 30 · 1 fila","it":"Grigliato 3 × 30 · 1 fila","de":"Stahlgitterrost 3 × 30 · 1 Reihe"},"note":{"en":"","zh":""},"price":140},{"id":"g3-2","label":{"en":"3 × 30 grating · 2 runs","zh":"3 × 30钢格栅 · 2趟","fr":"Caillebotis 3 × 30 · 2 rangées","es":"Rejilla 3 × 30 · 2 filas","it":"Grigliato 3 × 30 · 2 file","de":"Stahlgitterrost 3 × 30 · 2 Reihen"},"note":{"en":"","zh":""},"price":290},{"id":"g3-3","label":{"en":"3 × 30 grating · 3 runs","zh":"3 × 30钢格栅 · 3趟","fr":"Caillebotis 3 × 30 · 3 rangées","es":"Rejilla 3 × 30 · 3 filas","it":"Grigliato 3 × 30 · 3 file","de":"Stahlgitterrost 3 × 30 · 3 Reihen"},"note":{"en":"","zh":""},"price":430},{"id":"g4-1","label":{"en":"4 × 30 grating · 1 run","zh":"4 × 30钢格栅 · 1趟","fr":"Caillebotis 4 × 30 · 1 rangée","es":"Rejilla 4 × 30 · 1 fila","it":"Grigliato 4 × 30 · 1 fila","de":"Stahlgitterrost 4 × 30 · 1 Reihe"},"note":{"en":"","zh":""},"price":190},{"id":"g4-2","label":{"en":"4 × 30 grating · 2 runs","zh":"4 × 30钢格栅 · 2趟","fr":"Caillebotis 4 × 30 · 2 rangées","es":"Rejilla 4 × 30 · 2 filas","it":"Grigliato 4 × 30 · 2 file","de":"Stahlgitterrost 4 × 30 · 2 Reihen"},"note":{"en":"","zh":""},"price":370},{"id":"g4-3","label":{"en":"4 × 30 grating · 3 runs","zh":"4 × 30钢格栅 · 3趟","fr":"Caillebotis 4 × 30 · 3 rangées","es":"Rejilla 4 × 30 · 3 filas","it":"Grigliato 4 × 30 · 3 file","de":"Stahlgitterrost 4 × 30 · 3 Reihen"},"note":{"en":"","zh":""},"price":560},{"id":"g4-5","label":{"en":"4 × 30 grating · 5 runs","zh":"4 × 30钢格栅 · 5趟","fr":"Caillebotis 4 × 30 · 5 rangées","es":"Rejilla 4 × 30 · 5 filas","it":"Grigliato 4 × 30 · 5 file","de":"Stahlgitterrost 4 × 30 · 5 Reihen"},"note":{"en":"","zh":""},"price":930},{"id":"g5-1","label":{"en":"5 × 30 grating · 1 run","zh":"5 × 30钢格栅 · 1趟","fr":"Caillebotis 5 × 30 · 1 rangée","es":"Rejilla 5 × 30 · 1 fila","it":"Grigliato 5 × 30 · 1 fila","de":"Stahlgitterrost 5 × 30 · 1 Reihe"},"note":{"en":"","zh":""},"price":230},{"id":"g5-2","label":{"en":"5 × 30 grating · 2 runs","zh":"5 × 30钢格栅 · 2趟","fr":"Caillebotis 5 × 30 · 2 rangées","es":"Rejilla 5 × 30 · 2 filas","it":"Grigliato 5 × 30 · 2 file","de":"Stahlgitterrost 5 × 30 · 2 Reihen"},"note":{"en":"","zh":""},"price":470},{"id":"g5-3","label":{"en":"5 × 30 grating · 3 runs","zh":"5 × 30钢格栅 · 3趟","fr":"Caillebotis 5 × 30 · 3 rangées","es":"Rejilla 5 × 30 · 3 filas","it":"Grigliato 5 × 30 · 3 file","de":"Stahlgitterrost 5 × 30 · 3 Reihen"},"note":{"en":"","zh":""},"price":700},{"id":"g5-5","label":{"en":"5 × 30 grating · 5 runs","zh":"5 × 30钢格栅 · 5趟","fr":"Caillebotis 5 × 30 · 5 rangées","es":"Rejilla 5 × 30 · 5 filas","it":"Grigliato 5 × 30 · 5 file","de":"Stahlgitterrost 5 × 30 · 5 Reihen"},"note":{"en":"","zh":""},"price":1170}],"platformFrames":[{"id":"galvanized","label":{"en":"Galvanized-sheet base frame package","zh":"镀锌板底台套装","fr":"Ensemble soubassement en tôle galvanisée","es":"Conjunto de plataforma de chapa galvanizada","it":"Pacchetto basamento in lamiera zincata","de":"Unterbaupaket aus verzinktem Blech"},"note":{"en":"Legs, skirt and ramp","zh":"含支腿、围裙和坡道","fr":"Pieds, jupe et rampe","es":"Patas, faldón y rampa","it":"Gambe, gonna e rampa","de":"Stützen, Schürze und Rampe"},"price":630},{"id":"channel","label":{"en":"12# channel-steel base frame package","zh":"12#槽钢底台套装","fr":"Ensemble soubassement en profilé U n° 12","es":"Conjunto de plataforma con perfil U n.º 12","it":"Pacchetto basamento in profilato U n. 12","de":"Unterbaupaket aus U-Profil Nr. 12"},"note":{"en":"Channel frame, skirt and ramp","zh":"含槽钢支架、围裙和坡道","fr":"Châssis en profilé, jupe et rampe","es":"Bastidor de perfil, faldón y rampa","it":"Telaio in profilato, gonna e rampa","de":"Profilrahmen, Schürze und Rampe"},"price":840}],"heating":[{"id":"infraOpen","label":{"en":"Infrared heating · open type · 8 sets","zh":"红外线加热 · 不带门 · 8组","fr":"Chauffage infrarouge · type ouvert · 8 ensembles","es":"Calefacción infrarroja · tipo abierto · 8 conjuntos","it":"Riscaldamento a infrarossi · tipo aperto · 8 gruppi","de":"Infrarotheizung · offene Ausführung · 8 Sätze"},"note":{"en":"","zh":""},"price":330,"fuel":"electric"},{"id":"infraDoor","label":{"en":"Infrared heating · enclosed · 8 sets","zh":"红外线加热 · 带门 · 8组","fr":"Chauffage infrarouge · fermé · 8 ensembles","es":"Calefacción infrarroja · cerrada · 8 conjuntos","it":"Riscaldamento a infrarossi · chiuso · 8 gruppi","de":"Infrarotheizung · geschlossene Ausführung · 8 Sätze"},"note":{"en":"","zh":""},"price":450,"fuel":"electric"},{"id":"graphene","label":{"en":"Graphene radiant heating · standard · 8 sets","zh":"石墨烯辐射加热 · 不防爆 · 8组","fr":"Chauffage rayonnant au graphène · standard · 8 ensembles","es":"Calefacción radiante de grafeno · estándar · 8 conjuntos","it":"Riscaldamento radiante al grafene · standard · 8 gruppi","de":"Graphen-Strahlungsheizung · Standard · 8 Sätze"},"note":{"en":"","zh":""},"price":910,"fuel":"electric"},{"id":"grapheneEx","label":{"en":"Graphene radiant heating · explosion-proof · 8 sets","zh":"石墨烯辐射加热 · 防爆 · 8组","fr":"Chauffage rayonnant au graphène · antidéflagrant · 8 ensembles","es":"Calefacción radiante de grafeno · antideflagrante · 8 conjuntos","it":"Riscaldamento radiante al grafene · antideflagrante · 8 gruppi","de":"Graphen-Strahlungsheizung · explosionsgeschützt · 8 Sätze"},"note":{"en":"","zh":""},"price":1080,"fuel":"electric"},{"id":"g10","label":{"en":"Riello G10 diesel burner","zh":"利雅路G10柴油燃烧器","fr":"Brûleur diesel Riello G10","es":"Quemador diésel Riello G10","it":"Bruciatore diesel Riello G10","de":"Riello G10 Dieselbrenner"},"note":{"en":"","zh":""},"price":600,"fuel":"diesel"},{"id":"g20","label":{"en":"Riello G20 diesel burner","zh":"利雅路G20柴油燃烧器","fr":"Brûleur diesel Riello G20","es":"Quemador diésel Riello G20","it":"Bruciatore diesel Riello G20","de":"Riello G20 Dieselbrenner"},"note":{"en":"","zh":""},"price":690,"fuel":"diesel"},{"id":"fs20","label":{"en":"Riello FS20 diesel burner","zh":"利雅路FS20柴油燃烧器","fr":"Brûleur diesel Riello FS20","es":"Quemador diésel Riello FS20","it":"Bruciatore diesel Riello FS20","de":"Riello FS20 Dieselbrenner"},"note":{"en":"","zh":""},"price":1550,"fuel":"diesel"}],"exchangers":[{"id":"none","label":{"en":"Not required","zh":"不需要","fr":"Non requis","es":"No requerido","it":"Non necessario","de":"Nicht erforderlich"},"note":{"en":"Electric heating configuration","zh":"电加热配置","fr":"Configuration à chauffage électrique","es":"Configuración con calefacción eléctrica","it":"Configurazione con riscaldamento elettrico","de":"Konfiguration mit Elektroheizung"},"price":0},{"id":"201-15","label":{"en":"201 stainless steel · 1.5 mm","zh":"201不锈钢 · 1.5 mm","fr":"Acier inoxydable 201 · 1,5 mm","es":"Acero inoxidable 201 · 1,5 mm","it":"Acciaio inox 201 · 1,5 mm","de":"Edelstahl 201 · 1,5 mm"},"note":{"en":"","zh":""},"price":390},{"id":"201-20","label":{"en":"201 stainless steel · 2.0 mm","zh":"201不锈钢 · 2.0 mm","fr":"Acier inoxydable 201 · 2,0 mm","es":"Acero inoxidable 201 · 2,0 mm","it":"Acciaio inox 201 · 2,0 mm","de":"Edelstahl 201 · 2,0 mm"},"note":{"en":"","zh":""},"price":480},{"id":"304-15","label":{"en":"304 stainless steel · 1.5 mm","zh":"304不锈钢 · 1.5 mm","fr":"Acier inoxydable 304 · 1,5 mm","es":"Acero inoxidable 304 · 1,5 mm","it":"Acciaio inox 304 · 1,5 mm","de":"Edelstahl 304 · 1,5 mm"},"note":{"en":"","zh":""},"price":480},{"id":"304-20","label":{"en":"304 stainless steel · 2.0 mm","zh":"304不锈钢 · 2.0 mm","fr":"Acier inoxydable 304 · 2,0 mm","es":"Acero inoxidable 304 · 2,0 mm","it":"Acciaio inox 304 · 2,0 mm","de":"Edelstahl 304 · 2,0 mm"},"note":{"en":"","zh":""},"price":690}],"fans":[{"id":"ty-cu-3","label":{"en":"Tianyi · copper motor · YDW 3 kW","zh":"天意 · 铜芯 · YDW 3 kW","fr":"Tianyi · moteur cuivre · YDW 3 kW","es":"Tianyi · motor de cobre · YDW 3 kW","it":"Tianyi · motore in rame · YDW 3 kW","de":"Tianyi · Kupfermotor · YDW 3 kW"},"note":{"en":"","zh":""},"price":300},{"id":"ty-cu-4","label":{"en":"Tianyi · copper motor · YDW 4 kW","zh":"天意 · 铜芯 · YDW 4 kW","fr":"Tianyi · moteur cuivre · YDW 4 kW","es":"Tianyi · motor de cobre · YDW 4 kW","it":"Tianyi · motore in rame · YDW 4 kW","de":"Tianyi · Kupfermotor · YDW 4 kW"},"note":{"en":"","zh":""},"price":330},{"id":"ty-cu-55","label":{"en":"Tianyi · copper motor · YDW 5.5 kW","zh":"天意 · 铜芯 · YDW 5.5 kW","fr":"Tianyi · moteur cuivre · YDW 5,5 kW","es":"Tianyi · motor de cobre · YDW 5,5 kW","it":"Tianyi · motore in rame · YDW 5,5 kW","de":"Tianyi · Kupfermotor · YDW 5,5 kW"},"note":{"en":"","zh":""},"price":550},{"id":"ty-cu-75","label":{"en":"Tianyi · copper motor · YDW 7.5 kW","zh":"天意 · 铜芯 · YDW 7.5 kW","fr":"Tianyi · moteur cuivre · YDW 7,5 kW","es":"Tianyi · motor de cobre · YDW 7,5 kW","it":"Tianyi · motore in rame · YDW 7,5 kW","de":"Tianyi · Kupfermotor · YDW 7,5 kW"},"note":{"en":"","zh":""},"price":700},{"id":"ty-al-3","label":{"en":"Tianyi · aluminum motor · YDW 3 kW","zh":"天意 · 铝芯 · YDW 3 kW","fr":"Tianyi · moteur aluminium · YDW 3 kW","es":"Tianyi · motor de aluminio · YDW 3 kW","it":"Tianyi · motore in alluminio · YDW 3 kW","de":"Tianyi · Aluminiummotor · YDW 3 kW"},"note":{"en":"","zh":""},"price":220},{"id":"ty-al-4","label":{"en":"Tianyi · aluminum motor · YDW 4 kW","zh":"天意 · 铝芯 · YDW 4 kW","fr":"Tianyi · moteur aluminium · YDW 4 kW","es":"Tianyi · motor de aluminio · YDW 4 kW","it":"Tianyi · motore in alluminio · YDW 4 kW","de":"Tianyi · Aluminiummotor · YDW 4 kW"},"note":{"en":"","zh":""},"price":250},{"id":"ty-al-55","label":{"en":"Tianyi · aluminum motor · YDW 5.5 kW","zh":"天意 · 铝芯 · YDW 5.5 kW","fr":"Tianyi · moteur aluminium · YDW 5,5 kW","es":"Tianyi · motor de aluminio · YDW 5,5 kW","it":"Tianyi · motore in alluminio · YDW 5,5 kW","de":"Tianyi · Aluminiummotor · YDW 5,5 kW"},"note":{"en":"","zh":""},"price":390},{"id":"hk-cu-3","label":{"en":"Hengkang · copper motor · YDW 3 kW","zh":"恒康 · 铜芯 · YDW 3 kW","fr":"Hengkang · moteur cuivre · YDW 3 kW","es":"Hengkang · motor de cobre · YDW 3 kW","it":"Hengkang · motore in rame · YDW 3 kW","de":"Hengkang · Kupfermotor · YDW 3 kW"},"note":{"en":"","zh":""},"price":410},{"id":"hk-cu-4","label":{"en":"Hengkang · copper motor · YDW 4 kW","zh":"恒康 · 铜芯 · YDW 4 kW","fr":"Hengkang · moteur cuivre · YDW 4 kW","es":"Hengkang · motor de cobre · YDW 4 kW","it":"Hengkang · motore in rame · YDW 4 kW","de":"Hengkang · Kupfermotor · YDW 4 kW"},"note":{"en":"","zh":""},"price":440},{"id":"hk-cu-55","label":{"en":"Hengkang · copper motor · YDW 5.5 kW","zh":"恒康 · 铜芯 · YDW 5.5 kW","fr":"Hengkang · moteur cuivre · YDW 5,5 kW","es":"Hengkang · motor de cobre · YDW 5,5 kW","it":"Hengkang · motore in rame · YDW 5,5 kW","de":"Hengkang · Kupfermotor · YDW 5,5 kW"},"note":{"en":"","zh":""},"price":740},{"id":"hk-cu-75","label":{"en":"Hengkang · copper motor · YDW 7.5 kW","zh":"恒康 · 铜芯 · YDW 7.5 kW","fr":"Hengkang · moteur cuivre · YDW 7,5 kW","es":"Hengkang · motor de cobre · YDW 7,5 kW","it":"Hengkang · motore in rame · YDW 7,5 kW","de":"Hengkang · Kupfermotor · YDW 7,5 kW"},"note":{"en":"","zh":""},"price":830},{"id":"hk-cu-9","label":{"en":"Hengkang · copper motor · YDW 9 kW","zh":"恒康 · 铜芯 · YDW 9 kW","fr":"Hengkang · moteur cuivre · YDW 9 kW","es":"Hengkang · motor de cobre · YDW 9 kW","it":"Hengkang · motore in rame · YDW 9 kW","de":"Hengkang · Kupfermotor · YDW 9 kW"},"note":{"en":"","zh":""},"price":960},{"id":"hk-cu-11","label":{"en":"Hengkang · copper motor · YDW 11 kW","zh":"恒康 · 铜芯 · YDW 11 kW","fr":"Hengkang · moteur cuivre · YDW 11 kW","es":"Hengkang · motor de cobre · YDW 11 kW","it":"Hengkang · motore in rame · YDW 11 kW","de":"Hengkang · Kupfermotor · YDW 11 kW"},"note":{"en":"","zh":""},"price":1020},{"id":"hk-cu-15","label":{"en":"Hengkang · copper motor · YDW 15 kW","zh":"恒康 · 铜芯 · YDW 15 kW","fr":"Hengkang · moteur cuivre · YDW 15 kW","es":"Hengkang · motor de cobre · YDW 15 kW","it":"Hengkang · motore in rame · YDW 15 kW","de":"Hengkang · Kupfermotor · YDW 15 kW"},"note":{"en":"","zh":""},"price":1170},{"id":"hk-al-3","label":{"en":"Hengkang · aluminum motor · YDW 3 kW","zh":"恒康 · 铝芯 · YDW 3 kW","fr":"Hengkang · moteur aluminium · YDW 3 kW","es":"Hengkang · motor de aluminio · YDW 3 kW","it":"Hengkang · motore in alluminio · YDW 3 kW","de":"Hengkang · Aluminiummotor · YDW 3 kW"},"note":{"en":"","zh":""},"price":350},{"id":"hk-al-4","label":{"en":"Hengkang · aluminum motor · YDW 4 kW","zh":"恒康 · 铝芯 · YDW 4 kW","fr":"Hengkang · moteur aluminium · YDW 4 kW","es":"Hengkang · motor de aluminio · YDW 4 kW","it":"Hengkang · motore in alluminio · YDW 4 kW","de":"Hengkang · Aluminiummotor · YDW 4 kW"},"note":{"en":"","zh":""},"price":380},{"id":"hk-al-55","label":{"en":"Hengkang · aluminum motor · YDW 5.5 kW","zh":"恒康 · 铝芯 · YDW 5.5 kW","fr":"Hengkang · moteur aluminium · YDW 5,5 kW","es":"Hengkang · motor de aluminio · YDW 5,5 kW","it":"Hengkang · motore in alluminio · YDW 5,5 kW","de":"Hengkang · Aluminiummotor · YDW 5,5 kW"},"note":{"en":"","zh":""},"price":560},{"id":"hk-al-75","label":{"en":"Hengkang · aluminum motor · YDW 7.5 kW","zh":"恒康 · 铝芯 · YDW 7.5 kW","fr":"Hengkang · moteur aluminium · YDW 7,5 kW","es":"Hengkang · motor de aluminio · YDW 7,5 kW","it":"Hengkang · motore in alluminio · YDW 7,5 kW","de":"Hengkang · Aluminiummotor · YDW 7,5 kW"},"note":{"en":"","zh":""},"price":730}],"airBoxes":{"electric":{"id":"airElectric","label":{"en":"Electric-heating air box","zh":"电加热风箱","fr":"Caisson d'air pour chauffage électrique","es":"Caja de aire para calefacción eléctrica","it":"Cassa aria per riscaldamento elettrico","de":"Luftkasten für Elektroheizung"},"note":{"en":"","zh":""},"price":450},"diesel":{"id":"airDiesel","label":{"en":"Oil-heating air box","zh":"油加热风箱","fr":"Caisson d'air pour chauffage au diesel","es":"Caja de aire para calefacción diésel","it":"Cassa aria per riscaldamento diesel","de":"Luftkasten für Dieselheizung"},"note":{"en":"","zh":""},"price":600}},"plenums":[{"id":"full","label":{"en":"Full plenum chamber","zh":"全静压室","fr":"Plénum complet","es":"Cámara plenum completa","it":"Camera plenum completa","de":"Vollständige Druckkammer"},"note":{"en":"","zh":""},"price":1050},{"id":"third","label":{"en":"1/3 plenum chamber","zh":"1/3静压室","fr":"Plénum 1/3","es":"Cámara plenum de 1/3","it":"Camera plenum 1/3","de":"1/3-Druckkammer"},"note":{"en":"","zh":""},"price":900}],"controlBoxes":[{"id":"standard","label":{"en":"Standard paint-booth control box","zh":"标准喷漆房电控箱","fr":"Coffret standard pour cabine de peinture","es":"Cuadro estándar para cabina de pintura","it":"Quadro standard per cabina di verniciatura","de":"Standard-Schaltschrank für Lackierkabine"},"note":{"en":"","zh":""},"price":450},{"id":"sanding","label":{"en":"Sanding-booth control box","zh":"打磨房电控箱","fr":"Coffret pour cabine de ponçage","es":"Cuadro para cabina de lijado","it":"Quadro per cabina di carteggiatura","de":"Schaltschrank für Schleifkabine"},"note":{"en":"","zh":""},"price":300}],"lighting":[{"id":"light8","label":{"en":"Ceiling lighting · 8 sets","zh":"顶部照明 · 8组","fr":"Éclairage supérieur · 8 ensembles","es":"Iluminación superior · 8 conjuntos","it":"Illuminazione superiore · 8 gruppi","de":"Deckenbeleuchtung · 8 Sätze"},"note":{"en":"","zh":""},"price":390},{"id":"light10","label":{"en":"Ceiling lighting · 10 sets","zh":"顶部照明 · 10组","fr":"Éclairage supérieur · 10 ensembles","es":"Iluminación superior · 10 conjuntos","it":"Illuminazione superiore · 10 gruppi","de":"Deckenbeleuchtung · 10 Sätze"},"note":{"en":"","zh":""},"price":480}],"waistLights":{"id":"waistLights","label":{"en":"Waist lights · 8 sets","zh":"腰灯 · 8组","fr":"Éclairage latéral · 8 ensembles","es":"Iluminación lateral · 8 conjuntos","it":"Illuminazione laterale · 8 gruppi","de":"Seitenbeleuchtung · 8 Sätze"},"note":{"en":"","zh":""},"price":290},"extraTube":{"id":"extraTube","label":{"en":"Additional 24 W LED tube","zh":"增加24 W LED灯管","fr":"Tube LED 24 W supplémentaire","es":"Tubo LED adicional de 24 W","it":"Tubo LED aggiuntivo da 24 W","de":"Zusätzliche 24-W-LED-Röhre"},"note":{"en":"","zh":""},"price":5},"ducts":[{"id":"none","label":{"en":"No exhaust duct","zh":"不选排风管","fr":"Sans conduit d'extraction","es":"Sin conducto de extracción","it":"Senza condotto di estrazione","de":"Kein Abluftkanal"},"note":{"en":"","zh":""},"price":0},{"id":"square600","label":{"en":"600 mm square duct","zh":"600方管","fr":"Conduit carré 600 mm","es":"Conducto cuadrado de 600 mm","it":"Condotto quadrato da 600 mm","de":"600-mm-Rechteckkanal"},"note":{"en":"Per unit","zh":"每单位","fr":"Par unité","es":"Por unidad","it":"Per unità","de":"Pro Einheit"},"price":20},{"id":"square700","label":{"en":"700 mm square duct","zh":"700方管","fr":"Conduit carré 700 mm","es":"Conducto cuadrado de 700 mm","it":"Condotto quadrato da 700 mm","de":"700-mm-Rechteckkanal"},"note":{"en":"Per unit","zh":"每单位","fr":"Par unité","es":"Por unidad","it":"Per unità","de":"Pro Einheit"},"price":25},{"id":"round600","label":{"en":"Ø600 mm round duct","zh":"Ø600圆管","fr":"Conduit rond Ø600 mm","es":"Conducto redondo Ø600 mm","it":"Condotto tondo Ø600 mm","de":"Rundkanal Ø600 mm"},"note":{"en":"Per unit","zh":"每单位","fr":"Par unité","es":"Por unidad","it":"Per unità","de":"Pro Einheit"},"price":30},{"id":"round700","label":{"en":"Ø700 mm round duct","zh":"Ø700圆管","fr":"Conduit rond Ø700 mm","es":"Conducto redondo Ø700 mm","it":"Condotto tondo Ø700 mm","de":"Rundkanal Ø700 mm"},"note":{"en":"Per unit","zh":"每单位","fr":"Par unité","es":"Por unidad","it":"Per unità","de":"Pro Einheit"},"price":35}],"vfds":[{"id":"none","label":{"en":"No variable-frequency drive","zh":"不选变频器","fr":"Sans variateur de fréquence","es":"Sin variador de frecuencia","it":"Senza inverter","de":"Kein Frequenzumrichter"},"note":{"en":"","zh":""},"price":0},{"id":"vfd55","label":{"en":"VFD · 5.5 kW","zh":"变频器 · 5.5 kW","fr":"Variateur de fréquence · 5,5 kW","es":"Variador de frecuencia · 5,5 kW","it":"Inverter · 5,5 kW","de":"Frequenzumrichter · 5,5 kW"},"note":{"en":"","zh":""},"price":550},{"id":"vfd75","label":{"en":"VFD · 7.5 kW","zh":"变频器 · 7.5 kW","fr":"Variateur de fréquence · 7,5 kW","es":"Variador de frecuencia · 7,5 kW","it":"Inverter · 7,5 kW","de":"Frequenzumrichter · 7,5 kW"},"note":{"en":"","zh":""},"price":600},{"id":"vfd11","label":{"en":"VFD · 11 kW","zh":"变频器 · 11 kW","fr":"Variateur de fréquence · 11 kW","es":"Variador de frecuencia · 11 kW","it":"Inverter · 11 kW","de":"Frequenzumrichter · 11 kW"},"note":{"en":"","zh":""},"price":700}],"waterNozzle":{"id":"waterNozzle","label":{"en":"Waterborne-paint spray nozzle assembly","zh":"水性漆喷嘴组件","fr":"Ensemble de buses pour peinture à l'eau","es":"Conjunto de boquillas para pintura al agua","it":"Gruppo ugelli per vernice all'acqua","de":"Düsensatz für Wasserlack"},"note":{"en":"","zh":""},"price":360},"waterFans":[{"id":"none","label":{"en":"No waterborne-paint fan","zh":"不选水性漆风机","fr":"Sans ventilateur pour peinture à l'eau","es":"Sin ventilador para pintura al agua","it":"Senza ventilatore per vernice all'acqua","de":"Kein Ventilator für Wasserlack"},"note":{"en":"","zh":""},"price":0},{"id":"waterStandard","label":{"en":"Standard waterborne-paint fan","zh":"标准水性漆风机","fr":"Ventilateur standard pour peinture à l'eau","es":"Ventilador estándar para pintura al agua","it":"Ventilatore standard per vernice all'acqua","de":"Standardventilator für Wasserlack"},"note":{"en":"","zh":""},"price":240},{"id":"water055","label":{"en":"Waterborne-paint fan · 0.55 kW","zh":"水性漆风机 · 0.55 kW","fr":"Ventilateur pour peinture à l'eau · 0,55 kW","es":"Ventilador para pintura al agua · 0,55 kW","it":"Ventilatore per vernice all'acqua · 0,55 kW","de":"Ventilator für Wasserlack · 0,55 kW"},"note":{"en":"","zh":""},"price":450},{"id":"water075","label":{"en":"Waterborne-paint fan · 0.75 kW","zh":"水性漆风机 · 0.75 kW","fr":"Ventilateur pour peinture à l'eau · 0,75 kW","es":"Ventilador para pintura al agua · 0,75 kW","it":"Ventilatore per vernice all'acqua · 0,75 kW","de":"Ventilator für Wasserlack · 0,75 kW"},"note":{"en":"","zh":""},"price":600}],"accessories":[{"id":"gasAlarm","label":{"en":"Combustible gas alarm · 1-to-1","zh":"可燃气体报警器 · 1拖1","fr":"Détecteur de gaz combustible · 1 pour 1","es":"Detector de gas combustible · 1 a 1","it":"Rilevatore di gas combustibile · 1 a 1","de":"Brenngaswarner · 1-zu-1"},"note":{"en":"","zh":""},"price":150},{"id":"ironTray","label":{"en":"Iron wire trough · 10 × 30","zh":"铁线槽 · 10条 × 30","fr":"Goulotte métallique · 10 × 30","es":"Canaleta metálica · 10 × 30","it":"Canalina metallica · 10 × 30","de":"Metall-Kabelkanal · 10 × 30"},"note":{"en":"","zh":""},"price":90},{"id":"highTempWire","label":{"en":"High-temperature wire · 240 × 2","zh":"高温线 · 240 × 2","fr":"Câble haute température · 240 × 2","es":"Cable de alta temperatura · 240 × 2","it":"Cavo alta temperatura · 240 × 2","de":"Hochtemperaturkabel · 240 × 2"},"note":{"en":"","zh":""},"price":140},{"id":"upperCorner","label":{"en":"Upper cable-tray corner · 0.8 mm","zh":"上槽盒拐角 · 0.8 mm","fr":"Angle de goulotte supérieur · 0,8 mm","es":"Esquina de bandeja superior · 0,8 mm","it":"Angolo canalina superiore · 0,8 mm","de":"Oberer Kabelkanal-Winkel · 0,8 mm"},"note":{"en":"","zh":""},"price":240},{"id":"lowerCorner","label":{"en":"Lower cable-tray corner · 1.2 mm","zh":"下槽盒拐角 · 1.2 mm","fr":"Angle de goulotte inférieur · 1,2 mm","es":"Esquina de bandeja inferior · 1,2 mm","it":"Angolo canalina inferiore · 1,2 mm","de":"Unterer Kabelkanal-Winkel · 1,2 mm"},"note":{"en":"","zh":""},"price":570},{"id":"wiring","label":{"en":"Electrical wires and cables","zh":"电线电缆","fr":"Fils et câbles électriques","es":"Cables eléctricos","it":"Fili e cavi elettrici","de":"Elektroleitungen und Kabel"},"note":{"en":"","zh":""},"price":150},{"id":"hardware","label":{"en":"Rivets, screws and sealant","zh":"铆钉、螺丝和密封胶","fr":"Rivets, vis et mastic","es":"Remaches, tornillos y sellador","it":"Rivetti, viti e sigillante","de":"Nieten, Schrauben und Dichtstoff"},"note":{"en":"","zh":""},"price":180}]};

    const GUIDE_LABELS = {
      en: {
        reference: "System reference photo",
        why: "What this choice gives you",
        best: "Best for",
        consider: "Keep in mind",
        selected: "Selected",
        value: "Value",
        balanced: "Balanced",
        premium: "Premium",
        safety: "Safety upgrade",
        compareWall: "Compare wall panel construction",
        compareBase: "Compare base platform construction"
      },
      zh: {
        reference: "系统参考照片",
        why: "选择它能带来什么",
        best: "更适合",
        consider: "需要注意",
        selected: "已选择",
        value: "经济实用",
        balanced: "均衡配置",
        premium: "高端升级",
        safety: "安全升级",
        compareWall: "房体墙板结构对比",
        compareBase: "底台结构对比"
      },
      fr: {
        reference: "Photo de référence du système",
        why: "Ce que ce choix vous apporte",
        best: "Idéal pour",
        consider: "À prendre en compte",
        selected: "Sélectionné",
        value: "Économique",
        balanced: "Équilibré",
        premium: "Premium",
        safety: "Sécurité renforcée",
        compareWall: "Comparer la construction des panneaux",
        compareBase: "Comparer la construction du soubassement"
      },
      es: {
        reference: "Foto de referencia del sistema",
        why: "Qué aporta esta elección",
        best: "Ideal para",
        consider: "A tener en cuenta",
        selected: "Seleccionado",
        value: "Económico",
        balanced: "Equilibrado",
        premium: "Premium",
        safety: "Mejora de seguridad",
        compareWall: "Comparar la construcción de paneles",
        compareBase: "Comparar la construcción de la plataforma"
      },
      it: {
        reference: "Foto di riferimento del sistema",
        why: "Cosa offre questa scelta",
        best: "Ideale per",
        consider: "Da considerare",
        selected: "Selezionato",
        value: "Conveniente",
        balanced: "Bilanciato",
        premium: "Premium",
        safety: "Sicurezza superiore",
        compareWall: "Confronto della struttura dei pannelli",
        compareBase: "Confronto della struttura del basamento"
      },
      de: {
        reference: "Referenzfoto des Systems",
        why: "Ihr Vorteil bei dieser Wahl",
        best: "Geeignet für",
        consider: "Zu beachten",
        selected: "Ausgewählt",
        value: "Preiswert",
        balanced: "Ausgewogen",
        premium: "Premium",
        safety: "Sicherheits-Upgrade",
        compareWall: "Wandpaneel-Aufbau vergleichen",
        compareBase: "Unterbau-Konstruktion vergleichen"
      }
    };

    const SECTION_GUIDES = {
      shell: {
        image: "assets/project-cases/france/france-automotive-spray-booth-installed-project-front-view.webp",
        title: {
          en: "Start with safety, rigidity and daily durability",
          zh: "先确定安全性、结构强度与日常耐用性",
          fr: "Commencez par la sécurité, la rigidité et la durabilité",
          es: "Empiece por la seguridad, rigidez y durabilidad",
          it: "Parti da sicurezza, rigidità e durata",
          de: "Beginnen Sie mit Sicherheit, Steifigkeit und Haltbarkeit"
        },
        copy: {
          en: "Wall panels, doors and the base platform determine fire performance, sealing, vehicle access and how well the booth holds up to daily workshop use.",
          zh: "墙板、正面门和底台决定防火性能、密封效果、车辆进出便利性，以及设备长期高频使用后的稳定程度。",
          fr: "Les panneaux, les portes et le soubassement déterminent la résistance au feu, l'étanchéité, l'accès des véhicules et la tenue dans le temps.",
          es: "Los paneles, las puertas y la plataforma determinan la seguridad contra incendios, el sellado, el acceso y la durabilidad diaria.",
          it: "Pannelli, porte e basamento determinano sicurezza antincendio, tenuta, accesso dei veicoli e durata nell'uso quotidiano.",
          de: "Paneele, Tore und Unterbau bestimmen Brandschutz, Dichtheit, Fahrzeugzugang und Haltbarkeit im täglichen Betrieb."
        }
      },
      heating: {
        image: "assets/products/gubot-tlsj-8006-diesel-burner-spray-booth.webp",
        title: {
          en: "Match heat output and airflow to your workload",
          zh: "让加热能力和风量真正匹配你的工作量",
          fr: "Adaptez la puissance de chauffe et le débit d'air à votre activité",
          es: "Ajuste la calefacción y el caudal de aire a su carga de trabajo",
          it: "Abbina potenza termica e portata d'aria al carico di lavoro",
          de: "Heizleistung und Luftmenge auf Ihre Auslastung abstimmen"
        },
        copy: {
          en: "A higher-priced heating or airflow system should shorten temperature recovery, improve curing consistency or support a larger booth - not simply add power on paper.",
          zh: "更高价格的加热与送排风配置，应当带来更快升温、更稳定烘烤或支持更大房体，而不是只在参数表上增加功率。",
          fr: "Une configuration plus coûteuse doit accélérer la montée en température, stabiliser le séchage ou servir une cabine plus grande.",
          es: "Una configuración más costosa debe acelerar el calentamiento, estabilizar el curado o servir una cabina mayor.",
          it: "Una configurazione più costosa deve accelerare il riscaldamento, uniformare l'essiccazione o servire cabine più grandi.",
          de: "Eine höherwertige Konfiguration sollte schneller aufheizen, gleichmäßiger trocknen oder größere Kabinen versorgen."
        }
      },
      controls: {
        image: "assets/product-booth-interior.webp",
        title: {
          en: "Better visibility and control reduce rework",
          zh: "更好的照明与控制，能够减少返工",
          fr: "Une meilleure visibilité et un meilleur contrôle réduisent les reprises",
          es: "Una mejor visibilidad y control reducen los retrabajos",
          it: "Visibilità e controllo migliori riducono le rilavorazioni",
          de: "Bessere Sicht und Steuerung reduzieren Nacharbeit"
        },
        copy: {
          en: "Lighting quantity, side lights and variable-frequency control affect color inspection, shadow control, start-up current and airflow adjustment during different work stages.",
          zh: "顶灯数量、腰灯与变频控制，会影响颜色检查、阴影控制、启动电流以及不同工序中的风量调节。",
          fr: "L'éclairage, les lumières latérales et la variation de fréquence influencent le contrôle des couleurs, les ombres et le réglage du débit d'air.",
          es: "La iluminación, las luces laterales y el variador influyen en la inspección del color, las sombras y el ajuste del aire.",
          it: "Illuminazione, luci laterali e inverter influenzano il controllo colore, le ombre e la regolazione dell'aria.",
          de: "Beleuchtung, Seitenlicht und Frequenzregelung beeinflussen Farbkontrolle, Schatten und Luftmengenanpassung."
        }
      },
      optional: {
        image: "assets/products/gubot-tlsj-8004-waterborne-base-spray-booth.webp",
        title: {
          en: "Add systems only when they improve your paint process",
          zh: "只有能改善喷涂工艺时，才值得增加选配",
          fr: "Ajoutez des systèmes uniquement s'ils améliorent votre processus peinture",
          es: "Añada sistemas solo cuando mejoren su proceso de pintura",
          it: "Aggiungi sistemi solo quando migliorano il processo di verniciatura",
          de: "Zusatzsysteme nur wählen, wenn sie den Lackierprozess verbessern"
        },
        copy: {
          en: "Waterborne-paint acceleration is valuable for shops using water-based coatings because stronger air movement can shorten flash-off time and improve throughput.",
          zh: "对于使用水性漆的维修厂，水性漆加速系统通过增强空气流动缩短闪干时间，从而提升每天的车辆处理效率。",
          fr: "Pour les peintures hydrodiluables, une circulation d'air renforcée réduit le temps d'évaporation et améliore le rendement.",
          es: "Con pinturas al agua, un mayor movimiento de aire reduce el tiempo de evaporación y mejora la productividad.",
          it: "Con vernici ad acqua, un maggiore movimento d'aria riduce il tempo di appassimento e aumenta la produttività.",
          de: "Bei Wasserlacken verkürzt stärkere Luftbewegung die Ablüftzeit und erhöht den Durchsatz."
        }
      }
    };

    const COMPARISON_COPY = {
      wall: [
        {
          className: "eps",
          title: { en: "EPS color-steel panel", zh: "EPS 彩钢板", fr: "Panneau acier EPS", es: "Panel de acero EPS", it: "Pannello in acciaio EPS", de: "EPS-Stahlpaneel" },
          copy: { en: "Lowest initial investment, light weight and useful thermal insulation for standard repair-shop projects.", zh: "初期投入最低、重量轻、保温性好，适合常规汽车维修厂项目。", fr: "Investissement initial réduit, faible poids et bonne isolation pour les projets standard.", es: "Menor inversión, poco peso y buen aislamiento para proyectos estándar.", it: "Investimento ridotto, peso contenuto e buon isolamento per progetti standard.", de: "Geringe Investition, leicht und gut isolierend für Standardprojekte." }
        },
        {
          className: "rock",
          title: { en: "Rock-wool panel", zh: "岩棉板", fr: "Panneau laine de roche", es: "Panel de lana de roca", it: "Pannello in lana di roccia", de: "Steinwollpaneel" },
          copy: { en: "Better fire performance, sound insulation and high-temperature stability than EPS; suited to safety-focused projects.", zh: "相比 EPS 具有更好的防火、隔音与高温稳定性，适合更重视安全标准的项目。", fr: "Meilleure tenue au feu, isolation acoustique et stabilité thermique que l'EPS.", es: "Mejor comportamiento al fuego, aislamiento acústico y estabilidad térmica que el EPS.", it: "Migliore comportamento al fuoco, isolamento acustico e stabilità termica rispetto all'EPS.", de: "Besserer Brandschutz, Schallschutz und höhere Temperaturstabilität als EPS." }
        },
        {
          className: "manual",
          title: { en: "Handmade purification panel", zh: "手工净化板", fr: "Panneau de purification manuel", es: "Panel de purificación manual", it: "Pannello di purificazione artigianale", de: "Handgefertigtes Reinraumpaneel" },
          copy: { en: "Flatter surfaces, reinforced edges, tighter joints and easier custom openings for a cleaner premium installation.", zh: "表面更平整、边框加强、拼缝更严密，也更方便定制开孔，适合追求精细安装效果的项目。", fr: "Surface plus plane, bords renforcés, joints serrés et découpes sur mesure.", es: "Superficie más plana, bordes reforzados, juntas precisas y aberturas a medida.", it: "Superficie più piana, bordi rinforzati, giunti precisi e aperture su misura.", de: "Planere Oberfläche, verstärkte Kanten, dichte Fugen und kundenspezifische Öffnungen." }
        }
      ],
      base: [
        {
          className: "galvanized",
          title: { en: "Galvanized-sheet base", zh: "镀锌板底台", fr: "Soubassement galvanisé", es: "Base galvanizada", it: "Basamento zincato", de: "Verzinkter Unterbau" },
          copy: { en: "Lighter, corrosion-resistant and faster to install; a cost-effective choice for standard passenger-car use.", zh: "重量较轻、耐腐蚀、安装更快，是普通乘用车维修厂的高性价比选择。", fr: "Plus léger, résistant à la corrosion et rapide à installer pour les véhicules légers.", es: "Más ligero, resistente a la corrosión y rápido de instalar para turismos.", it: "Più leggero, resistente alla corrosione e rapido da installare per autovetture.", de: "Leichter, korrosionsbeständig und schnell montiert für Pkw-Standardbetrieb." }
        },
        {
          className: "channel",
          title: { en: "12# channel-steel base", zh: "12# 槽钢底台", fr: "Soubassement en profilé U 12", es: "Base de canal U 12", it: "Basamento in profilato U 12", de: "Unterbau aus U-Profil Nr. 12" },
          copy: { en: "Higher rigidity and load stability for frequent traffic, heavier vehicles or sites with less-even floors.", zh: "结构刚性与承载稳定性更高，适合高频进出、较重车型或地面平整度较差的场地。", fr: "Rigidité et stabilité supérieures pour usage intensif, véhicules lourds ou sols irréguliers.", es: "Mayor rigidez y estabilidad para uso intensivo, vehículos pesados o suelos irregulares.", it: "Maggiore rigidità e stabilità per uso intenso, veicoli pesanti o pavimenti irregolari.", de: "Höhere Steifigkeit und Stabilität für häufige Nutzung, schwerere Fahrzeuge oder unebene Böden." }
        }
      ]
    };

    const TEXT = {
      en: {
        title: "GUBOT Paint Booth Configurator",
        subtitle: "Automotive spray & baking paint booth · EXW configuration pricing",
        machineOnly: "Machine only · Freight excluded",
        origin: "Origin: China",
        engineering: "Subject to engineering confirmation",
        preset: "Configuration",
        project: "Project details",
        customer: "Customer",
        customerPlaceholder: "Customer name",
        destination: "Destination",
        destinationPlaceholder: "Country / city",
        voltage: "Power supply",
        boothQty: "Booth quantity",
        summary: "Configuration summary",
        estimatedTotal: "Estimated EXW total",
        copy: "Copy summary",
        print: "Print / Save PDF",
        review: "Review",
        terms: "Indicative EXW machine price in USD. Freight, insurance, import duties, destination taxes, unloading and installation are excluded.",
        shell: "Shell & base",
        heatingAir: "Heating & airflow",
        controls: "Controls & lighting",
        optional: "Optional systems",
        wall: "Wall panels",
        door: "Front door",
        checker: "Checker plate",
        grating: "Steel grating",
        platform: "Base platform frame",
        heating: "Heating system",
        exchanger: "Heat exchanger",
        linked: "Linked to heating selection",
        fan: "Supply fan",
        fanQty: "Fan quantity",
        airBox: "Air box",
        plenum: "Plenum chamber",
        duct: "Exhaust duct",
        ductQty: "Duct quantity",
        controlBox: "Control box",
        lighting: "Ceiling lighting",
        waistLights: "Waist lights",
        extraTubes: "Additional LED tubes",
        vfd: "Variable-frequency drive",
        installation: "Electrical & installation materials",
        waterborne: "Waterborne-paint system",
        waterNozzle: "Spray nozzle assembly",
        waterFan: "Waterborne-paint fan",
        unitPrice: "unit",
        unitSubtotal: "Per-booth configuration",
        quantity: "Quantity",
        copied: "Configuration copied",
        resetConfirm: "Reset to the electric standard configuration?",
        openCustomer: "Customer not specified",
        openDestination: "Destination not specified",
        presetElectric: "Electric standard",
        presetDiesel: "Diesel G10",
        presetPremium: "FS20 premium",
        presetCustom: "Custom",
        none: "None",
        resetTitle: "Reset configuration",
        decrease: "Decrease",
        increase: "Increase"
      },
      zh: {
        title: "GUBOT 喷烤漆房配置器",
        subtitle: "汽车喷烤漆房 · EXW配置价格",
        machineOnly: "仅含机器 · 不含运费",
        origin: "原产地：中国",
        engineering: "最终配置以技术确认单为准",
        preset: "配置方案",
        project: "项目信息",
        customer: "客户",
        customerPlaceholder: "客户名称",
        destination: "目的地",
        destinationPlaceholder: "国家 / 城市",
        voltage: "电源",
        boothQty: "烤漆房数量",
        summary: "配置汇总",
        estimatedTotal: "EXW预估总价",
        copy: "复制摘要",
        print: "打印 / 保存PDF",
        review: "查看汇总",
        terms: "美元EXW机器预估价。报价不含运费、保险费、进口关税、目的国税费、卸货和安装费用。",
        shell: "房体与底台",
        heatingAir: "加热与风路",
        controls: "电控与照明",
        optional: "选配系统",
        wall: "墙板",
        door: "正面门",
        checker: "花纹板",
        grating: "钢格栅",
        platform: "底台支撑结构",
        heating: "加热系统",
        exchanger: "换热器",
        linked: "随加热方式自动联动",
        fan: "送风机",
        fanQty: "风机数量",
        airBox: "风箱",
        plenum: "静压室",
        duct: "排风管",
        ductQty: "排风管数量",
        controlBox: "电控箱",
        lighting: "顶部照明",
        waistLights: "腰灯",
        extraTubes: "增加LED灯管",
        vfd: "变频器",
        installation: "电气与安装材料",
        waterborne: "水性漆系统",
        waterNozzle: "喷嘴组件",
        waterFan: "水性漆风机",
        unitPrice: "单价",
        unitSubtotal: "单台配置价",
        quantity: "数量",
        copied: "配置摘要已复制",
        resetConfirm: "恢复为标准电加热配置？",
        openCustomer: "未填写客户",
        openDestination: "未填写目的地",
        presetElectric: "标准电加热",
        presetDiesel: "G10柴油",
        presetPremium: "FS20高配",
        presetCustom: "自定义",
        none: "无",
        resetTitle: "重置配置",
        decrease: "减少",
        increase: "增加"
      },
      fr: {
        title: "Configurateur de cabine de peinture GUBOT",
        subtitle: "Cabine de peinture et de séchage automobile · Tarification de configuration EXW",
        machineOnly: "Machine uniquement · Transport non inclus",
        origin: "Origine : Chine",
        engineering: "Sous réserve de confirmation technique",
        preset: "Configuration",
        project: "Informations du projet",
        customer: "Client",
        customerPlaceholder: "Nom du client",
        destination: "Destination",
        destinationPlaceholder: "Pays / ville",
        voltage: "Alimentation électrique",
        boothQty: "Quantité de cabines",
        summary: "Récapitulatif de la configuration",
        estimatedTotal: "Total EXW estimé",
        copy: "Copier le récapitulatif",
        print: "Imprimer / Enregistrer en PDF",
        review: "Voir le récapitulatif",
        terms: "Prix indicatif EXW de la machine en USD. Le transport, l'assurance, les droits d'importation, les taxes à destination, le déchargement et l'installation ne sont pas inclus.",
        shell: "Structure et soubassement",
        heatingAir: "Chauffage et circulation d'air",
        controls: "Commande et éclairage",
        optional: "Systèmes en option",
        wall: "Panneaux muraux",
        door: "Porte frontale",
        checker: "Tôle antidérapante",
        grating: "Caillebotis en acier",
        platform: "Châssis de soubassement",
        heating: "Système de chauffage",
        exchanger: "Échangeur de chaleur",
        linked: "Lié au système de chauffage",
        fan: "Ventilateur de soufflage",
        fanQty: "Quantité de ventilateurs",
        airBox: "Caisson de traitement d'air",
        plenum: "Plénum",
        duct: "Conduit d'extraction",
        ductQty: "Quantité de conduits",
        controlBox: "Coffret électrique",
        lighting: "Éclairage supérieur",
        waistLights: "Éclairage latéral",
        extraTubes: "Tubes LED supplémentaires",
        vfd: "Variateur de fréquence",
        installation: "Matériel électrique et d'installation",
        waterborne: "Système pour peinture à l'eau",
        waterNozzle: "Ensemble de buses",
        waterFan: "Ventilateur pour peinture à l'eau",
        unitPrice: "unité",
        unitSubtotal: "Configuration par cabine",
        quantity: "Quantité",
        copied: "Récapitulatif copié",
        resetConfirm: "Réinitialiser avec la configuration électrique standard ?",
        openCustomer: "Client non renseigné",
        openDestination: "Destination non renseignée",
        presetElectric: "Électrique standard",
        presetDiesel: "Diesel G10",
        presetPremium: "FS20 haut de gamme",
        presetCustom: "Personnalisé",
        none: "Aucun",
        resetTitle: "Réinitialiser la configuration",
        decrease: "Diminuer",
        increase: "Augmenter"
      },
      es: {
        title: "Configurador de cabina de pintura GUBOT",
        subtitle: "Cabina de pintura y secado para automóviles · Precio de configuración EXW",
        machineOnly: "Solo máquina · Transporte no incluido",
        origin: "Origen: China",
        engineering: "Sujeto a confirmación técnica",
        preset: "Configuración",
        project: "Datos del proyecto",
        customer: "Cliente",
        customerPlaceholder: "Nombre del cliente",
        destination: "Destino",
        destinationPlaceholder: "País / ciudad",
        voltage: "Alimentación eléctrica",
        boothQty: "Cantidad de cabinas",
        summary: "Resumen de configuración",
        estimatedTotal: "Total EXW estimado",
        copy: "Copiar resumen",
        print: "Imprimir / Guardar PDF",
        review: "Ver resumen",
        terms: "Precio indicativo EXW de la máquina en USD. No incluye transporte, seguro, derechos de importación, impuestos en destino, descarga ni instalación.",
        shell: "Estructura y plataforma",
        heatingAir: "Calefacción y flujo de aire",
        controls: "Control e iluminación",
        optional: "Sistemas opcionales",
        wall: "Paneles de pared",
        door: "Puerta frontal",
        checker: "Chapa estriada",
        grating: "Rejilla de acero",
        platform: "Bastidor de plataforma",
        heating: "Sistema de calefacción",
        exchanger: "Intercambiador de calor",
        linked: "Vinculado a la calefacción",
        fan: "Ventilador de impulsión",
        fanQty: "Cantidad de ventiladores",
        airBox: "Caja de aire",
        plenum: "Cámara plenum",
        duct: "Conducto de extracción",
        ductQty: "Cantidad de conductos",
        controlBox: "Cuadro eléctrico",
        lighting: "Iluminación superior",
        waistLights: "Iluminación lateral",
        extraTubes: "Tubos LED adicionales",
        vfd: "Variador de frecuencia",
        installation: "Material eléctrico y de instalación",
        waterborne: "Sistema para pintura al agua",
        waterNozzle: "Conjunto de boquillas",
        waterFan: "Ventilador para pintura al agua",
        unitPrice: "unidad",
        unitSubtotal: "Configuración por cabina",
        quantity: "Cantidad",
        copied: "Resumen copiado",
        resetConfirm: "¿Restablecer la configuración eléctrica estándar?",
        openCustomer: "Cliente no especificado",
        openDestination: "Destino no especificado",
        presetElectric: "Eléctrica estándar",
        presetDiesel: "Diésel G10",
        presetPremium: "FS20 premium",
        presetCustom: "Personalizada",
        none: "Ninguno",
        resetTitle: "Restablecer configuración",
        decrease: "Disminuir",
        increase: "Aumentar"
      },
      it: {
        title: "Configuratore cabina di verniciatura GUBOT",
        subtitle: "Cabina di verniciatura e cottura per autoveicoli · Prezzo configurazione EXW",
        machineOnly: "Solo macchina · Trasporto escluso",
        origin: "Origine: Cina",
        engineering: "Soggetto a conferma tecnica",
        preset: "Configurazione",
        project: "Dati del progetto",
        customer: "Cliente",
        customerPlaceholder: "Nome cliente",
        destination: "Destinazione",
        destinationPlaceholder: "Paese / città",
        voltage: "Alimentazione elettrica",
        boothQty: "Quantità cabine",
        summary: "Riepilogo configurazione",
        estimatedTotal: "Totale EXW stimato",
        copy: "Copia riepilogo",
        print: "Stampa / Salva PDF",
        review: "Vedi riepilogo",
        terms: "Prezzo indicativo EXW della macchina in USD. Trasporto, assicurazione, dazi di importazione, imposte a destino, scarico e installazione sono esclusi.",
        shell: "Struttura e basamento",
        heatingAir: "Riscaldamento e flusso d'aria",
        controls: "Controllo e illuminazione",
        optional: "Sistemi opzionali",
        wall: "Pannelli parete",
        door: "Porta frontale",
        checker: "Lamiera mandorlata",
        grating: "Grigliato in acciaio",
        platform: "Telaio del basamento",
        heating: "Sistema di riscaldamento",
        exchanger: "Scambiatore di calore",
        linked: "Collegato al sistema di riscaldamento",
        fan: "Ventilatore di mandata",
        fanQty: "Quantità ventilatori",
        airBox: "Cassa aria",
        plenum: "Camera plenum",
        duct: "Condotto di estrazione",
        ductQty: "Quantità condotti",
        controlBox: "Quadro elettrico",
        lighting: "Illuminazione superiore",
        waistLights: "Illuminazione laterale",
        extraTubes: "Tubi LED aggiuntivi",
        vfd: "Inverter",
        installation: "Materiale elettrico e di installazione",
        waterborne: "Sistema per vernice all'acqua",
        waterNozzle: "Gruppo ugelli",
        waterFan: "Ventilatore per vernice all'acqua",
        unitPrice: "unità",
        unitSubtotal: "Configurazione per cabina",
        quantity: "Quantità",
        copied: "Riepilogo copiato",
        resetConfirm: "Ripristinare la configurazione elettrica standard?",
        openCustomer: "Cliente non specificato",
        openDestination: "Destinazione non specificata",
        presetElectric: "Elettrica standard",
        presetDiesel: "Diesel G10",
        presetPremium: "FS20 premium",
        presetCustom: "Personalizzata",
        none: "Nessuno",
        resetTitle: "Ripristina configurazione",
        decrease: "Diminuisci",
        increase: "Aumenta"
      },
      de: {
        title: "GUBOT Lackierkabinen-Konfigurator",
        subtitle: "Fahrzeug-Lackier- und Trockenkabine · EXW-Konfigurationspreis",
        machineOnly: "Nur Maschine · Fracht nicht enthalten",
        origin: "Ursprung: China",
        engineering: "Vorbehaltlich technischer Bestätigung",
        preset: "Konfiguration",
        project: "Projektdaten",
        customer: "Kunde",
        customerPlaceholder: "Kundenname",
        destination: "Bestimmungsort",
        destinationPlaceholder: "Land / Stadt",
        voltage: "Stromversorgung",
        boothQty: "Anzahl Kabinen",
        summary: "Konfigurationsübersicht",
        estimatedTotal: "Geschätzter EXW-Gesamtpreis",
        copy: "Übersicht kopieren",
        print: "Drucken / Als PDF speichern",
        review: "Übersicht",
        terms: "Unverbindlicher EXW-Maschinenpreis in USD. Fracht, Versicherung, Einfuhrzölle, Steuern am Bestimmungsort, Entladung und Installation sind nicht enthalten.",
        shell: "Kabine und Unterbau",
        heatingAir: "Heizung und Luftführung",
        controls: "Steuerung und Beleuchtung",
        optional: "Optionale Systeme",
        wall: "Wandpaneele",
        door: "Fronttor",
        checker: "Riffelblech",
        grating: "Stahlgitterrost",
        platform: "Unterbau-Rahmen",
        heating: "Heizsystem",
        exchanger: "Wärmetauscher",
        linked: "Mit Heizsystem gekoppelt",
        fan: "Zuluftventilator",
        fanQty: "Anzahl Ventilatoren",
        airBox: "Luftkasten",
        plenum: "Druckkammer",
        duct: "Abluftkanal",
        ductQty: "Anzahl Kanäle",
        controlBox: "Schaltschrank",
        lighting: "Deckenbeleuchtung",
        waistLights: "Seitenbeleuchtung",
        extraTubes: "Zusätzliche LED-Röhren",
        vfd: "Frequenzumrichter",
        installation: "Elektro- und Installationsmaterial",
        waterborne: "Wasserlacksystem",
        waterNozzle: "Düsensatz",
        waterFan: "Ventilator für Wasserlack",
        unitPrice: "Stück",
        unitSubtotal: "Konfiguration je Kabine",
        quantity: "Anzahl",
        copied: "Übersicht kopiert",
        resetConfirm: "Auf elektrische Standardkonfiguration zurücksetzen?",
        openCustomer: "Kunde nicht angegeben",
        openDestination: "Bestimmungsort nicht angegeben",
        presetElectric: "Elektrisch Standard",
        presetDiesel: "Diesel G10",
        presetPremium: "FS20 Premium",
        presetCustom: "Benutzerdefiniert",
        none: "Keine",
        resetTitle: "Konfiguration zurücksetzen",
        decrease: "Verringern",
        increase: "Erhöhen"
      }
    };

    const DEFAULTS = {
      lang: "en",
      preset: "electric",
      customer: "",
      destination: "",
      voltage: "380 V / 220 V · 3 phase · 4 wire · 50 Hz",
      boothQty: 1,
      wall: "eps04",
      frontDoor: "sheet",
      checker: "checker3",
      grating: "g4-2",
      platform: "galvanized",
      heating: "infraDoor",
      exchanger: "none",
      fan: "hk-cu-3",
      fanQty: 2,
      plenum: "full",
      controlBox: "standard",
      lighting: "light8",
      waistLights: false,
      extraTubes: 0,
      duct: "square600",
      ductQty: 3,
      vfd: "none",
      waterNozzle: false,
      waterFan: "none",
      gasAlarm: false,
      ironTray: true,
      highTempWire: true,
      upperCorner: false,
      lowerCorner: false,
      wiring: true,
      hardware: true
    };

    const PRESETS = {
      electric: {
        wall: "eps04", frontDoor: "sheet", checker: "checker3", grating: "g4-2", platform: "galvanized",
        heating: "infraDoor", exchanger: "none", fan: "hk-cu-3", fanQty: 2, plenum: "full",
        controlBox: "standard", lighting: "light8", waistLights: false, extraTubes: 0,
        duct: "square600", ductQty: 3, vfd: "none", waterNozzle: false, waterFan: "none",
        gasAlarm: false, ironTray: true, highTempWire: true, upperCorner: false, lowerCorner: false,
        wiring: true, hardware: true
      },
      diesel: {
        wall: "eps04", frontDoor: "sheet", checker: "checker3", grating: "g4-2", platform: "galvanized",
        heating: "g10", exchanger: "201-15", fan: "hk-cu-3", fanQty: 2, plenum: "full",
        controlBox: "standard", lighting: "light8", waistLights: false, extraTubes: 0,
        duct: "square600", ductQty: 3, vfd: "none", waterNozzle: false, waterFan: "none",
        gasAlarm: true, ironTray: true, highTempWire: true, upperCorner: false, lowerCorner: false,
        wiring: true, hardware: true
      },
      premium: {
        wall: "rock05", frontDoor: "glass", checker: "checker3", grating: "g5-3", platform: "channel",
        heating: "fs20", exchanger: "304-20", fan: "hk-cu-55", fanQty: 2, plenum: "full",
        controlBox: "standard", lighting: "light10", waistLights: true, extraTubes: 0,
        duct: "round700", ductQty: 3, vfd: "vfd55", waterNozzle: false, waterFan: "none",
        gasAlarm: true, ironTray: true, highTempWire: true, upperCorner: true, lowerCorner: true,
        wiring: true, hardware: true
      }
    };

    function loadState() {
      try {
        const saved = JSON.parse(localStorage.getItem("gubot-paint-booth-config") || "null");
        return Object.assign({}, DEFAULTS, saved || {});
      } catch (_) {
        return Object.assign({}, DEFAULTS);
      }
    }

    let state = loadState();
    let toastTimer = null;

    function saveState() {
      try { localStorage.setItem("gubot-paint-booth-config", JSON.stringify(state)); } catch (_) {}
    }

    function t(key) { return (TEXT[state.lang] || TEXT.en)[key] || TEXT.en[key] || key; }
    function local(value) { return value && typeof value === "object" ? (value[state.lang] ?? value.en ?? value.zh ?? "") : value; }
    function money(value) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }
    function escapeHtml(value) { return String(value == null ? "" : value).replace(/[&<>'"]/g, function (char) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]; }); }
    function findOption(list, id) { return list.find(function (item) { return item.id === id; }) || list[0]; }
    function heatingOption() { return findOption(DATA.heating, state.heating); }
    function isDiesel() { return heatingOption().fuel === "diesel"; }

    function bi(en, zh, fr, es, it, de) {
      return { en: en, zh: zh, fr: fr || en, es: es || en, it: it || en, de: de || en };
    }

    function guideUi(key) {
      return (GUIDE_LABELS[state.lang] || GUIDE_LABELS.en)[key] || GUIDE_LABELS.en[key] || key;
    }

    function makeGuide(tier, benefits, best, consider) {
      return { tier: tier, benefits: benefits, best: best, consider: consider };
    }

    function optionGuide(group, item) {
      const id = item && item.id ? item.id : "";

      if (group === "wall") {
        const thicker = id.endsWith("05") ? bi(
          "The 0.5 mm steel skin is more resistant to dents and keeps a cleaner appearance under frequent workshop use.",
          "0.5 mm 钢板表面抗凹陷能力更好，在高频使用下更容易保持平整外观。"
        ) : bi(
          "The 0.4 mm steel skin keeps weight and initial investment lower.",
          "0.4 mm 钢板能够降低重量与初期投入。"
        );
        if (id.indexOf("eps") === 0) return makeGuide(id.endsWith("05") ? "balanced" : "value", [
          bi("Good thermal insulation with the lowest initial investment in this group.", "在这组墙板中初期投入最低，同时具备良好的保温性能。"),
          thicker
        ], bi("Standard passenger-car repair shops where local fire rules allow an EPS-core panel.", "当地消防规范允许使用 EPS 芯材的普通乘用车维修厂。"), bi("EPS has lower fire resistance than rock wool, so the local fire requirement must be confirmed before ordering.", "EPS 的耐火性能低于岩棉，订购前必须确认当地消防要求。"));
        if (id.indexOf("rock") === 0) return makeGuide(id.endsWith("05") ? "premium" : "safety", [
          bi("Better fire performance, acoustic insulation and high-temperature stability than EPS.", "相比 EPS，防火、隔音与高温稳定性更好。"),
          thicker
        ], bi("Busy shops, safety-focused projects and markets with stricter fire requirements.", "高频使用、重视安全，或消防要求更严格的项目。"), bi("Rock wool is heavier and costs more; the supporting structure and shipping plan should match it.", "岩棉板重量和成本更高，需要匹配相应支撑结构与运输方案。"));
        return makeGuide(id.endsWith("05") ? "premium" : "balanced", [
          bi("Flatter surfaces, reinforced edges and tighter joints create a cleaner, better-sealed booth.", "表面更平整、边框加强、拼缝更紧密，房体密封和成品效果更好。"),
          bi("Hand fabrication makes custom openings and project-specific details easier to prepare.", "手工制作更方便处理定制开孔与项目细节。"),
          thicker
        ], bi("Premium workshops, visible customer areas and projects with non-standard openings or detailed finish requirements.", "高端维修厂、客户可见区域，以及需要非标开孔或精细安装效果的项目。"), bi("The core material and certified fire rating should be confirmed for the final specification.", "最终方案仍需确认芯材种类与对应防火等级。"));
      }

      if (group === "frontDoor") {
        if (id === "aluminum") return makeGuide("value", [bi("Lightweight, corrosion-resistant and easy to open frequently.", "重量轻、耐腐蚀，适合频繁开关。")], bi("General repair shops that value easy operation and a neat appearance.", "重视操作轻便与整洁外观的普通维修厂。"), bi("It offers less impact resistance than a heavier sheet-metal door.", "抗碰撞能力通常不如更厚重的钣金门。"));
        if (id === "sheet") return makeGuide("balanced", [bi("Strong, durable and easy to seal for dependable daily operation.", "强度高、耐用且容易做好密封，适合稳定的日常使用。")], bi("Busy body shops and workshops prioritizing durability and value.", "重视耐用性与性价比的高频钣喷维修厂。"), bi("The closed surface gives less outward visibility than a full-glass door.", "封闭门面比玻璃门的内外可视性低。"));
        if (id === "glass") return makeGuide("premium", [bi("Improves visibility, supervision and the premium appearance of the workshop.", "提升内外可视性、工作监督便利性和门店高级感。")], bi("Customer-facing workshops, training centers and shops that want more natural visual openness.", "客户可见门店、培训中心以及追求通透感的维修厂。"), bi("Higher investment and more frequent cleaning are required to keep the glass presentable.", "投入更高，并需要更频繁清洁以保持玻璃外观。"));
        return makeGuide("premium", [bi("Creates flush vehicle access without a raised ramp when used with a prepared floor pit.", "配合预制地坑可实现无坡道、齐平式车辆进出。")], bi("New-build workshops or sites already prepared for a pit-mounted booth.", "新建维修厂或已经预留地坑的场地。"), bi("Civil-work dimensions and drainage must be confirmed before production.", "生产前必须确认土建尺寸、地坑结构与排水条件。"));
      }

      if (group === "checker") {
        const runs = Number(id.replace("checker", "")) || 1;
        if (runs === 1) return makeGuide("value", [bi("Covers the main wheel path with the lowest material cost.", "以最低材料成本覆盖主要车轮通道。")], bi("Lower-volume passenger-car work with controlled vehicle positioning.", "车辆定位固定、作业量较低的乘用车维修。"), bi("Less solid floor coverage gives the operator a narrower working area.", "实心踏板覆盖较少，人员可站立操作区域更窄。"));
        if (runs === 2) return makeGuide("balanced", [bi("Adds a broader anti-slip working area while controlling weight and cost.", "在控制重量与成本的同时，增加更宽的防滑操作区域。")], bi("Most daily passenger-car repair shop layouts.", "大多数日常乘用车维修厂布局。"), bi("Confirm the final plate layout against wheel tracks and floor openings.", "需根据轮距与地面开口确认最终排布。"));
        return makeGuide("premium", [bi("Provides the widest solid walking and wheel-support area for easier positioning.", "提供最宽的实心行走与车轮支撑区域，车辆定位更方便。")], bi("High-throughput shops and projects that prioritize operator convenience.", "高周转维修厂以及重视操作便利性的项目。"), bi("More steel increases purchase weight and shipping cost.", "钢材用量增加，也会提高采购重量与运输成本。"));
      }

      if (group === "grating") {
        const match = id.match(/^g(\d)-(\d)$/);
        const thickness = match ? Number(match[1]) : 3;
        const runs = match ? Number(match[2]) : 1;
        const strength = thickness >= 5
          ? bi("The heavier 5 × 30 section gives the highest rigidity and resistance to deformation.", "5 × 30 加强规格具有最高刚性与抗变形能力。")
          : thickness >= 4
            ? bi("The 4 × 30 section balances load capacity, durability and cost.", "4 × 30 规格在承载、耐用性和成本之间较均衡。")
            : bi("The lighter 3 × 30 section controls cost for standard passenger-car loads.", "3 × 30 轻型规格适合普通乘用车载荷并控制成本。");
        const coverage = runs >= 5
          ? bi("Five runs maximize open-floor coverage and downward air capture.", "五趟格栅最大化开放地面覆盖与下沉气流捕集。")
          : runs >= 3
            ? bi("Three runs provide broad airflow capture across the main work area.", "三趟格栅可覆盖主要工作区，获得更广的气流捕集范围。")
            : runs === 2
              ? bi("Two runs give balanced floor coverage for common vehicle tracks.", "两趟格栅适配常见车辆轮距，覆盖较均衡。")
              : bi("One run is suitable when only a focused exhaust path is required.", "一趟格栅适用于只需要集中排风通道的项目。");
        return makeGuide(thickness >= 5 || runs >= 5 ? "premium" : thickness >= 4 && runs >= 2 ? "balanced" : "value", [strength, coverage], bi(thickness >= 5 ? "Heavy vehicles, frequent traffic or long-duty installations." : "Passenger-car spray booths with a matched floor and airflow layout.", thickness >= 5 ? "较重车型、高频进出或长周期高负荷使用。" : "地面结构与气流布局匹配的乘用车喷烤漆房。"), bi("Final bearing-bar section, span and load rating must be verified against the booth structure.", "最终承载扁钢规格、跨距与载荷等级必须结合底台结构确认。"));
      }

      if (group === "platform") {
        if (id === "galvanized") return makeGuide("value", [bi("Lighter, corrosion-resistant and faster to assemble on site.", "重量较轻、耐腐蚀，现场安装速度更快。")], bi("Standard passenger-car booths and projects focused on practical total cost.", "普通乘用车烤漆房以及重视整体性价比的项目。"), bi("It has less structural rigidity than a channel-steel frame for heavy or very frequent traffic.", "面对较重车型或非常高频的车辆进出时，整体刚性不如槽钢底台。"));
        return makeGuide("premium", [bi("Higher frame rigidity and load stability improve long-term support under frequent traffic.", "更高的框架刚性与承载稳定性，可提升高频使用下的长期支撑能力。")], bi("Busy shops, heavier vehicles, uneven floors or customers planning a longer service cycle.", "高频维修厂、较重车型、地面平整度较差或计划长期使用的客户。"), bi("The stronger structure is heavier and increases material and shipping cost.", "结构更强，但材料重量与运输成本也更高。"));
      }

      if (group === "heating") {
        const map = {
          infraOpen: makeGuide("value", [bi("Direct radiant heat gives fast local warming with the lowest electric-heating investment.", "直接辐射加热升温响应快，是电加热中投入较低的方案。")], bi("Moderate workloads and customers wanting a simple electric system.", "工作量适中、希望使用简单电加热系统的客户。"), bi("The heating elements are less protected and workshop electrical capacity must be confirmed.", "发热元件防护较少，同时需要确认场地电力容量。")),
          infraDoor: makeGuide("balanced", [bi("An enclosed housing protects the heaters, keeps the wall cleaner and gives a more finished installation.", "带门结构可保护加热器、保持墙面整洁，安装完成度更高。")], bi("Daily repair-shop use where durability and easy cleaning matter.", "重视耐用性和清洁便利性的日常维修厂。"), bi("Costs more than the open type and still requires sufficient electrical capacity.", "成本高于开放式，同时仍需足够的电力容量。")),
          graphene: makeGuide("premium", [bi("Broad radiant output supports faster, more even panel heating and responsive curing.", "更宽的辐射输出有助于更快、更均匀地加热车身板件。")], bi("High-throughput shops using electric power and seeking faster curing consistency.", "使用电力、追求更快烘烤与一致性的高周转维修厂。"), bi("Higher initial cost; verify power supply and local electrical requirements.", "初期投入更高，需要确认供电能力与当地电气要求。")),
          grapheneEx: makeGuide("safety", [bi("Explosion-protected construction adds a safety layer for solvent-related environments.", "防爆结构可为存在溶剂蒸气的环境增加安全保障。")], bi("Projects with stricter safety specifications or customer-required explosion protection.", "安全规范更严格或客户明确要求防爆的项目。"), bi("Premium cost and the full electrical installation must follow the required local protection standard.", "成本较高，整套电气安装也必须符合当地防爆规范。")),
          g10: makeGuide("balanced", [bi("A proven diesel burner provides fast temperature rise without demanding a large electrical heating load.", "成熟柴油燃烧器可快速升温，同时不需要很大的电加热负荷。")], bi("Standard passenger-car booths where diesel is economical and readily available.", "柴油供应方便且经济的普通乘用车烤漆房。"), bi("Requires a matched heat exchanger, fuel system and compliant exhaust arrangement.", "需要匹配换热器、燃油系统与合规排烟方案。")),
          g20: makeGuide("premium", [bi("Higher heating output improves recovery in colder climates, larger booths or faster production cycles.", "更高热输出可改善寒冷地区、大房体或快节拍生产中的温度恢复。")], bi("Busy shops, colder regions and larger passenger-car booths.", "高频维修厂、寒冷地区以及较大的乘用车烤漆房。"), bi("Higher fuel use and airflow must be matched to the heat output.", "燃油消耗更高，送排风量也必须与热输出匹配。")),
          fs20: makeGuide("premium", [bi("Heavy-duty burner capacity supports demanding curing cycles and larger-volume projects.", "重载燃烧能力适合要求更高的烘烤节拍与大空间项目。")], bi("High-duty production, larger booths or projects specifying an industrial-grade burner.", "高负荷生产、大房体或指定工业级燃烧器的项目。"), bi("Highest investment in this group; final burner output must be engineered with the booth volume and airflow.", "本组投入最高，最终燃烧功率必须结合房体容积与风量核算。"))
        };
        return map[id];
      }

      if (group === "exchanger") {
        if (id === "none") return makeGuide("value", [bi("No combustion heat exchanger is needed with an electric heating configuration.", "电加热方案不需要燃烧式换热器。")], bi("Infrared or graphene electric-heating selections.", "红外线或石墨烯电加热配置。"), bi("A diesel burner cannot operate without a correctly matched exchanger.", "柴油燃烧器必须配套正确匹配的换热器。"));
        const is304 = id.indexOf("304") === 0;
        const is20 = id.endsWith("20");
        return makeGuide(is304 && is20 ? "premium" : is304 || is20 ? "balanced" : "value", [
          is304 ? bi("304 stainless steel offers better corrosion and oxidation resistance for humid or demanding service.", "304 不锈钢具有更好的耐腐蚀与抗氧化能力，适合潮湿或高要求使用环境。") : bi("201 stainless steel controls initial cost for normal dry operating environments.", "201 不锈钢适合常规干燥使用环境，并有助于控制初期投入。"),
          is20 ? bi("The 2.0 mm wall improves rigidity and resistance to heat cycling.", "2.0 mm 厚度可提升刚性与反复热循环下的稳定性。") : bi("The 1.5 mm wall balances weight, heat transfer and purchase cost.", "1.5 mm 厚度兼顾重量、换热与采购成本。")
        ], bi(is304 ? "Coastal, humid, high-use or long-service projects." : "Standard diesel-heated passenger-car booths.", is304 ? "沿海、潮湿、高频使用或计划长期运行的项目。" : "常规柴油加热乘用车烤漆房。"), bi("The exchanger material and thickness must match burner output and maintenance conditions.", "换热器材质与厚度必须匹配燃烧器热输出和维护条件。"));
      }

      if (group === "fan") {
        const copper = id.indexOf("-cu-") > -1;
        const rawPower = id.split("-").pop();
        const power = rawPower === "55" ? 5.5 : rawPower === "75" ? 7.5 : Number(rawPower) || 3;
        const powerBenefit = power >= 9
          ? bi("This high-power motor is intended for large booths, long ducts or high system resistance.", "该大功率电机适合大房体、长风管或系统阻力较高的项目。")
          : power >= 5.5
            ? bi("The higher motor power supports stronger airflow or additional duct resistance.", "较高电机功率可支持更大风量或更高风管阻力。")
            : power >= 4
              ? bi("This middle power level gives extra airflow margin over a basic 3 kW setup.", "该中等功率相比基础 3 kW 配置提供更多风量余量。")
              : bi("A 3 kW motor is a practical starting point for many standard passenger-car booths.", "3 kW 电机是许多普通乘用车烤漆房的实用起点。");
        return makeGuide(copper && power >= 5.5 ? "premium" : copper ? "balanced" : "value", [
          copper ? bi("A copper-winding motor generally handles heat and continuous daily duty better than an aluminum-winding motor.", "铜芯电机通常比铝芯电机具有更好的散热与连续工作能力。") : bi("An aluminum-winding motor reduces initial cost and weight for lighter or intermittent duty.", "铝芯电机可降低初期投入与重量，适合负荷较轻或间歇使用。"),
          powerBenefit
        ], bi(power >= 9 ? "Large-vehicle booths and engineered high-airflow systems." : power >= 5.5 ? "Busy shops or systems with higher air resistance." : "Standard passenger-car repair shop operation.", power >= 9 ? "大型车辆烤漆房与经过计算的高风量系统。" : power >= 5.5 ? "高频维修厂或系统阻力较高的项目。" : "普通乘用车维修厂日常使用。"), bi("Bigger is not automatically better: motor power must match fan curve, booth volume, filters and duct resistance.", "功率并非越大越好，必须与风机曲线、房体容积、过滤系统和风管阻力匹配。"));
      }

      if (group === "airBox") return makeGuide("balanced", [bi("The chamber is automatically matched to the chosen electric or diesel heating route.", "风柜会根据所选电加热或柴油加热路线自动匹配。")], bi("Keeping the heating source, filtration and airflow path in one coordinated system.", "让加热源、过滤与气流路径保持系统匹配。"), bi("Final chamber dimensions depend on fan quantity, heating equipment and site access.", "最终风柜尺寸取决于风机数量、加热设备与现场通道。"));

      if (group === "plenum") {
        if (id === "full") return makeGuide("premium", [bi("A full plenum distributes supply air more evenly across the ceiling for steadier downdraft airflow.", "满顶静压室可让送风更均匀地覆盖整个顶部，形成更稳定的下沉气流。")], bi("Quality-focused refinishing and larger or frequently used booths.", "重视喷涂质量、房体较大或高频使用的项目。"), bi("Requires more material and sufficient roof height.", "材料用量更多，并需要足够的顶部高度。"));
        return makeGuide("value", [bi("A one-third plenum reduces material and height requirements for compact projects.", "三分之一静压室可减少材料与顶部高度需求。")], bi("Space-restricted sites and lower-volume work where budget is the priority.", "空间受限、工作量较低且预算优先的场地。"), bi("Air distribution is less uniform than a full plenum and must be checked against booth size.", "送风均匀性不如满顶静压室，需要结合房体尺寸确认。"));
      }

      if (group === "duct") {
        if (id === "none") return makeGuide("value", [bi("Avoids duplicate duct cost when a compliant local exhaust route already exists.", "当现场已有合规排风管路时，可避免重复采购。")], bi("Projects using an existing or locally fabricated exhaust system.", "使用现有排风系统或计划在当地制作风管的项目。"), bi("Do not select this unless the discharge route, size and local environmental rules are confirmed.", "只有确认排放路径、尺寸和当地环保要求后才可选择。"));
        const large = id.indexOf("700") > -1;
        const round = id.indexOf("round") === 0;
        return makeGuide(large ? "premium" : "balanced", [
          round ? bi("Round duct gives smoother airflow and usually lower resistance and leakage risk.", "圆形风管气流更顺畅，通常阻力更低且更容易控制漏风。") : bi("Square duct fits neatly along walls and ceilings and is straightforward to fabricate.", "方形风管便于贴合墙面与顶部布置，制作安装也更直接。"),
          large ? bi("The larger 700 mm section supports higher airflow with lower air velocity and pressure loss.", "更大的 700 mm 截面可在较低风速与压力损失下支持更高风量。") : bi("The 600 mm section keeps space and material cost lower for standard airflow systems.", "600 mm 截面可为标准风量系统节省空间与材料成本。")
        ], bi(large ? "Higher-airflow booths, longer duct routes or systems with more resistance." : "Common passenger-car booth exhaust layouts.", large ? "高风量、长风管或系统阻力较大的项目。" : "常见乘用车烤漆房排风布局。"), bi("Final diameter, length and quantity must be calculated with fan static pressure and the actual site route.", "最终截面、长度与数量必须结合风机静压和现场实际路线计算。"));
      }

      if (group === "controlBox") {
        if (id === "standard") return makeGuide("balanced", [bi("Provides the spray/bake sequence, fan control and operating interlocks expected for a paint booth.", "提供烤漆房所需的喷漆/烘烤流程、风机控制与运行联锁。")], bi("Automotive spray and baking booth operation.", "汽车喷烤漆房使用。"), bi("Voltage, components and safety functions must be adapted to the destination market.", "电压、元件与安全功能需要按目的地市场调整。"));
        return makeGuide("value", [bi("Designed around extraction and dust-control tasks for a sanding booth.", "围绕打磨房的抽风与粉尘控制工序设计。")], bi("Dedicated sanding or preparation rooms.", "独立打磨房或准备间。"), bi("It is not a substitute for the spray-and-bake safety logic required in a paint booth.", "不能替代喷烤漆房所需的喷漆与烘烤安全逻辑。"));
      }

      if (group === "lighting") {
        if (id === "light8") return makeGuide("value", [bi("Eight ceiling-light sets provide a practical illumination level for a standard booth.", "八组顶灯可为标准房体提供实用照明。")], bi("General repair work with a standard booth length and height.", "标准长度与高度房体的一般维修作业。"), bi("Dark colors and detailed color matching may benefit from more ceiling or side light.", "深色车漆与精细调色可能需要更多顶灯或侧面照明。"));
        return makeGuide("premium", [bi("Ten ceiling-light sets improve uniformity and reduce shadows during paint inspection.", "十组顶灯可提升照度均匀性，减少喷涂检查时的阴影。")], bi("High-finish work, darker paint colors and shops that inspect panels carefully.", "高品质喷涂、深色车漆以及重视板件检查的维修厂。"), bi("Adds purchase cost and electrical load, so target lux should guide the final count.", "会增加采购成本与电负荷，最终数量应依据目标照度确定。"));
      }

      if (group === "waistLights") return makeGuide("premium", [bi("Side lighting reveals low-angle reflections, color differences and surface defects that ceiling light can miss.", "腰灯可显示顶灯不易发现的低角度反光、色差与表面缺陷。")], bi("Color matching, premium refinishing and quality-control focused shops.", "调色、高端修补以及重视质量检查的维修厂。"), bi("Adds cleaning, wiring and lamp-replacement points along the booth walls.", "会增加墙面清洁、布线和灯管维护点。"));
      if (group === "extraTube") return makeGuide("balanced", [bi("Additional tubes raise illuminance or add redundancy in larger and darker workspaces.", "增加灯管可提升照度，也能为较大或偏暗的工作空间提供冗余。")], bi("Custom booth sizes or customers with a specified lux target.", "非标房体或对照度有明确要求的客户。"), bi("Quantity should follow a lighting calculation rather than simply maximizing the count.", "数量应依据照度计算确定，不建议单纯追求越多越好。"));

      if (group === "vfd") {
        if (id === "none") return makeGuide("value", [bi("Fixed-speed operation keeps the control system simple and lowers initial cost.", "定速运行可简化控制系统并降低初期投入。")], bi("Stable, single-mode airflow requirements and cost-sensitive projects.", "风量需求稳定、运行模式单一且预算敏感的项目。"), bi("There is no fine airflow adjustment or soft-start energy benefit.", "无法精细调节风量，也没有软启动与部分负荷节能优势。"));
        return makeGuide("premium", [bi("A VFD provides soft starting, airflow balancing and potential energy savings at partial load.", "变频器可实现软启动、风量平衡，并在部分负荷下节约能耗。")], bi("Busy shops, multi-stage operation and projects that need airflow commissioning.", "高频维修厂、多工序运行以及需要现场风量调试的项目。"), bi("The VFD rating must match the motor power and local electrical standard.", "变频器功率必须与电机功率及当地电气标准匹配。"));
      }

      if (group === "waterNozzle") return makeGuide("premium", [bi("Focused compressed-air movement helps waterborne basecoat flash off faster between coats.", "定向压缩空气可帮助水性底色漆在涂层之间更快闪干。")], bi("Shops regularly using waterborne paint and seeking shorter cycle times.", "经常使用水性漆并希望缩短作业节拍的维修厂。"), bi("Requires clean, dry compressed air and correct nozzle positioning.", "需要洁净干燥的压缩空气以及正确的喷嘴位置。"));
      if (group === "waterFan") {
        if (id === "none") return makeGuide("value", [bi("No dedicated acceleration fan is needed when waterborne paint is not part of the process.", "不使用水性漆时，无需配置专用加速风机。")], bi("Solvent-based paint workflows or customers using a separate drying method.", "溶剂型涂料流程或采用其他干燥方式的客户。"), bi("Waterborne basecoat may dry more slowly without targeted air movement.", "缺少定向气流时，水性底色漆闪干速度可能较慢。"));
        const high = id === "water075";
        return makeGuide(high ? "premium" : "balanced", [high ? bi("The 0.75 kW fan gives stronger air movement for faster flash-off or larger work areas.", "0.75 kW 风机可提供更强气流，适合更快闪干或更大工作区域。") : id === "water055" ? bi("The 0.55 kW fan balances drying assistance, energy use and noise for regular work.", "0.55 kW 风机兼顾干燥辅助、能耗与噪音，适合常规使用。") : bi("The standard fan adds dedicated air movement without overcomplicating the system.", "标准水性漆风机可提供专用气流，同时保持系统简单。")], bi(high ? "High-throughput waterborne work or larger booths." : "Regular passenger-car waterborne refinishing.", high ? "高周转水性漆作业或较大房体。" : "常规乘用车水性漆修补。"), bi("More airflow also means more power and noise; output should match booth size and paint instructions.", "更大风量也会增加功率与噪音，应结合房体尺寸和油漆工艺要求。"));
      }

      if (["gasAlarm", "ironTray", "highTempWire", "upperCorner", "lowerCorner", "wiring", "hardware"].indexOf(group) > -1) {
        const map = {
          gasAlarm: makeGuide("safety", [bi("Provides early warning of combustible vapor accumulation around the booth system.", "可对设备周围可燃气体积聚进行提前报警。")], bi("Solvent-based paint, diesel/gas heating and safety-focused projects.", "溶剂型喷涂、柴油/燃气加热以及重视安全的项目。"), bi("Sensor location, calibration and local code requirements must be confirmed.", "需要确认传感器位置、校准方式与当地规范。")),
          ironTray: makeGuide("balanced", [bi("Keeps wiring organized, protected and easier to inspect or maintain.", "让线路更整齐、更受保护，也方便检查维护。")], bi("Professional installations and sites where cables need a defined route.", "专业安装以及需要明确线缆路径的场地。"), bi("Tray size and route must match the final cable quantity.", "线槽尺寸与路径必须匹配最终线缆数量。")),
          highTempWire: makeGuide("safety", [bi("Heat-resistant cable improves reliability around heating equipment and high-temperature zones.", "耐高温线缆可提升加热设备及高温区域附近的长期可靠性。")], bi("All heated booths, especially diesel or high-output systems.", "所有带加热功能的烤漆房，特别是柴油或高功率系统。"), bi("Cable rating and certification must meet the destination market standard.", "线缆等级与认证必须符合目的地市场标准。")),
          upperCorner: makeGuide("balanced", [bi("A formed upper corner protects transitions and gives cable-tray routing a cleaner finish.", "成型上转角可保护过渡位置，并让线槽走向更整洁。")], bi("Visible, tidy installations with routed cable trays.", "重视外观整洁并使用线槽布线的项目。"), bi("The exact quantity depends on the final route.", "具体数量取决于最终布线路径。")),
          lowerCorner: makeGuide("balanced", [bi("A stronger lower corner protects vulnerable low-level transitions from workshop contact.", "加强型下转角可保护容易受到车间碰撞的低位过渡处。")], bi("Busy workshops and installations with exposed lower cable-tray routes.", "高频车间以及下部线槽较外露的安装环境。"), bi("The exact quantity depends on the final route.", "具体数量取决于最终布线路径。")),
          wiring: makeGuide("balanced", [bi("A prepared wire and cable package reduces local sourcing work and helps installation progress faster.", "预配电线电缆套装可减少当地采购工作，并加快安装进度。")], bi("Overseas projects wanting a more complete delivery package.", "希望设备交付更完整的海外项目。"), bi("Final cable type and cross-section must follow voltage, load and local code.", "最终线缆类型与截面必须符合电压、负载和当地规范。")),
          hardware: makeGuide("value", [bi("A matched hardware and sealant kit reduces missing small parts during assembly.", "匹配的五金与密封胶套装可减少安装时缺少小零件的问题。")], bi("Overseas installation and sites with limited access to compatible fasteners.", "海外安装以及不方便采购兼容紧固件的场地。"), bi("Local installers should still verify consumable quantities before work begins.", "当地安装人员仍需在开工前核对耗材数量。"))
        };
        return map[group];
      }

      return null;
    }

    function guideSummary(group, item) {
      const guide = optionGuide(group, item);
      if (!guide || !guide.benefits || !guide.benefits.length) return "";
      return guide.benefits.slice(0, 2).map(function (line) { return local(line); }).join(" ");
    }

    function guidePanel(group, item) {
      const guide = optionGuide(group, item);
      if (!guide) return "";
      const benefits = guide.benefits.map(function (line) { return '<li>' + escapeHtml(local(line)) + '</li>'; }).join("");
      return '<div class="selected-value-guide"><div class="selected-value-guide__head"><span class="value-tier value-tier--' + escapeHtml(guide.tier) + '">' + escapeHtml(guideUi(guide.tier)) + '</span><strong>' + escapeHtml(guideUi("why")) + '</strong></div><ul>' + benefits + '</ul><div class="selected-value-guide__meta"><p><span>' + escapeHtml(guideUi("best")) + '</span>' + escapeHtml(local(guide.best)) + '</p><p><span>' + escapeHtml(guideUi("consider")) + '</span>' + escapeHtml(local(guide.consider)) + '</p></div></div>';
    }

    function sectionGuide(key) {
      const guide = SECTION_GUIDES[key];
      return '<div class="system-guide"><figure><img src="' + escapeHtml(guide.image) + '" loading="lazy" decoding="async" alt="' + escapeHtml(local(guide.title)) + '"><figcaption>' + escapeHtml(guideUi("reference")) + '</figcaption></figure><div class="system-guide__copy"><span>' + escapeHtml(guideUi("why")) + '</span><h3>' + escapeHtml(local(guide.title)) + '</h3><p>' + escapeHtml(local(guide.copy)) + '</p></div></div>';
    }

    function comparisonCards(type) {
      const entries = COMPARISON_COPY[type];
      const title = type === "wall" ? guideUi("compareWall") : guideUi("compareBase");
      return '<div class="component-comparison component-comparison--' + type + '"><h3>' + escapeHtml(title) + '</h3><div class="component-comparison__grid">' + entries.map(function (entry) {
        return '<article class="component-card"><div class="component-visual component-visual--' + escapeHtml(entry.className) + '" aria-hidden="true"><span></span></div><div><h4>' + escapeHtml(local(entry.title)) + '</h4><p>' + escapeHtml(local(entry.copy)) + '</p></div></article>';
      }).join("") + '</div></div>';
    }

    function normalizeState() {
      if (!TEXT[state.lang]) state.lang = "en";
      state.boothQty = Math.min(20, Math.max(1, Number(state.boothQty) || 1));
      state.fanQty = Math.min(6, Math.max(1, Number(state.fanQty) || 1));
      state.ductQty = Math.min(30, Math.max(0, Number(state.ductQty) || 0));
      state.extraTubes = Math.min(64, Math.max(0, Number(state.extraTubes) || 0));
      if (isDiesel() && state.exchanger === "none") state.exchanger = "201-15";
      if (!isDiesel()) state.exchanger = "none";
    }

    function sectionHeading(icon, title) {
      return '<div class="section-heading"><i data-lucide="' + icon + '"></i><h2>' + escapeHtml(title) + '</h2></div>';
    }

    function optionHeading(title, linked) {
      return '<div class="option-title-row"><h3 class="option-title">' + escapeHtml(title) + '</h3>' +
        (linked ? '<span class="linked-status"><i data-lucide="link-2"></i>' + escapeHtml(t("linked")) + '</span>' : '') + '</div>';
    }

    function radioGroup(title, key, options, disabled) {
      let html = '<div class="option-block">' + optionHeading(title, disabled) + '<div class="choice-list">';
      options.forEach(function (item) {
        const selected = state[key] === item.id;
        const notes = [local(item.note), guideSummary(key, item)].filter(Boolean).join(" · ");
        html += '<label class="choice-row' + (selected ? ' selected' : '') + (disabled ? ' disabled' : '') + '">' +
          '<input type="radio" name="' + key + '" data-state="' + key + '" value="' + escapeHtml(item.id) + '"' + (selected ? ' checked' : '') + (disabled ? ' disabled' : '') + '>' +
          '<span class="choice-copy"><span class="choice-label">' + escapeHtml(local(item.label)) + (selected ? '<span class="selected-pill">' + escapeHtml(guideUi("selected")) + '</span>' : '') + '</span>' +
          (notes ? '<span class="choice-note">' + escapeHtml(notes) + '</span>' : '') + '</span>' +
          '<span class="choice-price">' + (item.price ? '+' + money(item.price) : t("none")) + '</span></label>';
      });
      return html + '</div>' + guidePanel(key, findOption(options, state[key])) + '</div>';
    }

    function selectControl(title, key, options) {
      const selected = findOption(options, state[key]);
      let optionHtml = '';
      options.forEach(function (item) {
        optionHtml += '<option value="' + escapeHtml(item.id) + '"' + (state[key] === item.id ? ' selected' : '') + '>' + escapeHtml(local(item.label)) + '</option>';
      });
      return '<div class="option-block">' + optionHeading(title, false) + '<div class="select-row"><div class="select-wrap"><select class="field-control" data-state="' + key + '">' + optionHtml + '</select></div><span class="inline-price">' + (selected.price ? '+' + money(selected.price) : t("none")) + '</span></div>' + guidePanel(key, selected) + '</div>';
    }

    function stepper(key, value, min, max) {
      return '<div class="stepper" role="group"><button type="button" data-step-key="' + key + '" data-step="-1" data-min="' + min + '" data-max="' + max + '" aria-label="' + escapeHtml(t("decrease")) + '"><i data-lucide="minus"></i></button><output>' + value + '</output><button type="button" data-step-key="' + key + '" data-step="1" data-min="' + min + '" data-max="' + max + '" aria-label="' + escapeHtml(t("increase")) + '"><i data-lucide="plus"></i></button></div>';
    }

    function checkboxRow(item, stateKey, guideGroup) {
      const selected = Boolean(state[stateKey]);
      const notes = [local(item.note), guideSummary(guideGroup || stateKey, item)].filter(Boolean).join(" · ");
      return '<label class="choice-row' + (selected ? ' selected' : '') + '"><input type="checkbox" data-state="' + stateKey + '"' + (selected ? ' checked' : '') + '><span class="choice-copy"><span class="choice-label">' + escapeHtml(local(item.label)) + (selected ? '<span class="selected-pill">' + escapeHtml(guideUi("selected")) + '</span>' : '') + '</span>' + (notes ? '<span class="choice-note">' + escapeHtml(notes) + '</span>' : '') + '</span><span class="choice-price">+' + money(item.price) + '</span></label>';
    }

    function renderProjectFields() {
      document.getElementById("project-fields").innerHTML =
        '<label><span class="field-label">' + t("customer") + '</span><input class="field-control" data-project="customer" value="' + escapeHtml(state.customer) + '" placeholder="' + escapeHtml(t("customerPlaceholder")) + '"></label>' +
        '<label><span class="field-label">' + t("destination") + '</span><input class="field-control" data-project="destination" value="' + escapeHtml(state.destination) + '" placeholder="' + escapeHtml(t("destinationPlaceholder")) + '"></label>' +
        '<label><span class="field-label">' + t("voltage") + '</span><select class="field-control" data-state="voltage"><option' + (state.voltage.indexOf("380") === 0 ? ' selected' : '') + '>380 V / 220 V · 3 phase · 4 wire · 50 Hz</option><option' + (state.voltage.indexOf("400") === 0 ? ' selected' : '') + '>400 V / 220 V · 3 phase · 4 wire · 50 Hz</option><option' + (state.voltage.indexOf("415") === 0 ? ' selected' : '') + '>415 V / 240 V · 3 phase · 4 wire · 50 Hz</option></select></label>' +
        '<div><span class="field-label">' + t("boothQty") + '</span>' + stepper("boothQty", state.boothQty, 1, 20) + '</div>';
    }

    function renderConfig() {
      const heat = heatingOption();
      const airBox = DATA.airBoxes[heat.fuel];
      const selectedFan = findOption(DATA.fans, state.fan);
      const selectedDuct = findOption(DATA.ducts, state.duct);
      const extraTubePrice = DATA.extraTube.price * state.extraTubes;
      let fanOptions = '';
      DATA.fans.forEach(function (item) { fanOptions += '<option value="' + item.id + '"' + (item.id === state.fan ? ' selected' : '') + '>' + escapeHtml(local(item.label)) + '</option>'; });
      let ductOptions = '';
      DATA.ducts.forEach(function (item) { ductOptions += '<option value="' + item.id + '"' + (item.id === state.duct ? ' selected' : '') + '>' + escapeHtml(local(item.label)) + '</option>'; });

      let accessories = '<div class="option-block">' + optionHeading(t("installation"), false) + '<div class="checkbox-list">';
      DATA.accessories.forEach(function (item) { accessories += checkboxRow(item, item.id, item.id); });
      accessories += '</div></div>';

      const shell = '<section class="config-section">' + sectionHeading("panels-top-left", t("shell")) +
        sectionGuide("shell") + comparisonCards("wall") +
        radioGroup(t("wall"), "wall", DATA.wallPanels, false) +
        radioGroup(t("door"), "frontDoor", DATA.frontDoors, false) +
        radioGroup(t("checker"), "checker", DATA.checkerPlate, false) +
        selectControl(t("grating"), "grating", DATA.gratings) +
        comparisonCards("base") +
        radioGroup(t("platform"), "platform", DATA.platformFrames, false) + '</section>';

      const heating = '<section class="config-section">' + sectionHeading("wind", t("heatingAir")) +
        sectionGuide("heating") +
        radioGroup(t("heating"), "heating", DATA.heating, false) +
        radioGroup(t("exchanger"), "exchanger", DATA.exchangers, !isDiesel()) +
        '<div class="option-block">' + optionHeading(t("fan"), false) + '<div class="split-control"><label><span class="field-label">' + t("fan") + '</span><select class="field-control" data-state="fan">' + fanOptions + '</select></label><div><span class="field-label">' + t("fanQty") + '</span>' + stepper("fanQty", state.fanQty, 1, 6) + '</div></div><div class="stepper-row" style="margin-top:10px"><span>' + escapeHtml(local(selectedFan.label)) + ' × ' + state.fanQty + '</span><span class="inline-price">+' + money(selectedFan.price * state.fanQty) + '</span></div>' + guidePanel("fan", selectedFan) + '</div>' +
        '<div class="option-block">' + optionHeading(t("airBox"), true) + '<div class="linked-row"><span class="linked-copy"><i data-lucide="link-2"></i><span>' + escapeHtml(local(airBox.label)) + '</span></span><span class="inline-price">+' + money(airBox.price) + '</span></div>' + guidePanel("airBox", airBox) + '</div>' +
        radioGroup(t("plenum"), "plenum", DATA.plenums, false) +
        '<div class="option-block">' + optionHeading(t("duct"), false) + '<div class="split-control"><label><span class="field-label">' + t("duct") + '</span><select class="field-control" data-state="duct">' + ductOptions + '</select></label><div><span class="field-label">' + t("ductQty") + '</span>' + stepper("ductQty", state.ductQty, 0, 30) + '</div></div><div class="stepper-row" style="margin-top:10px"><span>' + escapeHtml(local(selectedDuct.label)) + (selectedDuct.price ? ' × ' + state.ductQty : '') + '</span><span class="inline-price">' + (selectedDuct.price ? '+' + money(selectedDuct.price * state.ductQty) : t("none")) + '</span></div>' + guidePanel("duct", selectedDuct) + '</div>' + '</section>';

      const controls = '<section class="config-section">' + sectionHeading("circuit-board", t("controls")) +
        sectionGuide("controls") +
        radioGroup(t("controlBox"), "controlBox", DATA.controlBoxes, false) +
        radioGroup(t("lighting"), "lighting", DATA.lighting, false) +
        '<div class="option-block">' + optionHeading(t("waistLights"), false) + '<div class="choice-list">' + checkboxRow(DATA.waistLights, "waistLights", "waistLights") + '</div>' + guidePanel("waistLights", DATA.waistLights) + '</div>' +
        '<div class="option-block">' + optionHeading(t("extraTubes"), false) + '<div class="stepper-row"><span>' + escapeHtml(local(DATA.extraTube.label)) + '</span>' + stepper("extraTubes", state.extraTubes, 0, 64) + '</div><div class="stepper-row" style="margin-top:10px"><span>' + money(DATA.extraTube.price) + ' / ' + t("unitPrice") + '</span><span class="inline-price">' + (extraTubePrice ? '+' + money(extraTubePrice) : t("none")) + '</span></div>' + guidePanel("extraTube", DATA.extraTube) + '</div>' +
        selectControl(t("vfd"), "vfd", DATA.vfds) + accessories + '</section>';

      const optional = '<section class="config-section">' + sectionHeading("paint-bucket", t("optional")) +
        sectionGuide("optional") +
        '<div class="option-block">' + optionHeading(t("waterborne"), false) + '<div class="checkbox-list">' + checkboxRow(DATA.waterNozzle, "waterNozzle", "waterNozzle") + '</div>' + guidePanel("waterNozzle", DATA.waterNozzle) + '</div>' +
        selectControl(t("waterFan"), "waterFan", DATA.waterFans) + '</section>';

      document.getElementById("config-root").innerHTML = shell + heating + controls + optional;
    }

    function addLine(items, item, multiplier, note) {
      if (!item || !item.price || multiplier === 0) return;
      items.push({ label: local(item.label), note: note || local(item.note), price: item.price * (multiplier || 1) });
    }

    function lineItems() {
      const items = [];
      addLine(items, findOption(DATA.wallPanels, state.wall), 1);
      addLine(items, findOption(DATA.frontDoors, state.frontDoor), 1);
      addLine(items, findOption(DATA.checkerPlate, state.checker), 1);
      addLine(items, findOption(DATA.gratings, state.grating), 1);
      addLine(items, findOption(DATA.platformFrames, state.platform), 1);
      addLine(items, heatingOption(), 1);
      if (isDiesel()) addLine(items, findOption(DATA.exchangers, state.exchanger), 1);
      const fan = findOption(DATA.fans, state.fan);
      addLine(items, fan, state.fanQty, t("quantity") + ": " + state.fanQty);
      addLine(items, DATA.airBoxes[heatingOption().fuel], 1, t("linked"));
      addLine(items, findOption(DATA.plenums, state.plenum), 1);
      addLine(items, findOption(DATA.controlBoxes, state.controlBox), 1);
      addLine(items, findOption(DATA.lighting, state.lighting), 1);
      if (state.waistLights) addLine(items, DATA.waistLights, 1);
      if (state.extraTubes) addLine(items, DATA.extraTube, state.extraTubes, t("quantity") + ": " + state.extraTubes);
      const duct = findOption(DATA.ducts, state.duct);
      if (duct.price && state.ductQty) addLine(items, duct, state.ductQty, t("quantity") + ": " + state.ductQty);
      addLine(items, findOption(DATA.vfds, state.vfd), 1);
      DATA.accessories.forEach(function (item) { if (state[item.id]) addLine(items, item, 1); });
      if (state.waterNozzle) addLine(items, DATA.waterNozzle, 1);
      addLine(items, findOption(DATA.waterFans, state.waterFan), 1);
      return items;
    }

    function renderSummary() {
      const items = lineItems();
      const unit = items.reduce(function (sum, item) { return sum + item.price; }, 0);
      const total = unit * state.boothQty;
      const presetName = state.preset === "electric" ? t("presetElectric") : state.preset === "diesel" ? t("presetDiesel") : state.preset === "premium" ? t("presetPremium") : t("presetCustom");
      document.getElementById("summary-project").innerHTML = escapeHtml(state.customer || t("openCustomer")) + '<br>' + escapeHtml(state.destination || t("openDestination")) + '<br>' + escapeHtml(presetName) + ' · ' + escapeHtml(state.voltage);
      document.getElementById("total-value").textContent = money(total);
      document.getElementById("mobile-total-value").textContent = money(total);
      document.getElementById("total-detail").textContent = t("unitSubtotal") + ": " + money(unit) + " · " + t("quantity") + ": " + state.boothQty;
      let html = '';
      items.forEach(function (item) {
        html += '<div class="summary-item"><span class="summary-item-name">' + escapeHtml(item.label) + (item.note ? '<span class="summary-item-note">' + escapeHtml(item.note) + '</span>' : '') + '</span><span class="summary-item-price">' + money(item.price) + '</span></div>';
      });
      document.getElementById("summary-list").innerHTML = html;
      return { items: items, unit: unit, total: total, presetName: presetName };
    }

    function renderToolbar() {
      const presets = [
        ["electric", t("presetElectric")], ["diesel", t("presetDiesel")], ["premium", t("presetPremium")], ["custom", t("presetCustom")]
      ];
      document.getElementById("preset-control").innerHTML = presets.map(function (entry) { return '<button type="button" data-preset="' + entry[0] + '" class="' + (state.preset === entry[0] ? 'active' : '') + '"' + (entry[0] === 'custom' ? ' disabled' : '') + '>' + escapeHtml(entry[1]) + '</button>'; }).join('');
      const languages = [["en", "EN"], ["zh", "中文"], ["fr", "FR"], ["es", "ES"], ["it", "IT"], ["de", "DE"]];
      document.getElementById("language-control").innerHTML = languages.map(function (entry) {
        return '<button type="button" data-lang="' + entry[0] + '" class="' + (state.lang === entry[0] ? 'active' : '') + '">' + entry[1] + '</button>';
      }).join('');
    }

    function updateStaticText() {
      document.documentElement.lang = ({ en: "en", zh: "zh-CN", fr: "fr", es: "es", it: "it", de: "de" })[state.lang] || "en";
      document.title = t("title");
      document.querySelectorAll("[data-text]").forEach(function (element) {
        const key = element.getAttribute("data-text");
        element.textContent = t(key);
      });
      document.getElementById("reset-button").title = t("resetTitle");
      document.getElementById("reset-button").setAttribute("aria-label", document.getElementById("reset-button").title);
    }

    function refreshIcons() {
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
    }

    function renderAll() {
      normalizeState();
      updateStaticText();
      renderToolbar();
      renderProjectFields();
      renderConfig();
      renderSummary();
      saveState();
      refreshIcons();
      if (typeof syncLeadForm === "function") syncLeadForm();
    }

    function setCustomAndRender() {
      state.preset = "custom";
      renderAll();
    }

    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1800);
    }

    function copySummary() {
      const result = renderSummary();
      const lines = [t("title"), "", t("customer") + ": " + (state.customer || "-"), t("destination") + ": " + (state.destination || "-"), t("voltage") + ": " + state.voltage, ""];
      result.items.forEach(function (item) { lines.push(item.label + (item.note ? " (" + item.note + ")" : "") + ": " + money(item.price)); });
      lines.push("", t("unitSubtotal") + ": " + money(result.unit), t("quantity") + ": " + state.boothQty, t("estimatedTotal") + ": " + money(result.total), "", t("terms"), "", "SHANGHAI GUBOT AUTOMOBILE TECHNOLOGY CO., LTD.", "Gubot sales team · +86 133 8603 9948 · contact@gubotspraybooth.com");
      const text = lines.join("\n");
      const fallback = function () {
        const area = document.createElement("textarea");
        area.value = text;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        showToast(t("copied"));
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { showToast(t("copied")); }).catch(fallback); else fallback();
    }


    function buildLeadSummary(extraNotes) {
      const result = renderSummary();
      const lines = [
        t("title"),
        "",
        t("customer") + ": " + (state.customer || "-"),
        t("destination") + ": " + (state.destination || "-"),
        t("voltage") + ": " + state.voltage,
        ""
      ];
      result.items.forEach(function (item) {
        lines.push(item.label + (item.note ? " (" + item.note + ")" : "") + ": " + money(item.price));
      });
      lines.push(
        "",
        t("unitSubtotal") + ": " + money(result.unit),
        t("quantity") + ": " + state.boothQty,
        t("estimatedTotal") + ": " + money(result.total),
        "",
        t("terms"),
        "",
        "SHANGHAI GUBOT AUTOMOBILE TECHNOLOGY CO., LTD.",
        "Gubot sales team · +86 133 8603 9948 · contact@gubotspraybooth.com"
      );
      if (extraNotes) {
        lines.push("", "Customer notes:", extraNotes);
      }
      return lines.join("\n");
    }

    function syncLeadForm() {
      const form = document.getElementById("configurator-lead-form");
      if (!form) return;
      const notes = document.getElementById("configurator-notes");
      const message = document.getElementById("configurator-message");
      const preview = document.getElementById("configurator-preview");
      const pageUrl = form.querySelector("[name='page_url']");
      const summary = buildLeadSummary(notes ? notes.value.trim() : "");
      if (message) message.value = summary;
      if (preview) preview.value = summary;
      if (pageUrl) pageUrl.value = window.location.href;
    }

    document.addEventListener("change", function (event) {
      const element = event.target.closest("[data-state]");
      if (!element) return;
      const key = element.getAttribute("data-state");
      state[key] = element.type === "checkbox" ? element.checked : element.value;
      setCustomAndRender();
    });

    document.addEventListener("input", function (event) {
      const element = event.target.closest("[data-project]");
      if (!element) return;
      state[element.getAttribute("data-project")] = element.value;
      renderSummary();
      saveState();
    });

    document.addEventListener("click", function (event) {
      const stepButton = event.target.closest("[data-step-key]");
      if (stepButton) {
        const key = stepButton.getAttribute("data-step-key");
        const delta = Number(stepButton.getAttribute("data-step"));
        const min = Number(stepButton.getAttribute("data-min"));
        const max = Number(stepButton.getAttribute("data-max"));
        state[key] = Math.min(max, Math.max(min, Number(state[key]) + delta));
        setCustomAndRender();
        return;
      }
      const presetButton = event.target.closest("[data-preset]");
      if (presetButton && !presetButton.disabled) {
        const preset = presetButton.getAttribute("data-preset");
        state = Object.assign({}, state, PRESETS[preset], { preset: preset });
        renderAll();
        return;
      }
      const langButton = event.target.closest("[data-lang]");
      if (langButton) {
        state.lang = langButton.getAttribute("data-lang");
        renderAll();
      }
    });

    document.getElementById("reset-button").addEventListener("click", function () {
      if (window.confirm(t("resetConfirm"))) {
        const lang = state.lang;
        state = Object.assign({}, DEFAULTS, { lang: lang });
        renderAll();
      }
    });
    document.getElementById("copy-button").addEventListener("click", copySummary);
    document.getElementById("print-button").addEventListener("click", function () { window.print(); });
    document.getElementById("review-button").addEventListener("click", function () { document.getElementById("summary-panel").scrollIntoView({ behavior: "smooth", block: "start" }); });
    const quoteButton = document.getElementById("request-configured-quote");
    if (quoteButton) {
      quoteButton.addEventListener("click", function () {
        syncLeadForm();
        if (window.gubotTrackEvent) window.gubotTrackEvent("configurator_request_quote_click", { lead_source: "Paint booth configurator" });
      });
    }
    const leadForm = document.getElementById("configurator-lead-form");
    if (leadForm) {
      leadForm.addEventListener("submit", syncLeadForm);
      const notes = document.getElementById("configurator-notes");
      if (notes) notes.addEventListener("input", syncLeadForm);
    }

    renderAll();
    syncLeadForm();
  
