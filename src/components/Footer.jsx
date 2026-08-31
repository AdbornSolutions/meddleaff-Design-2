import { PhoneIcon, PlusIcon } from "lucide-react";
import { site } from "../data/site";
const services = [
  "Obstetrics & Gynaecology",
  "Paediatrics",
  "General Medicine",
  "Cardiology",
  "Dermatology",
  "Physiotherapy",
  "Emergency Care"
];
const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Specialities", href: "#specialities" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" }
];
function Footer() {
  return <footer className="w-full bg-brand-navy text-white"><div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8"><div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-brand-fresh text-brand-navy"><PlusIcon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" /></span><span className="leading-none"><span className="block font-display text-lg font-medium">Meddleaff</span><span className="block text-[10px] uppercase tracking-label text-white/50">
                  Healthcare
                </span></span></div><p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Comprehensive healthcare built around compassion, expertise and patient wellbeing.
            </p></div><nav aria-label="Footer navigation"><h2 className="text-[11px] uppercase tracking-label text-brand-gold">Navigation</h2><ul className="mt-6 space-y-3">{footerNav.map(
    (item) => <li key={item.label}><a
      href={item.href}
      className="text-[15px] text-white/70 transition-colors duration-200 ease-premium hover:text-white"
    >{item.label}</a></li>
  )}</ul></nav><div><h2 className="text-[11px] uppercase tracking-label text-brand-gold">Services</h2><ul className="mt-6 space-y-3">{services.map(
    (service) => <li key={service}><a
      href="#specialities"
      className="text-[15px] text-white/70 transition-colors duration-200 ease-premium hover:text-white"
    >{service}</a></li>
  )}</ul></div><div><h2 className="text-[11px] uppercase tracking-label text-brand-gold">Contact</h2><ul className="mt-6 space-y-3">{site.phones.map(
    (phone) => <li key={phone}><a
      href={`tel:${phone}`}
      className="inline-flex items-center gap-2.5 font-display text-xl font-light text-white transition-colors duration-200 ease-premium hover:text-brand-fresh"
    ><PhoneIcon className="h-4 w-4 text-brand-fresh" aria-hidden="true" />{phone}</a></li>
  )}</ul><p className="mt-6 text-[13px] text-white/50">24×7 Emergency Care available</p></div></div><div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/45"><p>© 2026 Meddleaff Healthcare.</p><p className="font-display text-base italic text-white/70">{site.tagline}</p></div></div></footer>;
}
export {
  Footer
};
