"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedLetters from "../components/AnimatedLetters";
import ProjectsSection from "../components/ProjectsSection";
import AboutMeSection from "../components/AboutSection";
import ServicePage from "../components/Services";
import Playbook from "../components/Playbook";

const RoseScene = dynamic(() => import("../components/RoseScene"), {
  ssr: false,
});

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 w-11/12 max-w-lg text-center border border-white/40"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-600 text-3xl hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-5xl font-[MonteCarlo] text-[#802A6E] mb-6">
              Get in Touch
            </h2>

            <p className="text-xl md:text-2xl text-gray-800 mb-8 font-sans">
              Let’s connect and create something unforgettable!
            </p>

            <div className="flex flex-col gap-6 text-xl md:text-2xl font-sans">
              <a
                href="mailto:549093@student.fontys.nl"
                className="text-[#5A1450] font-['Merriweather_Sans'] hover:underline"
              >
                📧 k.borisova@student.fontys.nl
              </a>
              <a
                href="https://www.instagram.com/katerina_borisova___/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A1450] font-['Merriweather_Sans'] hover:underline"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.linkedin.com/checkpoint/challenge/AgF-igWExQhHmQAAAZqBy69IYpxBSRp_4x3LH4BNrJuVCcuZGsjUP6EE89DpVM9plGC0vA8FkhPolq2wZWul5w-ylbUPAA?ut=0dqauzZHYkoI01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A1450] font-['Merriweather_Sans'] hover:underline"
              >
                💼 LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #FFFCF7 20%, #E391A9 50%, #812064 100%)",
      }}
    >
      <header
        className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 h-16 z-50 
                   bg-transparent backdrop-blur-sm transition-all duration-300"
      >
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-px bg-black" />

        <div className="font-[MonteCarlo] text-5xl">KB</div>

        <nav className="flex gap-6 md:gap-10 text-lg md:text-3xl font-[MonteCarlo]">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#works" className="hover:underline">
            Works
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className="hover:underline"
          >
            Contact
          </button>
        </nav>

        <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 flex flex-col gap-[2px]">
          <div className="h-px bg-black opacity-90" />
          <div className="h-px bg-black opacity-70" />
        </div>
      </header>

      <section
        className="relative w-full h-screen flex items-center justify-center"
        id="home"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-5/6 h-5/6 md:w-4/5 md:h-4/5 translate-y-6">
            <RoseScene />
          </div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <Image
            src="/images/frameportfolio.png"
            alt="Frame"
            fill
            loading="eager"
            className="object-contain object-center w-full h-full"
          />
        </div>
      </section>

      {/* text*/}
      <section className="relative z-30 flex flex-col items-center justify-center text-center px-4 mt-4 md:mt-8 py-10 bg-transparent">
        <h1
          className="text-5xl md:text-7xl font-black text-[#802A6E] uppercase font-['Merriweather_Sans'] leading-tight"
          style={{
            textShadow:
              "0.8px 0 currentColor, -0.8px 0 currentColor, 0 0.8px currentColor, 0 -0.8px currentColor",
          }}
        >
          <AnimatedLetters text="CRAFTING" />
        </h1>

        <p className="text-4xl md:text-5xl italic font-[MonteCarlo] text-[#5A1450] -mt-3">
          <AnimatedLetters text="designing" delay={40} />
        </p>

        <h1
          className="text-6xl md:text-8xl font-black text-[#802A6E] uppercase font-['Merriweather_Sans'] leading-tight"
          style={{
            textShadow:
              "0.8px 0 currentColor, -0.8px 0 currentColor, 0 0.8px currentColor, 0 -0.8px currentColor",
          }}
        >
          <AnimatedLetters text="UNFORGETABLE" />
        </h1>

        <p className="text-4xl md:text-5xl italic font-[MonteCarlo] text-[#5A1450] -mt-3">
          <AnimatedLetters text="premium - luxury" delay={35} />
        </p>

        <h1
          className="text-5xl md:text-7xl font-black text-[#802A6E] uppercase font-['Merriweather_Sans'] leading-tight"
          style={{
            textShadow:
              "0.8px 0 currentColor, -0.8px 0 currentColor, 0 0.8px currentColor, 0 -0.8px currentColor",
          }}
        >
          <AnimatedLetters text="DIGITAL" />
        </h1>

        <p className="text-3xl md:text-4xl italic font-[MonteCarlo] text-[#5A1450] -mt-2">
          <AnimatedLetters text="web / mobile" delay={30} />
        </p>

        <h1
          className="text-6xl md:text-8xl font-black text-[#802A6E] uppercase font-['Merriweather_Sans'] leading-tight"
          style={{
            textShadow:
              "0.8px 0 currentColor, -0.8px 0 currentColor, 0 0.8px currentColor, 0 -0.8px currentColor",
          }}
        >
          <AnimatedLetters text="EXPERIENCES" />
        </h1>

        <p className="text-3xl md:text-4xl italic font-[MonteCarlo] text-[#5A1450] -mt-3">
          <AnimatedLetters text="brands & websites" delay={30} />
        </p>

        <h1
          className="text-6xl md:text-8xl font-black text-[#802A6E] uppercase font-['Merriweather_Sans'] leading-tight"
          style={{
            textShadow:
              "0.8px 0 currentColor, -0.8px 0 currentColor, 0 0.8px currentColor, 0 -0.8px currentColor",
          }}
        >
          <AnimatedLetters text="FOR CLIENTS" />
        </h1>
      </section>

      <ProjectsSection />
      <AboutMeSection />
      <ServicePage />
      <Playbook />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
