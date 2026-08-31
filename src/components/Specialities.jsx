import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { specialities } from "../data/specialities";
const EASE = [0.23, 1, 0.32, 1];
function Specialities() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(0);
  const sectionRef = useRef(null);
  const current = specialities[active];

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    if (!desktop.matches) return undefined;

    const updateActiveSpeciality = () => {
      if (!sectionRef.current) return;

      const bounds = sectionRef.current.getBoundingClientRect();
      const scrollStart = window.innerHeight * 0.7;
      const scrollDistance = bounds.height + window.innerHeight * 0.25;
      const progress = Math.min(1, Math.max(0, (scrollStart - bounds.top) / scrollDistance));
      const nextActive = Math.min(specialities.length - 1, Math.floor(progress * specialities.length));

      setActive(nextActive);
    };

    updateActiveSpeciality();
    window.addEventListener("scroll", updateActiveSpeciality, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSpeciality);
  }, []);

  return <section ref={sectionRef} id="specialities" className="w-full bg-brand-mint py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="max-w-3xl"><Reveal><SectionLabel>Medical Specialities</SectionLabel></Reveal><Reveal delay={0.08}><h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy">
              Specialised Care.
              <br /><span className="text-brand-green">One Trusted Hospital.</span></h2></Reveal></div>{
    /* Desktop: list + image panel */
  }<div className="mt-16 hidden gap-14 lg:grid lg:grid-cols-[1fr_0.95fr]"><ul className="border-t border-brand-navy/10">{specialities.map((item, i) => {
    const isActive = i === active;
    return <li key={item.title} className="border-b border-brand-navy/10"><button
      type="button"
      onMouseEnter={() => setActive(i)}
      onFocus={() => setActive(i)}
      onClick={() => setActive(i)}
      aria-current={isActive}
      className="group flex w-full items-baseline gap-6 py-5 text-left"
    ><span
      className={`w-8 shrink-0 font-display text-sm transition-colors duration-300 ease-premium ${isActive ? "text-brand-green" : "text-ink-muted/50"}`}
    >{item.number}</span><span className="flex-1"><span
      className={`block font-display text-[clamp(1.35rem,2.1vw,1.85rem)] font-light leading-tight transition-colors duration-300 ease-premium ${isActive ? "text-brand-green" : "text-brand-navy"}`}
    >{item.title}</span><span
      className={`mt-1 block h-px origin-left bg-brand-fresh transition-transform duration-500 ease-premium ${isActive ? "scale-x-100" : "scale-x-0"}`}
      aria-hidden="true"
    /></span><span
      className={`shrink-0 text-xs uppercase tracking-label transition-opacity duration-300 ease-premium ${isActive ? "text-brand-green opacity-100" : "opacity-0"}`}
    >{item.subtitle}</span></button></li>;
  })}</ul><div className="relative"><div className="sticky top-32"><div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-[2.5rem] bg-white"><AnimatePresence mode="sync"><motion.img
    key={current.image}
    src={current.image}
    alt={current.title}
    className="absolute inset-0 h-full w-full object-cover"
    initial={{ opacity: 0, scale: 1.04 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: EASE }}
  /></AnimatePresence><div
    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/85 to-transparent"
    aria-hidden="true"
  /><div className="absolute inset-x-0 bottom-0 p-8"><AnimatePresence mode="wait"><motion.div
    key={current.number}
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -16 }}
    transition={{ duration: 0.45, ease: EASE }}
  ><p className="font-display text-5xl font-light leading-none text-white/45">{current.number}</p><p className="mt-4 text-[11px] uppercase tracking-label text-brand-fresh">{current.subtitle}</p><p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">{current.description}</p><a
    href="#contact"
    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white"
  >
                        
                        Explore Service
                        <ArrowRightIcon
    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
    aria-hidden="true"
  /></a></motion.div></AnimatePresence></div></div></div></div></div>{
    /* Mobile / tablet: accordion */
  }<ul className="mt-12 border-t border-brand-navy/10 lg:hidden">{specialities.map((item, i) => {
    const isOpen = i === openMobile;
    return <li key={item.title} className="border-b border-brand-navy/10"><button
      type="button"
      onClick={() => setOpenMobile(isOpen ? -1 : i)}
      aria-expanded={isOpen}
      className="flex w-full items-center gap-4 py-5 text-left"
    ><span className="w-7 shrink-0 font-display text-xs text-ink-muted/60">{item.number}</span><span
      className={`flex-1 font-display text-xl font-light leading-snug ${isOpen ? "text-brand-green" : "text-brand-navy"}`}
    >{item.title}</span><ChevronDownIcon
      className={`h-4 w-4 shrink-0 text-brand-green transition-transform duration-300 ease-premium ${isOpen ? "rotate-180" : ""}`}
      aria-hidden="true"
    /></button><AnimatePresence initial={false}>{isOpen && <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="overflow-hidden"
    ><div className="pb-7 pl-11"><div className="aspect-[16/10] w-full overflow-hidden rounded-3xl bg-white"><img
      src={item.image}
      alt={item.title}
      loading="lazy"
      className="h-full w-full object-cover"
    /></div><p className="mt-4 text-[11px] uppercase tracking-label text-brand-green">{item.subtitle}</p><p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.description}</p><a
      href="#contact"
      className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-green"
    >
                        
                          Explore Service
                          <ArrowRightIcon
      className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
      aria-hidden="true"
    /></a></div></motion.div>}</AnimatePresence></li>;
  })}</ul></div></section>;
}
export {
  Specialities
};
