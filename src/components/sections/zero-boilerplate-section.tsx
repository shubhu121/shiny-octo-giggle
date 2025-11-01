"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { PixelatedBorder } from "@/components/ui/pixelated-border";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "framer-motion";

const ZeroBoilerplateSection = () => {
  const codeString = `from tinyagent import tool, ReactAgent

@tool
def multiply(a: float, b: float) -> float:
    """Multiply two numbers together."""
    return a * b

@tool
def divide(a: float, b: float) -> float:
    """Divide the first number by the second."""
    return a / b

agent = ReactAgent(tools=[multiply, divide])
result = agent.run(
    "What is 12 times 5, then divided by 3?"
)
# → 20`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const lineCount = codeString.split('\n').length;


  return (
    <section className="py-12 md:py-20 relative px-4 bg-jet-black overflow-hidden">
      {/* Retro Grid Background */}
      <RetroGrid />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center font-mono text-electric-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-rust-red">&gt;</span> Zero Boilerplate. Pure Magic.
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Just decorate functions with{" "}
          <code className="text-rust-red bg-graphite-gray px-2 py-1 rounded font-mono">
            @tool
          </code>{" "}
          and watch the agent work.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <CardSpotlight>
              <PixelatedBorder className="relative">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-rust-red/30 bg-background hover:bg-rust-red/20 hover:text-accent-foreground h-9 rounded-md px-3 absolute top-4 right-4 z-10 text-electric-white"
                >
                  <Copy className="h-4 w-4" />
                  <span className="ml-2">{copied ? "Copied" : "Copy"}</span>
                </button>
                <div className="rounded-lg overflow-hidden border border-rust-red/30 bg-black">
                  <pre className="flex gap-4 p-6 text-sm font-mono overflow-x-auto">
                    <code className="text-right text-gray-600 select-none">
                      {Array.from({ length: lineCount }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </code>
                    <code className="text-electric-white whitespace-pre">
                      <span>from tinyagent import tool, ReactAgent</span>
                      {"\n\n"}
                      <span className="text-rust-red">@tool</span>
                      {"\n"}
                      <span>def multiply(a: float, b: float) -&gt; float:</span>
                      {"\n"}
                      <span>  <span className="text-green-400">"""Multiply two numbers together."""</span></span>
                      {"\n"}
                      <span>  return a * b</span>
                      {"\n\n"}
                      <span className="text-rust-red">@tool</span>
                      {"\n"}
                      <span>def divide(a: float, b: float) -&gt; float:</span>
                      {"\n"}
                      <span>  <span className="text-green-400">"""Divide the first number by the second."""</span></span>
                      {"\n"}
                      <span>  return a / b</span>
                      {"\n\n"}
                      <span>agent = ReactAgent(tools=[multiply, divide])</span>
                      {"\n"}
                      <span>result = agent.run(</span>
                      {"\n"}
                      <span>    <span className="text-green-400">"What is 12 times 5, then divided by 3?"</span></span>
                      {"\n"}
                      <span>)</span>
                      {"\n"}
                      <span className="text-gray-500"># → 20</span>
                    </code>
                  </pre>
                </div>
              </PixelatedBorder>
            </CardSpotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <CardSpotlight>
              <div className="flex justify-center">
                <PixelatedBorder>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3609c05a-f097-4349-b730-60adf2f04c2c-tinyagent-xyz/assets/images/G2YNFWXXgAAcv1R-3.png"
                    alt="Terminal UI"
                    width={608}
                    height={387}
                    className="rounded-lg border border-rust-red/30 shadow-[0_0_20px_rgba(231,76,60,0.3)] max-w-full h-auto hover:shadow-[0_0_30px_rgba(231,76,60,0.5)] transition-all"
                  />
                </PixelatedBorder>
              </div>
            </CardSpotlight>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <CardSpotlight>
            <div className="mt-12 bg-graphite-gray/60 backdrop-blur-lg border border-rust-red/30 rounded-lg p-6 md:p-8 hover:border-rust-red/60 transition-all">
              <p className="text-gray-300 text-base md:text-lg mb-4">
                <span className="text-rust-red font-bold">The agent automatically:</span>
              </p>
              <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                {[
                  "Understands it needs to perform multiple steps",
                  <>Calls <code className="text-rust-red bg-jet-black px-2 py-1 rounded font-mono text-xs md:text-sm">multiply(12, 5)</code> → gets 60</>,
                  <>Takes that result and calls <code className="text-rust-red bg-jet-black px-2 py-1 rounded font-mono text-xs md:text-sm">divide(60, 3)</code> → gets 20</>,
                  "Returns the final answer"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-rust-red mr-2 mt-1">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
};

export default ZeroBoilerplateSection;