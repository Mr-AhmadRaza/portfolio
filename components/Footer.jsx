"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Mr-AhmadRaza",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/ahmad-raza2",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:iahmad6raza@gmail.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            Designed & Built by Ahmad Raza © {currentYear}
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="p-2 rounded-full text-gray-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
                title={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}