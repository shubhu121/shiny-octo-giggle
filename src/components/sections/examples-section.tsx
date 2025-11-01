"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { PixelatedText } from "@/components/ui/pixelated-text";
import { motion } from "framer-motion";

interface CodeBlockProps {
  rawText: string;
  children: React.ReactNode;
}

const CodeBlock = ({ rawText, children }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rawText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <CardSpotlight>
      <div className="relative">
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-rust-red/30 bg-jet-black hover:bg-rust-red/20 text-electric-white h-9 rounded-md px-3 absolute top-4 right-4 z-10"
          aria-label="Copy code"
        >
          {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          <span className="ml-2 hidden sm:inline">{isCopied ? "Copied!" : "Copy"}</span>
        </button>
        <div className="rounded-lg overflow-hidden border border-rust-red/30 bg-black hover:border-rust-red/60 transition-all">
          <pre className="p-6 text-sm overflow-x-auto font-mono bg-transparent border-0">
            <code>{children}</code>
          </pre>
        </div>
      </div>
    </CardSpotlight>
  );
};

const multiStepCodeRaw = `from tinyagent import tool, ReactAgent

@tool
def calculate_percentage(value: float, percentage: float) -> float:
  """Calculate what percentage of a value is."""
  return value * (percentage / 100)

@tool
def subtract(a: float, b: float) -> float:
  """Subtract b from a."""
  return a - b

agent = ReactAgent(tools=[calculate_percentage, subtract])
result = agent.run("If I have 15 apples and give away 40%, how many are left?")
print(result) # → "You have 9 apples left."`;

const multiStepCodeStyled = (
  <>
    <span className="text-gray-600 mr-4 select-none">1</span><span className="text-rust-red">from</span> tinyagent <span className="text-rust-red">import</span> tool, ReactAgent{"\n"}
    <span className="text-gray-600 mr-4 select-none">2</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">3</span><span className="text-rust-red">@tool</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">4</span><span className="text-rust-red">def</span> <span className="text-blue-400">calculate_percentage</span>(value: float, percentage: float) {'->'} float:{"\n"}
    <span className="text-gray-600 mr-4 select-none">5</span>  <span className="text-green-400">"""Calculate what percentage of a value is."""</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">6</span>  <span className="text-rust-red">return</span> value * (percentage / 100){"\n"}
    <span className="text-gray-600 mr-4 select-none">7</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">8</span><span className="text-rust-red">@tool</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">9</span><span className="text-rust-red">def</span> <span className="text-blue-400">subtract</span>(a: float, b: float) {'->'} float:{"\n"}
    <span className="text-gray-600 mr-4 select-none">10</span>  <span className="text-green-400">"""Subtract b from a."""</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">11</span>  <span className="text-rust-red">return</span> a - b{"\n"}
    <span className="text-gray-600 mr-4 select-none">12</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">13</span>agent = ReactAgent(tools=[calculate_percentage, subtract]){"\n"}
    <span className="text-gray-600 mr-4 select-none">14</span>result = agent.run(<span className="text-green-400">"If I have 15 apples and give away 40%, how many are left?"</span>){"\n"}
    <span className="text-gray-600 mr-4 select-none">15</span><span className="text-blue-400">print</span>(result) <span className="text-gray-500"># → "You have 9 apples left."</span>
  </>
);

const webSearchCodeRaw = `from tinyagent import ReactAgent
from tinyagent.tools import web_search

# Simple web search with formatted results
agent = ReactAgent(tools=[web_search])
result = agent.run("what are the latest Python web frameworks?")

# Works great for research and comparisons
agent = ReactAgent(tools=[web_search])
result = agent.run("Compare FastAPI vs Django performance")`;

const webSearchCodeStyled = (
  <>
    <span className="text-gray-600 mr-4 select-none">1</span><span className="text-rust-red">from</span> tinyagent <span className="text-rust-red">import</span> ReactAgent{"\n"}
    <span className="text-gray-600 mr-4 select-none">2</span><span className="text-rust-red">from</span> tinyagent.tools <span className="text-rust-red">import</span> web_search{"\n"}
    <span className="text-gray-600 mr-4 select-none">3</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">4</span><span className="text-gray-500"># Simple web search with formatted results</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">5</span>agent = ReactAgent(tools=[web_search]){"\n"}
    <span className="text-gray-600 mr-4 select-none">6</span>result = agent.run(<span className="text-green-400">"what are the latest Python web frameworks?"</span>){"\n"}
    <span className="text-gray-600 mr-4 select-none">7</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">8</span><span className="text-gray-500"># Works great for research and comparisons</span>{"\n"}
    <span className="text-gray-600 mr-4 select-none">9</span>agent = ReactAgent(tools=[web_search]){"\n"}
    <span className="text-gray-600 mr-4 select-none">10</span>result = agent.run(<span className="text-green-400">"Compare FastAPI vs Django performance"</span>)
  </>
);

const braveApiCodeRaw = 'export BRAVE_SEARCH_API_KEY=your_brave_api_key';

const braveApiCodeStyled = (
  <>
    export BRAVE_SEARCH_API_KEY=<span className="text-green-400">your_brave_api_key</span>
  </>
);

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-12 md:py-20 bg-graphite-gray relative px-4 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <PixelatedText>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center font-mono">
            More <span className="text-rust-red">Examples</span>
          </h2>
        </PixelatedText>
        <PixelatedText delay={0.1}>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-12 font-mono">
            See what TinyAgent can do
          </p>
        </PixelatedText>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">Multi-step Reasoning</h3>
          <CodeBlock rawText={multiStepCodeRaw}>
            {multiStepCodeStyled}
          </CodeBlock>

          <CardSpotlight>
            <div className="mt-8 bg-black/40 backdrop-blur-xl border border-rust-red/20 rounded-lg p-6 hover:border-rust-red/50 transition-all shadow-lg">
              <h4 className="text-lg md:text-xl font-bold mb-4 font-mono text-electric-white">Behind the scenes:</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-400 text-base font-mono marker:text-rust-red">
                <li>Agent calculates 40% of 15 → 6</li>
                <li>Subtracts 6 from 15 → 9</li>
                <li>Returns a natural language answer</li>
              </ol>
            </div>
          </CardSpotlight>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">Web Search Tool</h3>
          <p className="text-gray-400 mb-4 text-base font-mono">
            Built-in web search capabilities with Brave Search API:
          </p>
          <CodeBlock rawText={webSearchCodeRaw}>
             {webSearchCodeStyled}
          </CodeBlock>
          <div className="mt-8">
            <p className="text-gray-400 mb-4 font-mono">Set your Brave API key:</p>
            <CodeBlock rawText={braveApiCodeRaw}>
              {braveApiCodeStyled}
            </CodeBlock>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExamplesSection;