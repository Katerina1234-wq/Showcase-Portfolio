"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-24"
      style={{ backgroundColor: "#F8FAF2" }}
    >
      <div className="relative w-90 h-96 md:w-85 md:h-[500px] mb-10 md:mb-0 md:mr-16">
        <Image src="/images/me.png" alt="Katerina Borisova" fill />
      </div>

      <div className="max-w-2xl text-[#3B1C32]">
        {/* About Me */}
        <h2 className="font-[MonteCarlo] text-5xl md:text-6xl text-center mb-6">
          About Me
        </h2>
        <p className="font-['Merriweather_Sans'] text-base md:text-lg leading-relaxed text-gray-700 mb-10">
          My name is <strong>Katerina Borisova</strong>. I am a 20-year-old ICT student focused on
           front-end development. I enjoy creating clean, user-friendly interfaces and turning 
           ideas into visual, interactive experiences. Through my studies, I have worked with 
           front-end technologies and developed a strong eye for layout, usability, and design.
            I am looking for my first internship where I can contribute to real projects, learn 
            from experienced designers and developers, and continue growing both my technical 
            skills and creative approach.


        </p>

        {/* Experience + Education */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          <div className="flex-1">
            <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-3">
              Experience
            </h3>
            <ul className="font-['Merriweather_Sans'] text-gray-700 list-disc list-inside leading-relaxed">
              <li>Languages: HTML, CSS, JavaScript, Swift, Dart</li>
              <li>Frameworks and Libraries: React, Next.js, Flutter, Node.js</li>
              <li>Tools and Technologies: Figma, VS Code, Blender, Xcode, GitHub</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="font-[Merriweather_Sans] text-2xl font-semibold mb-3">
              Education
            </h3>
            <p className="leading-relaxed font-['Merriweather_Sans']">
              <strong>Current Student at Fontys</strong>
              <br />
              Specialization: Information and Communication Technology - Front-end Development, Mobile Apps
            </p>
            <p className="mt-3 leading-relaxed font-['Merriweather_Sans']">
              <strong>Graduated Highschool</strong>
              <br />
              Specialization at Mathematics and Information Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
