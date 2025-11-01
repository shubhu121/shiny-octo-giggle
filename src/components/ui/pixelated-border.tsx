"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PixelatedBorderProps {
  children: ReactNode;
  className?: string;
}

export const PixelatedBorder = ({ children, className = "" }: PixelatedBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Corner pixels */}
      <motion.div
        className="absolute -left-1 -top-1 h-2 w-2 bg-rust-red"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-1 -top-1 h-2 w-2 bg-rust-red"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 h-2 w-2 bg-rust-red"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute -bottom-1 -right-1 h-2 w-2 bg-rust-red"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-rust-red/50"
        animate={{
          borderColor: ["rgba(231, 76, 60, 0.3)", "rgba(231, 76, 60, 0.8)", "rgba(231, 76, 60, 0.3)"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {children}
    </div>
  );
};
