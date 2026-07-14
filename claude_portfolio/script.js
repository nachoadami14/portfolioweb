/* ============================================================
   VERTEX PROJECT — script.js
   Premium AI Automation Agency Landing Page
   ============================================================ */

'use strict';

/* ——— Translations ——— */
const TRANSLATIONS = {
  es: {
    page_title: 'Vertex Project | Agencia de Automatización con IA',

    nav_services: 'Servicios',
    nav_process: 'Proceso',
    nav_projects: 'Proyectos',
    nav_about: 'Nosotros',
    nav_cta: 'Reservar Llamada',
    mobile_cta: 'Contacto',

    hero_badge: 'Agencia de Automatización con IA',
    hero_headline_static: 'Automatiza tu Negocio.',
    hero_desc: 'Diseñamos sistemas de automatización inteligentes que eliminan tareas repetitivas, integran tus herramientas y ayudan a tu negocio a operar a la velocidad de la IA, para que tu equipo se enfoque en lo que realmente importa.',
    hero_cta_primary: 'Reservar Llamada Gratis',
    hero_cta_secondary: 'Ver Proyectos',
    hero_social_proof: 'De la confianza de <strong>más de 20</strong> empresas en todo el mundo',
    hero_card_hours: 'Horas Ahorradas',
    hero_card_automations: 'Automatizaciones',

    tech_label: 'Tecnologías en las que confiamos',

    about_label: 'Sobre Nosotros',
    about_title: 'Construyendo el Futuro de la<br><span class="text-gradient">Inteligencia de Negocios</span>',
    about_body_1: 'Vertex Project es una agencia de automatización con IA que diseña y desarrolla sistemas inteligentes para transformar la manera en que operan las empresas. Eliminamos flujos de trabajo repetitivos, integramos herramientas fragmentadas y desplegamos soluciones de IA que escalan.',
    about_body_2: 'Trabajamos de la mano con fundadores, equipos de operaciones y clientes corporativos para identificar oportunidades de automatización y ofrecer resultados medibles: respuestas más rápidas, reducción de costos y crecimiento en la facturación.',
    about_tag_1: 'Soluciones a Medida',
    about_tag_2: 'Seguridad Empresarial',
    about_tag_3: 'Entrega Rápida',
    about_tag_4: 'Sistemas Escalables',
    stat_label_projects: 'Proyectos Entregados',
    stat_label_clients: 'Clientes Satisfechos',
    stat_label_automations: 'Automatizaciones Creadas',
    stat_label_hours: 'Horas Ahorradas',

    services_label: 'Qué Construimos',
    services_title: 'Servicios de IA que<br><span class="text-gradient">Impulsan Resultados Reales</span>',
    services_subtitle: 'Desde chatbots inteligentes hasta complejos motores de flujo de trabajo: creamos sistemas de automatización adaptados a tu negocio.',
    svc1_title: 'Chatbots de IA',
    svc1_desc: 'Bots conversacionales inteligentes que atienden consultas de clientes las 24/7 con precisión humana.',
    svc2_title: 'Agentes de Voz con IA',
    svc2_desc: 'Agentes de voz con sonido natural que reservan citas, responden llamadas y califican leads automáticamente.',
    svc3_title: 'Automatización de Negocios',
    svc3_desc: 'Automatización de extremo a extremo de procesos comerciales repetitivos en diferentes departamentos y plataformas.',
    svc4_title: 'Automatización de CRM',
    svc4_desc: 'Automatiza todo tu flujo de CRM: desde el ingreso de datos hasta el seguimiento y la progresión de etapas del trato.',
    svc5_title: 'Calificación de Leads',
    svc5_desc: 'Sistemas de puntuación y calificación de prospectos impulsados por IA que priorizan a tus clientes de mayor valor.',
    svc6_title: 'Automatización de Ventas',
    svc6_desc: 'Secuencias de contacto automatizadas, campañas de seguimiento y gestión de embudos que cierran más ventas.',
    svc7_title: 'Soporte al Cliente',
    svc7_desc: 'Sistemas de soporte con IA que resuelven tickets automáticamente, derivando a humanos solo los casos complejos.',
    svc8_title: 'Reserva de Citas',
    svc8_desc: 'Sistemas de reserva completamente automatizados con recordatorios, reprogramación y sincronización de calendarios.',
    svc9_title: 'Automatización de Email',
    svc9_desc: 'Campañas de correo personalizadas activadas por comportamiento, potenciadas por copys generados por IA que convierten.',
    svc10_title: 'Automatización de WhatsApp',
    svc10_desc: 'Flujos automatizados de WhatsApp Business para soporte, ventas, notificaciones y secuencias de bienvenida.',
    svc11_title: 'Asistentes de IA a Medida',
    svc11_desc: 'Asistentes de IA personalizados entrenados con tus datos, flujos de trabajo y el tono de tu marca para uso interno o de clientes.',
    svc12_title: 'Integración de APIs',
    svc12_desc: 'Integración perfecta entre cualquier herramienta y plataforma, haciendo que todo tu ecosistema digital funcione como uno solo.',
    svc13_title: 'Herramientas Internas',
    svc13_desc: 'Dashboards personalizados, herramientas de reporte y aplicaciones internas que optimizan las operaciones de tu equipo.',
    svc14_title: 'Optimización de Procesos',
    svc14_desc: 'Evaluamos, rediseñamos y automatizamos flujos de trabajo existentes para eliminar cuellos de botella y maximizar el rendimiento.',

    process_label: 'Cómo Trabajamos',
    process_title: 'Desde el Diagnóstico hasta la<br><span class="text-gradient">Optimización Continua</span>',
    process_subtitle: 'Un proceso probado que entrega sistemas de automatización a tiempo, dentro del presupuesto y listos para escalar.',
    ps1_title: 'Diagnóstico',
    ps1_desc: 'Analizamos en profundidad tu negocio, flujos de trabajo y metas para descubrir las oportunidades de automatización de mayor impacto.',
    ps2_title: 'Planificación',
    ps2_desc: 'Creamos una hoja de ruta detallada del proyecto con entregables claros, plazos y métricas de éxito medibles.',
    ps3_title: 'Diseño de Automatización',
    ps3_desc: 'Diseño de arquitectura y sistemas para cada flujo de trabajo, integración y componente de IA en tu ecosistema.',
    ps4_title: 'Desarrollo',
    ps4_desc: 'Construimos y configuramos cada componente utilizando las mejores herramientas del mercado: n8n, Make, OpenAI y código a medida.',
    ps5_title: 'Pruebas',
    ps5_desc: 'Pruebas rigurosas de control de calidad (QA) en todos los escenarios: casos extremos, manejo de errores y condiciones de carga antes de salir a producción.',
    ps6_title: 'Lanzamiento',
    ps6_desc: 'Despliegue sin fricciones con documentación completa de entrega, capacitación y monitoreo durante el periodo crítico de lanzamiento.',
    ps7_title: 'Optimización Continua',
    ps7_desc: 'Monitoreamos el rendimiento, analizamos resultados y mejoramos continuamente tus automatizaciones a medida que tu negocio evoluciona.',

    projects_label: 'Casos de Éxito',
    projects_title: 'Automatización que<br><span class="text-gradient">Genera Impacto Real</span>',
    projects_subtitle: 'Automatizaciones reales. Resultados reales. Aquí tienes una selección de lo que hemos construido.',
    proj1_title: 'Soporte al Cliente con IA',
    proj1_desc: 'Sistema de soporte de IA de extremo a extremo que reemplaza un equipo de soporte de 5 personas en una empresa SaaS. Gestiona tickets, derivaciones y seguimientos proactivos.',
    proj1_impact: '<strong>80%</strong> de reducción en el tiempo de respuesta',
    proj2_title: 'Motor de Automatización de Ventas',
    proj2_desc: 'Calificación de leads por IA, secuencias de contacto automatizadas y gestión de oportunidades de venta (pipeline) en CRM para empresas B2B.',
    proj2_impact: '<strong>42%</strong> de incremento en leads calificados',
    proj3_title: 'Automatización de Reservas',
    proj3_desc: 'Agente de voz con IA que responde llamadas entrantes, califica prospectos y agenda citas directamente en el calendario las 24/7.',
    proj3_impact: '<strong>15 horas/semana</strong> ahorradas en agendamiento',
    proj4_title: 'Automatización de Facturación',
    proj4_desc: 'Generación automatizada de facturas, envíos, recordatorios de cobro y conciliación de pagos para una firma de consultoría.',
    proj4_impact: '<strong>90%</strong> de reducción en facturación manual',
    proj1_chat_q: '¿Cómo puedo restablecer mi contraseña?',
    proj1_chat_a: 'Te ayudaré a restablecerla ahora mismo. Revisa tu correo para ver el enlace de recuperación.',
    proj1_chat_thanks: '¡Entendido, gracias!',
    proj2_funnel_qualified: 'Calificados',
    proj2_funnel_contacted: 'Contactados',
    proj2_funnel_converted: 'Convertidos',
    proj3_cal_month: 'Junio 2025',
    proj4_invoice_label: 'Factura #4821',
    proj4_invoice_paid: 'PAGADA',
    proj4_client_label: 'Cliente',
    proj4_amount_label: 'Monto',
    proj4_status_label: 'Estado',
    proj4_reminder_label: 'Recordatorio',
    proj4_auto_sent: 'Auto-enviado ✓',
    proj4_scheduled: 'Programado ✓',

    why_label: 'Por qué Vertex Project',
    why_title: 'Construidos Diferente,<br><span class="text-gradient">Entregamos Mejor</span>',
    why1_title: 'Desarrollo Rápido',
    why1_desc: 'La mayoría de los proyectos se lanzan en 2 a 4 semanas. Nos movemos rápido sin comprometer la calidad.',
    why2_title: 'Soluciones a Medida',
    why2_desc: 'Sin plantillas. Diseñamos cada sistema desde cero para satisfacer las necesidades específicas de tu negocio.',
    why3_title: 'Sistemas Escalables',
    why3_desc: 'Listos para soportar el crecimiento. Nuestras arquitecturas escalan desde 100 hasta 100,000 operaciones al día.',
    why4_title: 'Soporte Confiable',
    why4_desc: 'Soporte dedicado con tiempos de respuesta rápidos, monitoreo proactivo y comunicación transparente.',
    why5_title: 'Seguridad Empresarial',
    why5_desc: 'Prácticas alineadas con SOC 2, manejo encriptado de datos y estricta seguridad de APIs en todos los sistemas.',
    why6_title: 'Preparados para el Futuro',
    why6_desc: 'Nos mantenemos a la vanguardia de los avances de la IA y actualizamos tus sistemas a medida que la tecnología evoluciona.',

    test_label: 'Resultados de Clientes',
    test_title: 'La Confianza de Equipos<br><span class="text-gradient">Que Exigen el Máximo</span>',
    test1_quote: '"Vertex Project transformó por completo nuestro soporte al cliente. Su chatbot de IA ahora resuelve el 80% de las consultas de forma automática, ahorrándole a nuestro equipo miles de horas cada trimestre."',
    test1_role: 'CEO, Nimbus Tech',
    test2_quote: '"La automatización de CRM que construyeron es increíble. Nuestro equipo de ventas ahora se enfoca al 100% en cerrar tratos en lugar de ingresar datos manualmente. La visibilidad de las ventas pasó del caos a la claridad absoluta."',
    test2_role: 'Directora de Operaciones, Grupo Nexus',
    test3_quote: '"El retorno de inversión fue visible desde el primer mes. La automatización de calificación de leads triplicó nuestra tasa de conversión del tráfico entrante. Sin duda, la mejor inversión que hicimos este año."',
    test3_role: 'Director de Crecimiento, PulseScale',

    faq_title: 'Preguntas,<br><span class="text-gradient">Respondidas</span>',
    faq1_q: '¿Cuánto tiempo toma desarrollar una automatización?',
    faq1_a: 'La mayoría de los proyectos se completan en un plazo de 2 a 4 semanas desde el inicio. Las automatizaciones más sencillas (un solo flujo de trabajo, 2 o 3 integraciones) suelen tardar entre 1 y 2 semanas. Los sistemas complejos con múltiples componentes de IA e integraciones pueden tardar entre 4 — 6 semanas. Siempre proporcionamos un cronograma claro antes de empezar.',
    faq2_q: '¿Cuánto cuesta un proyecto de automatización?',
    faq2_a: 'El precio depende de la complejidad, el número de integraciones y los componentes de IA involucrados. Los proyectos suelen oscilar entre $1,500 para automatizaciones sencillas y más de $15,000 para sistemas de nivel empresarial. Ofrecemos un presupuesto detallado después de la llamada de diagnóstico, sin cargos ocultos.',
    faq3_q: '¿Ofrecen soporte continuo después del lanzamiento?',
    faq3_a: 'Sí. Todos los proyectos incluyen un periodo de soporte de 30 días posteriores al lanzamiento. Después de eso, ofrecemos planes mensuales de mantenimiento y optimización para mantener tus sistemas funcionando al máximo rendimiento y actualizados según evolucionan las herramientas.',
    faq4_q: '¿Con qué herramientas y plataformas se integran?',
    faq4_a: 'Nos integramos con prácticamente cualquier plataforma que disponga de una API o webhook. Nuestras integraciones más comunes incluyen OpenAI, Claude, HubSpot, Salesforce, Notion, Airtable, Slack, WhatsApp Business API, Google Workspace, Stripe, Supabase y más. Si tiene una API, podemos conectarla.',
    faq5_q: '¿Pueden desarrollar soluciones de IA completamente a medida?',
    faq5_a: 'Absolutamente. Más allá de herramientas no-code como n8n y Make, desarrollamos agentes de IA totalmente personalizados, sistemas RAG (Generación Aumentada por Recuperación) y soluciones basadas en APIs usando Python y Node.js. Si tu caso de uso requiere ir más allá de las herramientas comerciales, tenemos la capacidad de ingeniería para construirlo desde cero.',
    faq6_q: '¿Cómo garantizan la seguridad de los datos de mi negocio?',
    faq6_a: 'La seguridad está integrada en cada sistema que diseñamos. Utilizamos conexiones API cifradas, variables de entorno para las credenciales, el principio de mínimo privilegio para todas las integraciones y nunca almacenamos datos confidenciales más allá de lo estrictamente necesario para la operación. Todos los sistemas se despliegan en infraestructura en la nube segura con controles de acceso adecuados.',

    contact_label: 'Comencemos',
    contact_title: 'Construyamos tu<br><span class="text-gradient">Próxima Automatización</span>',
    contact_subtitle: 'Cuéntanos sobre tu negocio y agendaremos una llamada de diagnóstico gratuita de 30 minutos.',
    form_label_name: 'Nombre Completo <span aria-hidden="true">*</span>',
    form_ph_name: 'Juan García',
    form_label_company: 'Empresa',
    form_ph_company: 'Acme Corp',
    form_label_email: 'Correo Electrónico <span aria-hidden="true">*</span>',
    form_ph_email: 'juan@empresa.com',
    form_label_phone: 'Teléfono',
    form_ph_phone: '+54 9 11 0000-0000',
    form_label_message: 'Cuéntanos sobre tu proyecto <span aria-hidden="true">*</span>',
    form_ph_message: 'Describí las tareas repetitivas, procesos o flujos de trabajo que querés automatizar...',
    form_submit: '<i class="fas fa-paper-plane" aria-hidden="true"></i> Enviar Mensaje',
    form_submitting: '<i class="fas fa-spinner fa-spin"></i> Enviando…',
    form_submitted: '<i class="fas fa-check"></i> ¡Enviado!',
    form_success: '¡Mensaje enviado! Nos pondremos en contacto contigo en menos de 24 horas.',
    contact_brand_sub: 'Agencia de Automatización con IA',
    contact_email_label: 'Correo electrónico',
    contact_socials_label: 'Encuéntranos en',
    contact_avail: 'Disponible para nuevos proyectos',

    footer_tagline: 'Sistemas de automatización inteligentes para empresas que buscan crecer en serio.',
    footer_col_services: 'Servicios',
    footer_link_chatbots: 'Chatbots de IA',
    footer_link_voice: 'Agentes de Voz con IA',
    footer_link_crm: 'Automatización de CRM',
    footer_link_sales: 'Automatización de Ventas',
    footer_link_api: 'Integración de APIs',
    footer_col_company: 'Compañía',
    footer_link_about: 'Sobre Nosotros',
    footer_link_process: 'Proceso',
    footer_link_projects: 'Proyectos',
    footer_link_contact: 'Contacto',
    footer_col_contact: 'Contacto',
    footer_copy: '&copy; <span id="year"></span> Vertex Project. Todos los derechos reservados.',
    footer_made: 'Agencia de Automatización con IA',

    typing_phrases: [
      'Escala Sin Límites.',
      'Elimina el Trabajo Manual.',
      'Opera a la Velocidad de la IA.',
      'Crece en Piloto Automático.'
    ]
  },

  en: {
    page_title: 'Vertex Project | AI Automation Agency',

    nav_services: 'Services',
    nav_process: 'Process',
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_cta: 'Book a Call',
    mobile_cta: 'Contact',

    hero_badge: 'AI Automation Agency',
    hero_headline_static: 'Automate Your Business.',
    hero_desc: 'We design intelligent automation systems that eliminate repetitive tasks, integrate your tools, and help your business operate at the speed of AI — so your team focuses on what truly matters.',
    hero_cta_primary: 'Book a Free Call',
    hero_cta_secondary: 'View Projects',
    hero_social_proof: 'Trusted by <strong>20+</strong> companies worldwide',
    hero_card_hours: 'Hours Saved',
    hero_card_automations: 'Automations',

    tech_label: 'Technologies we trust',

    about_label: 'About Us',
    about_title: 'Building the Future of<br><span class="text-gradient">Business Intelligence</span>',
    about_body_1: 'Vertex Project is an AI automation agency that designs and builds intelligent systems to transform the way businesses operate. We eliminate repetitive workflows, integrate fragmented tools, and deploy AI-powered solutions that scale.',
    about_body_2: 'We work closely with founders, operations teams, and enterprise clients to identify automation opportunities and deliver measurable results: faster response times, reduced costs, and revenue growth.',
    about_tag_1: 'Custom Solutions',
    about_tag_2: 'Enterprise Security',
    about_tag_3: 'Fast Delivery',
    about_tag_4: 'Scalable Systems',
    stat_label_projects: 'Projects Delivered',
    stat_label_clients: 'Happy Clients',
    stat_label_automations: 'Automations Built',
    stat_label_hours: 'Hours Saved',

    services_label: 'What We Build',
    services_title: 'AI Services that<br><span class="text-gradient">Drive Real Results</span>',
    services_subtitle: 'From intelligent chatbots to complex workflow engines — we build automation systems tailored to your business.',
    svc1_title: 'AI Chatbots',
    svc1_desc: 'Intelligent conversational bots that handle customer inquiries 24/7 with human-level accuracy.',
    svc2_title: 'AI Voice Agents',
    svc2_desc: 'Natural-sounding voice agents that book appointments, answer calls, and qualify leads automatically.',
    svc3_title: 'Business Automation',
    svc3_desc: 'End-to-end automation of repetitive business processes across departments and platforms.',
    svc4_title: 'CRM Automation',
    svc4_desc: 'Automate your entire CRM workflow — from data entry to follow-ups and deal stage progression.',
    svc5_title: 'Lead Qualification',
    svc5_desc: 'AI-powered lead scoring and qualification systems that prioritize your highest-value prospects.',
    svc6_title: 'Sales Automation',
    svc6_desc: 'Automated outreach sequences, follow-up campaigns, and pipeline management that closes more deals.',
    svc7_title: 'Customer Support',
    svc7_desc: 'AI-powered support systems that auto-resolve tickets, escalating to humans only for complex cases.',
    svc8_title: 'Appointment Booking',
    svc8_desc: 'Fully automated booking systems with reminders, rescheduling, and calendar sync built in.',
    svc9_title: 'Email Automation',
    svc9_desc: 'Behavior-triggered personalized email campaigns powered by AI-generated copy that converts.',
    svc10_title: 'WhatsApp Automation',
    svc10_desc: 'Automated WhatsApp Business flows for support, sales, notifications, and onboarding sequences.',
    svc11_title: 'Custom AI Assistants',
    svc11_desc: 'Custom AI assistants trained on your data, workflows, and brand voice for internal or client-facing use.',
    svc12_title: 'API Integration',
    svc12_desc: 'Seamless integration between any tool and platform, making your entire digital ecosystem work as one.',
    svc13_title: 'Internal Tools',
    svc13_desc: "Custom dashboards, reporting tools, and internal apps that streamline your team's operations.",
    svc14_title: 'Process Optimization',
    svc14_desc: 'We audit, redesign, and automate existing workflows to eliminate bottlenecks and maximize throughput.',

    process_label: 'How We Work',
    process_title: 'From Discovery to<br><span class="text-gradient">Continuous Optimization</span>',
    process_subtitle: 'A proven process that delivers automation systems on time, on budget, and ready to scale.',
    ps1_title: 'Discovery',
    ps1_desc: 'We deep-dive into your business, workflows, and goals to uncover the highest-impact automation opportunities.',
    ps2_title: 'Planning',
    ps2_desc: 'We create a detailed project roadmap with clear deliverables, timelines, and measurable success metrics.',
    ps3_title: 'Automation Design',
    ps3_desc: 'Architecture and system design for every workflow, integration, and AI component in your ecosystem.',
    ps4_title: 'Development',
    ps4_desc: 'We build and configure every component using best-in-class tools: n8n, Make, OpenAI, and custom code.',
    ps5_title: 'Testing',
    ps5_desc: 'Rigorous QA testing across all scenarios: edge cases, error handling, and load conditions before going live.',
    ps6_title: 'Launch',
    ps6_desc: 'Smooth deployment with full handoff documentation, training, and monitoring during the critical launch window.',
    ps7_title: 'Continuous Optimization',
    ps7_desc: 'We monitor performance, analyze results, and continuously improve your automations as your business evolves.',

    projects_label: 'Case Studies',
    projects_title: 'Automation that<br><span class="text-gradient">Drives Real Impact</span>',
    projects_subtitle: "Real automations. Real results. Here's a selection of what we've built.",
    proj1_title: 'AI Customer Support',
    proj1_desc: 'End-to-end AI support system that replaced a 5-person support team at a SaaS company. Handles tickets, escalations, and proactive follow-ups.',
    proj1_impact: '<strong>80%</strong> reduction in response time',
    proj2_title: 'Sales Automation Engine',
    proj2_desc: 'AI lead qualification, automated outreach sequences, and CRM pipeline management for a B2B company.',
    proj2_impact: '<strong>42%</strong> increase in qualified leads',
    proj3_title: 'Booking Automation',
    proj3_desc: 'AI voice agent that answers inbound calls, qualifies prospects, and books appointments directly into the calendar 24/7.',
    proj3_impact: '<strong>15 hrs/week</strong> saved on scheduling',
    proj4_title: 'Invoice Automation',
    proj4_desc: 'Automated invoice generation, delivery, payment reminders, and reconciliation for a consulting firm.',
    proj4_impact: '<strong>90%</strong> reduction in manual invoicing',
    proj1_chat_q: 'How can I reset my password?',
    proj1_chat_a: "I'll help you reset it right now. Check your email for the recovery link.",
    proj1_chat_thanks: 'Got it, thanks!',
    proj2_funnel_qualified: 'Qualified',
    proj2_funnel_contacted: 'Contacted',
    proj2_funnel_converted: 'Converted',
    proj3_cal_month: 'June 2025',
    proj4_invoice_label: 'Invoice #4821',
    proj4_invoice_paid: 'PAID',
    proj4_client_label: 'Client',
    proj4_amount_label: 'Amount',
    proj4_status_label: 'Status',
    proj4_reminder_label: 'Reminder',
    proj4_auto_sent: 'Auto-sent ✓',
    proj4_scheduled: 'Scheduled ✓',

    why_label: 'Why Vertex Project',
    why_title: 'Built Different,<br><span class="text-gradient">Delivered Better</span>',
    why1_title: 'Fast Development',
    why1_desc: 'Most projects launch in 2–4 weeks. We move fast without compromising quality.',
    why2_title: 'Custom Solutions',
    why2_desc: 'No templates. We design every system from scratch to fit your specific business needs.',
    why3_title: 'Scalable Systems',
    why3_desc: 'Built to handle growth. Our architectures scale from 100 to 100,000 operations per day.',
    why4_title: 'Reliable Support',
    why4_desc: 'Dedicated support with fast response times, proactive monitoring, and transparent communication.',
    why5_title: 'Enterprise Security',
    why5_desc: 'SOC 2-aligned practices, encrypted data handling, and strict API security across all systems.',
    why6_title: 'Future-Ready',
    why6_desc: 'We stay ahead of AI advancements and update your systems as the technology evolves.',

    test_label: 'Client Results',
    test_title: 'Trusted by Teams<br><span class="text-gradient">Who Demand the Best</span>',
    test1_quote: '"Vertex Project completely transformed our customer support. Their AI chatbot now resolves 80% of queries automatically, saving our team thousands of hours every quarter."',
    test1_role: 'CEO, Nimbus Tech',
    test2_quote: '"The CRM automation they built is incredible. Our sales team now focuses 100% on closing deals instead of manual data entry. Sales visibility went from chaos to complete clarity."',
    test2_role: 'Head of Operations, Grupo Nexus',
    test3_quote: '"ROI was visible from the first month. The lead qualification automation tripled our conversion rate from inbound traffic. Undoubtedly the best investment we made this year."',
    test3_role: 'Head of Growth, PulseScale',

    faq_title: 'Questions,<br><span class="text-gradient">Answered</span>',
    faq1_q: 'How long does it take to build an automation?',
    faq1_a: 'Most projects are completed within 2–4 weeks from kickoff. Simpler automations (single workflow, 2–3 integrations) typically take 1–2 weeks. Complex systems with multiple AI components and integrations can take 4–6 weeks. We always provide a clear timeline before starting.',
    faq2_q: 'How much does an automation project cost?',
    faq2_a: 'Pricing depends on complexity, number of integrations, and AI components involved. Projects typically range from $1,500 for simple automations to $15,000+ for enterprise-level systems. We provide a detailed quote after the discovery call — no hidden fees.',
    faq3_q: 'Do you offer ongoing support after launch?',
    faq3_a: 'Yes. Every project includes a 30-day post-launch support period. After that, we offer monthly maintenance and optimization retainers to keep your systems running at peak performance and updated as tools evolve.',
    faq4_q: 'What tools and platforms do you integrate with?',
    faq4_a: 'We integrate with virtually any platform that has an API or webhook. Our most common integrations include OpenAI, Claude, HubSpot, Salesforce, Notion, Airtable, Slack, WhatsApp Business API, Google Workspace, Stripe, Supabase, and more. If it has an API, we can connect it.',
    faq5_q: 'Can you build fully custom AI solutions?',
    faq5_a: 'Absolutely. Beyond no-code tools like n8n and Make, we build fully custom AI agents, RAG (Retrieval-Augmented Generation) systems, and API-based solutions using Python and Node.js. If your use case requires going beyond off-the-shelf tools, we have the engineering capability to build it from scratch.',
    faq6_q: 'How do you ensure the security of my business data?',
    faq6_a: "Security is built into every system we design. We use encrypted API connections, environment variables for credentials, least-privilege principles for all integrations, and never store sensitive data beyond what's strictly necessary for operation. All systems are deployed on secure cloud infrastructure with proper access controls.",

    contact_label: "Let's Build",
    contact_title: "Let's Build Your<br><span class=\"text-gradient\">Next Automation</span>",
    contact_subtitle: "Tell us about your business and we'll schedule a free 30-minute discovery call.",
    form_label_name: 'Full Name <span aria-hidden="true">*</span>',
    form_ph_name: 'John Smith',
    form_label_company: 'Company',
    form_ph_company: 'Acme Corp',
    form_label_email: 'Email Address <span aria-hidden="true">*</span>',
    form_ph_email: 'john@company.com',
    form_label_phone: 'Phone',
    form_ph_phone: '+1 (555) 000-0000',
    form_label_message: 'Tell us about your project <span aria-hidden="true">*</span>',
    form_ph_message: "Describe the repetitive tasks, processes, or workflows you'd like to automate...",
    form_submit: '<i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message',
    form_submitting: '<i class="fas fa-spinner fa-spin"></i> Sending…',
    form_submitted: '<i class="fas fa-check"></i> Sent!',
    form_success: "Message sent! We'll be in touch within 24 hours.",
    contact_brand_sub: 'AI Automation Agency',
    contact_email_label: 'Email',
    contact_socials_label: 'Find us on',
    contact_avail: 'Available for new projects',

    footer_tagline: 'Intelligent automation systems for businesses that are serious about growth.',
    footer_col_services: 'Services',
    footer_link_chatbots: 'AI Chatbots',
    footer_link_voice: 'AI Voice Agents',
    footer_link_crm: 'CRM Automation',
    footer_link_sales: 'Sales Automation',
    footer_link_api: 'API Integration',
    footer_col_company: 'Company',
    footer_link_about: 'About Us',
    footer_link_process: 'Process',
    footer_link_projects: 'Projects',
    footer_link_contact: 'Contact',
    footer_col_contact: 'Contact',
    footer_copy: '&copy; <span id="year"></span> Vertex Project. All rights reserved.',
    footer_made: 'AI Automation Agency',

    typing_phrases: [
      'Scale Without Limits.',
      'Eliminate Manual Work.',
      'Operate at the Speed of AI.',
      'Grow on Autopilot.'
    ]
  }
};

