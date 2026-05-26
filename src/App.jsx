import { useEffect, useState } from "react";
import {
  Activity,
  Ambulance,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  HeartPulse,
  Hospital,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X
} from "lucide-react";
import { buildFallbackReply, chatStarters } from "./chatKnowledge";
import {
  departments,
  doctors,
  healthPackages,
  insurancePartners,
  navLinks,
  patientServices,
  stats,
  symptomOptions
} from "./data";
import "./styles.css";

const routes = new Set(navLinks.map((link) => link.href));
const aliases = {
  "/packages": "/health-packages",
  "/patients": "/patient-info",
  "/appointment": "/appointments"
};

function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return aliases[clean] || (routes.has(clean) ? clean : "/");
}

export default function App() {
  const [route, setRoute] = useState(() => normalizePath(window.location.pathname));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [departmentSearch, setDepartmentSearch] = useState("");
  const [departmentCategory, setDepartmentCategory] = useState("All");
  const [doctorDepartment, setDoctorDepartment] = useState("All");
  const [doctorAvailability, setDoctorAvailability] = useState("All");
  const [selectedSymptom, setSelectedSymptom] = useState(symptomOptions[0]);
  const [comparePackages, setComparePackages] = useState(["basic", "heart"]);
  const [appointment, setAppointment] = useState({
    name: "",
    phone: "",
    department: "Cardiology",
    doctor: "Dr. Meera Sethi",
    date: "",
    slot: "10:30 AM"
  });
  const [appointmentStatus, setAppointmentStatus] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");

  useEffect(() => {
    const onPop = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const pageTitle = navLinks.find((link) => link.href === route)?.label || "Home";

  function navigate(event, href) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    const nextRoute = normalizePath(href);
    window.history.pushState({}, "", nextRoute);
    setRoute(nextRoute);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitAppointment(event) {
    event.preventDefault();
    if (!appointment.name.trim() || !appointment.phone.trim() || !appointment.date) {
      setAppointmentStatus("Add name, phone, and preferred date to preview the appointment request.");
      return;
    }
    setAppointmentStatus(
      `Appointment request saved for ${appointment.department} with ${appointment.doctor} at ${appointment.slot}.`
    );
  }

  function submitContact(event) {
    event.preventDefault();
    const valid = contact.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
    setContactStatus(valid ? "Message preview saved. A real site would send this to the hospital desk." : "Add a name and valid email.");
  }

  const pageProps = {
    navigate,
    departmentSearch,
    setDepartmentSearch,
    departmentCategory,
    setDepartmentCategory,
    doctorDepartment,
    setDoctorDepartment,
    doctorAvailability,
    setDoctorAvailability,
    selectedSymptom,
    setSelectedSymptom,
    comparePackages,
    setComparePackages,
    appointment,
    setAppointment,
    appointmentStatus,
    submitAppointment,
    contact,
    setContact,
    contactStatus,
    submitContact,
    openEmergency: () => setEmergencyOpen(true)
  };

  return (
    <div className="site-shell">
      <Header
        route={route}
        pageTitle={pageTitle}
        mobileOpen={mobileOpen}
        navigate={navigate}
        setMobileOpen={setMobileOpen}
        openEmergency={() => setEmergencyOpen(true)}
      />

      <main>
        {route === "/" && <HomePage {...pageProps} />}
        {route === "/departments" && <DepartmentsPage {...pageProps} />}
        {route === "/doctors" && <DoctorsPage {...pageProps} />}
        {route === "/appointments" && <AppointmentsPage {...pageProps} />}
        {route === "/emergency" && <EmergencyPage {...pageProps} />}
        {route === "/patient-info" && <PatientInfoPage />}
        {route === "/health-packages" && <PackagesPage {...pageProps} />}
        {route === "/insurance" && <InsurancePage />}
        {route === "/contact" && <ContactPage {...pageProps} />}
      </main>

      <EmergencyPanel open={emergencyOpen} onClose={() => setEmergencyOpen(false)} navigate={navigate} />
      <ChatWidget route={route} />
    </div>
  );
}

function Header({ route, pageTitle, mobileOpen, navigate, setMobileOpen, openEmergency }) {
  return (
    <header className="topbar">
      <InternalLink className="brand" href="/" navigate={navigate} ariaLabel="Mediva Care Hospital home">
        <span><HeartPulse size={20} aria-hidden="true" /></span>
        <strong>Mediva Care</strong>
      </InternalLink>

      <nav className={mobileOpen ? "open" : ""} aria-label="Main navigation">
        {navLinks.map((link) => (
          <InternalLink
            key={link.href}
            href={link.href}
            navigate={navigate}
            className={route === link.href ? "active" : ""}
          >
            {link.label}
          </InternalLink>
        ))}
      </nav>

      <div className="header-actions">
        <button className="emergency-button" type="button" onClick={openEmergency}>
          <Ambulance size={17} aria-hidden="true" />
          Emergency
        </button>
        <button className="menu-button" type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={`Toggle navigation for ${pageTitle}`}>
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function InternalLink({ href, navigate, className = "", ariaLabel, children }) {
  return (
    <a className={className} href={href} aria-label={ariaLabel} onClick={(event) => navigate(event, href)}>
      {children}
    </a>
  );
}

function HomePage({ navigate, openEmergency, selectedSymptom, setSelectedSymptom }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Multi-specialty care, built around clarity</p>
          <h1>Premium hospital care with every next step visible.</h1>
          <p>
            Mediva Care Hospital connects emergency access, specialist discovery,
            appointments, health packages, insurance, and patient support in one calm digital experience.
          </p>
          <div className="hero-actions">
            <InternalLink className="primary-link" href="/appointments" navigate={navigate}>
              Book appointment <CalendarCheck size={18} aria-hidden="true" />
            </InternalLink>
            <button className="secondary-link" type="button" onClick={openEmergency}>
              Emergency help <Ambulance size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/images/doctor-consult.jpg" alt="Doctor consulting with a patient" />
          <div className="pulse-card">
            <Activity size={22} aria-hidden="true" />
            <div>
              <strong>ER intake active</strong>
              <span>Average triage start: 7 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="home-grid-section">
        <div className="home-panel emergency-panel-card">
          <div>
            <p className="eyebrow">Fast access</p>
            <h2>Emergency actions stay one tap away.</h2>
            <p>For severe symptoms, call emergency support or visit the nearest ER immediately.</p>
          </div>
          <button type="button" onClick={openEmergency}>
            Open emergency panel <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
        <SymptomGuide selectedSymptom={selectedSymptom} setSelectedSymptom={setSelectedSymptom} />
      </section>

      <section className="section-pad">
        <SectionHeader
          kicker="Featured departments"
          title="Real hospital depth, organized for quick decisions."
          action={<InternalLink className="text-link" href="/departments" navigate={navigate}>View all departments <ArrowUpRight size={17} /></InternalLink>}
        />
        <div className="department-grid compact">
          {departments.slice(0, 6).map((department) => (
            <DepartmentCard key={department.name} department={department} />
          ))}
        </div>
      </section>

      <section className="split-band">
        <div>
          <p className="eyebrow">Care team</p>
          <h2>Specialists, slots, and departments in one directory.</h2>
          <p>
            Visitors can filter doctors by department and availability before they reach the booking form.
          </p>
          <InternalLink className="primary-link" href="/doctors" navigate={navigate}>
            Find doctors <UserRound size={18} />
          </InternalLink>
        </div>
        <div className="doctor-mini-list">
          {doctors.slice(0, 4).map((doctor) => (
            <DoctorRow key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </section>
    </>
  );
}

function DepartmentsPage({ departmentSearch, setDepartmentSearch, departmentCategory, setDepartmentCategory }) {
  const categories = ["All", ...new Set(departments.map((department) => department.category))];
  const visibleDepartments = departments.filter((department) => {
    const query = departmentSearch.trim().toLowerCase();
    const categoryMatch = departmentCategory === "All" || department.category === departmentCategory;
    const searchMatch =
      !query ||
      [department.name, department.summary, department.lead, department.services.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query);
    return categoryMatch && searchMatch;
  });

  return (
    <>
      <PageHero
        kicker="Departments"
        title="A full catalog of hospital services."
        text="Visitors can search departments, see lead consultants, hours, and key services before taking the next step."
        image="/images/hospital-room.jpg"
        imageAlt="Hospital patient room"
      />
      <section className="section-pad">
        <div className="toolbar">
          <label className="search-box">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search departments</span>
            <input value={departmentSearch} onChange={(event) => setDepartmentSearch(event.target.value)} placeholder="Search cardiology, scans, pediatrics..." />
          </label>
          <div className="chip-row" aria-label="Department categories">
            {categories.map((category) => (
              <button key={category} className={departmentCategory === category ? "active" : ""} type="button" onClick={() => setDepartmentCategory(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="department-grid">
          {visibleDepartments.map((department) => (
            <DepartmentCard key={department.name} department={department} />
          ))}
        </div>
      </section>
    </>
  );
}

function DoctorsPage({ doctorDepartment, setDoctorDepartment, doctorAvailability, setDoctorAvailability }) {
  const doctorDepartments = ["All", ...new Set(doctors.map((doctor) => doctor.department))];
  const availability = ["All", "Today", "Tomorrow", "This Week", "24/7"];
  const visibleDoctors = doctors.filter((doctor) => {
    const departmentMatch = doctorDepartment === "All" || doctor.department === doctorDepartment;
    const availabilityMatch = doctorAvailability === "All" || doctor.availability === doctorAvailability;
    return departmentMatch && availabilityMatch;
  });

  return (
    <>
      <PageHero
        kicker="Doctors"
        title="Find the right specialist before booking."
        text="Filter by department and availability, then move into the appointment request flow with confidence."
        image="/images/care-team.jpg"
        imageAlt="Doctors using a tablet together"
      />
      <section className="section-pad">
        <div className="filter-shelf">
          <label>
            Department
            <select value={doctorDepartment} onChange={(event) => setDoctorDepartment(event.target.value)}>
              {doctorDepartments.map((department) => <option key={department}>{department}</option>)}
            </select>
          </label>
          <label>
            Availability
            <select value={doctorAvailability} onChange={(event) => setDoctorAvailability(event.target.value)}>
              {availability.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <span>{visibleDoctors.length} doctors available</span>
        </div>
        <div className="doctor-grid">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </section>
    </>
  );
}

function AppointmentsPage({ appointment, setAppointment, appointmentStatus, submitAppointment }) {
  return (
    <>
      <PageHero
        kicker="Appointments"
        title="A focused booking path for patients."
        text="The appointment flow is prototype-safe, but it demonstrates how a real hospital can collect intent without creating friction."
        image="/images/doctor-tablet.jpg"
        imageAlt="Doctor and patient using a tablet"
      />
      <section className="appointment-section">
        <div className="appointment-copy">
          <p className="eyebrow">Book care</p>
          <h2>Choose department, doctor, date, and slot.</h2>
          <p>
            This preview keeps sensitive medical information out of the demo and focuses on the operational booking journey.
          </p>
          <ul>
            <li><Check size={18} /> No payment or medical records collected</li>
            <li><Check size={18} /> Direct department-to-doctor alignment</li>
            <li><Check size={18} /> Clear confirmation state for client demos</li>
          </ul>
        </div>
        <AppointmentForm
          appointment={appointment}
          setAppointment={setAppointment}
          appointmentStatus={appointmentStatus}
          submitAppointment={submitAppointment}
        />
      </section>
    </>
  );
}

function EmergencyPage({ openEmergency }) {
  return (
    <>
      <PageHero
        kicker="Emergency"
        title="Urgent care information must be immediate."
        text="The emergency page keeps phone, ambulance, ER readiness, and safety direction visible without hiding behind marketing content."
        image="/images/ambulance.jpg"
        imageAlt="Ambulance with emergency personnel"
        urgent
      />
      <section className="emergency-layout">
        <div className="emergency-callout">
          <Ambulance size={38} aria-hidden="true" />
          <h2>24/7 Emergency Desk</h2>
          <p>For severe symptoms, call local emergency services or visit the nearest emergency room immediately.</p>
          <div className="call-row">
            <a href="tel:+911244001080">+91 124 400 1080</a>
            <button type="button" onClick={openEmergency}>Open quick panel</button>
          </div>
        </div>
        <div className="readiness-grid">
          <Brief icon={HeartPulse} title="Cardiac response" text="Emergency ECG, cardiac triage, and cath-lab handoff readiness." />
          <Brief icon={Activity} title="Stroke alert" text="Rapid neurological triage and imaging coordination for time-sensitive cases." />
          <Brief icon={Hospital} title="Critical care" text="ICU transfer pathway, oxygen support, and continuous monitoring." />
          <Brief icon={UsersRound} title="Family desk" text="A care coordinator keeps attendants updated during active emergency intake." />
        </div>
      </section>
    </>
  );
}

function PatientInfoPage() {
  return (
    <>
      <PageHero
        kicker="Patient info"
        title="Patient support should feel organized before arrival."
        text="Admissions, billing, reports, visiting hours, and discharge support are separated into a practical patient information page."
        image="/images/hospital-room.jpg"
        imageAlt="Hospital care room"
      />
      <section className="section-pad">
        <div className="service-grid">
          {patientServices.map((service) => (
            <article className="service-card" key={service.title}>
              <FileText size={24} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PackagesPage({ comparePackages, setComparePackages }) {
  function togglePackage(id) {
    setComparePackages((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }
      if (current.length >= 3) {
        return [current[1], current[2], id];
      }
      return [...current, id];
    });
  }

  const selected = healthPackages.filter((item) => comparePackages.includes(item.id));

  return (
    <>
      <PageHero
        kicker="Health packages"
        title="Preventive care packages with comparison built in."
        text="A hospital client needs more than a price list. Visitors can compare packages by tests, audience, duration, and price."
        image="/images/doctor-tablet.jpg"
        imageAlt="Health package consultation"
      />
      <section className="section-pad">
        <div className="package-grid">
          {healthPackages.map((item) => (
            <article className={`package-card ${comparePackages.includes(item.id) ? "selected" : ""}`} key={item.id}>
              <div>
                <span>{item.audience}</span>
                <h3>{item.name}</h3>
                <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                <p>{item.duration}</p>
              </div>
              <ul>
                {item.tests.slice(0, 4).map((test) => <li key={test}><Check size={15} /> {test}</li>)}
              </ul>
              <button type="button" onClick={() => togglePackage(item.id)}>
                {comparePackages.includes(item.id) ? "Remove from compare" : "Compare package"}
              </button>
            </article>
          ))}
        </div>
        <PackageComparison selected={selected} />
      </section>
    </>
  );
}

function InsurancePage() {
  return (
    <>
      <PageHero
        kicker="Insurance"
        title="Cashless claim support without confusion."
        text="Insurance partners, claim steps, and document requirements are clearly separated from appointment and care content."
        image="/images/hospital-room.jpg"
        imageAlt="Hospital room with medical equipment"
      />
      <section className="insurance-section">
        <div>
          <p className="eyebrow">Claim flow</p>
          <h2>Four clear steps for insurance support.</h2>
          <div className="steps">
            {["Share policy card", "Pre-authorization check", "Treatment estimate", "Final claim desk"].map((step, index) => (
              <article key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
        <div className="partner-grid">
          {insurancePartners.map((partner) => (
            <span key={partner}><ShieldCheck size={16} /> {partner}</span>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ contact, setContact, contactStatus, submitContact, openEmergency }) {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Reach the right desk quickly."
        text="Location, phone, email, emergency, appointment, and message flows are grouped into one practical contact page."
        image="/images/doctor-consult.jpg"
        imageAlt="Doctor consultation desk"
      />
      <section className="contact-section">
        <div className="contact-details">
          <p className="eyebrow">Mediva Care Hospital</p>
          <h2>Sector 52, Gurugram</h2>
          <p>Near Metro Health Road, Gurugram, Haryana. Open for outpatient care, diagnostics, admissions, and emergency support.</p>
          <div className="visit-details">
            <span><Phone size={18} /> +91 124 400 1080</span>
            <span><Mail size={18} /> care@medivahospital.in</span>
            <span><Clock3 size={18} /> OPD 8 AM - 8 PM</span>
            <span><MapPin size={18} /> Gurugram, Haryana</span>
          </div>
          <button type="button" onClick={openEmergency}>Emergency quick panel</button>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          <label>
            Name
            <input value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} placeholder="Your name" />
          </label>
          <label>
            Email
            <input value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea value={contact.message} onChange={(event) => setContact({ ...contact, message: event.target.value })} placeholder="How can the hospital help?" rows={5} />
          </label>
          <button type="submit">Send message preview</button>
          {contactStatus && <p>{contactStatus}</p>}
        </form>
      </section>
    </>
  );
}

function PageHero({ kicker, title, text, image, imageAlt, urgent = false }) {
  return (
    <section className={`page-hero ${urgent ? "urgent" : ""}`}>
      <div>
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="page-image">
        <img src={image} alt={imageAlt} />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Hospital highlights">
      {stats.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function SectionHeader({ kicker, title, action }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

function SymptomGuide({ selectedSymptom, setSelectedSymptom }) {
  const matchedDepartment = departments.find((department) => department.name === selectedSymptom.department);

  return (
    <article className="symptom-guide">
      <div className="guide-header">
        <div>
          <p className="eyebrow">Symptom guide</p>
          <h2>Choose a concern, find the right desk.</h2>
        </div>
        <Sparkles size={26} aria-hidden="true" />
      </div>
      <div className="symptom-options">
        {symptomOptions.map((item) => (
          <button key={item.symptom} type="button" className={selectedSymptom.symptom === item.symptom ? "active" : ""} onClick={() => setSelectedSymptom(item)}>
            {item.symptom}
          </button>
        ))}
      </div>
      <div className={`symptom-result ${selectedSymptom.urgency === "Emergency" ? "critical" : ""}`}>
        <span>{selectedSymptom.urgency}</span>
        <h3>{selectedSymptom.department}</h3>
        <p>{selectedSymptom.action}</p>
        {matchedDepartment && <small>Lead: {matchedDepartment.lead} · Hours: {matchedDepartment.hours}</small>}
      </div>
      <p className="safety-note">This guide is not a diagnosis. If symptoms are severe, sudden, or worsening, seek emergency care immediately.</p>
    </article>
  );
}

function DepartmentCard({ department }) {
  return (
    <article className="department-card">
      <img src={department.image} alt={`${department.name} department`} />
      <div>
        <span>{department.category}</span>
        <h3>{department.name}</h3>
        <p>{department.summary}</p>
        <div className="meta-row">
          <small>{department.lead}</small>
          <small>{department.hours}</small>
        </div>
        <ul>
          {department.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
      </div>
    </article>
  );
}

function DoctorCard({ doctor }) {
  return (
    <article className="doctor-card">
      <div className="doctor-avatar">{doctor.name.split(" ").slice(-1)[0][0]}</div>
      <div>
        <span>{doctor.department}</span>
        <h3>{doctor.name}</h3>
        <p>{doctor.role}</p>
      </div>
      <div className="doctor-meta">
        <span><BadgeCheck size={16} /> {doctor.experience}</span>
        <span><Clock3 size={16} /> {doctor.nextSlot}</span>
        <span><UsersRound size={16} /> {doctor.language}</span>
      </div>
    </article>
  );
}

function DoctorRow({ doctor }) {
  return (
    <article className="doctor-row">
      <div className="doctor-avatar">{doctor.name.split(" ").slice(-1)[0][0]}</div>
      <div>
        <strong>{doctor.name}</strong>
        <span>{doctor.department} · {doctor.nextSlot}</span>
      </div>
    </article>
  );
}

function AppointmentForm({ appointment, setAppointment, appointmentStatus, submitAppointment }) {
  const availableDoctors = doctors.filter((doctor) => doctor.department === appointment.department);
  const departmentNames = departments.map((department) => department.name);

  function updateDepartment(department) {
    const nextDoctor = doctors.find((doctor) => doctor.department === department)?.name || doctors[0].name;
    setAppointment({ ...appointment, department, doctor: nextDoctor });
  }

  return (
    <form className="appointment-form" onSubmit={submitAppointment}>
      <label>
        Patient name
        <input value={appointment.name} onChange={(event) => setAppointment({ ...appointment, name: event.target.value })} placeholder="Full name" />
      </label>
      <label>
        Phone
        <input value={appointment.phone} onChange={(event) => setAppointment({ ...appointment, phone: event.target.value })} placeholder="+91..." />
      </label>
      <label>
        Department
        <select value={appointment.department} onChange={(event) => updateDepartment(event.target.value)}>
          {departmentNames.map((department) => <option key={department}>{department}</option>)}
        </select>
      </label>
      <label>
        Doctor
        <select value={appointment.doctor} onChange={(event) => setAppointment({ ...appointment, doctor: event.target.value })}>
          {availableDoctors.map((doctor) => <option key={doctor.name}>{doctor.name}</option>)}
        </select>
      </label>
      <label>
        Date
        <input type="date" value={appointment.date} onChange={(event) => setAppointment({ ...appointment, date: event.target.value })} />
      </label>
      <label>
        Slot
        <select value={appointment.slot} onChange={(event) => setAppointment({ ...appointment, slot: event.target.value })}>
          {["9:00 AM", "10:30 AM", "12:00 PM", "3:30 PM", "5:00 PM", "7:00 PM"].map((slot) => <option key={slot}>{slot}</option>)}
        </select>
      </label>
      <button type="submit">Preview appointment request</button>
      {appointmentStatus && <p>{appointmentStatus}</p>}
    </form>
  );
}

function PackageComparison({ selected }) {
  return (
    <section className="compare-box" aria-label="Health package comparison">
      <div>
        <p className="eyebrow">Compare selected</p>
        <h2>Package comparison</h2>
      </div>
      {selected.length === 0 ? (
        <p>Select up to three packages to compare tests, duration, audience, and price.</p>
      ) : (
        <div className="compare-grid" style={{ "--columns": selected.length }}>
          {selected.map((item) => (
            <article key={item.id}>
              <h3>{item.name}</h3>
              <strong>₹{item.price.toLocaleString("en-IN")}</strong>
              <span>{item.duration}</span>
              <small>{item.audience}</small>
              <ul>{item.tests.map((test) => <li key={test}>{test}</li>)}</ul>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function EmergencyPanel({ open, onClose, navigate }) {
  return (
    <aside className={`quick-emergency ${open ? "open" : ""}`} aria-hidden={!open}>
      <button className="panel-backdrop" type="button" onClick={onClose}>
        <span className="sr-only">Close emergency panel</span>
      </button>
      <div className="panel-card" role="dialog" aria-modal="true" aria-label="Emergency quick actions">
        <div className="panel-header">
          <div>
            <span>Emergency quick actions</span>
            <h2>Need urgent help?</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <a className="call-now" href="tel:+911244001080">
          <Phone size={22} /> Call +91 124 400 1080
        </a>
        <div className="panel-actions">
          <button type="button" onClick={(event) => { onClose(); navigate(event, "/emergency"); }}>
            ER readiness <ChevronRight size={18} />
          </button>
          <button type="button" onClick={(event) => { onClose(); navigate(event, "/appointments"); }}>
            Book OPD <ChevronRight size={18} />
          </button>
        </div>
        <p>For chest pain, stroke signs, major injury, severe breathing trouble, or sudden worsening symptoms, seek emergency care immediately.</p>
      </div>
    </aside>
  );
}

function Brief({ icon: Icon, title, text }) {
  return (
    <article className="brief-card">
      <Icon size={24} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ChatWidget({ route }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("fallback-ready");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I am the Mediva project concierge. Ask me about this hospital prototype, its features, or Shubham Goyal's NexaFlow work."
    }
  ]);

  async function sendMessage(messageText = input) {
    const clean = messageText.trim();
    if (!clean || loading) {
      return;
    }

    const nextMessages = [...messages, { role: "user", content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    const localFallbackOnly = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    if (localFallbackOnly) {
      setMode("Stored fallback");
      setMessages((current) => [...current, { role: "assistant", content: buildFallbackReply(clean) }]);
      setLoading(false);
      return;
    }

    try {
      const apiResponse = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          page: route,
          history: nextMessages.slice(-6)
        })
      });

      if (!apiResponse.ok) {
        throw new Error("Chat API unavailable");
      }

      const data = await apiResponse.json();
      setMode(data.mode === "ai" ? `AI: ${data.model || "OpenRouter"}` : "Stored fallback");
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply || buildFallbackReply(clean) }
      ]);
    } catch {
      setMode("Stored fallback");
      setMessages((current) => [...current, { role: "assistant", content: buildFallbackReply(clean) }]);
    } finally {
      setLoading(false);
    }
  }

  function submitChat(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <aside className={`chat-widget ${open ? "open" : ""}`} aria-label="Prototype AI concierge">
      {open && (
        <div className="chat-panel">
          <div className="chat-head">
            <div>
              <span>Project Concierge</span>
              <h2>Ask about this prototype</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="chat-mode">
            <Sparkles size={14} aria-hidden="true" />
            {mode}
          </div>
          <div className="starter-row" aria-label="Suggested chat prompts">
            {chatStarters.map((starter) => (
              <button key={starter} type="button" onClick={() => sendMessage(starter)}>
                {starter}
              </button>
            ))}
          </div>
          <div className="chat-log" aria-live="polite">
            {messages.map((message, index) => (
              <article className={message.role} key={`${message.role}-${index}`}>
                {message.content}
              </article>
            ))}
            {loading && <article className="assistant">Thinking...</article>}
          </div>
          <form className="chat-form" onSubmit={submitChat}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about features, Shubham, bookings..."
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send chat message">
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
          <p className="chat-note">AI answers use a server-side key. Stored project answers appear only if AI is unavailable.</p>
        </div>
      )}
      <button className="chat-launcher" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open}>
        <Sparkles size={20} aria-hidden="true" />
        Ask AI
      </button>
    </aside>
  );
}
