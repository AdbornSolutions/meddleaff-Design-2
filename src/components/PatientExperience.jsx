import { Reveal, ImageReveal, SectionLabel } from "./Reveal";
const IMG = "/1c302445-34ec-4967-b16f-a2aaac000d6f.jpg";
function PatientExperience() {
  return <section aria-labelledby="experience-heading" className="w-full bg-brand-mint py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><ImageReveal
    src={IMG}
    alt="A doctor leaning forward, listening to a couple in a sunlit consultation lounge"
    className="aspect-[16/10] w-full rounded-[2.5rem] bg-white lg:aspect-[21/9]"
  /><div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-24"><div><Reveal><SectionLabel>Patient Experience</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="experience-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy"
  >
                
                Because Every Patient
                <br /><span className="text-brand-green">Deserves To Be Heard.</span></h2></Reveal></div><div className="lg:pt-6"><Reveal delay={0.14}><p className="text-[17px] leading-relaxed text-ink-soft">
                We believe great healthcare begins with understanding. Our team is committed to
                providing compassionate support and personalised attention throughout every stage of
                your healthcare journey.
              </p></Reveal><Reveal delay={0.22}><blockquote className="mt-10 border-l-2 border-brand-gold pl-6"><p className="font-display text-2xl font-light italic leading-snug text-brand-green">
                  “Your Health. Our Commitment.”
                </p><footer className="mt-3 text-[11px] uppercase tracking-label text-ink-muted">
                  Meddleaff Healthcare
                </footer></blockquote></Reveal></div></div></div></section>;
}
export {
  PatientExperience
};