/* ——— i18n Core ——— */
let currentLang = localStorage.getItem('vp_lang') || 'es';
let typingTimeout = null;

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('vp_lang', lang);
  document.documentElement.lang = lang;
  document.title = TRANSLATIONS[lang].page_title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = TRANSLATIONS[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* Re-set year in footer after innerHTML replacement */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  resetTyping();
}

function initLangSwitch() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) setLanguage(lang);
    });
  });
  /* Apply saved language on load */
  if (currentLang !== 'es') setLanguage(currentLang);
}


/* ——— Preloader ——— */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
    initLangSwitch();
    startTyping();
  }, 1800);
});
document.body.style.overflow = 'hidden';


/* ——— Navbar scroll behavior ——— */
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 60);
  lastScrollY = scrollY;
}, { passive: true });




/* ——— Smooth scroll for anchor links ——— */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const navH = navbar.offsetHeight;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navH - 20;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  });
});


/* ——— Scroll Reveal ——— */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal, .reveal-right').forEach(el => revealObserver.observe(el));


/* ——— Animated Counters ——— */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 2200;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counter = setInterval(() => {
    frame++;
    const progress = easeOutExpo(frame / totalFrames);
    const current  = Math.round(progress * target);
    el.textContent = current.toLocaleString();
    if (frame === totalFrames) {
      el.textContent = target.toLocaleString();
      clearInterval(counter);
    }
  }, frameDuration);
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));


