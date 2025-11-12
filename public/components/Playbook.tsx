"use client";

import Image from "next/image";
import { Great_Vibes, Poppins } from "next/font/google";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

export default function PlaybookPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    });
  };

  const gifs = [1, 2, 3, 4, 5, 6];

  return (
    <main
      className={`relative min-h-screen w-full bg-gradient-to-b from-[#EFA4C8] to-[#A14784] flex flex-col items-center text-center overflow-visible ${greatVibes.variable} ${poppins.variable}`}
    >
      <div className="absolute top-0 left-0 w-40 h-40">
        <Image
          src="/images/bubbles.png"
          alt="Decorative pink bubbles"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* --- Header --- */}
      <section className="mt-16">
        <h1
          className="text-[58px] text-[#1a1a1a] leading-none font-[var(--font-greatvibes)]"
          style={{ fontFamily: "var(--font-greatvibes)" }}
        >
          Playbook
        </h1>
        <p
          className="text-[10px] uppercase tracking-[2px] text-[#1a1a1a] mt-1 font-[var(--font-poppins)] font-light"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Some of my random explorations
          <br />
          with type and aesthetic
        </p>
      </section>

      {/* gifs */}
      <section className="w-full overflow-hidden mt-10 py-10">
        <motion.div animate={controls} className="flex gap-5 w-[200%]">
          {gifs.map((n) => (
            <motion.div
              key={n}
              className="w-[300px] h-[180px] rounded-sm flex-shrink-0 cursor-pointer shadow-inner overflow-hidden relative"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert(`Clicked card ${n}`)}
            >
              <Image
                src={`/gifs/gif${n}.gif`}
                alt={`GIF ${n}`}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* send email section*/}
      <section className="relative w-full mt-32 overflow-visible">
        {/* Moving line */}
        <div className="whitespace-nowrap flex animate-marquee">
          {[...Array(3)].map((_, i) => (
            <h2
              key={i}
              className="text-white text-[68px] font-extrabold tracking-tight uppercase leading-[1] mx-8 font-[var(--font-poppins)]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              SEND AN EMAIL SEND AN EMAIL SEND AN EMAIL SEND AN EMAIL SEND AN
              EMAIL
            </h2>
          ))}
        </div>

        {/* Purple shape spinning */}
        <div className="absolute right-[20%] bottom-[-90px] w-[200px] h-[200px] overflow-visible flex items-center justify-center">
          <div className="w-full h-full relative animate-slow-spin">
            <Image
              src="/images/purpleshape.png"
              alt="Reach out badge"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="mt-20 mb-8 text-[#1a1a1a] text-sm leading-tight">
        <p
          className="italic text-[22px] font-[var(--font-greatvibes)]"
          style={{ fontFamily: "var(--font-greatvibes)" }}
        >
          KB
        </p>
        <p
          className="text-[12px] mt-0.5 font-light font-[var(--font-poppins)]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Katerina Borisova
        </p>
      </footer>
    </main>
  );
}
