// app/en/about/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CodeWithTabish – Digital Products & AI Solutions",
  description:
    "Discover the story, mission, and team behind CodeWithTabish. We are passionate about building innovative digital products and AI solutions for the future.",
  keywords: [
    "About CodeWithTabish",
    "CodeWithTabish Team",
    "CodeWithTabish Mission",
    "CodeWithTabish Values",
    "Digital Products",
    "AI Solutions",
    "Talha Tabish",
    "Sudais Azlan",
    "Ayesha Saleem",
    "About Us",
    "Tech Startup",
    "Innovation",
    "Software Company"
  ],
  openGraph: {
    title: "About Us | CodeWithTabish – Digital Products & AI Solutions",
    description:
      "Meet the CodeWithTabish team and learn about our mission to deliver world-class digital products and AI solutions. Explore our journey and values.",
    url: "https://www.talhatabish.pro/en/about",
    siteName: "CodeWithTabish",
    type: "website",
    images: [
      {
        url: "https://www.talhatabish.pro/og-cover.png",
        width: 1200,
        height: 630,
        alt: "About CodeWithTabish",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | CodeWithTabish – Digital Products & AI Solutions",
    description:
      "Discover the team and vision behind CodeWithTabish. We build innovative digital products and AI solutions.",
    images: ["https://www.talhatabish.pro/og-cover.png"],
    site: "@codewithtabish",
    creator: "@codewithtabish",
  },
  authors: [
    { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
    { name: "Sudais Azlan", url: "https://www.talhatabish.pro/en" },
    { name: "Ayesha Saleem", url: "https://www.talhatabish.pro/en" },
  ],
  creator: "Talha Tabish",
  publisher: "CodeWithTabish",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
