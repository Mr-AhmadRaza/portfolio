"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "./Icons";
import { FaHome, FaBook, FaNewspaper, FaBookOpen } from "react-icons/fa";

const projects = [
  {
    icon: <FaHome className="text-[#eca553]" />,
    title: "Dream Homes",
    description: "A property listing platform with SSR for SEO optimization. Features include property search, filtering, and detailed property pages.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design"],
    github: "https://github.com/Mr-AhmadRaza",
  },
  {
    icon: <FaBook className="text-[#15af45]" />,
    title: "INotebook",
    description: "Full-stack MERN note-taking app with CRUD operations. Users can create, read, update, and delete their personal notes.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1920&h=1080&fit=crop",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Mr-AhmadRaza",
  },
  {
    icon: <FaNewspaper className="text-[#cbf60d]" />,
    title: "Newsapp",
    description: "Real-time news app with multi-page React Router navigation. Fetches and displays latest news from NewsAPI.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop",
    tech: ["React.js", "JavaScript", "NewsAPI", "React Router"],
    github: "https://github.com/Mr-AhmadRaza",
  },
  {
    icon: <FaBookOpen className="text-[#ed3d55]" />,
    title: "Books Corner",
    description: "Book management app using localStorage for data persistence. Final year project with full CRUD functionality.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop",
    tech: ["React.js", "JavaScript", "Bootstrap", "localStorage"],
    github: "https://github.com/Mr-AhmadRaza",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> Projects
          </h2>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-[#00d4ff]/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Project Image */}
                  <div className="w-full h-64 mb-4 rounded-lg overflow-hidden bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Number */}
                  <span className="text-6xl font-bold text-gray-800/50 absolute -top-4 -left-2">
                    0{index + 1}
                  </span>

                  {/* Project Title with Icon */}
                  <h3 className="text-2xl font-semibold text-white mt-4 mb-3 flex items-center gap-2">
                    {project.icon}
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[#00d4ff]/10 text-[#00d4ff] rounded-full border border-[#00d4ff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}