import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Reveal, ImageReveal, SectionLabel } from "./Reveal";
import { aboutFeatures } from "../data/site";
const IMG_CONSULT = "/c69548f5-2001-4af7-8be6-86387ea9f2ef.jpg";
const IMG_INTERIOR = "/65b82f2e-0b60-480c-9116-37df5f9fe003.jpg";
const IMG_CARE = "/16aa1c22-ef26-409e-9c2b-d841f5ef0773.jpg";
function About() {
  return <section id="about" className="w-full bg-white py-24 lg:py-32"><div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-24">{
    /* Editorial image cluster */
  }<div className="relative"><div className="grid grid-cols-5 gap-4"><ImageReveal
    src={IMG_CONSULT}
    alt="A doctor listening attentively to a patient across a consultation desk"
    className="col-span-3 aspect-[3/4] rounded-[2rem] bg-brand-mint"
  /><div className="col-span-2 flex flex-col gap-4 pt-10"><ImageReveal
    src={IMG_INTERIOR}
    alt="The bright, plant-filled atrium of Meddleaff Healthcare"
    className="aspect-[4/5] rounded-[2rem] bg-brand-mint"
    delay={0.12}
  /><ImageReveal
    src={IMG_CARE}
    alt="A nurse gently holding an older patient's hand"
    className="aspect-square rounded-[2rem] bg-brand-mint"
    delay={0.24}
  /></div></div><Reveal
    delay={0.35}
    className="absolute -bottom-8 left-6 hidden rounded-2xl bg-brand-green px-7 py-6 text-white shadow-[0_20px_50px_-24px_rgba(11,93,76,0.6)] lg:block"
  ><p className="font-display text-3xl font-light leading-none">9</p><p className="mt-2 text-[11px] uppercase tracking-label text-white/70">
              Medical specialities
            </p></Reveal></div>{
    /* Copy */
  }<div><Reveal><SectionLabel>Who We Are</SectionLabel></Reveal><Reveal delay={0.08}><h2 className="mt-6 font-display text-[clamp(2.25rem,4.2vw,3.75rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy">
              Healthcare Designed
              <br /><span className="text-brand-green">Around You.</span></h2></Reveal><Reveal delay={0.14}><p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              At Meddleaff Healthcare, we believe that quality healthcare goes beyond treatment. Our
              approach combines medical expertise, advanced technology and compassionate care to
              support every patient throughout their healthcare journey.
            </p></Reveal><ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">{aboutFeatures.map(
    (feature, i) => <Reveal
      as="li"
      key={feature}
      delay={0.2 + i * 0.06}
      className="flex items-start gap-3 text-[15px] text-brand-navy"
    ><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-mint text-brand-green"><CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden="true" /></span>{feature}</Reveal>
  )}</ul><Reveal delay={0.45}><a
    href="#specialities"
    className="group mt-12 inline-flex items-center gap-2 border-b border-brand-navy/20 pb-2 text-sm font-medium text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  >
              
              Discover Meddleaff Healthcare
              <ArrowRightIcon
    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
    aria-hidden="true"
  /></a></Reveal></div></div></section>;
}
export {
  About
};
