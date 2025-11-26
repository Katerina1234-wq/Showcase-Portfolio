"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Great_Vibes,
  Playfair_Display,
  Montserrat,
  Montaga,
} from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montaga",
});

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const sections = slidesRef.current.filter(
      (s): s is HTMLDivElement => s !== null
    );

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const items = section.querySelectorAll(".animate-item");

        gsap.set(section, { opacity: 0, scale: 0.9, yPercent: 10 });
        gsap.to(section, {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });

        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      id="works"
      className={`relative min-h-screen w-full overflow-hidden bg-[#681950] text-white ${greatVibes.variable} ${playfair.variable} ${montserrat.variable} ${montaga.variable}`}
    >
      {/* Title */}
      <div className="text-center pt-20 z-10 flex flex-col items-center relative">
        <h2
          className="text-5xl mb-8 z-20 relative"
          style={{ fontFamily: "var(--font-greatvibes)" }}
        >
          Featured Projects
        </h2>

        <h1
          className="text-[9rem] font-extrabold opacity-10 tracking-[0.25em] select-none absolute top-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          WORKS
        </h1>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center justify-center gap-40 py-32">
        {/* Project 1 */}
        <section
          ref={(el: HTMLDivElement | null) => {
            slidesRef.current[0] = el;
          }}
          className="flex flex-col md:flex-row items-center justify-center w-full gap-12 relative"
        >
          <div className="relative">
            <Image
              src="/images/pic1.png"
              alt="3D Models Project"
              width={550}
              height={350}
              className="rounded-lg shadow-xl animate-item"
            />

            <a
              href="https://i549093.hera.fontysict.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 w-24 h-24 bg-[#F5D4DA] text-black flex items-center justify-center rounded-full font-bold shadow-lg border-4 border-white hover:bg-pink-200 transition text-center px-2"
              style={{
                fontFamily: "var(--font-montaga)",
                fontSize: "0.9rem",
                transform: "rotate(-45deg)",
              }}
            >
              Visit Website
            </a>
          </div>

          <div className="max-w-md text-left animate-item relative">
            <h3
              className="text-3xl mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span
                className="italic text-4xl"
                style={{ fontFamily: "var(--font-greatvibes)" }}
              >
                3d
              </span>{" "}
              <span
                className="font-extrabold"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                MODELS
              </span>
            </h3>
            <p
              className="text-sm leading-relaxed opacity-90"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A collection of interactive 3D objects and product visualizations,
              crafted with attention to lighting, texture, and form.
            </p>
          </div>
        </section>

        {/* Project 2 */}
        <section
          ref={(el: HTMLDivElement | null) => {
            slidesRef.current[1] = el;
          }}
          className="flex flex-col md:flex-row-reverse items-center justify-center w-full gap-12 relative"
        >
          <div className="relative">
            <Image
              src="/images/pic2.png"
              alt="BELCO Project"
              width={550}
              height={350}
              className="rounded-lg shadow-xl animate-item"
            />

            <a
              href="https://belcoweb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 w-24 h-24 bg-[#F5D4DA] text-black flex items-center justify-center rounded-full font-bold shadow-lg border-4 border-white hover:bg-pink-200 transition text-center px-2"
              style={{
                fontFamily: "var(--font-montaga)",
                fontSize: "0.9rem",
                transform: "rotate(-45deg)",
              }}
            >
              Visit Website
            </a>
          </div>

          <div className="max-w-md text-left animate-item relative">
            <h3
              className="text-3xl mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span
                className="italic text-4xl"
                style={{ fontFamily: "var(--font-greatvibes)" }}
              >
                B
              </span>
              <span
                className="font-extrabold"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ELCO
              </span>
            </h3>
            <p
              className="text-sm leading-relaxed opacity-90"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A brand-focused web concept that combines bold typography and
              minimalist design for clarity and identity.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
