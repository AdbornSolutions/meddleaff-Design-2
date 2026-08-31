import { Reveal } from "./Reveal";
import { trustPoints } from "../data/site";
function TrustStrip() {
  return <section aria-label="Why patients trust Meddleaff Healthcare" className="w-full bg-white"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><ul className="grid divide-y divide-brand-navy/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">{trustPoints.map(
    (point, i) => <Reveal
      as="li"
      key={point.title}
      delay={i * 0.08}
      className="flex flex-col gap-1.5 border-brand-navy/10 py-8 sm:border-l sm:py-12 sm:pl-8 sm:first:border-l-0 sm:first:pl-0 lg:pl-10"
    ><span className="text-[11px] font-medium uppercase tracking-label text-brand-green">{point.title}</span><span className="font-display text-xl font-light text-brand-navy">{point.copy}</span></Reveal>
  )}</ul></div></section>;
}
export {
  TrustStrip
};
