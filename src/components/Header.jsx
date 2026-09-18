import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClockIcon, MenuIcon, XIcon } from "lucide-react";
import { site } from "../data/site";
import logo from "../assessts/logo.png";
import { SiteLink } from "./SiteLink";

const EASE = [0.23, 1, 0.32, 1];

function Logo({ compact = false }) {
  return <SiteLink to="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}><img src={logo} alt={`${site.name} logo`} width="2158" height="729" decoding="async" className={`${compact ? "w-[145px] md:w-[165px]" : "w-[150px] md:w-[190px]"} h-auto max-w-none object-contain transition-[width] duration-300`} /></SiteLink>;
}

function Header({ pathname = "/" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return <div className="fixed inset-x-0 top-0 z-50">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: scrolled ? 0 : 1 }} transition={{ duration: .25, ease: EASE }} aria-hidden={scrolled} className="hidden border-b border-brand-navy/5 bg-brand-cream/90 backdrop-blur md:block"><div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-2.5 text-[12px] text-ink-soft"><span className="inline-flex items-center gap-2"><ClockIcon className="h-3.5 w-3.5 text-brand-green" />Appointments available by request</span><span className="font-mono text-[9px] uppercase tracking-label text-brand-green">{site.tagline}</span></div></motion.div>
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: EASE, delay: .1 }} className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
      <motion.nav animate={{ paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16, marginTop: scrolled ? 10 : 18 }} transition={{ duration: .3, ease: EASE }} className="flex items-center justify-between rounded-full bg-white/95 px-5 shadow-[0_10px_40px_-16px_rgba(23,43,77,.22)] backdrop-blur md:px-7">
        <Logo compact={scrolled} />
        <ul className="hidden items-center gap-[15px] xl:flex">{site.nav.map((item) => <li key={item.label}><SiteLink to={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`whitespace-nowrap text-[15px] transition-colors hover:text-brand-green ${pathname === item.href || (item.href === "/patient-corner" && pathname.startsWith("/patient-corner")) ? "text-brand-green" : "text-ink-soft"}`}>{item.label}</SiteLink></li>)}</ul>
        <div className="flex items-center gap-2"><SiteLink to="/contact" className="hidden whitespace-nowrap rounded-full bg-brand-green px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-green-dark sm:inline-flex">Book Appointment</SiteLink><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full text-brand-navy transition-colors hover:bg-brand-mint xl:hidden">{open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}</button></div>
      </motion.nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .25, ease: EASE }} className="mt-3 max-h-[75vh] overflow-y-auto rounded-3xl bg-white p-4 shadow-[0_16px_50px_-20px_rgba(23,43,77,.3)] xl:hidden"><ul className="divide-y divide-brand-navy/5">{site.nav.map((item) => <li key={item.label}><SiteLink to={item.href} className="block py-4 font-display text-xl text-brand-navy">{item.label}</SiteLink></li>)}</ul><SiteLink to="/contact" className="mt-3 block rounded-full bg-brand-green px-6 py-4 text-center text-sm font-medium text-white">Book Appointment</SiteLink></motion.div>}</AnimatePresence>
    </motion.header>
  </div>;
}

export { Header };
