import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { testimonials } from "../data/testimonials";
const EASE = [0.23, 1, 0.32, 1];
function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (dir) => setIndex((i) => (i + dir + total) % total);
  return <section aria-labelledby="testimonials-heading" className="w-full bg-brand-cream py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="max-w-2xl"><Reveal><SectionLabel>Patient Stories</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="testimonials-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy"
  >
              
              Stories of Care
              <br /><span className="text-brand-green">and Confidence.</span></h2></Reveal></div><Reveal delay={0.14}><div className="mt-14 grid gap-8 rounded-[2.5rem] bg-white p-8 md:grid-cols-[auto_1fr] md:p-14 lg:gap-14"><span
    aria-hidden="true"
    className="font-display text-[6rem] font-normal leading-[0.7] text-brand-fresh/40 md:text-[9rem]"
  >
              
              “
            </span><div className="flex min-h-[240px] flex-col"><AnimatePresence mode="wait"><motion.blockquote
    key={current.name}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.45, ease: EASE }}
  ><p className="max-w-3xl font-display text-[clamp(1.35rem,2.4vw,2rem)] font-light leading-[1.35] text-brand-navy">{current.quote}</p><footer className="mt-8"><p className="font-display text-lg text-brand-green">{current.name}</p><p className="mt-1 text-[11px] uppercase tracking-label text-ink-muted">{current.context}</p></footer></motion.blockquote></AnimatePresence><div className="mt-auto flex items-center justify-between gap-6 pt-10"><div className="flex items-center gap-2" aria-hidden="true">{testimonials.map(
    (t, i) => <span
      key={t.name}
      className={`h-1 rounded-full transition-[width,background-color] duration-300 ease-premium ${i === index ? "w-8 bg-brand-green" : "w-3 bg-brand-navy/15"}`}
    />
  )}</div><div className="flex gap-3"><button
    type="button"
    onClick={() => go(-1)}
    aria-label="Previous testimonial"
    className="grid h-12 w-12 place-items-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  ><ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /></button><button
    type="button"
    onClick={() => go(1)}
    aria-label="Next testimonial"
    className="grid h-12 w-12 place-items-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  ><ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></button></div></div></div></div></Reveal></div></section>;
}
export {
  Testimonials
};
