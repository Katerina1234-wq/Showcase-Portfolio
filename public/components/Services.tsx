"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function ServicePage() {
  const yText = useMotionValue(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const clamp = (v: number, min = -200, max = 200) =>
      Math.max(min, Math.min(max, v));

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;

        animate(yText, clamp(yText.get() - delta), {
          type: "spring",
          stiffness: 90,
          damping: 20,
        });

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          animate(yText, 0, { type: "spring", stiffness: 90, damping: 20 });
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [yText]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F8FAF2] w-screen overflow-x-hidden"
    >
      {/* Sticky header */}
      <motion.div
        style={{ y: yText }}
        className="sticky top-16 left-0 w-full flex justify-between px-8 md:px-32 text-4xl md:text-6xl font-[MonteCarlo] italic text-[#3B1C32] pointer-events-none z-10"
      >
        <span>Services</span>
        <span>Provided</span>
      </motion.div>

      <section className="w-full flex flex-col items-center justify-start px-6 md:px-20 pt-16 pb-16">
        <h3 className="font-[MonteCarlo] text-5xl md:text-7xl italic text-[#3B1C32] mb-12 text-center">
          • What can I do for you •
        </h3>

        <div className="text-[#802A6E] font-extrabold font-['Merriweather_Sans'] text-5xl md:text-6xl leading-snug space-y-6 text-center">
          <p>3D MODELS</p>
          <p>WEB DESIGN</p>
          <p>App–Design</p>
          <p>FRONT–END</p>
          <p className="flex items-center justify-center gap-2">🌸 ASSETS 🌸</p>
        </div>
      </section>
    </div>
  );
}
