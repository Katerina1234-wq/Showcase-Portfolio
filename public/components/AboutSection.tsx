"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-24"
      style={{ backgroundColor: "#F8FAF2" }}
    >
      {/* Left photo */}
      <div className="relative w-64 h-96 md:w-80 md:h-[500px] mb-10 md:mb-0 md:mr-16">
        <Image
          src="/images/me.png"
          alt="Katerina Borisova"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right text content */}
      <div className="max-w-2xl text-[#3B1C32]">
        {/* About Me */}
        <h2 className="font-[MonteCarlo] text-5xl md:text-6xl text-center mb-6">
          About Me
        </h2>
        <p className="font-['Merriweather_Sans'] text-base md:text-lg leading-relaxed text-gray-700 mb-10">
          My name is <strong>Katerina Borisova</strong>. I am 20 years old and
          currently pursuing my studies at <strong>Fontys University</strong>. I
          am a motivated and dedicated student with a strong interest in
          developing both my academic knowledge and practical skills through
          hands-on experience.
        </p>

        {/* Experience + Education */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          <div className="flex-1">
            <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-3">
              Experience
            </h3>
            <ul className="font-['Merriweather_Sans'] text-gray-700 list-disc list-inside leading-relaxed">
              <li>Figma</li>
              <li>VS Code - HTML, CSS, JS, React, Next.js</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-3">
              Education
            </h3>
            <p className="leading-relaxed">
              <strong>Current Student at Fontys</strong>
              <br />
              Specialization: Information and Communication Technology
            </p>
            <p className="mt-3 leading-relaxed">
              <strong>Graduated Highschool</strong>
              <br />
              Specialization at Math and Information Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
