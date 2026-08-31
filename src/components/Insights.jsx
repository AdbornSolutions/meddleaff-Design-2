import { ArrowRightIcon } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { insights } from "../data/insights";
function Insights() {
  return <section id="insights" aria-labelledby="insights-heading" className="w-full bg-white py-24 lg:py-32"><div className="mx-auto max-w-[1400px] px-6 md:px-8"><div className="flex flex-wrap items-end justify-between gap-8"><div className="max-w-2xl"><Reveal><SectionLabel>Health Insights</SectionLabel></Reveal><Reveal delay={0.08}><h2
    id="insights-heading"
    className="mt-6 font-display text-[clamp(2.25rem,4.4vw,3.85rem)] font-light leading-[1.04] tracking-[-0.02em] text-brand-navy"
  >
                
                Guidance for a
                <br /><span className="text-brand-green">Healthier Tomorrow.</span></h2></Reveal></div></div><div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">{insights.map(
    (article, i) => <Reveal
      as="article"
      key={article.title}
      delay={i * 0.1}
      className="group flex h-full flex-col"
    ><a href="#insights" className="flex h-full flex-col"><div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-brand-mint"><img
      src={article.image}
      alt={article.title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
    /></div><p className="mt-6 text-[11px] uppercase tracking-label text-brand-green">{article.category}<span className="mx-2 text-brand-navy/20" aria-hidden="true">
                    •
                  </span><span className="text-ink-muted">{article.readTime}</span></p><h3 className="mt-3 font-display text-2xl font-light leading-snug text-brand-navy">{article.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{article.excerpt}</p><span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-brand-navy transition-colors duration-200 ease-premium group-hover:text-brand-green">
                  Read Article
                  <ArrowRightIcon
      className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-[5px]"
      aria-hidden="true"
    /></span></a></Reveal>
  )}</div></div></section>;
}
export {
  Insights
};
