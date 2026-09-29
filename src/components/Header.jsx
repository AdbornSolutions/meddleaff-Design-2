import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ClockIcon, MenuIcon, XIcon } from "lucide-react";
import { patientGuides } from "../data/patientGuide";
import { site } from "../data/site";
import { specialities } from "../data/specialities";
import logo from "../assessts/logo.png";
import { SiteLink } from "./SiteLink";

const EASE = [0.23, 1, 0.32, 1];

function Logo({ compact = false }) {
  return <SiteLink to="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}><img src={logo} alt={`${site.name} logo`} width="2158" height="729" decoding="async" className={`${compact ? "w-[145px] md:w-[165px]" : "w-[150px] md:w-[190px]"} h-auto max-w-none object-contain transition-[width] duration-300`} /></SiteLink>;
}

function getMenuLinks(item) {
  if (item.menu === "specialities") return specialities.map(({ slug, title }) => ({ label: title, href: `/specialities/${slug}` }));
  if (item.menu === "patientGuide") return patientGuides.map(({ slug, title }) => ({ label: title, href: `/patient-guide/${slug}` }));
  return item.children || [];
}

function isActive(item, pathname) {
  if (item.menu === "specialities") return pathname === "/treatments" || pathname.startsWith("/specialities/");
  if (item.menu === "patientGuide") return pathname.startsWith("/patient-guide/");
  if (item.label === "Media") return pathname === "/gallery" || pathname === "/blogs";
  return pathname === item.href;
}

function DesktopDropdown({ item, links, pathname, open, setOpen }) {
  const wide = item.menu === "specialities";
  return <li
    className="relative -my-6 py-6"
    onMouseEnter={() => setOpen(item.label)}
    onMouseLeave={() => setOpen(null)}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(null); }}
    onKeyDown={(event) => { if (event.key === "Escape") setOpen(null); }}
  >
    <button type="button" onClick={() => setOpen(open ? null : item.label)} aria-expanded={open} className={`inline-flex items-center gap-1 whitespace-nowrap text-[15px] transition-colors hover:text-brand-green ${isActive(item, pathname) ? "text-brand-green" : "text-ink-soft"}`}>
      {item.label}<ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .18 }} className={`absolute top-full z-50 overflow-hidden rounded-[1.5rem] border border-brand-navy/8 bg-white p-3 shadow-[0_24px_70px_-25px_rgba(22,35,60,.35)] ${wide ? "left-0 w-[min(880px,calc(100vw-4rem))]" : "left-0 w-[330px]"}`}>
      <div className={`${wide ? "grid grid-cols-2" : "grid"}`}>{links.map((link) => <SiteLink key={link.href} to={link.href} onClick={() => setOpen(null)} className={`border-b border-brand-navy/8 px-4 py-3 text-sm leading-snug transition hover:bg-brand-mint/55 hover:text-brand-green ${pathname === link.href ? "bg-brand-mint/55 text-brand-green" : "text-brand-navy"}`}>{link.label}</SiteLink>)}</div>
      {item.menu === "specialities" && <SiteLink to="/treatments" onClick={() => setOpen(null)} className="mt-3 flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white">View All Specialities</SiteLink>}
    </motion.div>}</AnimatePresence>
  </li>;
}

function Header({ pathname = "/" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setOpenMenu(null); }, [pathname]);

  return <div className="fixed inset-x-0 top-0 z-50">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: scrolled ? 0 : 1 }} transition={{ duration: .25, ease: EASE }} aria-hidden={scrolled} className="hidden border-b border-brand-navy/5 bg-brand-cream/90 backdrop-blur md:block"><div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-2.5 text-[12px] text-ink-soft"><span className="inline-flex items-center gap-2"><ClockIcon className="h-3.5 w-3.5 text-brand-green" />Appointments available by request</span><span className="font-mono text-[9px] uppercase tracking-label text-brand-green">{site.tagline}</span></div></motion.div>
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: EASE, delay: .1 }} className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
      <motion.nav animate={{ paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16, marginTop: scrolled ? 10 : 18 }} transition={{ duration: .3, ease: EASE }} className="flex items-center justify-between rounded-full bg-white/95 px-5 shadow-[0_10px_40px_-16px_rgba(23,43,77,.22)] backdrop-blur md:px-7">
        <Logo compact={scrolled} />
        <ul className="hidden items-center gap-[15px] xl:flex">{site.nav.map((item) => {
          const links = getMenuLinks(item);
          if (links.length) return <DesktopDropdown key={item.label} item={item} links={links} pathname={pathname} open={openMenu === item.label} setOpen={setOpenMenu} />;
          return <li key={item.label}><SiteLink to={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`whitespace-nowrap text-[15px] transition-colors hover:text-brand-green ${isActive(item, pathname) ? "text-brand-green" : "text-ink-soft"}`}>{item.label}</SiteLink></li>;
        })}</ul>
        <div className="flex items-center gap-2"><SiteLink to="/contact" className="hidden whitespace-nowrap rounded-full bg-brand-green px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark sm:inline-flex">Book Appointment</SiteLink><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full text-brand-navy transition-colors hover:bg-brand-mint xl:hidden">{open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}</button></div>
      </motion.nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .25, ease: EASE }} className="mt-3 max-h-[75vh] overflow-y-auto rounded-3xl bg-white p-4 shadow-[0_16px_50px_-20px_rgba(23,43,77,.3)] xl:hidden"><ul className="divide-y divide-brand-navy/5">{site.nav.map((item) => {
        const links = getMenuLinks(item);
        return <li key={item.label} className="py-2"><SiteLink to={item.href} className="block py-2 font-display text-xl text-brand-navy">{item.label}</SiteLink>{links.length > 0 && <div className="grid gap-1 pb-2 pl-3 sm:grid-cols-2">{links.map((link) => <SiteLink key={link.href} to={link.href} className="rounded-xl px-3 py-2.5 text-sm text-ink-soft transition hover:bg-brand-mint hover:text-brand-green">{link.label}</SiteLink>)}</div>}</li>;
      })}</ul><SiteLink to="/contact" className="mt-3 block rounded-full bg-brand-green px-6 py-4 text-center text-sm font-medium text-white">Book Appointment</SiteLink></motion.div>}</AnimatePresence>
    </motion.header>
  </div>;
}

export { Header };
