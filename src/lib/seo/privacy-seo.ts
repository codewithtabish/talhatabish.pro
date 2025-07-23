import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CodeWithTabish",
  description:
    "Read the privacy policy for CodeWithTabish. Learn how we collect, use, and protect your data when you use our digital products and AI solutions.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | CodeWithTabish",
    description:
      "Read the privacy policy for CodeWithTabish. Learn how we collect, use, and protect your data.",
    url: "https://www.talhatabish.pro/en/privacy",
    siteName: "CodeWithTabish",
    type: "article",
    images: [
      {
        url: "https://www.talhatabish.pro/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy – CodeWithTabish",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CodeWithTabish",
    description:
      "Read the privacy policy for CodeWithTabish. Learn how we collect, use, and protect your data.",
    images: ["https://www.talhatabish.pro/og-cover.png"],
    site: "@codewithtabish",
    creator: "@codewithtabish",
  },
};
