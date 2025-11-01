"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const Spotlight = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-[1] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(231,76,60,0.15)_0%,transparent_60%)]" />
      <motion.div
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-rust-red/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-rust-red/10 blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};
