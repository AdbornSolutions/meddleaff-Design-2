import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { doctor } from "../data/content";
import { SiteLink } from "./SiteLink";

function Doctors() {
  return (
    <section id="doctors" className="w-full bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-brand-cream lg:grid-cols-[0.9fr_1.1fr] lg:rounded-[3rem]">
          <Reveal className="relative min-h-[460px] overflow-hidden sm:min-h-[560px] lg:min-h-[720px]">
            <img
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.title}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/25 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-label text-brand-navy backdrop-blur-sm sm:bottom-8 sm:left-8">
              Women&apos;s Health Specialist
            </div>
          </Reveal>

          <div className="flex items-center px-7 py-14 sm:px-12 lg:px-16 lg:py-20 xl:px-20">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel>Meet Your Consultant</SectionLabel>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display text-[clamp(2.45rem,4.3vw,4.25rem)] font-light leading-[1.02] tracking-[-0.025em] text-brand-navy">
                  Focused Expertise.
                  <br />
                  <span className="text-brand-green">Compassionate Care.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-10 border-t border-brand-navy/10 pt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-label text-brand-green">
                    {doctor.title}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-medium text-brand-navy sm:text-4xl">
                    {doctor.name}
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base">
                    Personalised care for women through every stage of life, from reproductive health and pregnancy to fertility and menopause.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm leading-6 text-ink-soft">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    MBBS, Indira Gandhi Government Medical College, Nagpur
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-ink-soft">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    Post-Graduation in Obstetrics &amp; Gynaecology, Saifee Hospital
                  </li>
                  <li className="flex gap-3 text-sm leading-6 text-ink-soft sm:col-span-2">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    Diploma in IVF &amp; Reproductive Medicine, Kiels University, Germany
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-3">
                <SiteLink
                  to="/doctor-profile"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-green"
                >
                  View Full Profile
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </SiteLink>
                <SiteLink
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-brand-navy/15 px-6 py-3.5 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:border-brand-green hover:text-brand-green"
                >
                  Book a Consultation
                </SiteLink>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  Doctors
};
