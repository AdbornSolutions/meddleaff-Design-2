import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { doctors } from "../data/doctors";
function Doctors() {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.6;
    track.scrollBy({ left: amount * dir, behavior: "smooth" });
  };
  return <section id="doctors" className="w-full bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="flex flex-wrap items-end justify-between gap-8"><div className="max-w-2xl"><Reveal><SectionLabel>Our Medical Team</SectionLabel></Reveal><Reveal delay={0.08}><h2 className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy">
                Experts You Can
                <br /><span className="text-brand-green">Trust With Your Health.</span></h2></Reveal></div><Reveal delay={0.14} className="hidden gap-3 md:flex"><button
    type="button"
    onClick={() => scrollBy(-1)}
    aria-label="Previous doctors"
    className="grid h-12 w-12 place-items-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  ><ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /></button><button
    type="button"
    onClick={() => scrollBy(1)}
    aria-label="Next doctors"
    className="grid h-12 w-12 place-items-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors duration-200 ease-premium hover:border-brand-green hover:text-brand-green"
  ><ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></button></Reveal></div></div><Reveal delay={0.18}><ul
    ref={trackRef}
    className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:px-8"
  >{doctors.map(
    (doctor) => <li
      key={doctor.name}
      className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[24vw] lg:max-w-[340px]"
    ><div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-brand-cream"><img
      src={doctor.image}
      alt={`Portrait of ${doctor.name}`}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
    /></div><div className="transition-transform duration-300 ease-premium group-hover:-translate-y-1.5"><p className="mt-6 text-[11px] uppercase tracking-label text-brand-green">{doctor.speciality}</p><h3 className="mt-2 font-display text-2xl font-light text-brand-navy">{doctor.name}</h3><p className="mt-1 text-sm text-ink-muted">{doctor.experience}</p><a
      href="#contact"
      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-navy transition-colors duration-200 ease-premium hover:text-brand-green"
    >
                
                  View Profile
                  <ArrowRightIcon
      className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
      aria-hidden="true"
    /></a></div></li>
  )}</ul></Reveal></section>;
}
export {
  Doctors
};
