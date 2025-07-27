import type { Metadata } from "next";

const baseUrl = "https://www.talhatabish.pro";

const privacyMetadata: Record<string, Metadata> = {
  en: {
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
      url: `${baseUrl}/en/privacy`,
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
  },
  ur: {
    title: "پرائیویسی پالیسی | کوڈ ود تابش",
    description:
      "کوڈ ود تابش کی پرائیویسی پالیسی پڑھیں۔ جانیں کہ ہم آپ کا ڈیٹا کیسے اکٹھا، استعمال اور محفوظ کرتے ہیں۔",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "پرائیویسی پالیسی | کوڈ ود تابش",
      description:
        "کوڈ ود تابش کی پرائیویسی پالیسی پڑھیں۔ جانیں کہ ہم آپ کا ڈیٹا کیسے اکٹھا، استعمال اور محفوظ کرتے ہیں۔",
      url: `${baseUrl}/ur/privacy`,
      siteName: "کوڈ ود تابش",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "پرائیویسی پالیسی – کوڈ ود تابش",
        },
      ],
      locale: "ur_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: "پرائیویسی پالیسی | کوڈ ود تابش",
      description:
        "کوڈ ود تابش کی پرائیویسی پالیسی پڑھیں۔ جانیں کہ ہم آپ کا ڈیٹا کیسے اکٹھا، استعمال اور محفوظ کرتے ہیں۔",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
  ar: {
    title: "سياسة الخصوصية | كود ويذ تابيش",
    description:
      "اقرأ سياسة الخصوصية الخاصة بكود ويذ تابيش. تعرف على كيفية جمع واستخدام وحماية بياناتك.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "سياسة الخصوصية | كود ويذ تابيش",
      description:
        "اقرأ سياسة الخصوصية الخاصة بكود ويذ تابيش. تعرف على كيفية جمع واستخدام وحماية بياناتك.",
      url: `${baseUrl}/ar/privacy`,
      siteName: "كود ويذ تابيش",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "سياسة الخصوصية – كود ويذ تابيش",
        },
      ],
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: "سياسة الخصوصية | كود ويذ تابيش",
      description:
        "اقرأ سياسة الخصوصية الخاصة بكود ويذ تابيش. تعرف على كيفية جمع واستخدام وحماية بياناتك.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
  zh: {
    title: "隐私政策 | CodeWithTabish",
    description:
      "阅读CodeWithTabish的隐私政策。了解我们如何收集、使用和保护您的数据。",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "隐私政策 | CodeWithTabish",
      description:
        "阅读CodeWithTabish的隐私政策。了解我们如何收集、使用和保护您的数据。",
      url: `${baseUrl}/zh/privacy`,
      siteName: "CodeWithTabish",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "隐私政策 – CodeWithTabish",
        },
      ],
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: "隐私政策 | CodeWithTabish",
      description:
        "阅读CodeWithTabish的隐私政策。了解我们如何收集、使用和保护您的数据。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
  fr: {
    title: "Politique de confidentialité | CodeWithTabish",
    description:
      "Lisez la politique de confidentialité de CodeWithTabish. Découvrez comment nous collectons, utilisons et protégeons vos données.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Politique de confidentialité | CodeWithTabish",
      description:
        "Lisez la politique de confidentialité de CodeWithTabish. Découvrez comment nous collectons, utilisons et protégeons vos données.",
      url: `${baseUrl}/fr/privacy`,
      siteName: "CodeWithTabish",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Politique de confidentialité – CodeWithTabish",
        },
      ],
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: "Politique de confidentialité | CodeWithTabish",
      description:
        "Lisez la politique de confidentialité de CodeWithTabish. Découvrez comment nous collectons, utilisons et protégeons vos données.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
  de: {
    title: "Datenschutzrichtlinie | CodeWithTabish",
    description:
      "Lesen Sie die Datenschutzrichtlinie von CodeWithTabish. Erfahren Sie, wie wir Ihre Daten erfassen, verwenden und schützen.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Datenschutzrichtlinie | CodeWithTabish",
      description:
        "Lesen Sie die Datenschutzrichtlinie von CodeWithTabish. Erfahren Sie, wie wir Ihre Daten erfassen, verwenden und schützen.",
      url: `${baseUrl}/de/privacy`,
      siteName: "CodeWithTabish",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "Datenschutzrichtlinie – CodeWithTabish",
        },
      ],
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Datenschutzrichtlinie | CodeWithTabish",
      description:
        "Lesen Sie die Datenschutzrichtlinie von CodeWithTabish. Erfahren Sie, wie wir Ihre Daten erfassen, verwenden und schützen.",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
  ja: {
    title: "プライバシーポリシー | CodeWithTabish",
    description:
      "CodeWithTabishのプライバシーポリシーをご覧ください。私たちがどのようにデータを収集、利用、保護するかをご確認ください。",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "プライバシーポリシー | CodeWithTabish",
      description:
        "CodeWithTabishのプライバシーポリシーをご覧ください。私たちがどのようにデータを収集、利用、保護するかをご確認ください。",
      url: `${baseUrl}/ja/privacy`,
      siteName: "CodeWithTabish",
      type: "article",
      images: [
        {
          url: "https://www.talhatabish.pro/og-cover.png",
          width: 1200,
          height: 630,
          alt: "プライバシーポリシー – CodeWithTabish",
        },
      ],
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: "プライバシーポリシー | CodeWithTabish",
      description:
        "CodeWithTabishのプライバシーポリシーをご覧ください。私たちがどのようにデータを収集、利用、保護するかをご確認ください。",
      images: ["https://www.talhatabish.pro/og-cover.png"],
      site: "@codewithtabish",
      creator: "@codewithtabish",
    },
  },
};

export function getPrivacyMetadata(locale: string): Metadata {
  return privacyMetadata[locale] || privacyMetadata["en"];
}
