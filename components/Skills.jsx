import {
  Code,
  Layers,
  Palette,
  Wrench,
  Server,
} from "lucide-react";

const Skills = [
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
    title: "Backend & Databases",
    icon: Server,
    skills: ["Node.js", "Express.js","MongoDB","MySQL"],
    color: "from-green-400 to-emerald-500",
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
    color: "from-teal-400 to-cyan-500",
  },
];
export default Skills;