import type { Metadata } from "next";

const baseUrl = "https://www.talhatabish.pro";

const siteMetadata: Record<string, Metadata> = {
  en: {
    title: {
      default: "CodeWithTabish – Digital Products & AI Solutions",
      template: "%s | CodeWithTabish",
    },
    description:
      "CodeWithTabish is a passionate team building the future of digital products and AI solutions. We deliver innovative software across mobile, web, AI, and gaming.",
    keywords: [
      "CodeWithTabish", "Digital Products", "AI Solutions", "Software Development", "Mobile Apps", "Web Development", "Game Development", "DevOps", "Innovation", "Tech Startup", "Pakistan",
      "Talha Tabish", "Sudais Azlan", "Ayesha Saleem",
      "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Cloud", "Microservices", "APIs", "Frontend", "Backend",
      "Innovation", "Collaboration", "Excellence", "Impact", "Teamwork", "Tech Community"
    ],
    metadataBase: new URL(`${baseUrl}/en`),
    alternates: {
      canonical: `${baseUrl}/en`,
    },
    openGraph: {
      title: "CodeWithTabish – Digital Products & AI Solutions",
      description:
        "Empowering businesses and individuals with innovative software solutions in mobile, web, AI, and gaming. Meet the team at CodeWithTabish.",
      url: `${baseUrl}/en`,
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
      { name: "Sudais Azlan", url: `${baseUrl}/en` },
      { name: "Ayesha Saleem", url: `${baseUrl}/en` },
    ],
    creator: "Talha Tabish",
    publisher: "CodeWithTabish",
    category: "technology",
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
  },
  ur: {
    title: {
      default: "کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
      template: "%s | کوڈ ود تابش",
    },
    description: "کوڈ ود تابش ایک پرجوش ٹیم ہے جو ڈیجیٹل مصنوعات اور AI حل کا مستقبل بنا رہی ہے۔ ہم موبائل، ویب، AI اور گیمنگ میں جدید سافٹ ویئر فراہم کرتے ہیں۔",
    keywords: [
      "کوڈ ود تابش", "ڈیجیٹل مصنوعات", "AI حل", "سافٹ ویئر ڈویلپمنٹ", "موبائل ایپس", "ویب ڈویلپمنٹ", "گیم ڈویلپمنٹ", "ڈیواپس", "انوویشن", "ٹیک اسٹارٹ اپ", "پاکستان",
      "طلحہ تابش", "سدیس اظلان", "عائشہ سلیم",
      "جاوا اسکرپٹ", "ٹائپ اسکرپٹ", "پائتھن", "پوسٹگری ایس کیو ایل", "مونگو ڈی بی", "ڈوکر", "CI/CD", "کلاؤڈ", "مائیکرو سروسز", "API", "فرنٹ اینڈ", "بیک اینڈ",
      "انوویشن", "کولیبوریشن", "ایکسلیس", "امپیکٹ", "ٹیم ورک", "ٹیک کمیونٹی"
    ],
    metadataBase: new URL(`${baseUrl}/ur`),
    alternates: {
      canonical: `${baseUrl}/ur`,
    },
    openGraph: {
      title: "کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
      description: "کاروبار اور افراد کے لیے جدید سافٹ ویئر حل۔ ہماری ٹیم سے ملیں۔",
      url: `${baseUrl}/ur`,
      siteName: "کوڈ ود تابش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "کوڈ ود تابش لوگو",
        },
      ],
      locale: "ur_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: "کوڈ ود تابش – ڈیجیٹل مصنوعات اور AI حل",
      description: "ٹیکنالوجی کا مستقبل، جذبے اور جدت کے ساتھ۔ ہماری ٹیم سے ملیں۔",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "طلحہ تابش", url: "https://www.talhatabish.pro" },
      { name: "سدیس اظلان", url: `${baseUrl}/ur` },
      { name: "عائشہ سلیم", url: `${baseUrl}/ur` },
    ],
    creator: "طلحہ تابش",
    publisher: "کوڈ ود تابش",
    category: "ٹیکنالوجی",
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
  },
  ar: {
    title: {
      default: "كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
      template: "%s | كود ويذ تابيش",
    },
    description: "كود ويذ تابيش فريق شغوف يبني مستقبل المنتجات الرقمية وحلول الذكاء الاصطناعي. نقدم برامج مبتكرة عبر الجوال والويب والذكاء الاصطناعي والألعاب.",
    keywords: [
      "كود ويذ تابيش", "منتجات رقمية", "حلول الذكاء الاصطناعي", "تطوير البرمجيات", "تطبيقات الجوال", "تطوير الويب", "تطوير الألعاب", "ديف أوبس", "ابتكار", "شركة ناشئة", "باكستان",
      "طلحة تابيش", "سودايس أزلان", "عائشة سليم",
      "جافاسكريبت", "تايب سكريبت", "بايثون", "بوستجري إس كيو إل", "مونغو دي بي", "دوكر", "CI/CD", "سحابة", "خدمات مصغرة", "APIs", "الواجهة الأمامية", "الخلفية",
      "ابتكار", "تعاون", "تميز", "تأثير", "عمل جماعي", "مجتمع تقني"
    ],
    metadataBase: new URL(`${baseUrl}/ar`),
    alternates: {
      canonical: `${baseUrl}/ar`,
    },
    openGraph: {
      title: "كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
      description: "تمكين الأعمال والأفراد بحلول برمجية مبتكرة. تعرف على فريقنا.",
      url: `${baseUrl}/ar`,
      siteName: "كود ويذ تابيش",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "شعار كود ويذ تابيش",
        },
      ],
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: "كود ويذ تابيش – المنتجات الرقمية وحلول الذكاء الاصطناعي",
      description: "نبني مستقبل التقنية بشغف وابتكار. تعرف على فريق كود ويذ تابيش.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "طلحة تابيش", url: "https://www.talhatabish.pro" },
      { name: "سودايس أزلان", url: `${baseUrl}/ar` },
      { name: "عائشة سليم", url: `${baseUrl}/ar` },
    ],
    creator: "طلحة تابيش",
    publisher: "كود ويذ تابيش",
    category: "تقنية",
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
  },
  zh: {
    title: {
      default: "CodeWithTabish – 数字产品与AI解决方案",
      template: "%s | CodeWithTabish",
    },
    description: "CodeWithTabish 是一个充满激情的团队，致力于打造数字产品和AI解决方案的未来。我们在移动、Web、AI和游戏领域提供创新软件。",
    keywords: [
      "CodeWithTabish", "数字产品", "AI解决方案", "软件开发", "移动应用", "Web开发", "游戏开发", "DevOps", "创新", "科技创业公司", "巴基斯坦",
      "Talha Tabish", "Sudais Azlan", "Ayesha Saleem",
      "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "云", "微服务", "API", "前端", "后端",
      "创新", "协作", "卓越", "影响力", "团队合作", "技术社区"
    ],
    metadataBase: new URL(`${baseUrl}/zh`),
    alternates: {
      canonical: `${baseUrl}/zh`,
    },
    openGraph: {
      title: "CodeWithTabish – 数字产品与AI解决方案",
      description: "为企业和个人赋能，提供创新的软件解决方案。认识我们的团队。",
      url: `${baseUrl}/zh`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "CodeWithTabish 标志",
        },
      ],
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: "CodeWithTabish – 数字产品与AI解决方案",
      description: "以激情和创新打造技术未来。认识CodeWithTabish团队。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
      { name: "Sudais Azlan", url: `${baseUrl}/zh` },
      { name: "Ayesha Saleem", url: `${baseUrl}/zh` },
    ],
    creator: "Talha Tabish",
    publisher: "CodeWithTabish",
    category: "技术",
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
  },
  fr: {
    title: {
      default: "CodeWithTabish – Produits numériques & solutions IA",
      template: "%s | CodeWithTabish",
    },
    description: "CodeWithTabish est une équipe passionnée qui construit l'avenir des produits numériques et des solutions d'IA. Nous livrons des logiciels innovants sur mobile, web, IA et jeux.",
    keywords: [
      "CodeWithTabish", "Produits numériques", "Solutions IA", "Développement logiciel", "Applications mobiles", "Développement web", "Développement de jeux", "DevOps", "Innovation", "Startup technologique", "Pakistan",
      "Talha Tabish", "Sudais Azlan", "Ayesha Saleem",
      "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Cloud", "Microservices", "API", "Frontend", "Backend",
      "Innovation", "Collaboration", "Excellence", "Impact", "Travail d'équipe", "Communauté tech"
    ],
    metadataBase: new URL(`${baseUrl}/fr`),
    alternates: {
      canonical: `${baseUrl}/fr`,
    },
    openGraph: {
      title: "CodeWithTabish – Produits numériques & solutions IA",
      description: "Accompagner entreprises et particuliers avec des solutions logicielles innovantes. Découvrez notre équipe.",
      url: `${baseUrl}/fr`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Logo CodeWithTabish",
        },
      ],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: "CodeWithTabish – Produits numériques & solutions IA",
      description: "Construire le futur de la technologie avec passion et innovation. Découvrez l'équipe CodeWithTabish.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
      { name: "Sudais Azlan", url: `${baseUrl}/fr` },
      { name: "Ayesha Saleem", url: `${baseUrl}/fr` },
    ],
    creator: "Talha Tabish",
    publisher: "CodeWithTabish",
    category: "technologie",
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
  },
  de: {
    title: {
      default: "CodeWithTabish – Digitale Produkte & KI-Lösungen",
      template: "%s | CodeWithTabish",
    },
    description: "CodeWithTabish ist ein leidenschaftliches Team, das die Zukunft digitaler Produkte und KI-Lösungen gestaltet. Wir liefern innovative Software für Mobile, Web, KI und Gaming.",
    keywords: [
      "CodeWithTabish", "Digitale Produkte", "KI-Lösungen", "Softwareentwicklung", "Mobile Apps", "Webentwicklung", "Game Development", "DevOps", "Innovation", "Tech-Startup", "Pakistan",
      "Talha Tabish", "Sudais Azlan", "Ayesha Saleem",
      "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Cloud", "Microservices", "APIs", "Frontend", "Backend",
      "Innovation", "Zusammenarbeit", "Exzellenz", "Impact", "Teamarbeit", "Tech Community"
    ],
    metadataBase: new URL(`${baseUrl}/de`),
    alternates: {
      canonical: `${baseUrl}/de`,
    },
    openGraph: {
      title: "CodeWithTabish – Digitale Produkte & KI-Lösungen",
      description: "Innovative Softwarelösungen für Unternehmen und Privatpersonen. Lernen Sie unser Team kennen.",
      url: `${baseUrl}/de`,
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
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: "CodeWithTabish – Digitale Produkte & KI-Lösungen",
      description: "Die Zukunft der Technologie mit Leidenschaft und Innovation gestalten. Lernen Sie das CodeWithTabish-Team kennen.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
      { name: "Sudais Azlan", url: `${baseUrl}/de` },
      { name: "Ayesha Saleem", url: `${baseUrl}/de` },
    ],
    creator: "Talha Tabish",
    publisher: "CodeWithTabish",
    category: "Technologie",
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
  },
  ja: {
    title: {
      default: "CodeWithTabish – デジタル製品とAIソリューション",
      template: "%s | CodeWithTabish",
    },
    description: "CodeWithTabishは、デジタル製品とAIソリューションの未来を築く情熱的なチームです。モバイル、Web、AI、ゲーム分野で革新的なソフトウェアを提供します。",
    keywords: [
      "CodeWithTabish", "デジタル製品", "AIソリューション", "ソフトウェア開発", "モバイルアプリ", "Web開発", "ゲーム開発", "DevOps", "イノベーション", "テックスタートアップ", "パキスタン",
      "Talha Tabish", "Sudais Azlan", "Ayesha Saleem",
      "JavaScript", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "クラウド", "マイクロサービス", "API", "フロントエンド", "バックエンド",
      "イノベーション", "コラボレーション", "卓越性", "インパクト", "チームワーク", "テックコミュニティ"
    ],
    metadataBase: new URL(`${baseUrl}/ja`),
    alternates: {
      canonical: `${baseUrl}/ja`,
    },
    openGraph: {
      title: "CodeWithTabish – デジタル製品とAIソリューション",
      description: "企業や個人に革新的なソフトウェアソリューションを提供します。私たちのチームをご紹介します。",
      url: `${baseUrl}/ja`,
      siteName: "CodeWithTabish",
      type: "website",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "CodeWithTabish ロゴ",
        },
      ],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: "CodeWithTabish – デジタル製品とAIソリューション",
      description: "情熱と革新でテクノロジーの未来を創造します。CodeWithTabishチームをご紹介します。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      creator: "@codewithtabish",
      site: "@codewithtabish",
    },
    authors: [
      { name: "Talha Tabish", url: "https://www.talhatabish.pro" },
      { name: "Sudais Azlan", url: `${baseUrl}/ja` },
      { name: "Ayesha Saleem", url: `${baseUrl}/ja` },
    ],
    creator: "Talha Tabish",
    publisher: "CodeWithTabish",
    category: "テクノロジー",
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
  },
};

export function getSiteMetadata(locale: string): Metadata {
  return siteMetadata[locale] || siteMetadata["en"];
}
