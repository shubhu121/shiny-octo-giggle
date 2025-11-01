"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PixelatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const PixelatedText = ({ children, className = "", delay = 0 }: PixelatedTextProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-rust-red/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};
