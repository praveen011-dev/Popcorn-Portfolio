"use client";

import { motion, easeInOut } from "framer-motion";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const POP_COUNT = 25;

// 🍿 Popcorn piece component (same output, no repetition)
function PopcornPiece() {
  const mainClouds = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={`main-${i}`}
      className="absolute w-6 h-6 bg-yellow-300 rounded-full bottom-1 right-1 shadow-md"
    />
  ));

  const extraBumps = Array.from({ length: 8 }).map((_, i) => (
    <div
      key={`bump-${i}`}
      className="absolute w-4 h-4 bg-yellow-300 rounded-full bottom-2 left-4 shadow-sm"
    />
  ));

  return (
    <div className="relative w-12 h-12">
      {/* Base core shape */}
      <div className="absolute w-7 h-7 bg-yellow-200 rounded-full top-1 left-3 shadow-lg" />
      <div className="absolute w-6 h-6 bg-yellow-300 rounded-full top-4 left-0 shadow-md" />
      <div className="absolute w-6 h-6 bg-yellow-300 rounded-full bottom-1 right-1 shadow-md" />

      {/* repeated parts */}
      {mainClouds}

      {/* highlight bump */}
      <div className="absolute w-5 h-5 bg-yellow-100 rounded-full top-0 right-4 shadow-sm" />

      {extraBumps}
    </div>
  );
}

const kernelVariants = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 0.5,
    rotate: 0,
  },

  animate: (i: number) => ({
    y: [0, -rand(25, 60), -rand(10, 30), 0],
    rotate: [0, rand(-40, 40), rand(-20, 20), 0],
    scale: [0.7, 1.3, 1.1, 1],
    opacity: [0, 1, 0.9, 1],
    transition: {
      delay: i * 0.12,
      duration: rand(1.2, 1.7),
      ease: easeInOut,
      repeat: Infinity,
    },
  }),
};

export default function PopCorn() {
  return (
    <div className="relative w-full h-[320px] overflow-visible z-0 pointer-events-none">
      <motion.div
        className="relative w-full h-full"
        initial="initial"
        animate="animate"
      >
        {Array.from({ length: POP_COUNT }).map((_, i) => {
          const leftPos = rand(5, 85);
          const bottomPos = rand(10, 120);

          return (
            <motion.div
              key={i}
              custom={i}
              variants={kernelVariants}
              className="absolute"
              style={{ left: `${leftPos}%`, bottom: `${bottomPos}px` }}
            >
              <PopcornPiece />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
