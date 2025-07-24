// projectsContent.ts

const projectsPagesContent = {
  en: {
    section: {
      title: "Our Projects",
      subtitle: "CodeWithTabish Creations & Solutions",
      description:
        "Explore the latest projects, tools, and solutions built by the CodeWithTabish team, led by founder & CEO Talha Tabish. Discover innovation, open-source contributions, and real-world impact for developers and businesses.",
      noProjects: "No projects found.",
      viewAll: "View All Projects",
      featured: "Featured Projects",
      searchPlaceholder: "Search projects...",
      categories: "Categories",
      latest: "Latest Projects",
    },
  },
  ur: {
    section: {
      title: "ہمارے پراجیکٹس",
      subtitle: "کوڈ ود طلحہ تابش کی تخلیقات اور حل",
      description:
        "کوڈ ود طلحہ تابش ٹیم کے تازہ ترین پراجیکٹس، ٹولز اور حل دریافت کریں، جس کی قیادت بانی اور سی ای او طلحہ تابش کر رہے ہیں۔ ڈویلپرز اور کاروبار کے لیے جدت، اوپن سورس اور عملی اثرات دیکھیں۔",
      noProjects: "کوئی پراجیکٹ نہیں ملا۔",
      viewAll: "تمام پراجیکٹس دیکھیں",
      featured: "نمایاں پراجیکٹس",
      searchPlaceholder: "پراجیکٹس تلاش کریں...",
      categories: "زمرہ جات",
      latest: "تازہ ترین پراجیکٹس",
    },
  },
  ar: {
    section: {
      title: "مشاريعنا",
      subtitle: "إبداعات وحلول CodeWithTabish",
      description:
        "استكشف أحدث المشاريع والأدوات والحلول التي أنشأها فريق CodeWithTabish بقيادة المؤسس والرئيس التنفيذي طلحة تابش. اكتشف الابتكار والمساهمات مفتوحة المصدر والتأثير الحقيقي للمطورين والشركات.",
      noProjects: "لم يتم العثور على مشاريع.",
      viewAll: "عرض جميع المشاريع",
      featured: "المشاريع المميزة",
      searchPlaceholder: "ابحث في المشاريع...",
      categories: "الفئات",
      latest: "أحدث المشاريع",
    },
  },
  fr: {
    section: {
      title: "Nos Projets",
      subtitle: "Créations & Solutions CodeWithTabish",
      description:
        "Découvrez les derniers projets, outils et solutions réalisés par l’équipe CodeWithTabish, dirigée par le fondateur et CEO Talha Tabish. Innovation, open source et impact réel pour les développeurs et les entreprises.",
      noProjects: "Aucun projet trouvé.",
      viewAll: "Voir tous les projets",
      featured: "Projets phares",
      searchPlaceholder: "Rechercher des projets...",
      categories: "Catégories",
      latest: "Derniers projets",
    },
  },
  zh: {
    section: {
      title: "我们的项目",
      subtitle: "CodeWithTabish 创新与解决方案",
      description:
        "探索由创始人兼首席执行官 Talha Tabish 领导的 CodeWithTabish 团队打造的最新项目、工具和解决方案。为开发者和企业带来创新、开源贡献和实际影响。",
      noProjects: "未找到项目。",
      viewAll: "查看所有项目",
      featured: "精选项目",
      searchPlaceholder: "搜索项目...",
      categories: "分类",
      latest: "最新项目",
    },
  },
  de: {
    section: {
      title: "Unsere Projekte",
      subtitle: "CodeWithTabish Kreationen & Lösungen",
      description:
        "Entdecken Sie die neuesten Projekte, Tools und Lösungen des CodeWithTabish-Teams unter der Leitung von Gründer & CEO Talha Tabish. Innovation, Open-Source-Beiträge und echter Mehrwert für Entwickler und Unternehmen.",
      noProjects: "Keine Projekte gefunden.",
      viewAll: "Alle Projekte anzeigen",
      featured: "Ausgewählte Projekte",
      searchPlaceholder: "Projekte durchsuchen...",
      categories: "Kategorien",
      latest: "Neueste Projekte",
    },
  },
  ja: {
    section: {
      title: "私たちのプロジェクト",
      subtitle: "CodeWithTabish の創造とソリューション",
      description:
        "創設者兼CEOのTalha Tabishが率いるCodeWithTabishチームによる最新のプロジェクト、ツール、ソリューションをご覧ください。開発者や企業のためのイノベーション、オープンソース貢献、実社会への影響を発見しましょう。",
      noProjects: "プロジェクトが見つかりません。",
      viewAll: "すべてのプロジェクトを見る",
      featured: "注目のプロジェクト",
      searchPlaceholder: "プロジェクトを検索...",
      categories: "カテゴリ",
      latest: "最新プロジェクト",
    },
  },
  es: {
    section: {
      title: "Nuestros Proyectos",
      subtitle: "Creaciones y Soluciones de CodeWithTabish",
      description:
        "Explora los últimos proyectos, herramientas y soluciones desarrollados por el equipo de CodeWithTabish, liderado por el fundador y CEO Talha Tabish. Descubre innovación, contribuciones open source e impacto real para desarrolladores y empresas.",
      noProjects: "No se encontraron proyectos.",
      viewAll: "Ver todos los proyectos",
      featured: "Proyectos destacados",
      searchPlaceholder: "Buscar proyectos...",
      categories: "Categorías",
      latest: "Últimos proyectos",
    },
  },
};

export default projectsPagesContent;

export type ProjectsSectionContent = {
  title: string;
  subtitle: string;
  description: string;
  noProjects: string;
  viewAll: string;
  featured: string;
  searchPlaceholder: string;
  categories: string;
  latest: string;
};

export type ProjectsContentMap = {
  [lang: string]: { section: ProjectsSectionContent };
};
