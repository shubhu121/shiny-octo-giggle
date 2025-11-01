"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { PixelatedText } from "@/components/ui/pixelated-text";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";

const codeContent = {
  install: `uv venv
source .venv/bin/activate
uv pip install tiny_agent_os`,
  apiKey: `export OPENAI_API_KEY=your_openrouter_key_here
export OPENAI_BASE_URL=https://openrouter.ai/api/v1`,
  setModel: `from tinyagent import ReactAgent

# Default model
agent = ReactAgent(tools=[...])

# Specify a model
agent = ReactAgent(tools=[...], model="gpt-4o-mini")
agent = ReactAgent(tools=[...], model="anthropic/claude-3.5-sonnet")
agent = ReactAgent(tools=[...], model="meta-llama/llama-3.1-70b-instruct")`,
};

export default function InstallationSection() {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const handleCopy = (id: string, text: string) => {
    if (copied[id]) return;
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const CopyButton = ({ id, text }: { id: string; text: string }) => (
    <button
      onClick={() => handleCopy(id, text)}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-rust-red/30 bg-black hover:bg-rust-red/20 hover:text-accent-foreground h-9 rounded-md px-3 absolute top-4 right-4 z-10 font-mono"
    >
      {copied[id] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="ml-2">{copied[id] ? "Copied!" : "Copy"}</span>
    </button>
  );

  return (
    <section
      id="installation"
      className="py-12 md:py-20 relative px-4 bg-jet-black overflow-hidden"
    >
      {/* Retro Grid Background */}
      <RetroGrid />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <PixelatedText>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center font-mono">
            <span className="text-rust-red">&gt;</span> Installation
          </h2>
        </PixelatedText>
        <PixelatedText delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12">
            Get started in seconds
          </p>
        </PixelatedText>

        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block pointer-events-none"
          animate={{
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3609c05a-f097-4349-b730-60adf2f04c2c-tinyagent-xyz/assets/images/G2YN-uGWkAEtvh9-4.png"
            alt="Rust Logo"
            width={384}
            height={384}
            className="w-96 h-96"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CardSpotlight>
            <div className="relative">
              <CopyButton id="install" text={codeContent.install} />
              <div className="rounded-lg overflow-hidden border border-rust-red/30 hover:border-rust-red/60 transition-all">
                <pre className="bg-black p-6 text-sm md:text-base font-mono overflow-x-auto">
                  <code className="language-bash">
                    <span className="text-rust-red">uv</span>
                    <span className="text-electric-white"> venv</span>
                    {'                    '}
                    <span className="text-gray-500"># Creates .venv/</span>
                    {'\n'}
                    <span className="text-rust-red">source</span>
                    <span className="text-green-400"> .venv/bin/activate</span>
                    {'  '}
                    <span className="text-gray-500"># Activate environment</span>
                    {'\n'}
                    <span className="text-rust-red">uv</span>
                    <span className="text-electric-white"> pip install </span>
                    <span className="text-green-400">tiny_agent_os</span>
                  </code>
                </pre>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
            Set your API key:
          </h3>
          <CardSpotlight>
            <div className="relative">
              <CopyButton id="apiKey" text={codeContent.apiKey} />
              <div className="rounded-lg overflow-hidden border border-rust-red/30 hover:border-rust-red/60 transition-all">
                <pre className="bg-black p-6 text-sm md:text-base font-mono overflow-x-auto">
                  <code className="language-bash">
                    <span className="text-rust-red">export</span>
                    <span className="text-electric-white"> OPENAI_API_KEY</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-green-400">your_openrouter_key_here</span>
                    {'\n'}
                    <span className="text-rust-red">export</span>
                    <span className="text-electric-white"> OPENAI_BASE_URL</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-green-400">https://openrouter.ai/api/v1</span>
                  </code>
                </pre>
              </div>
            </div>
          </CardSpotlight>
          <p className="mt-4 text-sm md:text-base text-gray-400">
            Get your key at{' '}
            <a
              href="https://openrouter.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-red hover:underline"
            >
              openrouter.ai
            </a>
          </p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardSpotlight>
            <div className="rounded-lg border border-rust-red/30 bg-graphite-gray/60 backdrop-blur-[10px] shadow-sm hover:border-rust-red/60 transition-all">
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 font-mono">
                  Setting the Model
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-6">
                  Pass any OpenRouter model when creating the agent:
                </p>
                <div className="relative">
                  <CopyButton id="setModel" text={codeContent.setModel} />
                  <div className="rounded-lg overflow-hidden border border-rust-red/30">
                    <pre className="bg-black p-6 text-sm md:text-base font-mono overflow-x-auto">
                      <code className="language-python text-electric-white">
                        <span className="text-rust-red">from</span> tinyagent <span className="text-rust-red">import</span> ReactAgent
                        {'\n\n'}
                        <span className="text-gray-500"># Default model</span>
                        {'\n'}
                        agent = ReactAgent(tools=[...])
                        {'\n\n'}
                        <span className="text-gray-500"># Specify a model</span>
                        {'\n'}
                        agent = ReactAgent(tools=[...], model=
                        <span className="text-green-400">"gpt-4o-mini"</span>)
                        {'\n'}
                        agent = ReactAgent(tools=[...], model=
                        <span className="text-green-400">"anthropic/claude-3.5-sonnet"</span>)
                        {'\n'}
                        agent = ReactAgent(tools=[...], model=
                        <span className="text-green-400">"meta-llama/llama-3.1-70b-instruct"</span>)
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
}