export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointments", label: "Appointments" },
  { href: "/emergency", label: "Emergency" },
  { href: "/patient-info", label: "Patient Info" },
  { href: "/health-packages", label: "Packages" },
  { href: "/insurance", label: "Insurance" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  { label: "Specialties", value: "14+" },
  { label: "ICU beds", value: "42" },
  { label: "Emergency response", value: "24/7" },
  { label: "Insurance partners", value: "12" }
];

export const departments = [
  {
    name: "Emergency and Trauma",
    category: "Emergency",
    lead: "Dr. Arjun Rao",
    hours: "24/7",
    image: "/images/ambulance.jpg",
    summary: "Rapid triage, trauma stabilization, ambulance coordination, and critical care handoff.",
    services: ["Trauma bay", "Stroke code", "Cardiac emergency", "Ambulance desk"]
  },
  {
    name: "Cardiology",
    category: "Core",
    lead: "Dr. Meera Sethi",
    hours: "8 AM - 8 PM",
    image: "/images/doctor-tablet.jpg",
    summary: "Heart consultations, ECG, echo, preventive cardiac checks, and post-procedure follow-up.",
    services: ["ECG", "Echo", "Stress test", "Cardiac rehab"]
  },
  {
    name: "Neurology",
    category: "Core",
    lead: "Dr. Nikhil Bansal",
    hours: "9 AM - 6 PM",
    image: "/images/hospital-room.jpg",
    summary: "Care for headaches, seizures, stroke recovery, nerve disorders, and movement concerns.",
    services: ["EEG", "Stroke clinic", "Memory clinic", "Neuro rehab"]
  },
  {
    name: "Orthopedics",
    category: "Surgical",
    lead: "Dr. Kavya Menon",
    hours: "8 AM - 7 PM",
    image: "/images/doctor-consult.jpg",
    summary: "Joint pain, fractures, sports injuries, spine care, and planned orthopedic surgeries.",
    services: ["Fracture clinic", "Joint care", "Sports injury", "Spine consult"]
  },
  {
    name: "Obstetrics and Gynecology",
    category: "Family",
    lead: "Dr. Rhea Kapoor",
    hours: "9 AM - 8 PM",
    image: "/images/care-team.jpg",
    summary: "Maternity care, women's health, fetal medicine coordination, and wellness screening.",
    services: ["Maternity", "Fetal scans", "Gynecology", "Lactation desk"]
  },
  {
    name: "Pediatrics",
    category: "Family",
    lead: "Dr. Vihaan Shah",
    hours: "8 AM - 8 PM",
    image: "/images/doctor-consult.jpg",
    summary: "Child health, vaccination planning, fever clinic, growth tracking, and pediatric emergency support.",
    services: ["Vaccination", "Growth checks", "Child fever", "Newborn care"]
  },
  {
    name: "Internal Medicine",
    category: "Core",
    lead: "Dr. Sara Mathew",
    hours: "8 AM - 9 PM",
    image: "/images/doctor-tablet.jpg",
    summary: "Fever, diabetes, blood pressure, thyroid, infections, and coordinated chronic care.",
    services: ["Fever clinic", "Diabetes care", "BP clinic", "Senior wellness"]
  },
  {
    name: "Dermatology",
    category: "Core",
    lead: "Dr. Tara Oberoi",
    hours: "10 AM - 6 PM",
    image: "/images/hospital-room.jpg",
    summary: "Skin, hair, allergy, acne, infection care, mole checks, and aesthetic dermatology.",
    services: ["Skin allergy", "Acne clinic", "Hair care", "Mole screening"]
  },
  {
    name: "ENT",
    category: "Core",
    lead: "Dr. Omar Khan",
    hours: "9 AM - 7 PM",
    image: "/images/doctor-consult.jpg",
    summary: "Ear, nose, throat, voice, sinus, allergy, and hearing-related consultations.",
    services: ["Sinus clinic", "Hearing tests", "Voice care", "Allergy consult"]
  },
  {
    name: "Ophthalmology",
    category: "Core",
    lead: "Dr. Ananya Bose",
    hours: "9 AM - 6 PM",
    image: "/images/care-team.jpg",
    summary: "Eye checks, cataract evaluation, retina referrals, dry eye care, and diabetic eye screening.",
    services: ["Vision test", "Cataract care", "Retina screening", "Dry eye clinic"]
  },
  {
    name: "Gastroenterology",
    category: "Core",
    lead: "Dr. Dev Malhotra",
    hours: "10 AM - 7 PM",
    image: "/images/hospital-room.jpg",
    summary: "Digestive health, liver concerns, acidity, endoscopy coordination, and nutrition follow-up.",
    services: ["Endoscopy desk", "Liver clinic", "IBS care", "Nutrition support"]
  },
  {
    name: "Oncology",
    category: "Advanced",
    lead: "Dr. Ishita Nair",
    hours: "9 AM - 5 PM",
    image: "/images/doctor-tablet.jpg",
    summary: "Cancer screening navigation, second opinions, day care chemo coordination, and survivorship support.",
    services: ["Screening", "Tumor board", "Day care chemo", "Counselling"]
  },
  {
    name: "Radiology and Diagnostics",
    category: "Diagnostics",
    lead: "Dr. Kabir Jain",
    hours: "7 AM - 10 PM",
    image: "/images/hospital-room.jpg",
    summary: "Imaging and lab coordination with fast report routing for outpatient and emergency cases.",
    services: ["MRI", "CT scan", "Ultrasound", "Lab reports"]
  },
  {
    name: "Physiotherapy and Rehab",
    category: "Rehab",
    lead: "Dr. Prisha Mehta",
    hours: "8 AM - 7 PM",
    image: "/images/care-team.jpg",
    summary: "Recovery programs for surgery, sports injury, neuro rehab, posture, and pain management.",
    services: ["Post-op rehab", "Sports rehab", "Neuro rehab", "Pain program"]
  }
];

