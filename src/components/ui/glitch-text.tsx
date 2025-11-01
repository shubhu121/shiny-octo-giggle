"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            "0 0 0px rgba(231, 76, 60, 0)",
            "2px 2px 4px rgba(231, 76, 60, 0.8), -2px -2px 4px rgba(74, 222, 128, 0.8)",
            "0 0 0px rgba(231, 76, 60, 0)",
          ],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
      <span className="absolute left-0 top-0 -z-10 text-rust-red opacity-70" aria-hidden>
        {text}
      </span>
      <span className="absolute left-0 top-0 -z-10 text-green-400 opacity-70" aria-hidden>
        {text}
      </span>
    </div>
  );
};
