import {
  ArrowRightIcon,
  BookOpenIcon,
  CalendarCheckIcon,
  CheckCircle2Icon,
  ClipboardListIcon,
  FileHeartIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  ImageIcon,
  LockKeyholeIcon,
  MessagesSquareIcon,
  ScanLineIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StethoscopeIcon,
  UsersIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./InnerPage";
import { SiteLink } from "./SiteLink";

const carePrinciples = [
  { icon: HeartHandshakeIcon, title: "Care with empathy", copy: "Every interaction is designed to feel respectful, attentive and easy to understand." },
  { icon: ShieldCheckIcon, title: "Ethical by default", copy: "Clear communication, informed decisions and patient safety guide the care experience." },
  { icon: SparklesIcon, title: "Always improving", copy: "Clinical processes and patient experiences are reviewed with a focus on meaningful improvement." }
];

function AboutCommitmentSection() {
  return <section className="relative overflow-hidden bg-brand-navy py-24 text-white lg:py-32">
    <div className="pointer-events-none absolute -right-28 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/10" />
    <div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading tone="light" eyebrow="How We Work" title="Professional care should still feel deeply human." copy="Meddleaff brings medical, operational and patient-support thinking together so that every step feels considered—not transactional." />
      <div className="mt-14 grid gap-4 md:grid-cols-3">{carePrinciples.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * .08}><article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[.06] p-7 backdrop-blur"><Icon className="h-7 w-7 text-brand-gold" /><h3 className="mt-7 font-display text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/65">{copy}</p></article></Reveal>)}</div>
    </div>
  </section>;
}

const consultationStages = [
  ["01", "Listen", "Your concerns, health history and priorities shape the conversation."],
  ["02", "Understand", "Relevant clinical information is reviewed before discussing options."],
  ["03", "Plan", "The recommended next steps are explained in clear, practical language."],
  ["04", "Continue", "Follow-up keeps the care plan connected as needs change."]
];

function DoctorCareApproach() {
  return <section className="bg-brand-navy py-24 text-white lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading tone="light" eyebrow="Consultation Approach" title="Thoughtful care, one conversation at a time." copy="A consultation is structured to give patients space to ask questions, understand options and participate confidently in decisions." />
    <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{consultationStages.map(([number, title, copy], index) => <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .6, delay: index * .08 }} className="bg-brand-navy p-7 md:p-8"><span className="font-mono text-xs text-brand-gold">{number}</span><h3 className="mt-10 font-display text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{copy}</p></motion.article>)}</div>
  </div></section>;
}

function AffiliationCarePath() {
  const items = [
    { icon: HospitalIcon, title: "Institution context", copy: "Hospital names and locations are presented clearly without implying schedules or services that have not been confirmed." },
    { icon: FileHeartIcon, title: "Prepared consultation", copy: "Patients can carry previous reports, prescriptions and scans to help create a more complete clinical picture." },
    { icon: CalendarCheckIcon, title: "Availability confirmed", copy: "The care team confirms the appropriate location and consultation availability for each appointment request." }
  ];
  return <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="Connected Care" title="A clearer path between enquiry and consultation." copy="Affiliations are part of the care journey, not just a list of names. Each appointment should connect the patient with the right setting and information." /><div className="space-y-4">{items.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * .07}><article className="group flex gap-5 rounded-[1.5rem] border border-brand-navy/8 p-6 transition hover:border-brand-green/25 hover:bg-brand-mint/40"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-mint text-brand-green"><Icon className="h-5 w-5" /></span><div><h3 className="font-display text-xl font-medium text-brand-navy">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{copy}</p></div></article></Reveal>)}</div></div></div></section>;
}

const treatmentSteps = [
  { icon: MessagesSquareIcon, number: "01", title: "Start with your concern", copy: "Share symptoms, priorities and relevant health history." },
  { icon: StethoscopeIcon, number: "02", title: "Clinical consultation", copy: "A clinician reviews the information and identifies appropriate next steps." },
  { icon: ClipboardListIcon, number: "03", title: "Personal care plan", copy: "Options, preparation and follow-up are explained clearly." },
  { icon: CheckCircle2Icon, number: "04", title: "Review and continuity", copy: "Progress is reviewed and the plan is adjusted when clinically needed." }
];

function TreatmentProcessSection() {
  return <section className="bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Your Care Journey" title="A considered process from first conversation to follow-up." copy="The exact clinical pathway varies by patient. The experience around it should remain clear, respectful and coordinated." />
    <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"><span className="absolute left-0 right-0 top-7 hidden h-px bg-brand-green/15 lg:block" />{treatmentSteps.map(({ icon: Icon, number, title, copy }, index) => <Reveal key={title} delay={index * .07} className="relative"><article className="h-full rounded-[1.75rem] bg-white p-7"><span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white shadow-[0_10px_30px_-12px_rgba(15,93,93,.7)]"><Icon className="h-6 w-6" /></span><p className="mt-8 font-mono text-[10px] tracking-label text-brand-green">STEP {number}</p><h3 className="mt-3 font-display text-xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></article></Reveal>)}</div>
  </div></section>;
}

function TreatmentPreparationSection() {
  const checklist = ["A brief timeline of symptoms or concerns", "Previous reports, scans and prescriptions", "Current medicines and known allergies", "Questions you want answered during the consultation"];
  return <section className="bg-brand-navy py-24 text-white"><div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center"><SectionHeading tone="light" eyebrow="Prepare for Your Visit" title="A little preparation can make the consultation more useful." copy="You do not need to diagnose yourself. Bring the information that helps your clinician understand the full picture." /><Reveal><div className="rounded-[2rem] bg-white p-7 text-brand-navy md:p-9"><p className="font-mono text-[10px] uppercase tracking-label text-brand-green">Helpful checklist</p><ul className="mt-6 space-y-4">{checklist.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft"><CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-fresh" />{item}</li>)}</ul></div></Reveal></div></section>;
}

function GalleryExperienceSection() {
  const moments = [
    { icon: ImageIcon, label: "Spaces", title: "Calm, considered environments", copy: "Care spaces should support privacy, comfort and confident movement through a visit." },
    { icon: ScanLineIcon, label: "Readiness", title: "Clinical support in focus", copy: "The gallery presents care environments and equipment without making unverified capability claims." },
    { icon: UsersIcon, label: "People", title: "The human side of healthcare", copy: "Consultation and patient-support moments reflect the respectful experience Meddleaff is building." }
  ];
  return <section className="bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Inside Meddleaff" title="More than interiors—a view of the care experience." copy="Every image category has a purpose: to help patients understand the environment, the people and the approach before they arrive." /><div className="mt-14 grid gap-5 lg:grid-cols-3">{moments.map(({ icon: Icon, label, title, copy }, index) => <Reveal key={label} delay={index * .08}><article className="group h-full rounded-[1.75rem] border border-brand-navy/8 bg-white p-7 transition duration-300 hover:-translate-y-1"><div className="flex items-center justify-between"><Icon className="h-6 w-6 text-brand-green" /><span className="font-mono text-[9px] uppercase tracking-label text-ink-muted">{label}</span></div><h3 className="mt-10 font-display text-2xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></article></Reveal>)}</div></div></section>;
}

function EditorialPromiseSection() {
  const standards = [
    ["Clinically responsible", "Health information is intended to support—not replace—a consultation."],
    ["Plain-language first", "Complex topics are structured around the questions patients actually ask."],
    ["Practical and focused", "Every article should give readers a useful next step without creating alarm."]
  ];
  return <section className="bg-brand-navy py-24 text-white"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><SectionHeading tone="light" eyebrow="Editorial Standard" title="Health information designed to clarify, not overwhelm." copy="Meddleaff's editorial approach prioritizes context, readability and responsible guidance." /><div className="divide-y divide-white/10 border-y border-white/10">{standards.map(([title, copy], index) => <Reveal key={title} delay={index * .07}><article className="grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-7"><span className="font-mono text-xs text-brand-gold">0{index + 1}</span><div><h3 className="font-display text-xl font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/60">{copy}</p></div></article></Reveal>)}</div></div></div></section>;
}

function ReadingPathSection() {
  return <section className="bg-brand-cream py-20"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 px-6 md:px-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="font-mono text-[10px] uppercase tracking-label text-brand-green">Need personal guidance?</p><h2 className="mt-4 font-display text-3xl font-medium text-brand-navy md:text-4xl">Articles inform. A consultation personalizes.</h2><p className="mt-4 text-sm leading-relaxed text-ink-soft">If a topic feels relevant to your health, note your questions and discuss them with a qualified clinician.</p></div><SiteLink to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white">Request a Consultation <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></SiteLink></div></section>;
}

function ContactStepsSection() {
  const steps = [
    ["01", "Send your request", "Share your contact details and the reason for your visit."],
    ["02", "Care team review", "The request is checked so the right next step can be coordinated."],
    ["03", "Appointment confirmation", "Date, location and any preparation details are confirmed directly."]
  ];
  return <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="What Happens Next" title="A simple path from enquiry to appointment." /><div className="mt-14 grid gap-5 md:grid-cols-3">{steps.map(([number, title, copy], index) => <Reveal key={title} delay={index * .08}><article className="relative h-full overflow-hidden rounded-[1.75rem] bg-brand-cream p-7"><span className="absolute -right-3 -top-8 font-display text-[7rem] font-semibold text-brand-green/[.06]">{number}</span><span className="font-mono text-[10px] text-brand-green">STEP {number}</span><h3 className="mt-10 font-display text-2xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p></article></Reveal>)}</div></div></section>;
}

function VisitChecklistSection() {
  return <section className="overflow-hidden bg-brand-navy py-24 text-white"><div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center"><div><p className="font-mono text-[10px] uppercase tracking-label text-brand-gold">Before You Visit</p><h2 className="mt-5 font-display text-4xl font-medium md:text-5xl">Arrive prepared, not overwhelmed.</h2><p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65">Keep your health information together so the consultation can stay focused on what matters most to you.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Valid identification", "Previous medical reports", "Current medicine list", "Questions or symptoms note"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-5"><CheckCircle2Icon className="h-5 w-5 shrink-0 text-brand-gold" /><span className="text-sm text-white/80">{item}</span></div>)}</div></div></section>;
}

function PatientSupportSection() {
  const areas = [
    { icon: MessagesSquareIcon, title: "Share a query", copy: "Send a non-emergency question or appointment-related concern.", to: "/patient-corner/queries" },
    { icon: HeartHandshakeIcon, title: "Patient stories", copy: "Understand how Meddleaff protects consent, privacy and respectful storytelling.", to: "/patient-corner/testimonials" },
    { icon: BookOpenIcon, title: "Common questions", copy: "Find practical answers about appointments and preparing for a visit.", to: "/patient-corner/faqs" }
  ];
  return <section className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><SectionHeading eyebrow="Patient Support" title="Choose the support that fits your next step." /><div className="mt-14 grid gap-5 md:grid-cols-3">{areas.map(({ icon: Icon, title, copy, to }, index) => <Reveal key={title} delay={index * .07}><SiteLink to={to} className="group flex h-full flex-col rounded-[1.75rem] border border-brand-navy/8 p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-green/25 hover:shadow-[0_18px_55px_-35px_rgba(22,35,60,.4)]"><Icon className="h-7 w-7 text-brand-green" /><h3 className="mt-8 font-display text-2xl font-medium text-brand-navy">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{copy}</p><span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-green">Explore <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></SiteLink></Reveal>)}</div></div></section>;
}

function PatientPrivacySection() {
  return <section className="bg-brand-navy py-20 text-white"><div className="mx-auto grid max-w-[1100px] gap-8 px-6 md:px-8 lg:grid-cols-[auto_1fr] lg:items-center"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-brand-gold"><LockKeyholeIcon className="h-7 w-7" /></span><div><p className="font-mono text-[10px] uppercase tracking-label text-brand-gold">Privacy & Respect</p><h2 className="mt-3 font-display text-3xl font-medium">Share only what is needed for the care team to respond.</h2><p className="mt-4 text-sm leading-relaxed text-white/65">Do not submit emergency information, passwords, payment details or highly sensitive documents through a general enquiry form. For urgent symptoms, contact local emergency services.</p></div></div></section>;
}

export {
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
};
