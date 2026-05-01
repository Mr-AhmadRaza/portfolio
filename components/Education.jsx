"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Education, Lahore",
  duration: "2021 – 2025",
  // description
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> Education
          </h2>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00d4ff]/10 mb-6">
                <GraduationCap size={32} className="text-[#00d4ff]" />
              </div>

              {/* Degree */}
              <h3 className="text-2xl font-semibold text-white text-center mb-2">
                {education.degree}
              </h3>

              {/* Institution */}
              <p className="text-xl text-[#00d4ff] text-center mb-4">
                {education.institution}
              </p>

              {/* Duration & Location */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-center leading-relaxed">
                {education.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}