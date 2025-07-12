"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: <Github size={22} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:your@email.com",
    icon: <Mail size={22} />,
    label: "Email",
  },
];

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)",
        padding: "2rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: 700,
          width: "100%",
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(37,99,235,0.08)",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "#2563eb",
            letterSpacing: "-1px",
          }}
        >
          Hi, I'm <span style={{ color: "#1e293b" }}>Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontSize: "1.25rem",
            color: "#334155",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          I’m a <b>Full Stack Developer</b> passionate about building modern web apps, beautiful UIs, and seamless user experiences. Let’s create something amazing together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{
                color: "#2563eb",
                background: "#f1f5f9",
                borderRadius: "50%",
                padding: "0.7rem",
                display: "flex",
                alignItems: "center",
                transition: "background 0.2s, color 0.2s",
                boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#2563eb", e.currentTarget.style.color = "#fff")}
              onMouseOut={e => (e.currentTarget.style.background = "#f1f5f9", e.currentTarget.style.color = "#2563eb")}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.1rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
            transition: "background 0.2s",
          }}
        >
          Contact Me <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
