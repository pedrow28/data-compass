import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

interface SlidePresentationProps {
  slides: React.ComponentType<SlideProps>[];
}

const SlidePresentation = ({ slides }: SlidePresentationProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= total) return prev;
        return next;
      });
    },
    [total]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const CurrentSlide = slides[current];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-thauma-deep select-none"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-1 bg-thauma-deep/50">
        <motion.div
          className="h-full"
          style={{ backgroundColor: "#40D7FF" }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <CurrentSlide isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-thauma-deep/60 text-thauma-cyan hover:bg-thauma-deep/80 transition-all opacity-30 hover:opacity-100"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-thauma-deep/60 text-thauma-cyan hover:bg-thauma-deep/80 transition-all opacity-30 hover:opacity-100"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 text-xs font-display tracking-wider" style={{ color: "rgba(64,215,255,0.4)" }}>
        <span>THAUMA | Dialética de Convencimento | Demonstração</span>
        <span>{current + 1} / {total}</span>
      </div>
    </div>
  );
};

export default SlidePresentation;
