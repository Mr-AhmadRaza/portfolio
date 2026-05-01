"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { Github, Linkedin, MapPin } from "./Icons";
import { useState } from "react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-12">
            <span className="text-[#00d4ff]">#</span> Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or 
                opportunities to be part of your visions. Feel free to reach out 
                if you&apos;d like to collaborate or just say hi!
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-[#00d4ff]" />
                  <a href="mailto:iahmad6raza@gmail.com" className="hover:text-[#00d4ff] transition-colors">
                    iahmad6raza@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-[#00d4ff]" />
                  <a href="tel:03084354552" className="hover:text-[#00d4ff] transition-colors">
                    03084354552
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-[#00d4ff]" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-gray-400 mb-4">Find me on:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="p-3 rounded-full bg-gray-800/50 hover:bg-[#00d4ff]/20 transition-colors"
                      title={social.name}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-[#00d4ff] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#00d4ff]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}