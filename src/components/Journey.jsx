import { Reveal, SectionLabel } from "./Reveal";
import { journeySteps } from "../data/site";
function Journey() {
  return <section aria-labelledby="journey-heading" className="w-full bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="max-w-2xl"><Reveal><SectionLabel>Your Healthcare Journey</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="journey-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy"
  >
              
              Four steps, <span className="text-brand-green">start to recovery.</span></h2></Reveal></div><ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">{journeySteps.map(
    (step, i) => <Reveal
      as="li"
      key={step.step}
      delay={i * 0.1}
      className="relative flex gap-5 last:[&>span:first-child]:hidden lg:block"
    >{
      /* connector */
    }<span
      aria-hidden="true"
      className="absolute left-[11px] top-8 h-[calc(100%+2.5rem)] w-px bg-brand-navy/10 lg:left-0 lg:top-[11px] lg:h-px lg:w-full"
    /><span
      aria-hidden="true"
      className="relative z-10 mt-1.5 grid h-[23px] w-[23px] shrink-0 place-items-center rounded-full border border-brand-fresh bg-white"
    ><span className="h-2 w-2 rounded-full bg-brand-green" /></span><div className="lg:mt-8 lg:pr-8"><p className="text-[11px] uppercase tracking-label text-brand-green">{step.step}</p><h3 className="mt-2 font-display text-2xl font-light text-brand-navy">{step.title}</h3><p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.copy}</p></div></Reveal>
  )}</ol></div></section>;
}
export {
  Journey
};
