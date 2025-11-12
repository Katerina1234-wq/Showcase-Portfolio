"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export default function AnimatedLetters({
  text,
  className = "",
  delay = 45,
}: Props) {
  const chars = Array.from(text);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [prefersReduced, setPrefersReduced] = useState<boolean | null>(null);

  useEffect(() => {
    // Handle SSR or browsers without matchMedia
    if (typeof window === "undefined" || !window.matchMedia) {
      Promise.resolve().then(() => setPrefersReduced(false));
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    Promise.resolve().then(() => setPrefersReduced(mq.matches));

    const handle = () =>
      Promise.resolve().then(() => setPrefersReduced(mq.matches));

    // Add listener
    try {
      mq.addEventListener("change", handle);
    } catch {
      // Fallback for Safari
      mq.addListener(handle as unknown as EventListener);
    }

    return () => {
      try {
        mq.removeEventListener("change", handle);
      } catch {
        mq.removeListener(handle as unknown as EventListener);
      }
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (prefersReduced === null) return;

    el.classList.remove("is-playing");

    // If user prefers reduced motion, skip intersection logic
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-playing");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When element enters the viewport
            el.classList.add("is-playing");
          } else {
            // Remove to allow replay when scrolling back
            el.classList.remove("is-playing");
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    io.observe(el);
    return () => io.disconnect();
  }, [prefersReduced]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      aria-hidden
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            transformOrigin: "center",
            animationDelay: `${i * delay}ms`,
            opacity: 0,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}

      <style jsx>{`
        @keyframes letterIn {
          0% {
            transform: translateY(12px) rotateX(30deg) scale(0.98);
            opacity: 0;
          }
          60% {
            transform: translateY(-6px) rotateX(0deg) scale(1.02);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotateX(0) scale(1);
            opacity: 1;
          }
        }

        .is-playing :global(span) {
          animation-name: letterIn;
          animation-duration: 700ms;
          animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
          animation-fill-mode: forwards;
        }

        :global(span) {
          backface-visibility: hidden;
        }
      `}</style>
    </span>
  );
}