/* ——— Typing Animation ——— */
let typingState = null;

function startTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  typingState = {
    el,
    phraseIdx: 0,
    charIdx: 0,
    isDeleting: false,
    isPaused: false
  };

  if (typingTimeout) clearTimeout(typingTimeout);
  typingTimeout = setTimeout(tick, 600);
}

function resetTyping() {
  if (typingTimeout) clearTimeout(typingTimeout);
  typingTimeout = null;
  const el = document.getElementById('typed-text');
  if (el) {
    el.textContent = '';
    el.classList.remove('typed');
  }
  if (typingState) {
    typingState.phraseIdx = 0;
    typingState.charIdx = 0;
    typingState.isDeleting = false;
    typingState.isPaused = false;
    typingTimeout = setTimeout(tick, 400);
  }
}

function tick() {
  if (!typingState) return;
  const { el } = typingState;
  const phrases = TRANSLATIONS[currentLang].typing_phrases;
  const phrase = phrases[typingState.phraseIdx];

  if (typingState.isPaused) {
    typingState.isPaused = false;
    typingState.isDeleting = true;
    el.classList.remove('typed');
    typingTimeout = setTimeout(tick, 1800);
    return;
  }

  if (!typingState.isDeleting) {
    typingState.charIdx++;
    el.textContent = phrase.slice(0, typingState.charIdx);
    if (typingState.charIdx === phrase.length) {
      el.classList.add('typed');
      typingState.isPaused = true;
      typingTimeout = setTimeout(tick, 60);
      return;
    }
    typingTimeout = setTimeout(tick, 70 + Math.random() * 40);
  } else {
    typingState.charIdx--;
    el.textContent = phrase.slice(0, typingState.charIdx);
    if (typingState.charIdx === 0) {
      typingState.isDeleting = false;
      typingState.phraseIdx = (typingState.phraseIdx + 1) % phrases.length;
      typingTimeout = setTimeout(tick, 400);
      return;
    }
    typingTimeout = setTimeout(tick, 35);
  }
}


