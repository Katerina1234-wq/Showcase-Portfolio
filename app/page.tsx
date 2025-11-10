"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import AboutSection from "../public/components/AboutSection";

const RoseScene = dynamic(() => import("../public/components/RoseScene"), {
  ssr: false,
});
export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #FFFCF7 0%, #F5D4DA 50%, #EBAEBE 100%)",
      }}
    >
      {" "}
      {/* Navigation */} {" "}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 h-16 z-50 bg-transparent">
        {" "}
        {/* thin black line at the very top (aligns with header padding) */}{" "}
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-px bg-black" />{" "}
        <div className="font-[MonteCarlo] text-5xl">KB</div>{" "}
        <nav className="flex gap-6 md:gap-10 text-lg md:text-3xl font-[MonteCarlo]">
          {" "}
          <a href="#home" className="hover:underline">
            {" "}
            Home{" "}
          </a>{" "}
          <a href="#works" className="hover:underline">
            {" "}
            Works{" "}
          </a>{" "}
          <a href="#about" className="hover:underline">
            {" "}
            About{" "}
          </a>{" "}
          <a href="#contact" className="hover:underline">
            {" "}
            Contact{" "}
          </a>{" "}
        </nav>{" "}
        {/* two thin lines at the bottom of the navbar (stacked) */}{" "}
        <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 flex flex-col gap-[2px]">
          {" "}
          <div className="h-px bg-black opacity-90" />{" "}
          <div className="h-px bg-black opacity-70" />{" "}
        </div>{" "}
      </header>{" "}
      {/* First screen: frame + rose (full viewport) */}{" "}
      <section className="relative w-full h-screen flex items-center justify-center">
        {" "}
        {/* Fullscreen frame wrapper: cover the entire viewport area of this section */}{" "}
        <div className="absolute inset-0 z-10">
          {" "}
          <div className="relative w-full h-full">
            {" "}
            {/* 3D scene fills the wrapper */}{" "}
            <div className="absolute inset-0 z-10">
              {" "}
              <RoseScene />{" "}
            </div>{" "}
            {/* Frame overlay on top so it looks like the rose sits within the rectangle. Use object-contain so the whole frame image is visible and not cropped. */}{" "}
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              {" "}
              <Image
                src="/images/frameportfolio.png"
                alt="Frame"
                fill
                loading="eager"
                className="object-contain object-center w-full h-full"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Hero Text Section (below the first page) */} <AboutSection />{" "}
      {/* (Rose moved into the first-screen section) */}{" "}
    </main>
  );
}
