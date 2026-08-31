import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
const EASE = [0.23, 1, 0.32, 1];
const HERO_IMAGE = "/eb01b7dd-fdd5-48ad-93e2-a9d553ab3d5e.jpg";
const headingLines = [
  <>Healthcare</>,
  <>That Cares</>,
  <>
    Beyond <span className="text-brand-green">Treatment.</span></>
];
const pillars = ["Compassionate Care", "Expert Doctors", "Advanced Facilities"];
const floatingCards = [
  { big: "24\xD77", small: "Emergency Care", position: "left-0 top-[16%]", delay: 0 },
  { big: "Expert", small: "Medical Specialists", position: "right-2 top-[46%]", delay: 1.2 },
  { big: "Advanced", small: "Healthcare", position: "left-6 bottom-[8%]", delay: 2.4 }
];
function Hero() {
  return <section id="home" className="relative w-full overflow-hidden bg-brand-cream"><div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 pb-20 pt-36 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-28 lg:pt-44">{
    /* Left */
  }<div className="relative z-10"><motion.p
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
    className="text-[11px] font-medium uppercase leading-relaxed tracking-label text-brand-green"
  >
            
            Meddleaff Healthcare
            <span className="mx-2 text-brand-fresh" aria-hidden="true">
              /
            </span><span className="text-ink-muted">Multispeciality Hospital</span></motion.p><h1 className="mt-7 font-display text-[clamp(2.75rem,6.4vw,5.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-brand-navy">{headingLines.map(
    (line, i) => <span key={i} className="block overflow-hidden"><motion.span
      className="block"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.4 + i * 0.14 }}
    >{line}</motion.span></span>
  )}</h1><motion.p
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
    className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft"
  >
            
            Compassionate healthcare, experienced specialists and advanced medical facilities — all
            focused on helping you and your family live healthier lives.
          </motion.p><motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: EASE, delay: 1 }}
    className="mt-10 flex flex-wrap items-center gap-3"
  ><a
    href="#contact"
    className="inline-flex items-center rounded-full bg-brand-green px-8 py-4 text-sm font-medium text-white transition-colors duration-200 ease-premium hover:bg-brand-green-dark"
  >
              
              Book an Appointment
            </a><a
    href="#specialities"
    className="group inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-8 py-4 text-sm font-medium text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  >
              
              Explore Our Specialities
              <ArrowRightIcon
    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
    aria-hidden="true"
  /></a></motion.div><motion.ul
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
    className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-brand-navy/10 pt-6"
  >{pillars.map(
    (p) => <li key={p} className="inline-flex items-center gap-2.5 text-sm text-ink-soft"><span
      aria-hidden="true"
      className="h-1.5 w-1.5 rounded-full bg-brand-fresh"
    />{p}</li>
  )}</motion.ul></div>{
    /* Right */
  }<div className="relative lg:pl-6"><motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: EASE, delay: 0.2 }}
    className="organic-hero-mask relative aspect-[4/5] w-full overflow-hidden bg-brand-mint lg:aspect-[4/4.6]"
  ><motion.img
    src={HERO_IMAGE}
    alt="A doctor sitting with an elderly patient and her daughter in a bright hospital consultation lounge"
    className="h-full w-full object-cover"
    initial={{ scale: 1.08 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
  /></motion.div>{
    /* Floating info cards */
  }{floatingCards.map(
    (card, i) => <motion.div
      key={card.big}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 1 + i * 0.15 }}
      className={`absolute ${card.position} hidden sm:block`}
    ><div
      className="animate-float rounded-2xl bg-white/95 px-5 py-4 shadow-[0_14px_40px_-18px_rgba(23,43,77,0.35)] backdrop-blur"
      style={{ animationDelay: `${card.delay}s` }}
    ><p className="font-display text-2xl leading-none text-brand-green">{card.big}</p><p className="mt-1.5 text-[11px] uppercase tracking-label text-ink-muted">{card.small}</p></div></motion.div>
  )}</div></div></section>;
}
export {
  Hero
};
