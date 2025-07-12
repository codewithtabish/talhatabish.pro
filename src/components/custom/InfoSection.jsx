"use client";
import { usePathname } from "next/navigation";
import { siteContent } from "../siteContent"; // Adjust if your siteContent.js is elsewhere

export default function InfoSection() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";
  const info = siteContent[locale]?.info || siteContent["en"].info;

  return (
    <section style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", background: "#f9fafb", borderRadius: "1rem" }}>
      <h2>{info.heading}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {info.items.map((item, idx) => (
          <li key={idx}><strong>{item.label}:</strong> {item.value}</li>
        ))}
      </ul>
    </section>
  );
}
