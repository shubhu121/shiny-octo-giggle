"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

export const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsFloating(latest > 100);
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500"
      initial={{ paddingTop: "1rem" }}
      animate={{
        paddingTop: isFloating ? "1rem" : "1rem",
      }}
    >
      <motion.nav
        className="mx-auto transition-all duration-500 ease-out"
        initial={{ maxWidth: "100%", borderRadius: "0rem" }}
        animate={{
          maxWidth: isFloating ? "1024px" : "100%",
          borderRadius: isFloating ? "1rem" : "0rem",
        }}
      >
        <motion.div
          className={`relative overflow-hidden transition-all duration-500 ${
            isFloating
              ? "backdrop-blur-xl bg-jet-black/80 border border-rust-red/20 shadow-2xl shadow-rust-red/10"
              : "bg-transparent"
          }`}
          initial={{ borderRadius: "0rem" }}
          animate={{
            borderRadius: isFloating ? "1rem" : "0rem",
          }}
        >
          {/* Animated gradient border effect when floating */}
          {isFloating && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-rust-red/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          <div className="relative z-10 flex items-center justify-between h-14 px-4 sm:px-6">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1761988154564.png"
                alt="TinyAgent"
                width={120}
                height={40}
                className="h-7 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(231,76,60,0.6)]"
                priority
              />
            </motion.a>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400/60 hover:text-electric-white transition-all duration-300 rounded-lg hover:bg-rust-red/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.button
                className="relative overflow-hidden px-3 sm:px-4 py-2 bg-rust-red text-electric-white font-mono text-xs sm:text-sm font-bold rounded-lg group shadow-lg shadow-rust-red/20 hover:shadow-xl hover:shadow-rust-red/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Get Started</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};