import { PhoneCallIcon } from "lucide-react";
import { Reveal, ImageReveal, SectionLabel } from "./Reveal";
import { site } from "../data/site";
const IMG_EMERGENCY = "/de15f167-9079-4ca3-9c7d-639f47e365f1.jpg";
function EmergencyBanner() {
  return <section aria-labelledby="emergency-heading" className="w-full bg-brand-green"><div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28"><div><Reveal><SectionLabel tone="light">24×7 Emergency Care</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="emergency-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-white"
  >
              
              Here When
              <br />
              Every Second Matters.
            </h2></Reveal><Reveal delay={0.14}><p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/75">
              Our emergency healthcare team is available around the clock to provide immediate
              medical support and care when you need it most.
            </p></Reveal><Reveal delay={0.2}><div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6"><a
    href={`tel:${site.phones[0]}`}
    className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-medium text-brand-green transition-colors duration-200 ease-premium hover:bg-brand-cream"
  ><PhoneCallIcon className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a><div className="flex flex-col">{site.phones.map(
    (phone) => <a
      key={phone}
      href={`tel:${phone}`}
      className="font-display text-2xl font-light text-white transition-colors duration-200 ease-premium hover:text-brand-gold"
    >{phone}</a>
  )}</div></div></Reveal></div><div className="relative"><ImageReveal
    src={IMG_EMERGENCY}
    alt="An emergency care team moving through a hospital corridor at night"
    className="aspect-[4/3] w-full rounded-[2.5rem] bg-brand-green-dark"
  /><Reveal
    delay={0.3}
    className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-brand-navy px-6 py-5 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:block"
  ><p className="text-[11px] uppercase tracking-label text-brand-gold">Always open</p><p className="mt-1.5 font-display text-xl font-light">
              Resident emergency team on site
            </p></Reveal></div></div></section>;
}
export {
  EmergencyBanner
};
