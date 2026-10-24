import {
  ActivityIcon, ArrowRightIcon, BabyIcon, FlaskConicalIcon, HeartPulseIcon,
  ScanLineIcon, ScissorsIcon, ShieldCheckIcon, SparklesIcon, StethoscopeIcon
} from "lucide-react";
import { SectionLabel } from "./Reveal";
import { specialities } from "../data/specialities";
import { SiteLink } from "./SiteLink";

const departmentIcons = {
  "womens-health-reproductive-medicine": HeartPulseIcon,
  paediatrics: BabyIcon,
  "general-laparoscopic-surgery": ScissorsIcon,
  "diabetology-rheumatology-internal-medicine": StethoscopeIcon,
  cosmetology: SparklesIcon,
  endocrinology: ActivityIcon,
  "preventive-health-care": ShieldCheckIcon,
  pathology: FlaskConicalIcon,
  radiology: ScanLineIcon
};

function Specialities({ directory = false }) {
  const Heading = directory ? "h1" : "h2";
  const CardHeading = directory ? "h2" : "h3";
  return <section id="specialities" className={`bg-brand-background ${directory ? "pt-40 pb-24 lg:pt-48" : "py-20 lg:py-28"}`}>
    <div className="mx-auto max-w-[1400px] px-6 md:px-8">
      {directory && <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-soft"><SiteLink to="/" className="hover:text-brand-blue">Home</SiteLink><span aria-hidden="true"> / </span><span aria-current="page">Specialities</span></nav>}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl"><SectionLabel>Our medical specialities</SectionLabel><Heading className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-tight tracking-tight text-brand-navy">Specialist care.<br /><span className="text-brand-blue">Centred around you.</span></Heading></div>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">Find the right department for your needs. Explore our specialities and learn what to expect from your consultation.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {specialities.map((item) => {
          const Icon = departmentIcons[item.slug] || StethoscopeIcon;
          return <article key={item.slug} className="group flex min-h-[320px] min-w-0 flex-col rounded-[1.5rem] border border-brand-blue/10 bg-white p-6 transition-shadow hover:shadow-lg">
            <Icon className="h-12 w-12 shrink-0 text-brand-blue" strokeWidth={1.35} aria-hidden="true" />
            <CardHeading className="mt-6 font-sans text-base font-semibold leading-snug text-brand-navy">{item.title}</CardHeading>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.description}</p>
            <SiteLink to={`/specialities/${item.slug}`} className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-blue" aria-label={`Read more about ${item.title}`}><ArrowRightIcon className="h-4 w-4" aria-hidden="true" />Read More</SiteLink>
          </article>;
        })}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-brand-blue/15 pt-7"><p className="text-sm text-ink-soft">Unsure which speciality to choose? Our care team can guide you.</p><SiteLink to="/contact" className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark">Request an appointment<ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></SiteLink></div>
    </div>
  </section>;
}
export { Specialities };
