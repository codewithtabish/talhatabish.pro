"use client";
import { usePathname } from "next/navigation";
import { siteContent } from "../siteContent"; // Adjust if your siteContent.js is elsewhere

export default function EducationSection() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const education = siteContent[locale]?.education || siteContent["en"].education;

  return (
    <section style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", background: "#f3f4f6", borderRadius: "1rem" }}>
      <h2>{education.heading}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {education.items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <strong>{item.degree}</strong><br />
            {item.institution}<br />
            <span>{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
