import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, type RefObject } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  variants?: Variants;
  duration?: number;
  triggerRef?: RefObject<HTMLDivElement | null>; // 👈 New prop for external ref
}

export function RevealSection({
  children,
  variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  },
  triggerRef, // 👈 using optional trigger ref
}: RevealSectionProps) {
  const localRef = useRef<HTMLDivElement | null>(null);;
  const targetRef = triggerRef ?? localRef; // 👈 Use passed ref or fallback to own ref
  const controls = useAnimation();

  const isInView = useInView(targetRef, { once: true});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={localRef} // 👈 motion div still needs a ref for animations
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
