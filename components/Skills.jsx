"use client";

import { motion } from "framer-motion";
import { Code, Layers, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Frontend Frameworks",
    icon: Layers,
    skills: ["React.js", "Next.js"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "UI Libraries",
    icon: Palette,
    skills: ["Tailwind CSS", "Bootstrap", "Ant Design"],
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    color: "from-green-400 to-teal-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> Skills
          </h2>

          {/* Skills Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={item}
                className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${category.color}`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                    <category.icon size={24} className="text-[#00d4ff]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}