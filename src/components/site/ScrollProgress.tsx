import { motion, useScroll, useSpring } from "framer-motion";

// Thin brand-gradient bar at the very top that fills as the page scrolls.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left gradient-emerald shadow-emerald"
      aria-hidden="true"
    />
  );
}
