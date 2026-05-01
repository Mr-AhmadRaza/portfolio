"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { MapPin } from "./Icons";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#00d4ff]/20 blur-3xl" />

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full border-4 border-[#00d4ff]/30 overflow-hidden glow-border">
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src="/images/17.jpg"
                      alt="portfolio"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                Frontend Developer
              </h3>

              <p className="text-gray-400 leading-relaxed text-justify">
                A passionate Frontend Developer with expertise in building
                modern, responsive, and user-friendly web applications.I love creating  beautiful interfaces that  provide exceptional
                user experiences.

              </p>

              <p className="text-gray-400 leading-relaxed">

              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <MapPin size={20} className="text-[#00d4ff]" />
                  <span className="text-gray-300">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <Calendar size={20} className="text-[#00d4ff]" />
                  <span className="text-gray-300">Available for work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}