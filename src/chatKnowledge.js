export const chatStarters = [
  "What is this prototype?",
  "Tell me about Shubham Goyal",
  "Show hospital features",
  "How does booking work?"
];

export const projectKnowledge = {
  owner: "Shubham Goyal",
  business: "NexaFlow",
  businessUrl: "https://nexaflow-vert.vercel.app/",
  email: "shubhamgoyal.0027@gmail.com",
  whatsapp: "+91 90506 56846",
  project: "Mediva Care Hospital",
  summary:
    "Mediva Care Hospital is a premium multi-page hospital website prototype built to show real client delivery depth: departments, doctors, appointments, emergency care, patient info, health packages, insurance, and contact flows.",
  shubham:
    "Shubham Goyal is a professional freelancer who builds custom websites, AI agents, AI chatbots, business automations, e-commerce stores, creator tools, catalogs, booking systems, and deployed client-ready prototypes for small businesses, shops, and creators.",
  serviceDetails: [
    "Custom Websites: fast, SEO-ready, mobile-first business websites",
    "AI Agents: customer response, lead qualification, and workflow automation",
    "Business Automations: lead capture, invoice delivery, CRM-lite flows, and reporting",
    "E-commerce Stores: online stores with payments, inventory, and product experiences",
    "Chatbots and Support AI: website, WhatsApp, Instagram, FAQ, booking, and complaint support",
    "Content Creator Tools: dashboards, analytics, and automation for creators"
  ],
  pricing:
    "Public NexaFlow packages start from INR 15,000 for a Starter website, INR 40,000 for a Growth package with chatbot and automation features, and custom Enterprise scopes for full AI agent or e-commerce systems.",
  process:
    "The NexaFlow delivery style is discovery call, strategy and design, rapid development, then launch and ongoing growth support.",
  features: [
    "9 direct pages with deployment-safe routes",
    "14-department hospital service catalog",
    "12-doctor directory with department and availability filters",
    "Appointment request preview flow",
    "Emergency quick action panel",
    "Symptom-to-department guide with safety wording",
    "8 health packages with comparison",
    "Patient information and insurance support pages",
    "Responsive desktop and mobile design"
  ],
  safety:
    "The chatbot and symptom guide are informational only and do not diagnose. For severe, sudden, or worsening symptoms, patients should seek emergency care immediately."
};

