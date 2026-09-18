import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "lucide-react";
import { site } from "../data/site";
import { SiteLink } from "./SiteLink";
import logo from "../assessts/logo.png";

const footerNav = [
  { label: "About Us", href: "/about" }, { label: "Doctor's Profile", href: "/doctor-profile" },
  { label: "Treatments", href: "/treatments" }, { label: "Hospital Affiliation", href: "/hospital-affiliation" },
  { label: "Gallery", href: "/gallery" }, { label: "Blogs", href: "/blogs" }
];
const patientNav = [
  { label: "Share Your Queries", href: "/patient-corner/queries" }, { label: "Testimonials", href: "/patient-corner/testimonials" },
  { label: "FAQs", href: "/patient-corner/faqs" }, { label: "Contact Us", href: "/contact" }
];
const socials = [
  { label: "Facebook", icon: FacebookIcon }, { label: "Instagram", icon: InstagramIcon },
  { label: "X / Twitter", icon: XIcon }, { label: "LinkedIn", icon: LinkedinIcon }, { label: "YouTube", icon: YoutubeIcon }
];

function FooterLinks({ title, items }) {
  return <nav aria-label={title}><h2 className="font-mono text-[10px] uppercase tracking-label text-brand-gold">{title}</h2><ul className="mt-6 space-y-3">{items.map((item) => <li key={item.label}><SiteLink to={item.href} className="text-[15px] text-white/65 transition-colors hover:text-white">{item.label}</SiteLink></li>)}</ul></nav>;
}

function Footer() {
  return <footer className="w-full bg-brand-navy text-white"><div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8"><div className="grid gap-14 lg:grid-cols-[1.45fr_.8fr_.8fr_1fr]"><div><SiteLink to="/" className="inline-flex rounded-2xl bg-white px-4 py-3" aria-label={`${site.name} home`}><img src={logo} alt={`${site.name} logo`} width="2158" height="729" loading="lazy" decoding="async" className="h-auto w-[190px] object-contain md:w-[220px]" /></SiteLink><p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">Meddleaff Healthcare Pvt Ltd is committed to quality, accessible and patient-centric healthcare delivered with compassion and professionalism.</p><div className="mt-7 flex gap-2" aria-label="Meddleaff social channels">{socials.map(({ label, icon: Icon }) => <span key={label} title={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/45"><Icon className="h-4 w-4" /><span className="sr-only">{label}</span></span>)}</div></div><FooterLinks title="Explore" items={footerNav} /><FooterLinks title="Patient's Corner" items={patientNav} /><div><h2 className="font-mono text-[10px] uppercase tracking-label text-brand-gold">Contact</h2><p className="mt-6 text-[15px] leading-relaxed text-white/60">Request an appointment online and the care team will share confirmed visit details directly.</p><SiteLink to="/contact" className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm text-white transition hover:border-white/50">Contact Us</SiteLink></div></div><div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/40"><p>© 2026 {site.legalName}.</p><p className="font-display text-base italic text-white/65">{site.tagline}</p></div></div></footer>;
}

export { Footer };
