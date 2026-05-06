"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const tabs = [
    "Experience",
    "Work Experience",
    "Education",
    "Certifications",
  ] as const;
  const [activeSection, setActiveSection] =
    useState<(typeof tabs)[number]>("Experience");

  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left px-6 md:px-16 py-24"
      style={{ backgroundColor: "#F8FAF2" }}
    >
      <div className="relative w-99 h-106 md:w-85 md:h-[550px] md:w-[370px] mb-10 md:mb-0 md:-ml-10 md:mr-16 md:mt-12">
        <Image src="/images/me.png" alt="Katerina Borisova" fill />
      </div>

      <div className="max-w-2xl text-[#3B1C32]">
        {/* About Me */}
        <h2 className="font-[MonteCarlo] text-5xl md:text-6xl text-center mb-6">
          About Me
        </h2>
        <p className="font-['Merriweather_Sans'] text-base md:text-lg leading-relaxed text-gray-700 mb-10">
          My name is <strong>Katerina Borisova</strong>. I am a 20-year-old ICT
          student with a focus on full stack development and a growing interest
          in AI-driven applications. I enjoy building complete digital
          experiences with inteligent features. Through my studies and projects,
          I have gained experience in modern web technologies, 3D interactive
          design, and integrating AI functionality into applications. I have a
          strong eye for usability, performance, and clean architecture.
        </p>

        {/* Section tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`rounded-full px-5 py-2 text-sm md:text-base font-[Merriweather_Sans] font-semibold transition-all duration-200 ${
                activeSection === tab
                  ? "bg-[#802A6E] text-white shadow-xl"
                  : "bg-white text-[#3B1C32] border border-[#D9D4DC] hover:border-[#802A6E] hover:text-[#802A6E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-[#D9D4DC] bg-white/90 p-6 shadow-sm text-left">
          {activeSection === "Experience" && (
            <div>
              <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-4">
                Experience
              </h3>
              <ul className="font-['Merriweather_Sans'] text-gray-700 list-disc list-inside leading-relaxed">
                <li>Languages: HTML, CSS, JavaScript, Swift, Python, C#</li>
                <li>
                  Frameworks and Libraries: React, Next.js, Node.js,
                  TypeScript.js
                </li>
                <li>
                  Tools and Technologies: Figma, VSCode, Blender, Xcode, GitHub
                </li>
                <li>Methodologies: Agile, Scrum, Kanban</li>
              </ul>
            </div>
          )}

          {activeSection === "Work Experience" && (
            <div>
              <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-4">
                Work Experience
              </h3>
              <ul className="font-['Merriweather_Sans'] text-gray-700 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Dunkin&apos; Donuts Eindhoven</strong>
                  <br />
                  Crew Member / Barista
                </li>
                <li className="mt-4">
                  <strong>Grand Hotel Victoria, Sunny Beach</strong>
                  <br />
                  Receptionist and Administrative Assistant
                </li>
              </ul>
            </div>
          )}

          {activeSection === "Education" && (
            <div>
              <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-4">
                Education
              </h3>
              <p className="leading-relaxed font-['Merriweather_Sans']">
                <strong>Current Student at Fontys</strong>
                <br />
                Specialization: Information and Communication Technology -
                Front-end Development, Mobile Apps
              </p>
              <p className="mt-4 leading-relaxed font-['Merriweather_Sans']">
                <strong>Graduated Highschool</strong>
                <br />
                Specialization at Mathematics and Information Technology
              </p>
            </div>
          )}

          {activeSection === "Certifications" && (
            <div>
              <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-4">
                Certifications
              </h3>
              <p className="leading-relaxed font-['Merriweather_Sans']">
                <strong>Programming Basics</strong>
                <br />
                certificate/course — Software University
              </p>
              <p className="mt-4 leading-relaxed font-['Merriweather_Sans']">
                <strong>Programming Fundamentals with C#</strong>
                <br />
                certificate/course — Software University
              </p>
              <p className="mt-4 leading-relaxed font-['Merriweather_Sans']">
                <strong>Programming C# Advanced</strong>
                <br />
                certificate/course — Software University
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