export const doctors = [
  { name: "Dr. Meera Sethi", department: "Cardiology", role: "Senior Cardiologist", experience: "18 yrs", availability: "Today", nextSlot: "4:30 PM", language: "English, Hindi" },
  { name: "Dr. Arjun Rao", department: "Emergency and Trauma", role: "Emergency Director", experience: "16 yrs", availability: "24/7", nextSlot: "Immediate triage", language: "English, Hindi" },
  { name: "Dr. Nikhil Bansal", department: "Neurology", role: "Consultant Neurologist", experience: "13 yrs", availability: "Tomorrow", nextSlot: "11:00 AM", language: "English, Hindi" },
  { name: "Dr. Kavya Menon", department: "Orthopedics", role: "Joint and Sports Specialist", experience: "15 yrs", availability: "Today", nextSlot: "6:00 PM", language: "English, Malayalam" },
  { name: "Dr. Rhea Kapoor", department: "Obstetrics and Gynecology", role: "Maternity Consultant", experience: "12 yrs", availability: "This Week", nextSlot: "Friday 12:30 PM", language: "English, Hindi" },
  { name: "Dr. Vihaan Shah", department: "Pediatrics", role: "Child Health Specialist", experience: "11 yrs", availability: "Today", nextSlot: "3:15 PM", language: "English, Gujarati" },
  { name: "Dr. Sara Mathew", department: "Internal Medicine", role: "Senior Physician", experience: "17 yrs", availability: "Today", nextSlot: "5:00 PM", language: "English, Hindi" },
  { name: "Dr. Tara Oberoi", department: "Dermatology", role: "Dermatology Consultant", experience: "9 yrs", availability: "Tomorrow", nextSlot: "10:30 AM", language: "English, Hindi" },
  { name: "Dr. Omar Khan", department: "ENT", role: "ENT and Sinus Specialist", experience: "14 yrs", availability: "This Week", nextSlot: "Thursday 2:00 PM", language: "English, Urdu, Hindi" },
  { name: "Dr. Ananya Bose", department: "Ophthalmology", role: "Eye Care Consultant", experience: "10 yrs", availability: "Today", nextSlot: "1:45 PM", language: "English, Bengali" },
  { name: "Dr. Dev Malhotra", department: "Gastroenterology", role: "Digestive Health Consultant", experience: "12 yrs", availability: "Tomorrow", nextSlot: "5:30 PM", language: "English, Hindi" },
  { name: "Dr. Ishita Nair", department: "Oncology", role: "Medical Oncologist", experience: "16 yrs", availability: "This Week", nextSlot: "Wednesday 4:00 PM", language: "English, Hindi" }
];

