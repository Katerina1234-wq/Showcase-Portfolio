"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServicePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useScroll gives us a scroll progress (0 to 1) for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // starts moving when section enters viewport
  });

  // Map scroll progress → vertical translation in pixels
  // (you can tweak the range [-200, 200] to control movement)
  const yText = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#F8FAF2] w-screen overflow-x-hidden"
    >
      {/* Scroll-reactive header */}
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
