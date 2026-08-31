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
function App() {
  return <div className="w-full bg-brand-cream"><Header /><main><Hero /><TrustStrip /><About /><Specialities /><EmergencyBanner /><WhyChooseUs /><Facilities /><Doctors /><PatientExperience /><Journey /><Testimonials /><Insights /><FinalCTA /></main><Footer /></div>;
}
export {
  App
};
