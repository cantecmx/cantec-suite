/* Botones de idioma (ES/EN) y descarga en PDF para las presentaciones de Cantec.
 * Se carga desde el <head> de cada presentacion. Todo vive en window porque el
 * bundle reemplaza el documentElement al desempacar.
 *
 * Uso: <script src="deck-tools.js" data-deck="cobranzas"></script>
 *   data-deck  -> llave del diccionario y nombre del PDF (<deck>-es.pdf / <deck>-en.pdf)
 *   data-lang="own" -> la presentacion ya trae su boton de idioma; solo se agrega PDF
 */
(function () {
  var me = document.currentScript;
  var DECK = me.getAttribute('data-deck');
  var OWN_LANG = me.getAttribute('data-lang') === 'own';

  var DICT = {
    cobranzas: {
      'COBRANZAS 4.0 · CASOS DE ÉXITO': 'COLLECTIONS 4.0 · SUCCESS STORIES',
      'Recuperamos tu cartera, de': 'We recover your portfolio, from',
      '181 días a más de 6 años.': '181 days to over 6 years.',
      'Segmentamos por probabilidad de pago, gestionamos por teléfono y en campo, y negociamos hasta el acuerdo.': 'We segment by likelihood to pay, work accounts by phone and in the field, and negotiate all the way to settlement.',
      'recuperación omnicanal': 'omnichannel recovery',
      'entre 17 agencias': 'among 17 agencies',
      'en cartera adicional': 'in additional portfolio',
      'POR QUÉ CANTEC EN COBRANZA': 'WHY CANTEC FOR COLLECTIONS',
      'Tres palancas que convierten': 'Three levers that turn',
      'cartera vencida en flujo': 'past-due portfolio into cash flow',
      'Segmentación inteligente': 'Smart segmentation',
      'Priorizamos por probabilidad de pago': 'We prioritize by likelihood to pay',
      'Estrategia distinta por tramo de antigüedad': 'A different strategy for each aging bucket',
      'Tableros en vivo para el cliente': 'Live dashboards for the client',
      'Gestión omnicanal': 'Omnichannel management',
      'Voz, WhatsApp, correo y redes': 'Voice, WhatsApp, email and social media',
      'Gestión presencial en campo': 'In-person field collections',
      'IA que contacta y especialistas que negocian': 'AI that reaches out, specialists who negotiate',
      'Cumplimiento auditado': 'Audited compliance',
      'Gestores capacitados en FDCPA y Regulation F': 'Agents trained in FDCPA and Regulation F',
      'Ejecutivos bilingües inglés-español': 'Bilingual English-Spanish agents',
      'RESULTADOS QUE VERÁS EN ESTA PRESENTACIÓN': 'RESULTS YOU WILL SEE IN THIS PRESENTATION',
      'recuperación omnicanal ·': 'omnichannel recovery ·',
      'líneas con churn evitado ·': 'lines saved from churn ·',
      'entre 17 agencias ·': 'among 17 agencies ·',
      'en cartera ·': 'in portfolio ·',
      'Financiera de consumo': 'Consumer lender',
      'CASO DE ÉXITO · BANCA · CARTERA DE MÁS DE 360 DÍAS': 'SUCCESS STORY · BANKING · PORTFOLIO OVER 360 DAYS',
      'Recuperación en el': 'Recovery at the',
      'tope del rango': 'top of the range',
      'de la industria': 'for the industry',
      'RECUPERACIÓN': 'RECOVERY',
      'OMNICANAL': 'OMNICHANNEL',
      'Tope del rango de industria (8%–15%)': 'Top of the industry range (8%–15%)',
      'cuentas asignadas': 'accounts assigned',
      'recuperados por gestor': 'recovered per agent',
      'sobre saldo asignado': 'of assigned balance',
      'RESULTADO CANTEC': 'CANTEC RESULT',
      'Recuperación omnicanal': 'Omnichannel recovery',
      '· TOPE': '· TOP',
      'Recuperación vía gestión telefónica': 'Recovery via phone collections',
      'Cuentas con negociación / convenio': 'Accounts with negotiation / agreement',
      'Recuperación vía gestión presencial': 'Recovery via field collections',
      'Cuentas con recuperación': 'Accounts with recovery',
      'Contactabilidad efectiva': 'Effective contact rate',
      'Contacto con titular (RPC)': 'Right-party contact (RPC)',
      'Escala 0%–60% · TOPE = resultado en el máximo del rango de industria': 'Scale 0%–60% · TOP = result at the top of the industry range',
      'CASO DE ÉXITO · TELECOMUNICACIONES': 'SUCCESS STORY · TELECOMMUNICATIONS',
      '44,330 líneas rescatadas': '44,330 lines rescued',
      'del churn en una cohorte de 200,000 líneas en prechurn': 'from churn in a cohort of 200,000 pre-churn lines',
      'líneas en prechurn': 'pre-churn lines',
      'con churn evitado': 'saved from churn',
      'en churn recuperadas': 'recovered from churn',
      'cuentas con mora curada': 'delinquent accounts cured',
      'clientes reactivados': 'customers reactivated',
      'MÉTRICAS DE GESTIÓN': 'MANAGEMENT METRICS',
      'Conversión a promesa de pago': 'Promise-to-pay conversion',
      'Promesas de pago cumplidas': 'Promises to pay kept',
      'Cure / regularización': 'Cure / account regularization',
      'SEGMENTO PRECOBRANZA': 'EARLY-STAGE COLLECTIONS SEGMENT',
      'de cure / regularización': 'cure / regularization',
      '85% de contacto con titular · 86% de conversión a promesa de pago · 84% de resolución al primer contacto': '85% right-party contact · 86% promise-to-pay conversion · 84% first-contact resolution',
      'CASO DE ÉXITO · RETAIL Y CRÉDITO': 'SUCCESS STORY · RETAIL AND CREDIT',
      '#2 entre todas las agencias': '#2 among all agencies',
      'en las carteras más difíciles de Sears y Sanborns': 'on the hardest portfolios at Sears and Sanborns',
      'Cartera de 3 a 5 años': '3- to 5-year portfolio',
      'de 17 agencias': 'of 17 agencies',
      '0.67% de recuperación telefónica': '0.67% phone recovery',
      'Mediana': 'Median',
      'la mediana de las demás agencias': 'the median of the other agencies',
      'Cartera de 361 días a 2 años': '361-day to 2-year portfolio',
      'de 14 agencias': 'of 14 agencies',
      '1.13% de recuperación telefónica': '1.13% phone recovery',
      'Fuente: ranking de recuperación de agencias del cliente por tramo de antigüedad. Mediana calculada sobre las demás agencias del tramo.': "Source: the client's agency recovery ranking by aging bucket. Median calculated across the other agencies in each bucket.",
      'CASO DE ÉXITO · FINANCIERA DE CONSUMO EN MÉXICO': 'SUCCESS STORY · CONSUMER LENDER IN MEXICO',
      'Proveedor': 'The',
      '#1 de cobranza': '#1 collections provider',
      'para una financiera de consumo en México': 'for a consumer lender in Mexico',
      'adicionales en cartera asignada a CANTEC': 'in additional portfolio assigned to CANTEC',
      'La ampliación de cartera llegó por nuestro desempeño.': 'The larger portfolio came because of our performance.',
      'Hoy somos su proveedor número uno de cobranza en México.': 'Today we are their number one collections provider in Mexico.',
      'Tu cartera vencida puede volver a ser flujo.': 'Your past-due portfolio can become cash flow again.',
      '¿Por dónde empezamos?': 'Where do we start?',
      'DIRECTOR GENERAL MÉXICO': 'CEO, MEXICO'
    },
    'experiencia-360': {
      'EXPERIENCIA 360 · SERVICIO AL CLIENTE': 'EXPERIENCE 360 · CUSTOMER SERVICE',
      'Soluciones a la mano de tus clientes,': 'Solutions within reach of your customers,',
      'en cada canal.': 'on every channel.',
      'Omnicanalidad, certificaciones internacionales y capacidad instalada para crecer cuando tu operación lo pida.': 'Omnichannel service, international certifications and installed capacity to grow whenever your operation needs it.',
      'POR QUÉ CANTEC': 'WHY CANTEC',
      'Tres fortalezas para': 'Three strengths to',
      'operar tu servicio al cliente': 'run your customer service',
      'Omnicanalidad real': 'True omnichannel',
      'Voz, WhatsApp, redes sociales,': 'Voice, WhatsApp, social media,',
      'chat y correo.': 'chat and email.',
      'Videollamada en kioscos': 'Video calls at kiosks',
      'y dentro de la app.': 'and inside the app.',
      'Un solo equipo, un solo': 'One team, one',
      'historial del cliente.': 'customer history.',
      'Certificaciones': 'International',
      'internacionales': 'certifications',
      'Controles auditados': 'Audited controls',
      'desde el día uno.': 'from day one.',
      'Homologaciones más rápidas': 'Faster approvals',
      'con reguladores y marcas.': 'with regulators and brands.',
      'Capacidad ya instalada': 'Capacity already in place',
      '+3,000 posiciones listas': '+3,000 seats ready',
      'para escalar.': 'to scale.',
      '+15 centros de contacto': '+15 contact centers',
      'en 5 países.': 'in 5 countries.',
      '6 data centers propios.': '6 company-owned data centers.',
      'colaboradores en la región': 'employees across the region',
      'años de experiencia': 'years of experience',
      'asesores en una sola cuenta': 'agents on a single account',
      'países con operación': 'countries with operations',
      'OMNICANALIDAD': 'OMNICHANNEL',
      'Una sola conversación,': 'One conversation,',
      'en el canal que elija tu cliente': 'on the channel your customer chooses',
      'UN SOLO': 'ONE',
      'EQUIPO': 'TEAM',
      'Voz': 'Voice',
      'Redes': 'Social',
      'sociales': 'media',
      'Correo': 'Email',
      'Video en': 'Video at',
      'kioscos': 'kiosks',
      'Dentro de': 'Inside',
      'la app': 'the app',
      'Historial único': 'Single history',
      'El cliente cambia de canal': 'Customers switch channels',
      'sin repetir su caso.': 'without repeating their case.',
      'Ruteo por especialidad': 'Skills-based routing',
      'Cada contacto llega al': 'Every contact reaches the',
      'asesor que lo resuelve.': 'agent who can resolve it.',
      'IA + factor humano': 'AI + the human touch',
      'La IA resuelve lo frecuente y': 'AI handles the routine and',
      'escala lo complejo a especialistas.': 'escalates the complex to specialists.',
      'Calidad al 100%': '100% quality coverage',
      'La analítica revisa todas las': 'Analytics reviews every',
      'interacciones, no una muestra.': 'interaction, not a sample.',
      'CASO DE ÉXITO · TELECOMUNICACIONES': 'SUCCESS STORY · TELECOMMUNICATIONS',
      'El proveedor más grande de servicio al cliente de': 'The largest customer service provider for',
      'Claro en Latinoamérica': 'Claro in Latin America',
      'personas dedicadas solo a esta cuenta': 'people dedicated to this account alone',
      'ESPECIALIDADES DE NEGOCIO': 'BUSINESS LINES',
      'Personas': 'Consumer',
      'Hogar': 'Home',
      'Corporativo': 'Enterprise',
      'CANALES DE ATENCIÓN': 'SERVICE CHANNELS',
      'Redes sociales': 'Social media',
      'Video kioscos': 'Video kiosks',
      'Video app': 'In-app video',
      'Nivel de servicio': 'Service level',
      'Satisfacción en soluciones': 'Resolution satisfaction',
      'Superamos los indicadores base que Claro exige a sus proveedores.': 'We exceed the baseline KPIs Claro requires of its providers.',
      'CASO DE ÉXITO · SERVICIOS FINANCIEROS': 'SUCCESS STORY · FINANCIAL SERVICES',
      'De SOFIPO a banco:': 'From SOFIPO to bank:',
      'más de 7 años acompañando su transformación': 'over 7 years supporting their transformation',
      'Arranque': 'Launch',
      '6 posiciones de servicio al cliente, cuando aún eran SOFIPO.': '6 customer service seats, back when they were still a SOFIPO.',
      'Formalización': 'Formalization',
      'Adopción, formalización y entrega de manuales que cumplen la regulación en cada nivel.': 'Adoption, formalization and delivery of manuals that meet regulation at every level.',
      'Revisiones especializadas': 'Specialized reviews',
      'Auditorías y certificaciones de Mastercard, CNBV y PCI DSS.': 'Audits and certifications from Mastercard, CNBV and PCI DSS.',
      'Licencia bancaria': 'Banking license',
      'Bankaool obtiene su licencia para operar como banco en México.': 'Bankaool obtains its license to operate as a bank in Mexico.',
      'Nuestras certificaciones ISO 22301 e ISO 27001 aceleraron el proceso.': 'Our ISO 22301 and ISO 27001 certifications sped up the process.',
      'HOY': 'TODAY',
      'Tecnología + factor humano especializado: un equilibrio que optimiza recursos sin perder su visión de tener soluciones a la mano para sus clientes.': 'Technology + specialized human talent: a balance that optimizes resources while keeping their vision of putting solutions within reach of their customers.',
      'CERTIFICACIONES INTERNACIONALES': 'INTERNATIONAL CERTIFICATIONS',
      'Llegamos auditados: tu operación arranca con': 'We arrive audited: your operation starts with',
      'la confianza de reguladores y marcas': 'the trust of regulators and brands',
      'Seguridad de la información': 'Information security',
      'Los datos de tus clientes, protegidos en cada interacción y canal.': "Your customers' data, protected in every interaction and channel.",
      'Continuidad del negocio': 'Business continuity',
      'Tu servicio no se detiene: planes probados ante cualquier contingencia.': "Your service doesn't stop: tested plans for any contingency.",
      'Manejo de datos de pago': 'Payment data handling',
      'Atención de tarjetahabientes y pagos bajo el estándar de la industria.': 'Cardholder and payment service under the industry standard.',
      'Calidad en gestión tecnológica': 'IT service management quality',
      'Procesos tecnológicos medidos, documentados y mejorados.': 'Technology processes that are measured, documented and improved.',
      'Además operamos bajo estándares': 'We also operate under',
      'y': 'and',
      'para procesos de salud y centros de contacto.': 'standards for healthcare processes and contact centers.',
      'CAPACIDAD INSTALADA': 'INSTALLED CAPACITY',
      'Crecimiento inmediato': 'Immediate growth',
      'cuando tu operación lo pida': 'whenever your operation needs it',
      'Operamos desde 6 hasta más de 1,000 posiciones por cuenta, con espacio para crecer sin esperar.': 'We run from 6 to over 1,000 seats per account, with room to grow without waiting.',
      'Bankaool al iniciar': 'Bankaool at launch',
      'Claro hoy': 'Claro today',
      'Posiciones listas para escalar': 'Seats ready to scale',
      'Barras a escala real sobre 5,000 posiciones.': 'Bars drawn to scale out of 5,000 seats.',
      'data centers propios': 'company-owned data centers',
      'centros de contacto activos': 'active contact centers',
      'colaboradores': 'employees',
      'Infraestructura y tecnología ya instaladas': 'Infrastructure and technology already in place',
      'Equipos formados por especialidad': 'Teams trained by specialty',
      'Respaldo multisede y multipaís': 'Multi-site, multi-country backup',
      'Tus clientes merecen soluciones a la mano.': 'Your customers deserve solutions within reach.',
      '¿Por dónde empezamos?': 'Where do we start?',
      'DIRECTOR GENERAL MÉXICO': 'CEO, MEXICO'
    }
  };

  var es2en = DICT[DECK] || {};
  var en2es = {};
  Object.keys(es2en).forEach(function (k) { if (!(es2en[k] in en2es)) en2es[es2en[k]] = k; });
  var lang = 'es';
  var applying = false;

  // Traduce los nodos de texto de la presentacion (no entra al shadow DOM de la UI de deck-stage)
  function translate(root) {
    var map = lang === 'en' ? es2en : en2es;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var jobs = [], n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (p && (p.closest('#cx-tools') || /^(SCRIPT|STYLE)$/.test(p.tagName))) continue;
      var key = n.nodeValue.trim();
      if (key && Object.prototype.hasOwnProperty.call(map, key) && map[key] !== key) jobs.push([n, n.nodeValue.replace(key, map[key])]);
    }
    applying = true;
    jobs.forEach(function (j) { j[0].nodeValue = j[1]; });
    applying = false;
  }

  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    translate(document.body);
    var b = document.getElementById('cx-lang-label');
    if (b) b.textContent = l === 'es' ? 'EN' : 'ES';
  }
  window.cxSetLang = setLang; // usado al generar los PDF

  // Idioma actual de la presentacion comercial (su boton propio muestra el idioma al que cambia)
  function currentLang() {
    if (!OWN_LANG) return lang;
    var b = document.querySelector('button[title="Idioma / Language"] span');
    return b && b.textContent.trim() === 'ES' ? 'en' : 'es';
  }

  var PILL = 'display:flex;align-items:center;gap:8px;padding:9px 16px;border:1px solid rgba(242,176,47,.75);border-radius:999px;background:rgba(10,10,10,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);color:#f2b02f;font-family:Poppins,sans-serif;font-size:13px;font-weight:600;letter-spacing:.16em;cursor:pointer;text-decoration:none;line-height:normal';
  var ICON_GLOBE = '<svg viewBox="0 0 24 24" style="width:16px;height:16px" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"></path></svg>';
  var ICON_DL = '<svg viewBox="0 0 24 24" style="width:16px;height:16px" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M4 19h16"></path></svg>';

  function pill(id, icon, label) {
    var b = document.createElement('button');
    b.type = 'button';
    b.id = id;
    b.setAttribute('style', PILL);
    b.innerHTML = icon + '<span id="' + id + '-label">' + label + '</span>';
    b.onmouseenter = function () { b.style.background = '#f2b02f'; b.style.color = '#0A0A0A'; };
    b.onmouseleave = function () { b.style.background = 'rgba(10,10,10,.72)'; b.style.color = '#f2b02f'; };
    return b;
  }

  function downloadPdf() {
    var l = currentLang();
    var a = document.createElement('a');
    a.href = DECK + '-' + l + '.pdf';
    a.download = DECK + (l === 'en' ? '-EN' : '') + '.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function mount() {
    if (document.getElementById('cx-tools') || document.getElementById('cx-pdf')) return true;
    var st = document.createElement('style');
    st.textContent = '@media print{#cx-tools,#cx-pdf,div:has(> #cn-deck-btn-a){display:none!important}}';
    document.head.appendChild(st);
    var pdf = pill('cx-pdf', ICON_DL, 'PDF');
    pdf.title = 'Descargar PDF';
    pdf.onclick = downloadPdf;
    if (OWN_LANG) {
      // Presentacion comercial: el PDF va junto a sus botones y solo aplica en modo presentacion
      var anchor = document.getElementById('cn-deck-btn-b');
      if (!anchor) return false;
      anchor.parentNode.appendChild(pdf);
      return true;
    }
    if (!document.querySelector('deck-stage')) return false;
    var bar = document.createElement('div');
    bar.id = 'cx-tools';
    bar.setAttribute('style', 'position:fixed;right:16px;top:16px;z-index:9999;display:flex;gap:10px');
    var lb = pill('cx-lang', ICON_GLOBE, 'EN');
    lb.title = 'Idioma / Language';
    lb.onclick = function () { setLang(lang === 'es' ? 'en' : 'es'); };
    bar.appendChild(lb);
    bar.appendChild(pdf);
    document.body.appendChild(bar);
    // Si React vuelve a pintar texto (contadores, cambios de diapositiva) se re-traduce
    new MutationObserver(function () { if (!applying && lang === 'en') translate(document.body); })
      .observe(document.body, { childList: true, subtree: true, characterData: true });
    return true;
  }

  var tries = 0;
  var t = setInterval(function () { if (mount() || ++tries > 300) clearInterval(t); }, 100);
})();
