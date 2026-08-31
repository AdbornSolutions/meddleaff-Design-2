import { motion } from "framer-motion";
const EASE = [0.23, 1, 0.32, 1];
function Reveal({ children, className, delay = 0, as = "div" }) {
  const MotionTag = motion[as];
  return <MotionTag
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: EASE, delay }}
  >{children}</MotionTag>;
}
function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0
}) {
  return <div className={`overflow-hidden ${className}`}><motion.img
    src={src}
    alt={alt}
    loading="lazy"
    className={`h-full w-full object-cover ${imgClassName}`}
    initial={{ scale: 1.05, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  /></div>;
}
function SectionLabel({
  children,
  tone = "green"
}) {
  return <span
    className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-label ${tone === "green" ? "text-brand-green" : "text-white/70"}`}
  ><span
    aria-hidden="true"
    className={`h-px w-8 ${tone === "green" ? "bg-brand-fresh" : "bg-white/40"}`}
  />{children}</span>;
}
export {
  ImageReveal,
  Reveal,
  SectionLabel
};
