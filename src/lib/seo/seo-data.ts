import type { Metadata } from "next";

const baseUrl = "https://www.talhatabish.pro/en";

export const metadata: Metadata = {
  title: {
    default: "CodeWithTabish – Digital Products & AI Solutions",
    template: "%s | CodeWithTabish",
  },
  description:
    "CodeWithTabish is a passionate team building the future of digital products and AI solutions. We deliver innovative software across mobile, web, AI, and gaming.",
  keywords: [
    // Company
    "CodeWithTabish", "Digital Products", "AI Solutions", "Software Development", "Mobile Apps", "Web Development", "Game Development", "DevOps", "Innovation", "Tech Startup", "Pakistan",

    // Talha Tabish
    "Talha Tabish", "Talha Tabish developer", "Talha Tabish portfolio", "Talha Tabish projects", "Talha Tabish CodeWithTabish", "Talha Tabish AI", "Talha Tabish Android", "Talha Tabish React Native", "Talha Tabish Next.js", "Talha Tabish backend", "Talha Tabish DevOps", "Talha Tabish game developer", "Talha Tabish software engineer", "Talha Tabish founder", "Talha Tabish CEO", "Talha Tabish blog", "Talha Tabish site", "Talha Tabish website", "Talha Tabish contact", "Talha Tabish LinkedIn", "Talha Tabish GitHub",

    // Sudais Azlan
    "Sudais Azlan", "Sudais Azlan developer", "Sudais Azlan portfolio", "Sudais Azlan projects", "Sudais Azlan CodeWithTabish", "Sudais Azlan AI", "Sudais Azlan engineer", "Sudais Azlan machine learning", "Sudais Azlan intelligent systems", "Sudais Azlan software engineer", "Sudais Azlan blog", "Sudais Azlan site", "Sudais Azlan website", "Sudais Azlan contact", "Sudais Azlan LinkedIn", "Sudais Azlan GitHub", "Sudais Azlan AI expert", "Sudais Azlan AI engineer", "Sudais Azlan Pakistan",

    // Ayesha Saleem
    "Ayesha Saleem", "Ayesha Saleem developer", "Ayesha Saleem portfolio", "Ayesha Saleem projects", "Ayesha Saleem CodeWithTabish", "Ayesha Saleem full stack", "Ayesha Saleem React", "Ayesha Saleem Next.js", "Ayesha Saleem Node.js", "Ayesha Saleem web developer", "Ayesha Saleem software engineer", "Ayesha Saleem blog", "Ayesha Saleem site", "Ayesha Saleem website", "Ayesha Saleem contact", "Ayesha Saleem LinkedIn", "Ayesha Saleem GitHub", "Ayesha Saleem Pakistan",

    // Technologies
    "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Cloud", "Microservices", "APIs", "Frontend", "Backend",

    // Values
    "Innovation", "Collaboration", "Excellence", "Impact", "Teamwork", "Tech Community"
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "CodeWithTabish – Digital Products & AI Solutions",
    description:
      "Empowering businesses and individuals with innovative software solutions in mobile, web, AI, and gaming. Meet the team at CodeWithTabish.",
    url: baseUrl,
    siteName: "CodeWithTabish",
    type: "website",
    images: [
      {
        url: "https://www.talhatabish.pro/og-cover.png",
        width: 1200,
        height: 630,
        alt: "CodeWithTabish Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWithTabish – Digital Products & AI Solutions",
    description: "Building the future of technology with passion, innovation, and expertise. Meet the CodeWithTabish team.",
    images: ["https://www.talhatabish.pro/og-cover.png"],
    creator: "@codewithtabish",
    site: "@codewithtabish",
  },
  authors: [
    { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
    { name: "Sudais Azlan", url: baseUrl },
    { name: "Ayesha Saleem", url: baseUrl },
  ],
  creator: "Talha Tabish",
  publisher: "CodeWithTabish",
  category: "technology",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};
