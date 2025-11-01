"use client";

import { motion } from "framer-motion";

export const RetroGrid = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      {/* Horizontal lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(231, 76, 60, 0.3) 39px, rgba(231, 76, 60, 0.3) 40px)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 40px"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(231, 76, 60, 0.3) 39px, rgba(231, 76, 60, 0.3) 40px)",
        }}
      />
      
      {/* Perspective effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-jet-black"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
