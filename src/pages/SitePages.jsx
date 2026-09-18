import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  AwardIcon,
  Building2Icon,
  CheckIcon,
  ChevronDownIcon,
  HeartHandshakeIcon,
  MailIcon,
  MapPinIcon,
  Maximize2Icon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StethoscopeIcon,
  TargetIcon,
  UsersIcon,
  XIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationBand, PageHero, SectionHeading } from "../components/InnerPage";
import {
  AboutCommitmentSection,
  AffiliationCarePath,
  ContactStepsSection,
  DoctorCareApproach,
  EditorialPromiseSection,
  GalleryExperienceSection,
  PatientPrivacySection,
  PatientSupportSection,
  ReadingPathSection,
  TreatmentPreparationSection,
  TreatmentProcessSection,
  VisitChecklistSection
} from "../components/PageSections";
import { Reveal } from "../components/Reveal";
import { SiteLink } from "../components/SiteLink";
import { affiliations, blogPosts, company, doctor, faqs, gallery, treatments } from "../data/content";

const iconSet = [HeartHandshakeIcon, SparklesIcon, AwardIcon, ShieldCheckIcon, TargetIcon, StethoscopeIcon, UsersIcon, Building2Icon, CheckIcon];

function AboutPage() {
  return <>
    <PageHero eyebrow="About Meddleaff" title="Healthcare built on trust, compassion and clinical excellence." lead={company.shortIntro} />
    <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
        <SectionHeading eyebrow="Our Story" title="A patient-focused healthcare organization." copy={company.about[0]} />
        <Reveal delay={0.12}><div className="rounded-[2rem] bg-brand-mint p-8 md:p-10"><p className="text-[16px] leading-relaxed text-ink-soft">{company.about[1]}</p><p className="mt-8 font-mono text-[10px] uppercase tracking-label text-brand-green">Established {company.established}</p></div></Reveal>
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {[{ label: "Mission", copy: company.mission, icon: TargetIcon }, { label: "Vision", copy: company.vision, icon: SparklesIcon }].map(({ label, copy, icon: Icon }) => <Reveal key={label}><article className="h-full rounded-[2rem] border border-brand-navy/8 bg-brand-cream p-8 md:p-10"><Icon className="h-7 w-7 text-brand-green" /><p className="mt-8 font-mono text-[10px] uppercase tracking-label text-brand-green">{label}</p><p className="mt-4 font-display text-2xl font-medium leading-snug text-brand-navy">{copy}</p></article></Reveal>)}
      </div>
    </div></section>
    <AboutCommitmentSection />
    <section className="bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Our Values" title="The standards behind every patient experience." /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{company.values.map(([title, copy], index) => { const Icon = iconSet[index]; return <Reveal key={title} delay={(index % 3) * .06}><article className="h-full rounded-[1.75rem] bg-white p-7"><Icon className="h-6 w-6 text-brand-green" /><h3 className="mt-6 font-display text-xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></article></Reveal>; })}</div></div></section>
    <section className="bg-white py-24"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Founders & Directors" title="United by a shared vision for better care." copy="The founding team combines medical, healthcare and management perspectives around one patient-first purpose." /><div className="mt-10 flex flex-wrap gap-3">{company.founders.map((name) => <span key={name} className="rounded-full border border-brand-navy/10 bg-brand-cream px-5 py-3 text-sm text-brand-navy">{name}</span>)}</div></div></section>
    <ConsultationBand />
  </>;
}

function DoctorProfilePage() {
  return <>
    <PageHero eyebrow="Doctor's Profile" title={doctor.name} lead={doctor.hero} image={doctor.image} imageAlt="Doctor in a white clinical coat">
      <p className="font-mono text-xs uppercase tracking-label text-brand-green">{doctor.title}</p>
      <div className="mt-7 flex flex-wrap gap-3"><SiteLink to="/contact" className="rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-green-dark">Book a Consultation</SiteLink><a href="#expertise" className="rounded-full border border-brand-navy/15 px-7 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-green hover:text-brand-green">View Expertise</a></div>
    </PageHero>
    <section id="expertise" className="bg-white py-24 lg:py-32"><div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><SectionHeading eyebrow="Clinical Background" title="Expertise you can rely on." /><div className="space-y-4">{doctor.expertise.map((item, index) => <Reveal key={item} delay={index * .06}><div className="flex gap-5 rounded-[1.5rem] bg-brand-cream p-6"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-green font-mono text-xs text-white">0{index + 1}</span><p className="text-[15px] leading-relaxed text-ink-soft">{item}</p></div></Reveal>)}</div></div></section>
    <DoctorCareApproach />
    <AffiliationsSection />
    <ConsultationBand title="Consult with Dr. Aaliya Amreen" />
  </>;
}

function AffiliationsSection({ full = false }) {
  return <section className="bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Institutions & Affiliations" title={full ? "Where you can find us." : "Experience across respected institutions."} copy={full ? "Institution and location information is presented clearly. Consultation availability and the appropriate care location are confirmed individually." : undefined} /><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{affiliations.map((item, index) => <Reveal key={item.name} delay={index * .07}><article className="group h-full rounded-[1.75rem] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_-30px_rgba(22,35,60,.35)]"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-mint font-mono text-sm font-semibold text-brand-green">{item.code}</span><h3 className="mt-8 font-display text-2xl font-medium text-brand-navy">{item.name}</h3><p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-muted"><MapPinIcon className="h-4 w-4 text-brand-green" />{item.location}</p></article></Reveal>)}</div></div></section>;
}

function HospitalAffiliationPage() {
  return <><PageHero eyebrow="Hospital Affiliation" title="Connected care across trusted institutions." lead="Explore the hospitals associated with Dr. Aaliya Amreen's clinical journey and patient care." /><AffiliationCarePath /><AffiliationsSection full /><ConsultationBand title="Find the right consultation setting" copy="Share your concern and the care team will help confirm the appropriate next step and location." /></>;
}

function TreatmentsPage() {
  const categories = ["All", ...new Set(treatments.map((item) => item.category))];
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = category === "All" ? treatments : treatments.filter((item) => item.category === category);
  return <><PageHero eyebrow="Treatments" title="Women's healthcare for every stage of life." lead="Explore care categories across obstetrics, gynaecology and reproductive health. Each care plan begins with an individual clinical consultation." />
    <TreatmentProcessSection />
    <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter treatments">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-5 py-3 text-sm transition ${category === item ? "bg-brand-green text-white" : "bg-brand-cream text-ink-soft hover:text-brand-green"}`}>{item}</button>)}</div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item, index) => <Reveal key={item.id} delay={(index % 3) * .05}><article className="flex h-full flex-col rounded-[1.75rem] border border-brand-navy/8 bg-brand-cream p-7"><span className="font-mono text-[10px] uppercase tracking-label text-brand-green">{item.category}</span><h2 className="mt-5 font-display text-2xl font-medium text-brand-navy">{item.title}</h2><p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.description}</p><button type="button" onClick={() => setActive(active === item.id ? null : item.id)} className="mt-auto inline-flex items-center gap-2 pt-7 text-left text-sm font-semibold text-brand-green">{active === item.id ? "Close details" : "Learn more"}<ChevronDownIcon className={`h-4 w-4 transition-transform ${active === item.id ? "rotate-180" : ""}`} /></button><AnimatePresence>{active === item.id && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="mt-5 border-t border-brand-navy/10 pt-5 text-sm leading-relaxed text-ink-soft">A consultation is required to understand symptoms, review medical history and determine an appropriate care plan. Treatment availability is confirmed individually.</p></motion.div>}</AnimatePresence></article></Reveal>)}</div>
    </div></section><TreatmentPreparationSection /><ConsultationBand /></>;
}

function GalleryPage() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (!selected) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);
  return <><PageHero eyebrow="Gallery" title="Spaces and moments shaped around care." lead="A visual introduction to the environment, consultation experience and care values behind Meddleaff Healthcare." />
    <GalleryExperienceSection />
    <section className="bg-white py-24"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{gallery.map((item, index) => <Reveal key={item.id} className={`${index === 0 || index === 5 ? "sm:col-span-2 sm:row-span-2" : ""}`}><button type="button" onClick={() => setSelected(item)} className="group relative h-full w-full overflow-hidden rounded-[1.75rem] bg-brand-mint text-left"><img src={item.image} alt={item.caption} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent" /><span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white"><span><span className="block font-mono text-[9px] uppercase tracking-label text-white/60">{item.category}</span><span className="mt-2 block font-display text-xl font-medium">{item.caption}</span></span><Maximize2Icon className="h-5 w-5 shrink-0" /></span></button></Reveal>)}</div></div></section>
    <ConsultationBand title="Experience care with confidence" copy="Request a consultation and let the care team guide you through the next step." />
    <AnimatePresence>{selected && <motion.div role="dialog" aria-modal="true" aria-label={selected.caption} className="fixed inset-0 z-[100] grid place-items-center bg-brand-navy/95 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><button type="button" autoFocus aria-label="Close image" className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={() => setSelected(null)}><XIcon /></button><motion.figure initial={{ scale: .96, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .98, y: 12 }} onClick={(event) => event.stopPropagation()} className="max-w-5xl"><img src={selected.image} alt={selected.caption} className="max-h-[78vh] w-auto rounded-[1.5rem] object-contain" /><figcaption className="mt-4 text-center text-white"><span className="font-display text-xl">{selected.caption}</span><span className="ml-3 font-mono text-[9px] uppercase tracking-label text-white/50">{selected.category}</span></figcaption></motion.figure></motion.div>}</AnimatePresence>
  </>;
}

function BlogsPage() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const posts = category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category);
  return <><PageHero eyebrow="Health Insights" title="Clear guidance for informed health decisions." lead="Explore approachable health education across pregnancy, women's health and fertility." />
    <EditorialPromiseSection />
    <section className="bg-white py-24"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-5 py-3 text-sm transition ${category === item ? "bg-brand-green text-white" : "bg-brand-cream text-ink-soft hover:text-brand-green"}`}>{item}</button>)}</div><div className="mt-12 grid gap-8 md:grid-cols-3">{posts.map((post, index) => <Reveal key={post.title} delay={index * .07}><article className="group h-full"><div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-brand-mint"><img src={post.image} alt="Women's health editorial" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><p className="mt-6 font-mono text-[9px] uppercase tracking-label text-brand-green">{post.category} <span className="mx-2 text-brand-navy/25">•</span> {post.readTime}</p><h2 className="mt-3 font-display text-2xl font-medium leading-snug text-brand-navy">{post.title}</h2><p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted">{post.date}<ArrowRightIcon className="h-4 w-4" /></span></article></Reveal>)}</div></div></section>
    <ReadingPathSection />
  </>;
}

function InquiryForm({ compact = false, kind = "appointment" }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^\+?[0-9\s()-]{7,18}$/.test(phone)) nextErrors.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Please share a little more detail.";
    if (kind === "query" && data.get("consent") !== "on") nextErrors.consent = "Consent is required so the care team can respond.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (data.get("website")) return;
    setStatus("submitting");
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (!endpoint) throw new Error("Contact endpoint is not configured");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, name: name.slice(0, 100), phone: phone.slice(0, 30), email: email.slice(0, 160), message: message.slice(0, 2000), consent: data.get("consent") === "on" })
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  if (status === "success") return <div role="status" className="rounded-[2rem] bg-brand-mint p-9"><span className="grid h-12 w-12 place-items-center rounded-full bg-brand-green text-white"><CheckIcon /></span><h3 className="mt-6 font-display text-3xl font-medium text-brand-navy">Thank you for reaching out.</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">Your request has been received. The care team will use the contact details you provided to respond.</p><button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-brand-green">Send another message</button></div>;
  const fields = [{ name: "name", label: "Full name", type: "text", autoComplete: "name" }, { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel" }, { name: "email", label: "Email (optional)", type: "email", autoComplete: "email" }];
  return <form onSubmit={submit} noValidate className={`grid gap-5 ${compact ? "" : "rounded-[2rem] bg-white p-7 shadow-[0_25px_70px_-45px_rgba(22,35,60,.35)] md:p-10"}`}>
    <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
    <div className="grid gap-5 sm:grid-cols-2">{fields.map(({ name, label, ...inputProps }, index) => <label key={name} className={index === 2 ? "sm:col-span-2" : ""}><span className="text-sm font-medium text-brand-navy">{label}</span><input name={name} {...inputProps} className="mt-2 w-full rounded-xl border border-brand-navy/12 bg-brand-cream px-4 py-3.5 text-sm outline-none transition focus:border-brand-green" aria-invalid={Boolean(errors[name])} />{errors[name] && <span className="mt-1 block text-xs text-red-700">{errors[name]}</span>}</label>)}</div>
    <label><span className="text-sm font-medium text-brand-navy">{kind === "query" ? "Your query" : "Message / reason for visit"}</span><textarea name="message" rows="5" className="mt-2 w-full resize-y rounded-xl border border-brand-navy/12 bg-brand-cream px-4 py-3.5 text-sm outline-none transition focus:border-brand-green" aria-invalid={Boolean(errors.message)} />{errors.message && <span className="mt-1 block text-xs text-red-700">{errors.message}</span>}</label>
    {kind === "query" && <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"><input type="checkbox" name="consent" className="mt-1 accent-brand-green" />I consent to being contacted regarding this query.</label>}
    {errors.consent && <p className="text-xs text-red-700">{errors.consent}</p>}
    {status === "error" && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">We could not send your request right now. Please try again later.</p>}
    <button type="submit" disabled={status === "submitting"} className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-green-dark disabled:cursor-wait disabled:opacity-65">{status === "submitting" ? "Sending..." : "Submit Request"} <SendIcon className="h-4 w-4" /></button>
  </form>;
}

function ContactPage() {
  return <><PageHero eyebrow="Contact Us" title="Let's plan your next step in care." lead="Use the enquiry form to request an appointment or share the reason for your visit." />
    <section className="bg-brand-cream py-24"><div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><SectionHeading eyebrow="Get in touch" title="We are here to listen." /><div className="mt-10 space-y-4">{[{ icon: PhoneIcon, label: "Appointments", value: "Request a callback through the online form" }, { icon: MailIcon, label: "Patient queries", value: "Use Patient's Corner for non-emergency questions" }, { icon: MapPinIcon, label: "Visit details", value: "Location and timing are shared after confirmation" }].map(({ icon: Icon, label, value }) => <div key={label} className="flex gap-4 rounded-2xl bg-white p-5"><Icon className="h-5 w-5 shrink-0 text-brand-green" /><div><p className="font-mono text-[9px] uppercase tracking-label text-ink-muted">{label}</p><p className="mt-1 text-sm text-brand-navy">{value}</p></div></div>)}</div></div><InquiryForm /></div></section>
    <ContactStepsSection />
    <VisitChecklistSection />
  </>;
}

const patientTabs = [
  { label: "Share Your Queries", to: "/patient-corner/queries" },
  { label: "Testimonials", to: "/patient-corner/testimonials" },
  { label: "FAQs", to: "/patient-corner/faqs" }
];

function PatientNav({ pathname }) {
  return <nav aria-label="Patient corner" className="flex flex-wrap gap-2">{patientTabs.map((tab) => <SiteLink key={tab.to} to={tab.to} className={`rounded-full px-5 py-3 text-sm ${pathname === tab.to || (pathname === "/patient-corner" && tab.to.endsWith("queries")) ? "bg-brand-green text-white" : "bg-white text-ink-soft"}`}>{tab.label}</SiteLink>)}</nav>;
}

function PatientCornerPage({ pathname }) {
  const mode = pathname.endsWith("testimonials") ? "testimonials" : pathname.endsWith("faqs") ? "faqs" : "queries";
  return <><PageHero eyebrow="Patient's Corner" title="Information, questions and patient support." lead="Choose a section to send a query, review patient-story publishing information or browse frequently asked questions."><PatientNav pathname={pathname} /></PageHero>
    <PatientPrivacySection />
    <section className="bg-brand-cream py-24"><div className="mx-auto max-w-[1100px] px-6 md:px-8">
      {mode === "queries" && <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><SectionHeading eyebrow="Share Your Queries" title="Ask in confidence." copy="Tell us what you would like help with and how the care team can contact you. Please do not use this form for emergencies." /><InquiryForm kind="query" /></div>}
      {mode === "testimonials" && <div><SectionHeading eyebrow="Testimonials" title="Patient stories, shared with consent." copy="Every patient experience is handled with dignity, privacy and complete control over how it may be shared." /><div className="mt-12 grid gap-5 md:grid-cols-3">{[[ShieldCheckIcon, "Consent first", "A story is shared only after clear permission."], [UsersIcon, "Patient controlled", "Names and personal details follow the patient's preference."], [HeartHandshakeIcon, "Respectful context", "Experiences are presented without exaggerating medical outcomes."]].map(([Icon, title, copy], index) => <Reveal key={title} delay={index * .07}><article className="h-full rounded-[1.5rem] bg-white p-7"><Icon className="h-6 w-6 text-brand-green" /><h3 className="mt-7 font-display text-xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></article></Reveal>)}</div></div>}
      {mode === "faqs" && <FaqList />}
    </div></section>
    <PatientSupportSection />
  </>;
}

function FaqList() {
  const [open, setOpen] = useState(0);
  return <div><SectionHeading eyebrow="Frequently Asked Questions" title="Helpful answers before your visit." /><div className="mt-12 space-y-3">{faqs.map(([question, answer], index) => <article key={question} className="overflow-hidden rounded-[1.5rem] bg-white"><button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-5 p-6 text-left"><span className="font-display text-xl font-medium text-brand-navy">{question}</span><ChevronDownIcon className={`h-5 w-5 shrink-0 text-brand-green transition-transform ${open === index ? "rotate-180" : ""}`} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{answer}</p></motion.div>}</AnimatePresence></article>)}</div></div>;
}

function NotFoundPage() {
  return <><PageHero eyebrow="404" title="This page could not be found." lead="The link may have moved, or the page may still be in preparation."><SiteLink to="/" className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white">Return Home <ArrowRightIcon className="h-4 w-4" /></SiteLink></PageHero></>;
}

export { AboutPage, BlogsPage, ContactPage, DoctorProfilePage, GalleryPage, HospitalAffiliationPage, NotFoundPage, PatientCornerPage, TreatmentsPage };
