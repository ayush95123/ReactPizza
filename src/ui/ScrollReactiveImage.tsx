"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  animate,
  useTransform,
} from "motion/react";

type ScrollReactiveImageProps = {
  src: string;
  alt?: string;
  className?: string;
  rotate?: boolean;
  rotationPerScroll?: number; // e.g. 15°
  duration?: number;
  scrollRange?: [number, number];
  offsetRange?: [number, number];
  direction?: "vertical" | "horizontal";
  scrollUpRotationDirection?: "cw" | "ccw";
  scrollDownRotationDirection?: "cw" | "ccw";
};

export default function ScrollReactiveImage({
  src,
  alt = "",
  className = "",
  rotate = true,
  rotationPerScroll = 20,
  duration = 0.8,
  scrollRange = [0, 1000],
  offsetRange = [0, 0],
  direction = "vertical",
  scrollUpRotationDirection = "ccw",
  scrollDownRotationDirection = "cw",
}: ScrollReactiveImageProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 50,
    damping: 20,
  });

  const movement = useTransform(smoothScrollY, scrollRange, offsetRange);
  const [lastScrollY, setLastScrollY] = useState(0);

  const rotation = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (!rotate) return;

      const isScrollDown = latest > lastScrollY;
      setLastScrollY(latest);

      const direction = isScrollDown
        ? scrollDownRotationDirection
        : scrollUpRotationDirection;

      const angle =
        direction === "cw" ? rotationPerScroll : -rotationPerScroll;

      const current = rotation.get();
      animate(rotation, current + angle, {
        duration,
        ease: "easeInOut",
      });
    });

    return () => unsubscribe();
  }, [
    scrollY,
    rotation,
    rotate,
    rotationPerScroll,
    duration,
    scrollDownRotationDirection,
    scrollUpRotationDirection,
    lastScrollY,
  ]);

  const transformStyle =
    direction === "horizontal" ? { x: movement } : { y: movement };

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{
        ...transformStyle,
        rotate: rotation,
      }}
    />
  );
}
