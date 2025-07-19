// footerContent.ts

const footerContent = {
  en: {
    brand: "CodeWithTabish",
    description: "Building the future of technology with passion, innovation, and expertise.",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Waitlist", href: "/waitlist" }, // Added
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish. All rights reserved.",
  },
  ur: {
    brand: "کوڈ ود طلحہ تابش",
    description: "جذبے، جدت اور مہارت کے ساتھ ٹیکنالوجی کا مستقبل بنانا۔",
    links: [
      { label: "ہوم", href: "/" },
      { label: "ہمارے بارے میں", href: "/about" },
      { label: "پروجیکٹس", href: "/projects" },
      { label: "ویٹ لسٹ", href: "/waitlist" }, // Added
      { label: "بلاگز", href: "/blogs" },
      { label: "رابطہ کریں", href: "/contact" },
      { label: "مدد", href: "/help" },
      { label: "عمومی سوالات", href: "/faq" },
      { label: "پرائیویسی پالیسی", href: "/privacy-policy" },
    ],
    copyright: "© 2025 کوڈ ود طلحہ تابش۔ جملہ حقوق محفوظ ہیں۔",
  },
  ar: {
    brand: "كود ويذ طلحة تابش",
    description: "نبني مستقبل التكنولوجيا بالشغف والابتكار والخبرة.",
    links: [
      { label: "الرئيسية", href: "/" },
      { label: "من نحن", href: "/about" },
      { label: "المشاريع", href: "/projects" },
      { label: "قائمة الانتظار", href: "/waitlist" }, // Added
      { label: "المدونة", href: "/blogs" },
      { label: "اتصل بنا", href: "/contact" },
      { label: "مساعدة", href: "/help" },
      { label: "الأسئلة الشائعة", href: "/faq" },
      { label: "سياسة الخصوصية", href: "/privacy-policy" },
    ],
    copyright: "© 2025 كود ويذ طلحة تابش. جميع الحقوق محفوظة.",
  },
  fr: {
    brand: "CodeWithTabish",
    description: "Construire le futur de la technologie avec passion, innovation et expertise.",
    links: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/about" },
      { label: "Projets", href: "/projects" },
      { label: "Liste d'attente", href: "/waitlist" }, // Added
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
      { label: "Aide", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Politique de confidentialité", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish. Tous droits réservés.",
  },
  zh: {
    brand: "CodeWithTabish",
    description: "以热情、创新和专业打造科技的未来。",
    links: [
      { label: "首页", href: "/" },
      { label: "关于我们", href: "/about" },
      { label: "项目", href: "/projects" },
      { label: "候补名单", href: "/waitlist" }, // Added
      { label: "博客", href: "/blogs" },
      { label: "联系我们", href: "/contact" },
      { label: "帮助", href: "/help" },
      { label: "常见问题", href: "/faq" },
      { label: "隐私政策", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish。保留所有权利。",
  },
  de: {
    brand: "CodeWithTabish",
    description: "Mit Leidenschaft, Innovation und Fachwissen die Zukunft der Technologie gestalten.",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Über uns", href: "/about" },
      { label: "Projekte", href: "/projects" },
      { label: "Warteliste", href: "/waitlist" }, // Added
      { label: "Blogs", href: "/blogs" },
      { label: "Kontakt", href: "/contact" },
      { label: "Hilfe", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Datenschutz", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish. Alle Rechte vorbehalten.",
  },
  ja: {
    brand: "CodeWithTabish",
    description: "情熱・革新・専門性でテクノロジーの未来を創造します。",
    links: [
      { label: "ホーム", href: "/" },
      { label: "私たちについて", href: "/about" },
      { label: "プロジェクト", href: "/projects" },
      { label: "ウェイトリスト", href: "/waitlist" }, // Added
      { label: "ブログ", href: "/blogs" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "ヘルプ", href: "/help" },
      { label: "よくある質問", href: "/faq" },
      { label: "プライバシーポリシー", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish. All rights reserved.",
  },
  es: {
    brand: "CodeWithTabish",
    description: "Construyendo el futuro de la tecnología con pasión, innovación y experiencia.",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Sobre nosotros", href: "/about" },
      { label: "Proyectos", href: "/projects" },
      { label: "Lista de espera", href: "/waitlist" }, // Added
      { label: "Blogs", href: "/blogs" },
      { label: "Contacto", href: "/contact" },
      { label: "Ayuda", href: "/help" },
      { label: "Preguntas frecuentes", href: "/faq" },
      { label: "Política de privacidad", href: "/privacy-policy" },
    ],
    copyright: "© 2025 CodeWithTabish. Todos los derechos reservados.",
  },
};

export default footerContent;

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  brand: string;
  description: string;
  links: FooterLink[];
  copyright: string;
};

export type FooterContentMap = {
  [lang: string]: FooterContent;
};
