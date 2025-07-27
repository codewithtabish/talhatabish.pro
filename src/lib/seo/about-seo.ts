import type { Metadata } from "next";

const shared = {
  images: [
    {
      url: "https://www.talhatabish.pro/og-cover.png",
      width: 1200,
      height: 630,
      alt: "About CodeWithTabish",
    },
  ],
  siteName: "CodeWithTabish",
  urlBase: "https://www.talhatabish.pro",
  twitter: {
    card: "summary_large_image",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  } as const, // <-- This helps TypeScript infer the correct type
};

const aboutMetadata: Record<string, Metadata> = {
  en: {
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
      url: `${shared.urlBase}/en/about`,
      siteName: shared.siteName,
      type: "website", // <-- Use the literal string
      images: shared.images,
      locale: "en_US",
    },
    twitter: {
      ...shared.twitter,
      title: "About Us | CodeWithTabish – Digital Products & AI Solutions",
      description:
        "Discover the team and vision behind CodeWithTabish. We build innovative digital products and AI solutions.",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  ur: {
    title: "ہمارے بارے میں | کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
    description:
      "کوڈ ود تابش کی کہانی، مشن اور ٹیم کے بارے میں جانیں۔ ہم مستقبل کے لیے جدید ڈیجیٹل مصنوعات اور AI حل بنانے کے لیے پرجوش ہیں۔",
    keywords: [
      "کوڈ ود تابش",
      "ٹیم",
      "مشن",
      "ویلیوز",
      "ڈیجیٹل مصنوعات",
      "AI حل",
      "طلحہ تابش",
      "سدیس اظلان",
      "عائشہ سلیم",
      "ہمارے بارے میں",
      "ٹیک اسٹارٹ اپ",
      "انوویشن",
      "سافٹ ویئر کمپنی"
    ],
    openGraph: {
      title: "ہمارے بارے میں | کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
      description:
        "کوڈ ود تابش کی ٹیم سے ملیں اور ہماری مشن اور اقدار کے بارے میں جانیں۔",
      url: `${shared.urlBase}/ur/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "ur_PK",
    },
    twitter: {
      ...shared.twitter,
      title: "ہمارے بارے میں | کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
      description:
        "کوڈ ود تابش کی ٹیم اور وژن کے بارے میں جانیں۔ ہم جدید ڈیجیٹل مصنوعات اور AI حل بناتے ہیں۔",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  ar: {
    title: "من نحن | كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
    description:
      "اكتشف قصة ومهمة وفريق كود ويذ تابيش. نحن شغوفون ببناء منتجات رقمية مبتكرة وحلول ذكاء اصطناعي للمستقبل.",
    keywords: [
      "كود ويذ تابيش",
      "الفريق",
      "المهمة",
      "القيم",
      "منتجات رقمية",
      "حلول الذكاء الاصطناعي",
      "طلحة تابيش",
      "سودايس أزلان",
      "عائشة سليم",
      "من نحن",
      "شركة تقنية",
      "ابتكار",
      "شركة برمجيات"
    ],
    openGraph: {
      title: "من نحن | كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
      description:
        "تعرف على فريق كود ويذ تابيش ورحلتنا وقيمنا.",
      url: `${shared.urlBase}/ar/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "ar_SA",
    },
    twitter: {
      ...shared.twitter,
      title: "من نحن | كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
      description:
        "تعرف على فريق كود ويذ تابيش ورؤيتنا. نحن نبني منتجات رقمية مبتكرة وحلول ذكاء اصطناعي.",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  zh: {
    title: "关于我们 | CodeWithTabish – 数字产品与AI解决方案",
    description:
      "了解CodeWithTabish的故事、使命和团队。我们致力于为未来打造创新的数字产品和AI解决方案。",
    keywords: [
      "CodeWithTabish",
      "团队",
      "使命",
      "价值观",
      "数字产品",
      "AI解决方案",
      "Talha Tabish",
      "Sudais Azlan",
      "Ayesha Saleem",
      "关于我们",
      "科技创业公司",
      "创新",
      "软件公司"
    ],
    openGraph: {
      title: "关于我们 | CodeWithTabish – 数字产品与AI解决方案",
      description:
        "认识CodeWithTabish团队，了解我们的使命、历程和价值观。",
      url: `${shared.urlBase}/zh/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "zh_CN",
    },
    twitter: {
      ...shared.twitter,
      title: "关于我们 | CodeWithTabish – 数字产品与AI解决方案",
      description:
        "了解CodeWithTabish团队和愿景。我们打造创新的数字产品和AI解决方案。",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  fr: {
    title: "À propos de nous | CodeWithTabish – Produits numériques & solutions IA",
    description:
      "Découvrez l'histoire, la mission et l'équipe derrière CodeWithTabish. Nous sommes passionnés par la création de produits numériques innovants et de solutions d'IA pour l'avenir.",
    keywords: [
      "À propos de CodeWithTabish",
      "Équipe CodeWithTabish",
      "Mission CodeWithTabish",
      "Valeurs CodeWithTabish",
      "Produits numériques",
      "Solutions IA",
      "Talha Tabish",
      "Sudais Azlan",
      "Ayesha Saleem",
      "À propos de nous",
      "Startup technologique",
      "Innovation",
      "Entreprise de logiciels"
    ],
    openGraph: {
      title: "À propos de nous | CodeWithTabish – Produits numériques & solutions IA",
      description:
        "Rencontrez l'équipe CodeWithTabish et découvrez notre mission, notre parcours et nos valeurs.",
      url: `${shared.urlBase}/fr/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "fr_FR",
    },
    twitter: {
      ...shared.twitter,
      title: "À propos de nous | CodeWithTabish – Produits numériques & solutions IA",
      description:
        "Découvrez l'équipe et la vision de CodeWithTabish. Nous créons des produits numériques innovants et des solutions d'IA.",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  de: {
    title: "Über uns | CodeWithTabish – Digitale Produkte & KI-Lösungen",
    description:
      "Entdecken Sie die Geschichte, Mission und das Team hinter CodeWithTabish. Wir sind leidenschaftlich daran interessiert, innovative digitale Produkte und KI-Lösungen für die Zukunft zu entwickeln.",
    keywords: [
      "Über CodeWithTabish",
      "CodeWithTabish Team",
      "CodeWithTabish Mission",
      "CodeWithTabish Werte",
      "Digitale Produkte",
      "KI-Lösungen",
      "Talha Tabish",
      "Sudais Azlan",
      "Ayesha Saleem",
      "Über uns",
      "Tech-Startup",
      "Innovation",
      "Softwareunternehmen"
    ],
    openGraph: {
      title: "Über uns | CodeWithTabish – Digitale Produkte & KI-Lösungen",
      description:
        "Lernen Sie das CodeWithTabish-Team kennen und erfahren Sie mehr über unsere Mission, unseren Weg und unsere Werte.",
      url: `${shared.urlBase}/de/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "de_DE",
    },
    twitter: {
      ...shared.twitter,
      title: "Über uns | CodeWithTabish – Digitale Produkte & KI-Lösungen",
      description:
        "Entdecken Sie das Team und die Vision von CodeWithTabish. Wir entwickeln innovative digitale Produkte und KI-Lösungen.",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
  ja: {
    title: "私たちについて | CodeWithTabish – デジタル製品とAIソリューション",
    description:
      "CodeWithTabishのストーリー、ミッション、チームをご紹介します。私たちは未来のために革新的なデジタル製品とAIソリューションを作ることに情熱を持っています。",
    keywords: [
      "CodeWithTabishについて",
      "CodeWithTabishチーム",
      "CodeWithTabishミッション",
      "CodeWithTabishバリュー",
      "デジタル製品",
      "AIソリューション",
      "Talha Tabish",
      "Sudais Azlan",
      "Ayesha Saleem",
      "私たちについて",
      "テックスタートアップ",
      "イノベーション",
      "ソフトウェア会社"
    ],
    openGraph: {
      title: "私たちについて | CodeWithTabish – デジタル製品とAIソリューション",
      description:
        "CodeWithTabishチームを知り、私たちのミッション、歩み、価値観をご覧ください。",
      url: `${shared.urlBase}/ja/about`,
      siteName: shared.siteName,
      type: "website",
      images: shared.images,
      locale: "ja_JP",
    },
    twitter: {
      ...shared.twitter,
      title: "私たちについて | CodeWithTabish – デジタル製品とAIソリューション",
      description:
        "CodeWithTabishのチームとビジョンをご紹介します。私たちは革新的なデジタル製品とAIソリューションを開発しています。",
    },
    authors: shared.authors,
    creator: shared.creator,
    publisher: shared.publisher,
    robots: shared.robots,
  },
};

export function getAboutMetadata(locale: string): Metadata {
  return aboutMetadata[locale] || aboutMetadata["en"];
}
