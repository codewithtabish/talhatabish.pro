import type { Metadata } from "next";

const baseUrl = "https://www.talhatabish.pro";

const projectsMetadata: Record<string, Metadata> = {
  en: {
    title: "Projects | CodeWithTabish – Portfolio & Case Studies",
    description:
      "Explore our portfolio of digital products, AI solutions, and software projects at CodeWithTabish. See how we deliver innovation.",
    openGraph: {
      title: "Projects | CodeWithTabish – Portfolio & Case Studies",
      description:
        "Explore our portfolio of digital products, AI solutions, and software projects at CodeWithTabish. See how we deliver innovation.",
      url: `${baseUrl}/en/projects`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Projects – CodeWithTabish",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | CodeWithTabish – Portfolio & Case Studies",
      description:
        "Explore our portfolio of digital products, AI solutions, and software projects at CodeWithTabish. See how we deliver innovation.",
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
    title: "پراجیکٹس | کوڈ ود تابش – پورٹ فولیو اور کیس اسٹڈیز",
    description:
      "کوڈ ود تابش کے ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر پراجیکٹس کا پورٹ فولیو دیکھیں۔ دیکھیں ہم کیسے جدت لاتے ہیں۔",
    openGraph: {
      title: "پراجیکٹس | کوڈ ود تابش – پورٹ فولیو اور کیس اسٹڈیز",
      description:
        "کوڈ ود تابش کے ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر پراجیکٹس کا پورٹ فولیو دیکھیں۔ دیکھیں ہم کیسے جدت لاتے ہیں۔",
      url: `${baseUrl}/ur/projects`,
      siteName: "کوڈ ود تابش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "پراجیکٹس – کوڈ ود تابش",
        },
      ],
      locale: "ur_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: "پراجیکٹس | کوڈ ود تابش – پورٹ فولیو اور کیس اسٹڈیز",
      description:
        "کوڈ ود تابش کے ڈیجیٹل مصنوعات، AI حل اور سافٹ ویئر پراجیکٹس کا پورٹ فولیو دیکھیں۔ دیکھیں ہم کیسے جدت لاتے ہیں۔",
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
    title: "المشاريع | كود ويذ تابيش – الأعمال والدراسات",
    description:
      "استكشف مجموعة مشاريع كود ويذ تابيش من المنتجات الرقمية وحلول الذكاء الاصطناعي والبرمجيات. شاهد كيف نقدم الابتكار.",
    openGraph: {
      title: "المشاريع | كود ويذ تابيش – الأعمال والدراسات",
      description:
        "استكشف مجموعة مشاريع كود ويذ تابيش من المنتجات الرقمية وحلول الذكاء الاصطناعي والبرمجيات. شاهد كيف نقدم الابتكار.",
      url: `${baseUrl}/ar/projects`,
      siteName: "كود ويذ تابيش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "المشاريع – كود ويذ تابيش",
        },
      ],
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: "المشاريع | كود ويذ تابيش – الأعمال والدراسات",
      description:
        "استكشف مجموعة مشاريع كود ويذ تابيش من المنتجات الرقمية وحلول الذكاء الاصطناعي والبرمجيات. شاهد كيف نقدم الابتكار.",
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
    title: "项目 | CodeWithTabish – 作品集与案例研究",
    description:
      "探索CodeWithTabish的数字产品、AI解决方案和软件项目作品集。了解我们如何实现创新。",
    openGraph: {
      title: "项目 | CodeWithTabish – 作品集与案例研究",
      description:
        "探索CodeWithTabish的数字产品、AI解决方案和软件项目作品集。了解我们如何实现创新。",
      url: `${baseUrl}/zh/projects`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "项目 – CodeWithTabish",
        },
      ],
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: "项目 | CodeWithTabish – 作品集与案例研究",
      description:
        "探索CodeWithTabish的数字产品、AI解决方案和软件项目作品集。了解我们如何实现创新。",
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
    title: "Projets | CodeWithTabish – Portfolio & études de cas",
    description:
      "Découvrez notre portfolio de produits numériques, solutions IA et projets logiciels chez CodeWithTabish. Découvrez comment nous innovons.",
    openGraph: {
      title: "Projets | CodeWithTabish – Portfolio & études de cas",
      description:
        "Découvrez notre portfolio de produits numériques, solutions IA et projets logiciels chez CodeWithTabish. Découvrez comment nous innovons.",
      url: `${baseUrl}/fr/projects`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Projets – CodeWithTabish",
        },
      ],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projets | CodeWithTabish – Portfolio & études de cas",
      description:
        "Découvrez notre portfolio de produits numériques, solutions IA et projets logiciels chez CodeWithTabish. Découvrez comment nous innovons.",
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
    title: "Projekte | CodeWithTabish – Portfolio & Fallstudien",
    description:
      "Entdecken Sie unser Portfolio an digitalen Produkten, KI-Lösungen und Softwareprojekten bei CodeWithTabish. Sehen Sie, wie wir Innovationen liefern.",
    openGraph: {
      title: "Projekte | CodeWithTabish – Portfolio & Fallstudien",
      description:
        "Entdecken Sie unser Portfolio an digitalen Produkten, KI-Lösungen und Softwareprojekten bei CodeWithTabish. Sehen Sie, wie wir Innovationen liefern.",
      url: `${baseUrl}/de/projects`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Projekte – CodeWithTabish",
        },
      ],
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projekte | CodeWithTabish – Portfolio & Fallstudien",
      description:
        "Entdecken Sie unser Portfolio an digitalen Produkten, KI-Lösungen und Softwareprojekten bei CodeWithTabish. Sehen Sie, wie wir Innovationen liefern.",
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
    title: "プロジェクト | CodeWithTabish – ポートフォリオ & ケーススタディ",
    description:
      "CodeWithTabishのデジタル製品、AIソリューション、ソフトウェアプロジェクトのポートフォリオをご覧ください。私たちがどのようにイノベーションを実現しているかをご覧ください。",
    openGraph: {
      title: "プロジェクト | CodeWithTabish – ポートフォリオ & ケーススタディ",
      description:
        "CodeWithTabishのデジタル製品、AIソリューション、ソフトウェアプロジェクトのポートフォリオをご覧ください。私たちがどのようにイノベーションを実現しているかをご覧ください。",
      url: `${baseUrl}/ja/projects`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "プロジェクト – CodeWithTabish",
        },
      ],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: "プロジェクト | CodeWithTabish – ポートフォリオ & ケーススタディ",
      description:
        "CodeWithTabishのデジタル製品、AIソリューション、ソフトウェアプロジェクトのポートフォリオをご覧ください。私たちがどのようにイノベーションを実現しているかをご覧ください。",
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

export function getProjectsMetadata(locale: string): Metadata {
  return projectsMetadata[locale] || projectsMetadata["en"];
}
