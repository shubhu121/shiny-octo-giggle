"use client";

import { BookOpen, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="bg-jet-black py-12 md:py-20 text-gray-400">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-mono font-bold text-electric-white text-lg mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", icon: BookOpen, label: "Documentation" },
                { href: "https://github.com/a-dance-of-light-and-shadow/tinyagent", icon: BookOpen, label: "GitHub" },
                { href: "https://github.com/a-dance-of-light-and-shadow/tinyagent/issues", icon: BookOpen, label: "Issues" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 hover:text-rust-red transition-colors group"
                  >
                    <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Community Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-mono font-bold text-electric-white text-lg mb-4">
              Community
            </h4>
            <ul className="space-y-3 text-sm">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <a
                  href="https://twitter.com/tunahorse21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-rust-red transition-colors group"
                >
                  <Twitter size={16} className="group-hover:scale-110 transition-transform" />
                  <span>@tunahorse21</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <a
                  href="https://alchemiststudios.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust-red transition-colors"
                >
                  alchemiststudios.ai
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* License Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-mono font-bold text-electric-white text-lg mb-4">
              License
            </h4>
            <motion.div
              className="text-sm space-y-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>Business Source License 1.1</p>
              <p>Free for individuals and small businesses (&lt; $1M revenue)</p>
              <p>Enterprise license required for larger companies</p>
            </motion.div>
            <motion.a
              href="mailto:info@alchemiststudios.ai"
              className="flex items-center gap-2 text-sm hover:text-rust-red transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span>Contact: info@alchemiststudios.ai</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-rust-red/30 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm mb-2">
            Made by{' '}
            <a
              href="https://twitter.com/tunahorse21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-red hover:underline"
            >
              @tunahorse21
            </a>{' '}
            |{' '}
            <a
              href="https://alchemiststudios.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust-red hover:underline"
            >
              alchemiststudios.ai
            </a>
          </p>
          <motion.p
            className="text-xs text-gray-600 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tiny. Local. Lethal.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;