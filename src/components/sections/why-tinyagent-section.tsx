"use client";

import { Zap, Brain, Plug, Shield } from 'lucide-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";

const features = [
{
  icon: Zap,
  title: "Zero Boilerplate",
  description: "Just decorate functions with @tool. No complex setup, no verbose configurations."
},
{
  icon: Brain,
  title: "Automatic Reasoning",
  description: "Agent figures out which tools to use and in what order. Multi-step reasoning out of the box."
},
{
  icon: Plug,
  title: "Built-in LLM",
  description: "Works out of the box with OpenRouter. Support for GPT-4, Claude, Llama, and more."
},
{
  icon: Shield,
  title: "Type Safe",
  description: "Full type hints and validation. Production-ready error handling and retries included."
}];


const coreValues = [
{
  title: "Simplicity",
  description: "Small codebase, powerful outcomes."
},
{
  title: "Transparency",
  description: "Local-first design—no hidden calls."
},
{
  title: "Precision",
  description: "Every line matters."
},
{
  title: "Autonomy",
  description: "Agents work for you, not the cloud."
}];


const WhyTinyAgentSection = () => {
  return (
    <section id="_r_1_" className="bg-graphite-gray py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}>

            Why <span className="text-rust-red">TinyAgent</span>?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}>

            Lean. Precise. Autonomous.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="flex h-full">

              <CardSpotlight className="flex-1 h-full">
                <div className="bg-graphite-gray border border-rust-red/30 rounded-xl h-full flex flex-col transition-all duration-300 hover:border-rust-red hover:shadow-[0_0_30px_rgba(231,76,60,0.3)] group relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rust-red/0 via-rust-red/5 to-rust-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-6 md:p-8 relative flex flex-col flex-1">
                    {/* Pixelated corner decorations */}
                    <div className="absolute -left-px -top-px h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -right-px -top-px h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -left-px -bottom-px h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -right-px -bottom-px h-2 w-2 bg-rust-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4">

                      <feature.icon className="w-12 h-12 md:w-14 md:h-14 text-rust-red" />
                    </motion.div>
                    <h3 className="font-mono font-bold text-xl md:text-2xl text-electric-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          )}
        </div>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}>

          <CardSpotlight>
            <div className="bg-black/40 backdrop-blur-xl border border-rust-red/20 rounded-xl shadow-lg p-8 md:p-10 hover:border-rust-red/50 transition-all duration-300 relative overflow-hidden group">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rust-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <h3 className="font-mono font-bold text-2xl md:text-3xl text-center mb-8 md:mb-10 relative z-10">
                Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 md:gap-x-16 md:gap-y-10 max-w-4xl mx-auto relative z-10">
                {coreValues.map((value, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="group/value">

                    <h4 className="font-mono font-bold text-rust-red text-lg md:text-xl mb-2 transition-all duration-300 group-hover/value:translate-x-2">
                      → {value.title}
                    </h4>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>);

};

export default WhyTinyAgentSection;