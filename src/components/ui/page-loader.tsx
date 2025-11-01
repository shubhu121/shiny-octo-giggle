
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-jet-black"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e74c3c10_1px,transparent_1px),linear-gradient(to_bottom,#e74c3c10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

          {/* Loading Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Terminal Loading Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glowing Circle */}
              <motion.div
                className="absolute -inset-4 bg-rust-red/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Terminal Brackets */}
              <div className="relative flex items-center space-x-2 text-rust-red font-mono text-4xl md:text-6xl font-bold">
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {"<"}
                </motion.span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  ▊
                </motion.span>
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                >
                  {"/>"}
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-gray-400 text-sm md:text-base"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Initializing TinyAgent
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-1"
              >
                ...
              </motion.span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 md:w-96 h-1 bg-graphite-gray rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rust-red via-rust-red to-rust-red/60"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              className="font-mono text-rust-red text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(231, 76, 60, 0.03) 0px, transparent 1px, transparent 2px, rgba(231, 76, 60, 0.03) 3px)",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "0px 100px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
