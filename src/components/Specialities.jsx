import { ArrowRightIcon } from "lucide-react";
import { SectionLabel } from "./Reveal";
import { specialities } from "../data/specialities";
import { SiteLink } from "./SiteLink";

function Specialities({ directory = false }) {
  const Heading = directory ? "h1" : "h2";
  const CardHeading = directory ? "h2" : "h3";
  return <section id="specialities" className={`bg-brand-white ${directory ? "pt-40 pb-24 lg:pt-48" : "py-20 lg:py-28"}`}>
    <div className="mx-auto max-w-[1400px] px-6 md:px-8">
      {directory && <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-soft"><SiteLink to="/" className="hover:text-brand-blue">Home</SiteLink><span aria-hidden="true"> / </span><span aria-current="page">Specialities</span></nav>}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl"><SectionLabel>Our medical specialities</SectionLabel><Heading className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-medium leading-tight tracking-tight text-brand-navy">Specialist care.<br /><span className="text-brand-blue">Centred around you.</span></Heading></div>
        <p className="max-w-md text-base leading-relaxed text-ink-soft">Find the right department for your needs. Explore our specialities and learn what to expect from your consultation.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {specialities.map((item) => <article key={item.slug} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-brand-blue/10 bg-white transition-shadow hover:shadow-lg">
          <SiteLink to={`/specialities/${item.slug}`} className="block overflow-hidden" aria-label={`Explore ${item.title}`}><img src={item.image} alt={item.imageAlt} width="480" height="400" loading="lazy" decoding="async" className="aspect-[6/5] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" /></SiteLink>
          <div className="flex flex-1 flex-col p-6"><p className="text-[10px] font-semibold uppercase tracking-widest text-brand-blue">Department {item.number}</p><CardHeading className="mt-3 font-display text-xl font-medium leading-snug text-brand-navy">{item.title}</CardHeading><p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.description}</p><SiteLink to={`/specialities/${item.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-blue">Explore speciality<ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></SiteLink></div>
        </article>)}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-brand-blue/15 pt-7"><p className="text-sm text-ink-soft">Unsure which speciality to choose? Our care team can guide you.</p><SiteLink to="/contact" className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue-dark">Request an appointment<ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></SiteLink></div>
    </div>
  </section>;
}
export { Specialities };
