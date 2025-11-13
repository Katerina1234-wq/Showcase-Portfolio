"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedLetters from "../public/components/AnimatedLetters";
import ProjectsSection from "../public/components/ProjectsSection";
import AboutMeSection from "../public/components/AboutSection";
import ServicePage from "../public/components/Services";
import Playbook from "../public/components/Playbook";

const RoseScene = dynamic(() => import("../public/components/RoseScene"), {
  ssr: false,
});

// ✅ 1. Declare the props interface
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ✅ 2. Type the component props
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
                href="mailto:katerina.borisova294@gmail.com"
                className="text-[#5A1450] font-['Merriweather_Sans'] hover:underline"
              >
                📧 katerina.borisova294@gmail.com
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A1450] font-['Merriweather_Sans'] hover:underline"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
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

// ✅ 3. Main page component
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
          <a
            href="/public/components/ProjectsSection.tsx"
            className="hover:underline"
          >
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

      {/* Hero + sections */}
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

      {/* Text sections */}
      {/* ... your text and sections remain unchanged ... */}

      <ProjectsSection />
      <AboutMeSection />
      <ServicePage />
      <Playbook />

      {/* ✅ 4. Properly typed modal props */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
