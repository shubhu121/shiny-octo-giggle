"use client";

import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beams = Array.from({ length: 8 });

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {beams.map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-rust-red/30 to-transparent"
          style={{
            left: `${(index + 1) * 12}%`,
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
