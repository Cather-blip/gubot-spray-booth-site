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
        html += '<label class="choice-row' + (selected ? ' selected' : '') + (disabled ? ' disabled' : '') + '">' +
          '<input type="radio" name="' + key + '" data-state="' + key + '" value="' + escapeHtml(item.id) + '"' + (selected ? ' checked' : '') + (disabled ? ' disabled' : '') + '>' +
          '<span class="choice-copy"><span class="choice-label">' + escapeHtml(local(item.label)) + '</span>' +
          (local(item.note) ? '<span class="choice-note">' + escapeHtml(local(item.note)) + '</span>' : '') + '</span>' +
          '<span class="choice-price">' + (item.price ? '+' + money(item.price) : t("none")) + '</span></label>';
      });
      return html + '</div></div>';
    }

    function selectControl(title, key, options) {
      const selected = findOption(options, state[key]);
      let optionHtml = '';
      options.forEach(function (item) {
        optionHtml += '<option value="' + escapeHtml(item.id) + '"' + (state[key] === item.id ? ' selected' : '') + '>' + escapeHtml(local(item.label)) + '</option>';
      });
      return '<div class="option-block">' + optionHeading(title, false) + '<div class="select-row"><div class="select-wrap"><select class="field-control" data-state="' + key + '">' + optionHtml + '</select></div><span class="inline-price">' + (selected.price ? '+' + money(selected.price) : t("none")) + '</span></div></div>';
    }

    function stepper(key, value, min, max) {
      return '<div class="stepper" role="group"><button type="button" data-step-key="' + key + '" data-step="-1" data-min="' + min + '" data-max="' + max + '" aria-label="' + escapeHtml(t("decrease")) + '"><i data-lucide="minus"></i></button><output>' + value + '</output><button type="button" data-step-key="' + key + '" data-step="1" data-min="' + min + '" data-max="' + max + '" aria-label="' + escapeHtml(t("increase")) + '"><i data-lucide="plus"></i></button></div>';
    }

    function checkboxRow(item, stateKey) {
      const selected = Boolean(state[stateKey]);
      return '<label class="choice-row' + (selected ? ' selected' : '') + '"><input type="checkbox" data-state="' + stateKey + '"' + (selected ? ' checked' : '') + '><span class="choice-copy"><span class="choice-label">' + escapeHtml(local(item.label)) + '</span>' + (local(item.note) ? '<span class="choice-note">' + escapeHtml(local(item.note)) + '</span>' : '') + '</span><span class="choice-price">+' + money(item.price) + '</span></label>';
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
      DATA.accessories.forEach(function (item) { accessories += checkboxRow(item, item.id); });
      accessories += '</div></div>';

      const shell = '<section class="config-section">' + sectionHeading("panels-top-left", t("shell")) +
        radioGroup(t("wall"), "wall", DATA.wallPanels, false) +
        radioGroup(t("door"), "frontDoor", DATA.frontDoors, false) +
        radioGroup(t("checker"), "checker", DATA.checkerPlate, false) +
        selectControl(t("grating"), "grating", DATA.gratings) +
        radioGroup(t("platform"), "platform", DATA.platformFrames, false) + '</section>';

      const heating = '<section class="config-section">' + sectionHeading("wind", t("heatingAir")) +
        radioGroup(t("heating"), "heating", DATA.heating, false) +
        radioGroup(t("exchanger"), "exchanger", DATA.exchangers, !isDiesel()) +
        '<div class="option-block">' + optionHeading(t("fan"), false) + '<div class="split-control"><label><span class="field-label">' + t("fan") + '</span><select class="field-control" data-state="fan">' + fanOptions + '</select></label><div><span class="field-label">' + t("fanQty") + '</span>' + stepper("fanQty", state.fanQty, 1, 6) + '</div></div><div class="stepper-row" style="margin-top:10px"><span>' + escapeHtml(local(selectedFan.label)) + ' × ' + state.fanQty + '</span><span class="inline-price">+' + money(selectedFan.price * state.fanQty) + '</span></div></div>' +
        '<div class="option-block">' + optionHeading(t("airBox"), true) + '<div class="linked-row"><span class="linked-copy"><i data-lucide="link-2"></i><span>' + escapeHtml(local(airBox.label)) + '</span></span><span class="inline-price">+' + money(airBox.price) + '</span></div></div>' +
        radioGroup(t("plenum"), "plenum", DATA.plenums, false) +
        '<div class="option-block">' + optionHeading(t("duct"), false) + '<div class="split-control"><label><span class="field-label">' + t("duct") + '</span><select class="field-control" data-state="duct">' + ductOptions + '</select></label><div><span class="field-label">' + t("ductQty") + '</span>' + stepper("ductQty", state.ductQty, 0, 30) + '</div></div><div class="stepper-row" style="margin-top:10px"><span>' + escapeHtml(local(selectedDuct.label)) + (selectedDuct.price ? ' × ' + state.ductQty : '') + '</span><span class="inline-price">' + (selectedDuct.price ? '+' + money(selectedDuct.price * state.ductQty) : t("none")) + '</span></div></div>' + '</section>';

      const controls = '<section class="config-section">' + sectionHeading("circuit-board", t("controls")) +
        radioGroup(t("controlBox"), "controlBox", DATA.controlBoxes, false) +
        radioGroup(t("lighting"), "lighting", DATA.lighting, false) +
        '<div class="option-block">' + optionHeading(t("waistLights"), false) + '<div class="choice-list">' + checkboxRow(DATA.waistLights, "waistLights") + '</div></div>' +
        '<div class="option-block">' + optionHeading(t("extraTubes"), false) + '<div class="stepper-row"><span>' + escapeHtml(local(DATA.extraTube.label)) + '</span>' + stepper("extraTubes", state.extraTubes, 0, 64) + '</div><div class="stepper-row" style="margin-top:10px"><span>' + money(DATA.extraTube.price) + ' / ' + t("unitPrice") + '</span><span class="inline-price">' + (extraTubePrice ? '+' + money(extraTubePrice) : t("none")) + '</span></div></div>' +
        selectControl(t("vfd"), "vfd", DATA.vfds) + accessories + '</section>';

      const optional = '<section class="config-section">' + sectionHeading("paint-bucket", t("optional")) +
        '<div class="option-block">' + optionHeading(t("waterborne"), false) + '<div class="checkbox-list">' + checkboxRow(DATA.waterNozzle, "waterNozzle") + '</div></div>' +
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
  