/* ——— Particle Canvas ——— */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COUNT = 70;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r  = Math.random() * 1.5 + 0.5;
      this.a  = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96,165,250,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function connectParticles() {
    const MAX_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animId = requestAnimationFrame(animate);
  }
  animate();

  /* Pause when off-screen for perf */
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const pauseObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!animId) animate();
      } else {
        cancelAnimationFrame(animId);
        animId = null;
      }
    });
    pauseObserver.observe(heroSection);
  }
})();


/* ——— Mouse parallax for hero ——— */
(function initParallax() {
  const hero = document.querySelector('.hero');
  const vis  = document.querySelector('.vis-container');
  if (!hero || !vis) return;

  let tX = 0, tY = 0, cX = 0, cY = 0;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    tX = x * 12;
    tY = y * 12;
  });
  hero.addEventListener('mouseleave', () => { tX = 0; tY = 0; });

  function loop() {
    cX += (tX - cX) * 0.06;
    cY += (tY - cY) * 0.06;
    vis.style.transform = `translate(${cX}px, ${cY}px)`;
    requestAnimationFrame(loop);
  }
  loop();
})();


/* ——— Service card glow follow mouse ——— */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});


/* ——— FAQ Accordion ——— */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const answerId   = btn.getAttribute('aria-controls');
    const answer     = document.getElementById(answerId);

    /* Close all others */
    document.querySelectorAll('.faq-question').forEach(b => {
      if (b !== btn) {
        b.setAttribute('aria-expanded', 'false');
        const aId = b.getAttribute('aria-controls');
        const a   = document.getElementById(aId);
        if (a) a.classList.remove('open');
      }
    });

    /* Toggle current */
    btn.setAttribute('aria-expanded', String(!isExpanded));
    if (answer) answer.classList.toggle('open', !isExpanded);
  });
});


/* ——— Contact form ——— */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-form-submit');
    const success = document.getElementById('formSuccess');

    btn.disabled = true;
    btn.innerHTML = TRANSLATIONS[currentLang].form_submitting;

    /* Simulate async send (replace with real endpoint) */
    await new Promise(resolve => setTimeout(resolve, 1500));

    btn.innerHTML = TRANSLATIONS[currentLang].form_submitted;
    btn.style.background = '#166534';
    if (success) success.classList.add('show');
    form.reset();

    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = '';
      btn.innerHTML = TRANSLATIONS[currentLang].form_submit;
      if (success) success.classList.remove('show');
    }, 5000);
  });
}


/* ——— Process step reveal ——— */
const processObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      processObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.process-step').forEach(step => processObserver.observe(step));


/* ——— Set footer year ——— */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ——— Active nav link highlight on scroll ——— */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
