"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Variants, Easing } from "framer-motion";

interface Slide {
  id: number;
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Fresh Strawberries",
    description: "Juicy, organic, and straight from the farm.",
    cta: "Shop now",
    ctaHref: "/shop/strawberries",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
  },
  {
    id: 2,
    title: "Tasty Burgers",
    description: "Mouthwatering burgers for every craving.",
    cta: "Order now",
    ctaHref: "/shop/burgers",
    image: "https://i.ibb.co.com/7JbwkQ1B/1.webp",
  },
  {
    id: 3,
    title: "Delicious Smoothies",
    description: "Healthy and refreshing smoothies every day.",
    cta: "Explore",
    ctaHref: "/shop/smoothies",
    image: "https://i.ibb.co.com/V0WkjWh8/2.webp",
  },
];

const INTERVAL = 5000;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const textVariants:Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => go(current + 1, 1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(intervalRef.current!);
  }, [paused, next]);

  // Pause on tab blur — no pointless ticking in the background
  useEffect(() => {
    const onBlur = () => setPaused(true);
    const onFocus = () => setPaused(false);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl mt-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[640px]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0"
            aria-roledescription="slide"
            aria-label={`Slide ${current + 1} of ${slides.length}: ${
              slide.title
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text content */}
            <div className="absolute bottom-16 left-6 sm:left-12 max-w-lg">
              <motion.p
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/70 mb-2"
              >
                Featured
              </motion.p>
              <motion.h2
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="mt-3 text-sm sm:text-base text-white/80"
              >
                {slide.description}
              </motion.p>
              {/* {slide.cta && (
                <motion.div
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Button
                    asChild
                    className="mt-5 bg-white text-black hover:bg-white/90 font-semibold px-6"
                  >
                    <a href={slide.ctaHref}>{slide.cta}</a>
                  </Button>
                </motion.div>
              )} */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress dots + interval bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx, idx > current ? 1 : -1)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-white/40"
            style={{ width: idx === current ? 32 : 8 }}
          >
            {idx === current && !paused && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                key={current}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
