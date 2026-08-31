import { Reveal, ImageReveal, SectionLabel } from "./Reveal";
import { facilities, facilityCentre } from "../data/facilities";
function OverlayLabel({ label, caption }) {
  return <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6"><p className="text-[11px] uppercase tracking-label text-white/70">{caption}</p><p className="mt-1 font-display text-xl font-light text-white">{label}</p></div>;
}
const scrim = <div
  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent"
  aria-hidden="true"
/>;
function Facilities() {
  const [consult, diagnostics, equipment, emergency] = facilities;
  return <section id="facilities" className="w-full bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="max-w-3xl"><Reveal><SectionLabel>Our Facilities</SectionLabel></Reveal><Reveal delay={0.08}><h2 className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy">
              Designed for Better
              <br /><span className="text-brand-green">Healthcare Experiences.</span></h2></Reveal></div><div className="mt-16 grid gap-4 lg:grid-cols-4 lg:grid-rows-2"><div className="relative overflow-hidden rounded-[2rem] bg-brand-mint lg:col-span-2 lg:row-span-2"><ImageReveal
    src={facilityCentre.image}
    alt="Reception and patient lounge with curved timber desk and green seating"
    className="h-full min-h-[320px] w-full lg:min-h-[600px]"
  />{scrim}<OverlayLabel label={facilityCentre.label} caption={facilityCentre.caption} /></div><div className="relative overflow-hidden rounded-[2rem] bg-brand-mint"><ImageReveal
    src={consult.image}
    alt="A minimal consultation room with light wood furniture"
    className="h-full min-h-[260px] w-full"
    delay={0.1}
  />{scrim}<OverlayLabel label={consult.label} caption={consult.caption} /></div><div className="relative overflow-hidden rounded-[2rem] bg-brand-mint"><ImageReveal
    src={diagnostics.image}
    alt="A modern diagnostic imaging scanner in a softly lit room"
    className="h-full min-h-[260px] w-full"
    delay={0.18}
  />{scrim}<OverlayLabel label={diagnostics.label} caption={diagnostics.caption} /></div><div className="relative overflow-hidden rounded-[2rem] bg-brand-mint"><ImageReveal
    src={equipment.image}
    alt="Operating theatre lights and monitors in a sterile theatre"
    className="h-full min-h-[260px] w-full"
    delay={0.26}
  />{scrim}<OverlayLabel label={equipment.label} caption={equipment.caption} /></div><div className="relative overflow-hidden rounded-[2rem] bg-brand-mint"><ImageReveal
    src={emergency.image}
    alt="A prepared emergency department bay with monitors and trolleys"
    className="h-full min-h-[260px] w-full"
    delay={0.34}
  />{scrim}<OverlayLabel label={emergency.label} caption={emergency.caption} /></div></div></div></section>;
}
export {
  Facilities
};
