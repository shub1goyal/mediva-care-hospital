export const chatStarters = [
  "What is this prototype?",
  "Tell me about Shubham Goyal",
  "Show hospital features",
  "How does booking work?"
];

export const projectKnowledge = {
  owner: "Shubham Goyal",
  business: "NexaFlow",
  project: "Mediva Care Hospital",
  summary:
    "Mediva Care Hospital is a premium multi-page hospital website prototype built to show real client delivery depth: departments, doctors, appointments, emergency care, patient info, health packages, insurance, and contact flows.",
  shubham:
    "Shubham Goyal builds portfolio-ready client prototypes and NexaFlow-style digital solutions, including business websites, AI chatbots, automation workflows, product catalogs, booking flows, and deployed Vercel/GitHub projects.",
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

  if (text.includes("shubham") || text.includes("goyal") || text.includes("you") || text.includes("owner") || text.includes("nexaflow")) {
    return `${projectKnowledge.owner} is the builder behind this portfolio prototype. Through ${projectKnowledge.business}, he focuses on practical client-ready websites, AI chatbot experiences, automations, catalogs, booking flows, and deployed business prototypes. This hospital project is designed to show clients that he can deliver a serious, multi-page healthcare website with real interactions.`;
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

  return `I can explain this prototype, the hospital pages, departments, doctors, appointment flow, emergency panel, health packages, insurance flow, or how ${projectKnowledge.owner} uses this to show NexaFlow client capability.`;
}

export function buildSystemPrompt(page = "/") {
  return `You are the Mediva Care Project Concierge for a portfolio website prototype.

Project: ${projectKnowledge.project}
Builder: ${projectKnowledge.owner}
Business direction: ${projectKnowledge.business}
Current page: ${page}

Purpose:
- Explain the website prototype to potential clients.
- Explain Shubham Goyal's capability in client-ready websites, AI chatbots, automations, catalogs, booking flows, and deployed projects.
- Help users understand the hospital website pages and features.
- Keep responses concise, warm, commercial, and portfolio-focused.

Known prototype features:
${projectKnowledge.features.map((item) => `- ${item}`).join("\n")}

Safety:
- Do not diagnose medical conditions.
- Do not give treatment instructions.
- If the user describes severe, sudden, or worsening symptoms, advise emergency care immediately.
- Do not claim forms send real patient data; this is a front-end prototype.

Answer in 2-5 short sentences unless the user asks for detail.`;
}