export const healthPackages = [
  { id: "basic", name: "Basic Wellness", price: 1999, duration: "2 hours", audience: "Young adults", tests: ["CBC", "Blood sugar", "Lipid profile", "Liver profile", "Doctor review"] },
  { id: "family", name: "Family Health Shield", price: 5999, duration: "Half day", audience: "Families", tests: ["CBC", "Kidney profile", "Liver profile", "Thyroid", "Vitamin D", "Doctor review"] },
  { id: "heart", name: "Heart Smart Check", price: 4499, duration: "3 hours", audience: "Cardiac risk", tests: ["ECG", "Echo screening", "Lipid profile", "HbA1c", "Cardiology review"] },
  { id: "women", name: "Women's Wellness", price: 3999, duration: "3 hours", audience: "Women 25+", tests: ["CBC", "Thyroid", "Calcium", "Pap consult", "Gynecology review"] },
  { id: "senior", name: "Senior Care Plus", price: 7499, duration: "Half day", audience: "Age 55+", tests: ["CBC", "ECG", "Kidney profile", "Bone health", "Eye screening", "Physician review"] },
  { id: "diabetes", name: "Diabetes Control", price: 2999, duration: "2 hours", audience: "Diabetes care", tests: ["Fasting sugar", "HbA1c", "Kidney profile", "Foot check", "Diet consult"] },
  { id: "executive", name: "Executive Platinum", price: 11999, duration: "Full day", audience: "Busy professionals", tests: ["CBC", "ECG", "Echo", "Ultrasound", "Stress test", "Specialist review"] },
  { id: "child", name: "Child Growth Review", price: 2499, duration: "90 mins", audience: "Children", tests: ["Growth chart", "Vaccination review", "Nutrition consult", "Pediatric review"] }
];

export const symptomOptions = [
  { symptom: "Chest pain or severe breathlessness", department: "Emergency and Trauma", urgency: "Emergency", action: "Call emergency support or visit the ER immediately." },
  { symptom: "Sudden weakness, face droop, speech difficulty", department: "Emergency and Trauma", urgency: "Emergency", action: "Treat as time-sensitive. Seek emergency care now." },
  { symptom: "Fever, fatigue, body ache", department: "Internal Medicine", urgency: "Priority", action: "Book a physician consult. Use emergency care if symptoms worsen." },
  { symptom: "Child fever or vaccination question", department: "Pediatrics", urgency: "Routine", action: "Book pediatric care and carry vaccination records." },
  { symptom: "Pregnancy or women's health concern", department: "Obstetrics and Gynecology", urgency: "Routine", action: "Book a women's health consultation." },
  { symptom: "Joint pain, fracture, sports injury", department: "Orthopedics", urgency: "Priority", action: "Book orthopedics. Use emergency care for severe injury." },
  { symptom: "Headache, seizure history, dizziness", department: "Neurology", urgency: "Priority", action: "Book neurology. Go to emergency for sudden severe symptoms." },
  { symptom: "Skin rash, allergy, acne", department: "Dermatology", urgency: "Routine", action: "Book dermatology and note triggers or medicines." },
  { symptom: "Eye pain, blurred vision", department: "Ophthalmology", urgency: "Priority", action: "Book eye care. Sudden vision loss needs emergency evaluation." },
  { symptom: "Acidity, stomach pain, liver concern", department: "Gastroenterology", urgency: "Routine", action: "Book gastroenterology and bring recent reports if available." }
];

export const patientServices = [
  { title: "Admissions Desk", text: "Room selection, consent forms, deposit guidance, and attendant passes." },
  { title: "Billing Support", text: "Transparent estimates, interim bills, card/UPI payment support, and final discharge bills." },
  { title: "Insurance Help", text: "Cashless desk, document checklists, pre-authorization, and claim status support." },
  { title: "Visiting Hours", text: "General wards 5 PM - 7 PM, ICU updates through the care coordinator." },
  { title: "Report Access", text: "Lab and imaging reports routed digitally with printed copies on request." },
  { title: "Discharge Lounge", text: "Medicine handover, follow-up appointment, summary explanation, and home care notes." }
];

export const insurancePartners = [
  "Star Health", "HDFC ERGO", "ICICI Lombard", "Care Health", "Niva Bupa", "Aditya Birla Health",
  "Bajaj Allianz", "Tata AIG", "SBI General", "ManipalCigna", "New India Assurance", "United India"
];

export const gallery = [
  { src: "/images/doctor-consult.jpg", title: "Consultation suites" },
  { src: "/images/care-team.jpg", title: "Care coordination" },
  { src: "/images/hospital-room.jpg", title: "Patient rooms" },
  { src: "/images/ambulance.jpg", title: "Emergency response" }
];