export function buildFallbackReply(input = "") {
  const text = input.toLowerCase();

  if (
    text.includes("service") ||
    text.includes("hire") ||
    text.includes("contact") ||
    text.includes("pricing") ||
    text.includes("price") ||
    text.includes("audit") ||
    text.includes("whatsapp") ||
    text.includes("email") ||
    text.includes("take work") ||
    text.includes("take services")
  ) {
    return `Yes. You can take services from ${projectKnowledge.owner} through ${projectKnowledge.business}: ${projectKnowledge.businessUrl}. He builds custom websites, AI chatbots, AI agents, automations, e-commerce stores, catalogs, booking systems, and creator dashboards. Contact details from the NexaFlow site: ${projectKnowledge.email}, WhatsApp ${projectKnowledge.whatsapp}. ${projectKnowledge.pricing}`;
  }

  if (text.includes("shubham") || text.includes("goyal") || text.includes("owner") || text.includes("nexaflow")) {
    return `${projectKnowledge.owner} is the professional freelancer behind ${projectKnowledge.business}. He builds client-ready websites, AI chatbots, AI agents, automations, e-commerce stores, catalogs, booking flows, and deployed business prototypes for small businesses, shops, and creators. Main website: ${projectKnowledge.businessUrl}. Contact: ${projectKnowledge.email}, WhatsApp ${projectKnowledge.whatsapp}.`;
  }

  if (text.includes("feature") || text.includes("prototype") || text.includes("project") || text.includes("website")) {
    return `${projectKnowledge.project} is a production-style prototype, not a thin landing page. It includes ${projectKnowledge.features.slice(0, 5).join(", ")}, plus health package comparison, patient info, insurance support, and mobile QA-ready routing.`;
  }

  if (text.includes("department") || text.includes("special")) {
    return "The prototype includes 14 hospital departments: Emergency and Trauma, Cardiology, Neurology, Orthopedics, Obstetrics and Gynecology, Pediatrics, Internal Medicine, Dermatology, ENT, Ophthalmology, Gastroenterology, Oncology, Radiology and Diagnostics, and Physiotherapy and Rehab.";
  }

  if (text.includes("doctor") || text.includes("availability") || text.includes("specialist")) {
    return "The Doctors page includes a 12-doctor directory with filters for department and availability. It demonstrates how a real hospital website can help visitors narrow down specialists before booking.";
  }

  if (text.includes("appointment") || text.includes("book") || text.includes("booking")) {
    return "The appointment flow lets a visitor choose department, doctor, date, and slot, then shows a confirmation state. It is prototype-safe and does not send real patient data.";
  }

  if (text.includes("emergency") || text.includes("ambulance") || text.includes("urgent") || text.includes("chest") || text.includes("stroke")) {
    return "The Emergency page and quick action panel keep urgent contact details visible. This prototype always recommends emergency care for severe symptoms like chest pain, stroke signs, major injury, or breathing trouble. It does not diagnose.";
  }

  if (text.includes("package") || text.includes("health check") || text.includes("compare")) {
    return "The Health Packages page includes 8 preventive care packages and a comparison tool for price, duration, audience, and included tests. This is a signature feature for hospital and clinic clients.";
  }

  if (text.includes("insurance") || text.includes("cashless") || text.includes("claim")) {
    return "The Insurance page shows partner insurers and a four-step cashless claim support flow: policy card, pre-authorization, treatment estimate, and final claim desk.";
  }

  if (text.includes("symptom") || text.includes("pain") || text.includes("fever") || text.includes("rash")) {
    return `${projectKnowledge.project} includes a symptom-to-department guide that routes common concerns to the right hospital desk. It is not medical advice or diagnosis. ${projectKnowledge.safety}`;
  }

  return `I can explain this prototype, the hospital pages, departments, doctors, appointment flow, emergency panel, health packages, insurance flow, or how ${projectKnowledge.owner} uses this to show ${projectKnowledge.business} client capability. For Shubham's services, visit ${projectKnowledge.businessUrl}.`;
}

export function buildSystemPrompt(page = "/") {
  return `You are the Mediva Care Project Concierge for a portfolio website prototype.

Project: ${projectKnowledge.project}
Builder: ${projectKnowledge.owner}
Business direction: ${projectKnowledge.business}
Current page: ${page}

Purpose:
- Explain the website prototype to potential clients.
- Explain Shubham Goyal's capability in client-ready websites, AI chatbots, AI agents, automations, e-commerce stores, catalogs, booking flows, creator tools, and deployed projects.
- When users ask about Shubham, NexaFlow, services, pricing, contact, hiring, or taking services, include this link: ${projectKnowledge.businessUrl}
- Use these public contact details when relevant: email ${projectKnowledge.email}, WhatsApp ${projectKnowledge.whatsapp}, website ${projectKnowledge.businessUrl}.
- Never mention or link to the old GitHub Pages portfolio URL.
- Help users understand the hospital website pages and features.
- Keep responses concise, warm, commercial, and portfolio-focused.

NexaFlow service details:
${projectKnowledge.serviceDetails.map((item) => `- ${item}`).join("\n")}

Public pricing direction:
- ${projectKnowledge.pricing}

Process:
- ${projectKnowledge.process}

Known prototype features:
${projectKnowledge.features.map((item) => `- ${item}`).join("\n")}

Safety:
- Do not diagnose medical conditions.
- Do not give treatment instructions.
- If the user describes severe, sudden, or worsening symptoms, advise emergency care immediately.
- Do not claim forms send real patient data; this is a front-end prototype.

Answer in 2-5 short sentences unless the user asks for detail.`;
}
