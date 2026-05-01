"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Ali Square",
    role: "Frontend Developer",
    duration: "December 2025 – February 2026",
    location: "Islamabad",
    responsibilities: [
      "Designed and developed 8+ production-grade web applications leveraging JavaScript, React.js, Next.js, TypeScript, Redux Toolkit, Context API, and RESTful APIs.",
      "Built scalable and maintainable frontend architectures with a strong focus on performance optimization and code quality.",
      "Developed reusable and maintainable UI component libraries using Ant Design, improving development speed and UI consistency across projects.",
      "Designed responsive, modern, and pixel-perfect user interfaces using Tailwind CSS and Bootstrap.",
      "Collaborated cross-functionally with team members to ensure UI consistency, uphold code quality standards, and continuously improve overall frontend architecture."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> Experience
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#00d4ff]/30" />

            {/* Experience Card */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#00d4ff] transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-5/12">
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300">
                    {/* Company & Role */}
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={18} className="text-[#00d4ff]" />
                      <span className="text-[#00d4ff] font-medium">
                        {exp.role}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {exp.company}
                    </h3>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}