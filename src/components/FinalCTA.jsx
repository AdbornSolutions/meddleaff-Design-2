import { ArrowRightIcon } from "lucide-react";
import { Reveal } from "./Reveal";
function FinalCTA() {
  return <section
    id="contact"
    aria-labelledby="cta-heading"
    className="relative w-full overflow-hidden bg-gradient-to-br from-brand-navy via-[#0F3B48] to-brand-green"
  >{
    /* abstract medical shapes */
  }<div aria-hidden="true" className="pointer-events-none absolute inset-0"><span className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/10" /><span className="absolute -left-10 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-white/10" /><span className="absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full border border-white/10" /><span className="absolute bottom-0 right-1/4 h-40 w-px bg-white/10" /></div><div className="relative mx-auto max-w-[1400px] px-6 py-24 text-center md:px-8 lg:py-36"><Reveal><p className="text-[11px] uppercase tracking-label text-brand-gold">
            Book an appointment
          </p></Reveal><Reveal delay={0.08}><h2
    id="cta-heading"
    className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] text-white"
  >
            
            Your Health
            <br />
            Deserves the Best Care.
          </h2></Reveal><Reveal delay={0.14}><p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-white/70">
            Take the first step towards better health with Meddleaff Healthcare.
          </p></Reveal><Reveal delay={0.2}><div className="mt-11 flex flex-wrap items-center justify-center gap-3"><a
    href="tel:021390322"
    className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-brand-navy transition-colors duration-200 ease-premium hover:bg-brand-cream"
  >
              
              Book an Appointment
            </a><a
    href="tel:9860232384"
    className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors duration-200 ease-premium hover:border-white/60"
  >
              
              Contact Us
              <ArrowRightIcon
    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
    aria-hidden="true"
  /></a></div></Reveal></div></section>;
}
export {
  FinalCTA
};
