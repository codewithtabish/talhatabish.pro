import type { Metadata } from "next";

const baseUrl = "https://www.talhatabish.pro";

const blogsMetadata: Record<string, Metadata> = {
  en: {
    title: "Blog | CodeWithTabish – Insights, Tutorials & Updates",
    description:
      "Read the latest articles, tutorials, and updates from CodeWithTabish. Explore insights on digital products, AI solutions, and software development.",
    openGraph: {
      title: "Blog | CodeWithTabish – Insights, Tutorials & Updates",
      description:
        "Read the latest articles, tutorials, and updates from CodeWithTabish. Explore insights on digital products, AI solutions, and software development.",
      url: `${baseUrl}/en/blogs`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Blog – CodeWithTabish",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | CodeWithTabish – Insights, Tutorials & Updates",
      description:
        "Read the latest articles, tutorials, and updates from CodeWithTabish. Explore insights on digital products, AI solutions, and software development.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  ur: {
    title: "بلاگ | کوڈ ود تابش – مضامین، ٹیوٹوریلز اور اپڈیٹس",
    description:
      "کوڈ ود تابش کے تازہ ترین مضامین، ٹیوٹوریلز اور اپڈیٹس پڑھیں۔ ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر ڈویلپمنٹ پر بصیرت حاصل کریں۔",
    openGraph: {
      title: "بلاگ | کوڈ ود تابش – مضامین، ٹیوٹوریلز اور اپڈیٹس",
      description:
        "کوڈ ود تابش کے تازہ ترین مضامین، ٹیوٹوریلز اور اپڈیٹس پڑھیں۔ ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر ڈویلپمنٹ پر بصیرت حاصل کریں۔",
      url: `${baseUrl}/ur/blogs`,
      siteName: "کوڈ ود تابش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "بلاگ – کوڈ ود تابش",
        },
      ],
      locale: "ur_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: "بلاگ | کوڈ ود تابش – مضامین، ٹیوٹوریلز اور اپڈیٹس",
      description:
        "کوڈ ود تابش کے تازہ ترین مضامین، ٹیوٹوریلز اور اپڈیٹس پڑھیں۔ ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر ڈویلپمنٹ پر بصیرت حاصل کریں۔",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  ar: {
    title: "المدونة | كود ويذ تابيش – مقالات ودروس وتحديثات",
    description:
      "اقرأ أحدث المقالات والدروس والتحديثات من كود ويذ تابيش. اكتشف رؤى حول المنتجات الرقمية وحلول الذكاء الاصطناعي وتطوير البرمجيات.",
    openGraph: {
      title: "المدونة | كود ويذ تابيش – مقالات ودروس وتحديثات",
      description:
        "اقرأ أحدث المقالات والدروس والتحديثات من كود ويذ تابيش. اكتشف رؤى حول المنتجات الرقمية وحلول الذكاء الاصطناعي وتطوير البرمجيات.",
      url: `${baseUrl}/ar/blogs`,
      siteName: "كود ويذ تابيش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "المدونة – كود ويذ تابيش",
        },
      ],
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: "المدونة | كود ويذ تابيش – مقالات ودروس وتحديثات",
      description:
        "اقرأ أحدث المقالات والدروس والتحديثات من كود ويذ تابيش. اكتشف رؤى حول المنتجات الرقمية وحلول الذكاء الاصطناعي وتطوير البرمجيات.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  zh: {
    title: "博客 | CodeWithTabish – 见解、教程与更新",
    description:
      "阅读CodeWithTabish的最新文章、教程和更新。探索数字产品、AI解决方案和软件开发的见解。",
    openGraph: {
      title: "博客 | CodeWithTabish – 见解、教程与更新",
      description:
        "阅读CodeWithTabish的最新文章、教程和更新。探索数字产品、AI解决方案和软件开发的见解。",
      url: `${baseUrl}/zh/blogs`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "博客 – CodeWithTabish",
        },
      ],
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: "博客 | CodeWithTabish – 见解、教程与更新",
      description:
        "阅读CodeWithTabish的最新文章、教程和更新。探索数字产品、AI解决方案和软件开发的见解。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  fr: {
    title: "Blog | CodeWithTabish – Conseils, tutoriels et actualités",
    description:
      "Lisez les derniers articles, tutoriels et actualités de CodeWithTabish. Découvrez des conseils sur les produits numériques, les solutions IA et le développement logiciel.",
    openGraph: {
      title: "Blog | CodeWithTabish – Conseils, tutoriels et actualités",
      description:
        "Lisez les derniers articles, tutoriels et actualités de CodeWithTabish. Découvrez des conseils sur les produits numériques, les solutions IA et le développement logiciel.",
      url: `${baseUrl}/fr/blogs`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Blog – CodeWithTabish",
        },
      ],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | CodeWithTabish – Conseils, tutoriels et actualités",
      description:
        "Lisez les derniers articles, tutoriels et actualités de CodeWithTabish. Découvrez des conseils sur les produits numériques, les solutions IA et le développement logiciel.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  de: {
    title: "Blog | CodeWithTabish – Einblicke, Tutorials & Updates",
    description:
      "Lesen Sie die neuesten Artikel, Tutorials und Updates von CodeWithTabish. Entdecken Sie Einblicke in digitale Produkte, KI-Lösungen und Softwareentwicklung.",
    openGraph: {
      title: "Blog | CodeWithTabish – Einblicke, Tutorials & Updates",
      description:
        "Lesen Sie die neuesten Artikel, Tutorials und Updates von CodeWithTabish. Entdecken Sie Einblicke in digitale Produkte, KI-Lösungen und Softwareentwicklung.",
      url: `${baseUrl}/de/blogs`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Blog – CodeWithTabish",
        },
      ],
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | CodeWithTabish – Einblicke, Tutorials & Updates",
      description:
        "Lesen Sie die neuesten Artikel, Tutorials und Updates von CodeWithTabish. Entdecken Sie Einblicke in digitale Produkte, KI-Lösungen und Softwareentwicklung.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  ja: {
    title: "ブログ | CodeWithTabish – インサイト、チュートリアル、最新情報",
    description:
      "CodeWithTabishの最新記事、チュートリアル、アップデートをお読みください。デジタル製品、AIソリューション、ソフトウェア開発に関するインサイトを探る。",
    openGraph: {
      title: "ブログ | CodeWithTabish – インサイト、チュートリアル、最新情報",
      description:
        "CodeWithTabishの最新記事、チュートリアル、アップデートをお読みください。デジタル製品、AIソリューション、ソフトウェア開発に関するインサイトを探る。",
      url: `${baseUrl}/ja/blogs`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "ブログ – CodeWithTabish",
        },
      ],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: "ブログ | CodeWithTabish – インサイト、チュートリアル、最新情報",
      description:
        "CodeWithTabishの最新記事、チュートリアル、アップデートをお読みください。デジタル製品、AIソリューション、ソフトウェア開発に関するインサイトを探る。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
};

export function getBlogsMetadata(locale: string): Metadata {
  return blogsMetadata[locale] || blogsMetadata["en"];
}
