"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ServicePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  const { scrollY } = useScroll();
  const smoothY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    let lastY = scrollY.get();
    let ticking = false;

    const handleScroll = () => {
      const curr = scrollY.get();
      const dir = curr > lastY ? 1 : -1;
      smoothY.set(dir * 80);
      lastY = curr;

      if (!ticking) {
        ticking = true;
        setTimeout(() => {
          smoothY.set(0);
          ticking = false;
        }, 250);
      }
    };

    const unsub = scrollY.onChange(handleScroll);
    return () => unsub();
  }, [scrollY, smoothY]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F8FAF2] w-screen overflow-x-hidden min-h-screen"
    >
      {/* Animated Title */}
      <motion.div
        style={{ y: smoothY }}
        className="sticky top-16 left-0 w-full flex justify-between px-8 md:px-32 text-4xl md:text-6xl font-[MonteCarlo] italic text-[#3B1C32] pointer-events-none z-10"
      >
        <span>Services</span>
        <span>Provided</span>
      </motion.div>

      {/* Page Content */}
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
