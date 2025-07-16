// blogsContent.ts

const blogsContent = {
  en: {
    section: {
      title: "Our Blog",
      subtitle: "Insights, Tutorials & Stories",
      description: "Explore the latest articles, tutorials, and stories from the CodeWithTabish team. Stay updated with trends, tips, and inspiration for developers and tech enthusiasts.",
      noPosts: "No blog posts found.",
      readMore: "Read More",
      allPosts: "View All Posts",
      searchPlaceholder: "Search blogs...",
      categories: "Categories",
      latest: "Latest Posts",
    },
  },
  ur: {
    section: {
      title: "ہمارا بلاگ",
      subtitle: "تجزیے، ٹیوٹوریلز اور کہانیاں",
      description: "کوڈ ود طلحہ تابش کی ٹیم کے تازہ ترین مضامین، ٹیوٹوریلز اور کہانیاں دیکھیں۔ ڈویلپرز اور ٹیک کے شوقین افراد کے لیے رجحانات، تجاویز اور تحریک سے باخبر رہیں۔",
      noPosts: "کوئی بلاگ پوسٹ نہیں ملی۔",
      readMore: "مزید پڑھیں",
      allPosts: "تمام پوسٹس دیکھیں",
      searchPlaceholder: "بلاگز تلاش کریں...",
      categories: "زمرہ جات",
      latest: "تازہ ترین پوسٹس",
    },
  },
  ar: {
    section: {
      title: "مدونتنا",
      subtitle: "رؤى ودروس وقصص",
      description: "استكشف أحدث المقالات والدروس والقصص من فريق CodeWithTabish. تابع آخر الاتجاهات والنصائح والإلهام للمطورين ومحبي التقنية.",
      noPosts: "لم يتم العثور على منشورات.",
      readMore: "اقرأ المزيد",
      allPosts: "عرض جميع المنشورات",
      searchPlaceholder: "ابحث في المدونة...",
      categories: "الفئات",
      latest: "أحدث المنشورات",
    },
  },
  fr: {
    section: {
      title: "Notre Blog",
      subtitle: "Astuces, tutoriels & histoires",
      description: "Découvrez les derniers articles, tutoriels et histoires de l’équipe CodeWithTabish. Restez à jour sur les tendances, conseils et inspirations pour les développeurs et passionnés de tech.",
      noPosts: "Aucun article trouvé.",
      readMore: "Lire la suite",
      allPosts: "Voir tous les articles",
      searchPlaceholder: "Rechercher des blogs...",
      categories: "Catégories",
      latest: "Derniers articles",
    },
  },
  zh: {
    section: {
      title: "我们的博客",
      subtitle: "见解、教程与故事",
      description: "探索 CodeWithTabish 团队的最新文章、教程和故事。为开发者和技术爱好者带来趋势、技巧和灵感。",
      noPosts: "未找到博客文章。",
      readMore: "阅读全文",
      allPosts: "查看所有文章",
      searchPlaceholder: "搜索博客...",
      categories: "分类",
      latest: "最新文章",
    },
  },
  de: {
    section: {
      title: "Unser Blog",
      subtitle: "Einblicke, Tutorials & Geschichten",
      description: "Entdecken Sie die neuesten Artikel, Tutorials und Geschichten vom CodeWithTabish-Team. Bleiben Sie auf dem Laufenden mit Trends, Tipps und Inspiration für Entwickler und Technikbegeisterte.",
      noPosts: "Keine Blogbeiträge gefunden.",
      readMore: "Mehr lesen",
      allPosts: "Alle Beiträge anzeigen",
      searchPlaceholder: "Blogs durchsuchen...",
      categories: "Kategorien",
      latest: "Neueste Beiträge",
    },
  },
  ja: {
    section: {
      title: "私たちのブログ",
      subtitle: "インサイト・チュートリアル・ストーリー",
      description: "CodeWithTabishチームによる最新記事、チュートリアル、ストーリーをご覧ください。開発者やテック愛好家のためのトレンド、ヒント、インスピレーションをお届けします。",
      noPosts: "ブログ記事が見つかりません。",
      readMore: "続きを読む",
      allPosts: "すべての記事を見る",
      searchPlaceholder: "ブログを検索...",
      categories: "カテゴリ",
      latest: "最新記事",
    },
  },
  es: {
    section: {
      title: "Nuestro Blog",
      subtitle: "Ideas, tutoriales e historias",
      description: "Explora los últimos artículos, tutoriales e historias del equipo de CodeWithTabish. Mantente al día con tendencias, consejos e inspiración para desarrolladores y entusiastas de la tecnología.",
      noPosts: "No se encontraron publicaciones.",
      readMore: "Leer más",
      allPosts: "Ver todas las publicaciones",
      searchPlaceholder: "Buscar blogs...",
      categories: "Categorías",
      latest: "Últimas publicaciones",
    },
  },
};

export default blogsContent;

export type BlogsSectionContent = {
  title: string;
  subtitle: string;
  description: string;
  noPosts: string;
  readMore: string;
  allPosts: string;
  searchPlaceholder: string;
  categories: string;
  latest: string;
};

export type BlogsContentMap = {
  [lang: string]: { section: BlogsSectionContent };
};
