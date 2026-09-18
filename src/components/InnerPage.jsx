import { ArrowRightIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SiteLink } from "./SiteLink";

function VitalsLine({ className = "" }) {
  return <svg className={`h-12 w-full ${className}`} viewBox="0 0 900 80" fill="none" aria-hidden="true" preserveAspectRatio="none">
    <path className="vitals-path" d="M0 43H165L190 43L208 18L230 66L252 33L271 43H424L442 43L456 28L472 54L490 8L514 70L534 43H900" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
  </svg>;
}

function PageHero({ eyebrow, title, lead, image, imageAlt, children }) {
  return <section className="relative overflow-hidden bg-brand-cream pt-36 lg:pt-44">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true"><span className="animate-float-slow absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-green/[.055] blur-2xl" /><span className="absolute -left-24 bottom-10 h-56 w-56 rounded-full border border-brand-green/10" /></div>
    <div className={`relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-16 md:px-8 lg:pb-24 ${image ? "lg:grid-cols-[1.05fr_.85fr]" : ""}`}>
      <div className="max-w-4xl">
        <Reveal><SectionLabel>{eyebrow}</SectionLabel></Reveal>
        <Reveal delay={0.08}><h1 className="mt-7 font-display text-[clamp(3rem,6vw,5.75rem)] font-medium leading-[.98] tracking-[-.035em] text-brand-navy">{title}</h1></Reveal>
        {lead && <Reveal delay={0.14}><p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-lg">{lead}</p></Reveal>}
        {children && <Reveal delay={0.2}><div className="mt-9">{children}</div></Reveal>}
      </div>
      {image && <Reveal delay={0.12} className="relative">
        <div className="aspect-[4/4.7] overflow-hidden rounded-[2.5rem] bg-brand-mint">
          <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
        </div>
      </Reveal>}
    </div>
    <div className="text-brand-green/45"><VitalsLine /></div>
  </section>;
}

function SectionHeading({ eyebrow, title, copy, align = "left", tone = "dark" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <Reveal><SectionLabel tone={tone === "light" ? "light" : "green"}>{eyebrow}</SectionLabel></Reveal>
    <Reveal delay={0.08}><h2 className={`mt-6 font-display text-[clamp(2.25rem,4.4vw,4rem)] font-medium leading-[1.03] tracking-[-.025em] ${tone === "light" ? "text-white" : "text-brand-navy"}`}>{title}</h2></Reveal>
    {copy && <Reveal delay={0.14}><p className={`mt-6 text-[16px] leading-relaxed md:text-[17px] ${tone === "light" ? "text-white/65" : "text-ink-soft"}`}>{copy}</p></Reveal>}
  </div>;
}

function ConsultationBand({ title = "Ready to speak with our care team?", copy = "Share your concern and our team will help you plan the next step." }) {
  return <section className="bg-brand-navy py-20 text-white">
    <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 md:px-8 lg:flex-row lg:items-center">
      <div className="max-w-3xl"><p className="font-mono text-[10px] uppercase tracking-label text-brand-gold">Consultation</p><h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">{title}</h2><p className="mt-4 text-white/65">{copy}</p></div>
      <SiteLink to="/contact" className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-navy transition hover:bg-brand-cream">Book a Consultation <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></SiteLink>
    </div>
  </section>;
}

export { ConsultationBand, PageHero, SectionHeading, VitalsLine };
