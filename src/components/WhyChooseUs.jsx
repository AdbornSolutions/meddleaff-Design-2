import { Reveal, SectionLabel } from "./Reveal";
import { whyChooseUs } from "../data/site";
function WhyChooseUs() {
  return <section aria-labelledby="why-heading" className="w-full bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-end"><div><Reveal><SectionLabel>Why Meddleaff</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="why-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy"
  >
                
                A Better Experience
                <br /><span className="text-brand-green">At Every Step.</span></h2></Reveal></div><Reveal delay={0.14} className="lg:pb-3"><p className="max-w-lg text-[17px] leading-relaxed text-ink-soft lg:ml-auto">
              Four commitments shape how care is delivered here — from the first phone call to the
              last follow-up.
            </p></Reveal></div><ol className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-brand-navy/10 sm:grid-cols-2">{whyChooseUs.map(
    (item, i) => <Reveal
      as="li"
      key={item.number}
      delay={i * 0.08}
      className="group flex flex-col bg-brand-cream p-9 transition-colors duration-300 ease-premium hover:bg-white lg:p-12"
    ><span className="font-display text-[clamp(3rem,5vw,4.5rem)] font-light leading-none text-brand-fresh/45 transition-colors duration-300 ease-premium group-hover:text-brand-green">{item.number}</span><h3 className="mt-8 text-[13px] font-medium uppercase tracking-label text-brand-navy">{item.title}</h3><p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">{item.copy}</p></Reveal>
  )}</ol></div></section>;
}
export {
  WhyChooseUs
};
