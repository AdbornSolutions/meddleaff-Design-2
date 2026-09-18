import { QuoteIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SiteLink } from "./SiteLink";

function Testimonials() {
  return <section aria-labelledby="testimonials-heading" className="w-full bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="max-w-2xl"><Reveal><SectionLabel>Patient Experience</SectionLabel></Reveal><Reveal delay={0.08}><h2 id="testimonials-heading" className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-medium leading-[1.04] tracking-[-0.02em] text-brand-navy">Your experience,<br /><span className="text-brand-green">treated with respect.</span></h2></Reveal></div><Reveal delay={0.14}><div className="mt-14 grid gap-8 rounded-[2.5rem] bg-white p-8 md:grid-cols-[auto_1fr] md:p-14 lg:gap-14"><span className="grid h-16 w-16 place-items-center rounded-full bg-brand-mint text-brand-green"><QuoteIcon className="h-7 w-7" /></span><div><h3 className="font-display text-3xl font-medium text-brand-navy">Every patient voice matters.</h3><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">Meddleaff approaches feedback with privacy, consent and a commitment to improving the care experience.</p><SiteLink to="/patient-corner/testimonials" className="mt-7 inline-flex text-sm font-semibold text-brand-green">Our Patient Story Standards</SiteLink></div></div></Reveal></div></section>;
}

export { Testimonials };
