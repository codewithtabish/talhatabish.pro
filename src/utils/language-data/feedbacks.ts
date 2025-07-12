const feedbacksContent = {
  en: {
    section: {
      title: "What Our Clients Say",
      subtitle: "Testimonials & Reviews",
      desc: "We value our clients’ feedback. Here’s what they say about working with Talha Tabish."
    },
    feedbacks: [
      {
        name: "Sarah Williams",
        feedback: "Talha delivered our Android app quickly and with great quality. Communication was excellent!"
      },
      {
        name: "Michael Chen",
        feedback: "Our web platform works flawlessly thanks to Talha’s Next.js and backend expertise."
      },
      {
        name: "Aisha Al-Farsi",
        feedback: "Talha built a fun mobile game for us and gave helpful advice on user experience."
      }
    ]
  },
  ur: {
    section: {
      title: "ہمارے کلائنٹس کیا کہتے ہیں",
      subtitle: "تعریفیں اور جائزے",
      desc: "ہم اپنے کلائنٹس کی رائے کو اہمیت دیتے ہیں۔ یہاں دیکھیں وہ طلحہ تابش کے بارے میں کیا کہتے ہیں۔"
    },
    feedbacks: [
      {
        name: "سارہ ولیمز",
        feedback: "طلحہ نے ہماری اینڈرائیڈ ایپ بہترین معیار کے ساتھ جلدی تیار کی۔ کمیونیکیشن بھی بہترین رہی!"
      },
      {
        name: "مائیکل چن",
        feedback: "طلحہ کی Next.js اور بیک اینڈ مہارت سے ہماری ویب سائٹ بہترین چل رہی ہے۔"
      },
      {
        name: "عائشہ الفارسی",
        feedback: "طلحہ نے ہمارے لیے ایک دلچسپ موبائل گیم بنایا اور یوزر ایکسپیرینس پر بہترین مشورے دیے۔"
      }
    ]
  },
  ar: {
    section: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "الشهادات والتقييمات",
      desc: "نحن نقدر آراء عملائنا. إليكم ما يقولونه عن العمل مع طلحة تابش."
    },
    feedbacks: [
      {
        name: "سارة ويليامز",
        feedback: "طلحة أنجز تطبيق الأندرويد بسرعة وجودة عالية. التواصل كان ممتازًا!"
      },
      {
        name: "مايكل تشين",
        feedback: "منصة الويب لدينا تعمل بسلاسة بفضل خبرة طلحة في Next.js والخلفية."
      },
      {
        name: "عائشة الفارسي",
        feedback: "طلحة بنى لنا لعبة موبايل ممتعة وقدم نصائح رائعة حول تجربة المستخدم."
      }
    ]
  },
  zh: {
    section: {
      title: "客户怎么说",
      subtitle: "客户评价与反馈",
      desc: "我们重视客户的反馈。以下是他们对Talha Tabish的评价。"
    },
    feedbacks: [
      {
        name: "莎拉·威廉姆斯",
        feedback: "Talha很快交付了我们的安卓应用，质量很高，沟通也很顺畅！"
      },
      {
        name: "迈克尔·陈",
        feedback: "多亏了Talha的Next.js和后端技术，我们的平台运行非常流畅。"
      },
      {
        name: "艾莎·法尔西",
        feedback: "Talha为我们开发了一款有趣的手机游戏，并提供了很好的用户体验建议。"
      }
    ]
  },
  fr: {
    section: {
      title: "Ce que disent nos clients",
      subtitle: "Témoignages & Avis",
      desc: "Nous accordons de l'importance aux retours de nos clients. Voici ce qu'ils disent à propos de Talha Tabish."
    },
    feedbacks: [
      {
        name: "Sarah Williams",
        feedback: "Talha a livré notre application Android rapidement et avec qualité. Communication parfaite !"
      },
      {
        name: "Michael Chen",
        feedback: "Notre plateforme web fonctionne parfaitement grâce à l’expertise Next.js et backend de Talha."
      },
      {
        name: "Aïsha Al-Farsi",
        feedback: "Talha a créé un jeu mobile amusant et a donné de bons conseils sur l’expérience utilisateur."
      }
    ]
  },
  de: {
    section: {
      title: "Was unsere Kunden sagen",
      subtitle: "Referenzen & Bewertungen",
      desc: "Wir schätzen das Feedback unserer Kunden. Das sagen sie über die Zusammenarbeit mit Talha Tabish."
    },
    feedbacks: [
      {
        name: "Sarah Williams",
        feedback: "Talha hat unsere Android-App schnell und hochwertig geliefert. Die Kommunikation war top!"
      },
      {
        name: "Michael Chen",
        feedback: "Unsere Webplattform läuft dank Talhas Next.js- und Backend-Kenntnissen einwandfrei."
      },
      {
        name: "Aisha Al-Farsi",
        feedback: "Talha hat ein tolles Mobile Game gebaut und wertvolle Tipps zur Nutzererfahrung gegeben."
      }
    ]
  },
  ja: {
    section: {
      title: "お客様の声",
      subtitle: "推薦・レビュー",
      desc: "私たちはお客様のフィードバックを大切にしています。こちらはTalha Tabishについてのご意見です。"
    },
    feedbacks: [
      {
        name: "サラ・ウィリアムズ",
        feedback: "Talhaは高品質なAndroidアプリを素早く納品してくれました。コミュニケーションも抜群です！"
      },
      {
        name: "マイケル・チェン",
        feedback: "TalhaのNext.jsとバックエンドの技術で、私たちのWebプラットフォームは完璧に動作しています。"
      },
      {
        name: "アイシャ・アルファルシ",
        feedback: "Talhaは楽しいモバイルゲームを作り、ユーザー体験についても良いアドバイスをくれました。"
      }
    ]
  }
};

export default feedbacksContent;

export interface Feedback {
  name: string;
  feedback: string;
}

export interface FeedbackSection {
  title: string;
  subtitle: string;
  desc: string;
}

export interface FeedbacksContent {
  section: FeedbackSection;
  feedbacks: Feedback[];
}

export type FeedbacksContentMap = {
  [lang: string]: FeedbacksContent;
};
