import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Specialities } from "./components/Specialities";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Facilities } from "./components/Facilities";
import { Doctors } from "./components/Doctors";
import { PatientExperience } from "./components/PatientExperience";
import { Journey } from "./components/Journey";
import { Testimonials } from "./components/Testimonials";
import { Insights } from "./components/Insights";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { usePathname } from "./components/usePathname";
import {
  AboutPage,
  BlogsPage,
  ContactPage,
  DoctorProfilePage,
  GalleryPage,
  HospitalAffiliationPage,
  NotFoundPage,
  PatientCornerPage,
  TreatmentsPage
} from "./pages/SitePages";
function HomePage() {
  return <main><Hero /><TrustStrip /><About /><Specialities /><EmergencyBanner /><WhyChooseUs /><Facilities /><Doctors /><PatientExperience /><Journey /><Testimonials /><Insights /><FinalCTA /></main>;
}
function App() {
  const pathname = usePathname().replace(/\/+$/, "") || "/";
  useEffect(() => {
    const titles = {
      "/": "Meddleaff Healthcare",
      "/about": "About Us | Meddleaff Healthcare",
      "/doctor-profile": "Dr. Aaliya Amreen | Meddleaff Healthcare",
      "/treatments": "Treatments | Meddleaff Healthcare",
      "/hospital-affiliation": "Hospital Affiliation | Meddleaff Healthcare",
      "/gallery": "Gallery | Meddleaff Healthcare",
      "/blogs": "Health Insights | Meddleaff Healthcare",
      "/contact": "Contact Us | Meddleaff Healthcare"
    };
    document.title = titles[pathname] || (pathname.startsWith("/patient-corner") ? "Patient's Corner | Meddleaff Healthcare" : "Page Not Found | Meddleaff Healthcare");
  }, [pathname]);
  let page;
  if (pathname === "/") page = <HomePage />;
  else if (pathname === "/about") page = <AboutPage />;
  else if (pathname === "/doctor-profile") page = <DoctorProfilePage />;
  else if (pathname === "/treatments") page = <TreatmentsPage />;
  else if (pathname === "/hospital-affiliation") page = <HospitalAffiliationPage />;
  else if (pathname === "/gallery") page = <GalleryPage />;
  else if (pathname === "/blogs") page = <BlogsPage />;
  else if (pathname === "/contact") page = <ContactPage />;
  else if (pathname === "/patient-corner" || pathname.startsWith("/patient-corner/")) page = <PatientCornerPage pathname={pathname} />;
  else page = <NotFoundPage />;
  return <div className="min-h-screen w-full bg-brand-cream"><Header pathname={pathname} />{page}<Footer /></div>;
}
export {
  App
};
import { useEffect } from "react";
