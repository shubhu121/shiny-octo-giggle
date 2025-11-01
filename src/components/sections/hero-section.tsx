"use client";

import Image from "next/image";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { AsciiBackground } from "@/components/ui/ascii-background";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { GlitchText } from "@/components/ui/glitch-text";
import { PixelatedText } from "@/components/ui/pixelated-text";
import { FloatingParticles } from "@/components/ui/floating-particles";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText("uv pip install tiny_agent_os");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-jet-black text-electric-white pt-20">
      {/* ASCII Animation Background */}
      <AsciiBackground />
      
      {/* Spotlight Effect */}
      <Spotlight />
      
      {/* Background Beams */}
      <BackgroundBeams />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jet-black/50 to-jet-black z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e74c3c10_1px,transparent_1px),linear-gradient(to_bottom,#e74c3c10_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />

      <div className="container mx-auto text-center z-20 max-w-6xl py-16 md:py-20">
        {/* Main Headline */}
        <PixelatedText delay={0.2}>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-electric-white leading-tight">
            <GlitchText text="Small footprint." />
            <br />
            <span className="bg-gradient-to-r from-rust-red via-rust-red to-rust-red/60 bg-clip-text text-transparent animate-gradient-x">
              Infinite intelligence.
            </span>
          </h1>
        </PixelatedText>

        {/* Subtitle */}
        <PixelatedText delay={0.4}>
          <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A lightweight, local-first AI framework designed for developers who value{" "}
            <span className="text-rust-red font-semibold">efficiency</span>,{" "}
            <span className="text-rust-red font-semibold">modularity</span>, and{" "}
            <span className="text-rust-red font-semibold">control</span>.
          </p>
        </PixelatedText>

        {/* Terminal Code Block */}
        <PixelatedText delay={0.6}>
          <div className="mb-12 text-left max-w-2xl mx-auto bg-black/80 backdrop-blur-xl border border-rust-red/20 rounded-xl p-6 md:p-8 shadow-2xl shadow-rust-red/10 hover:border-rust-red/40 transition-all duration-300 hover:shadow-rust-red/30 group relative">
            {/* Pixelated corner decorations */}
            <div className="absolute -left-1 -top-1 h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -right-1 -top-1 h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rust-red animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-mono">terminal</span>
                <button
                  onClick={copyCommand}
                  className="p-1.5 rounded-md border border-rust-red/30 bg-transparent hover:bg-rust-red/10 hover:border-rust-red transition-all duration-200 group/copy"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-400" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-gray-400 group-hover/copy:text-rust-red transition-colors" />
                  )}
                </button>
              </div>
            </div>
            <code className="font-mono text-xs sm:text-sm md:text-base block text-green-400 leading-relaxed">
              <span className="text-gray-500">$</span> uv pip install tiny_agent_os
              <br />
              <span className="text-gray-500">&gt;&gt;&gt;</span>{" "}
              <span className="text-rust-red">Rust loading...</span>
              <br />
              <span className="text-gray-500">&gt;&gt;&gt;</span> All systems nominal
              <span className="text-rust-red animate-pulse ml-1">▊</span>
            </code>
          </div>
        </PixelatedText>

        {/* CTA Buttons */}
        <PixelatedText delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-rust-red text-electric-white hover:bg-rust-red/90 rounded-lg px-8 font-mono font-bold text-sm md:text-base h-12 md:h-14 shadow-lg shadow-rust-red/30 hover:shadow-xl hover:shadow-rust-red/50 hover:scale-105 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Get Started
              <ArrowRight className="ml-1 h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-rust-red/30 bg-transparent text-electric-white hover:bg-rust-red/10 hover:border-rust-red rounded-lg px-8 font-mono font-bold text-sm md:text-base h-12 md:h-14 hover:scale-105">
              View on GitHub
            </button>
          </div>
        </PixelatedText>

        {/* Feature Pills */}
        <PixelatedText delay={1}>
          <div className="mt-16 flex flex-wrap gap-3 justify-center items-center">
            <div className="px-4 py-2 bg-graphite-gray/50 border border-rust-red/20 rounded-full text-xs md:text-sm font-mono text-gray-400 backdrop-blur-sm hover:border-rust-red/60 hover:bg-graphite-gray/70 transition-all">
              <span className="text-rust-red">▸</span> Zero boilerplate
            </div>
            <div className="px-4 py-2 bg-graphite-gray/50 border border-rust-red/20 rounded-full text-xs md:text-sm font-mono text-gray-400 backdrop-blur-sm hover:border-rust-red/60 hover:bg-graphite-gray/70 transition-all">
              <span className="text-rust-red">▸</span> Type safe
            </div>
            <div className="px-4 py-2 bg-graphite-gray/50 border border-rust-red/20 rounded-full text-xs md:text-sm font-mono text-gray-400 backdrop-blur-sm hover:border-rust-red/60 hover:bg-graphite-gray/70 transition-all">
              <span className="text-rust-red">▸</span> Local first
            </div>
          </div>
        </PixelatedText>
      </div>
    </section>
  );
};

export default HeroSection;