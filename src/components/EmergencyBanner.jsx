import { PhoneCallIcon } from "lucide-react";
import { Reveal, ImageReveal, SectionLabel } from "./Reveal";
import { SiteLink } from "./SiteLink";

const IMG_EMERGENCY = "/de15f167-9079-4ca3-9c7d-639f47e365f1.jpg";

function EmergencyBanner() {
  return <section aria-labelledby="emergency-heading" className="w-full bg-brand-green"><div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28"><div><Reveal><SectionLabel tone="light">Urgent Care Guidance</SectionLabel></Reveal><Reveal delay={0.08}><h2 id="emergency-heading" className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">Know Where to Turn<br />When Care Cannot Wait.</h2></Reveal><Reveal delay={0.14}><p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/75">For severe pain, heavy bleeding, breathing difficulty, loss of consciousness or another life-threatening concern, contact local emergency services immediately.</p></Reveal><Reveal delay={0.2}><div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"><SiteLink to="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-medium text-brand-green transition-colors hover:bg-brand-cream"><PhoneCallIcon className="h-4 w-4" />Non-emergency Enquiry</SiteLink><p className="max-w-xs text-sm leading-relaxed text-white/65">The website enquiry form is not monitored as an emergency service.</p></div></Reveal></div><div className="relative"><ImageReveal src={IMG_EMERGENCY} alt="An emergency care team moving through a hospital corridor" className="aspect-[4/3] w-full rounded-[2.5rem] bg-brand-green-dark" /><Reveal delay={0.3} className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-brand-navy px-6 py-5 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:block"><p className="text-[11px] uppercase tracking-label text-brand-gold">Urgent symptoms</p><p className="mt-1.5 font-display text-xl font-light">Seek immediate local care</p></Reveal></div></div></section>;
}

export { EmergencyBanner };
