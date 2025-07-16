// projectsContent.ts

const projectsContent = {
  en: {
    section: {
      title: "Our Projects",
      subtitle: "Showcasing Innovation & Expertise",
      description:
        "Discover the projects built by the CodeWithTabish team across Android, React Native, Next.js, AI, DevOps, and more. Explore our journey of creativity, problem-solving, and technology.",
      noProjects: "No projects found.",
      viewAll: "View All Projects",
      searchPlaceholder: "Search projects...",
      categories: "Categories",
      latest: "Latest Projects",
    },
  },
  ur: {
    section: {
      title: "ہمارے پروجیکٹس",
      subtitle: "جدت اور مہارت کی جھلک",
      description:
        "کوڈ ود طلحہ تابش کی ٹیم کے اینڈرائیڈ، ری ایکٹ نیٹو، نیکسٹ جے ایس، AI، ڈیواپس اور دیگر شعبوں میں بنائے گئے پروجیکٹس دیکھیں۔ ہماری تخلیقی، مسئلہ حل کرنے اور ٹیکنالوجی کی کہانی دریافت کریں۔",
      noProjects: "کوئی پروجیکٹ نہیں ملا۔",
      viewAll: "تمام پروجیکٹس دیکھیں",
      searchPlaceholder: "پروجیکٹس تلاش کریں...",
      categories: "زمرہ جات",
      latest: "تازہ ترین پروجیکٹس",
    },
  },
  ar: {
    section: {
      title: "مشاريعنا",
      subtitle: "عرض الابتكار والخبرة",
      description:
        "اكتشف المشاريع التي أنشأها فريق CodeWithTabish في Android وReact Native وNext.js والذكاء الاصطناعي وDevOps والمزيد. استكشف رحلتنا في الإبداع وحل المشكلات والتكنولوجيا.",
      noProjects: "لم يتم العثور على مشاريع.",
      viewAll: "عرض جميع المشاريع",
      searchPlaceholder: "ابحث في المشاريع...",
      categories: "الفئات",
      latest: "أحدث المشاريع",
    },
  },
  fr: {
    section: {
      title: "Nos Projets",
      subtitle: "Innovation & Expertise en action",
      description:
        "Découvrez les projets réalisés par l’équipe CodeWithTabish sur Android, React Native, Next.js, IA, DevOps et plus. Explorez notre parcours de créativité, de résolution de problèmes et de technologie.",
      noProjects: "Aucun projet trouvé.",
      viewAll: "Voir tous les projets",
      searchPlaceholder: "Rechercher des projets...",
      categories: "Catégories",
      latest: "Derniers projets",
    },
  },
  zh: {
    section: {
      title: "我们的项目",
      subtitle: "创新与专业的展示",
      description:
        "探索 CodeWithTabish 团队在 Android、React Native、Next.js、AI、DevOps 等领域打造的项目。见证我们的创造力、解决问题能力与技术之旅。",
      noProjects: "未找到项目。",
      viewAll: "查看所有项目",
      searchPlaceholder: "搜索项目...",
      categories: "分类",
      latest: "最新项目",
    },
  },
  de: {
    section: {
      title: "Unsere Projekte",
      subtitle: "Innovation & Fachwissen im Fokus",
      description:
        "Entdecken Sie die Projekte des CodeWithTabish-Teams in Android, React Native, Next.js, KI, DevOps und mehr. Erleben Sie unsere Reise voller Kreativität, Problemlösung und Technologie.",
      noProjects: "Keine Projekte gefunden.",
      viewAll: "Alle Projekte anzeigen",
      searchPlaceholder: "Projekte durchsuchen...",
      categories: "Kategorien",
      latest: "Neueste Projekte",
    },
  },
  ja: {
    section: {
      title: "私たちのプロジェクト",
      subtitle: "イノベーションと専門性の実例",
      description:
        "CodeWithTabishチームがAndroid、React Native、Next.js、AI、DevOpsなどで手掛けたプロジェクトをご覧ください。創造性、課題解決、テクノロジーの歩みを体験しましょう。",
      noProjects: "プロジェクトが見つかりません。",
      viewAll: "すべてのプロジェクトを見る",
      searchPlaceholder: "プロジェクトを検索...",
      categories: "カテゴリ",
      latest: "最新プロジェクト",
    },
  },
  es: {
    section: {
      title: "Nuestros Proyectos",
      subtitle: "Innovación y experiencia en acción",
      description:
        "Descubre los proyectos desarrollados por el equipo de CodeWithTabish en Android, React Native, Next.js, IA, DevOps y más. Explora nuestro recorrido de creatividad, resolución de problemas y tecnología.",
      noProjects: "No se encontraron proyectos.",
      viewAll: "Ver todos los proyectos",
      searchPlaceholder: "Buscar proyectos...",
      categories: "Categorías",
      latest: "Últimos proyectos",
    },
  },
};

export default projectsContent;

export type ProjectsSectionContent = {
  title: string;
  subtitle: string;
  description: string;
  noProjects: string;
  viewAll: string;
  searchPlaceholder: string;
  categories: string;
  latest: string;
};

export type ProjectsContentMap = {
  [lang: string]: { section: ProjectsSectionContent };
};
