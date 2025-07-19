// waitlist-tabs-content.ts

import { Smartphone, Globe, Brain, Users, Bot } from "lucide-react";

export const waitlistTabsContent = {
  en: [
    { title: "All", icon: Users },
    { title: "Mobile App", icon: Smartphone },
    { title: "Web App", icon: Globe },
    { title: "AI Model", icon: Brain },
    { title: "Agentic Model", icon: Bot },
  ],
  ur: [
    { title: "سب", icon: Users },
    { title: "موبائل ایپ", icon: Smartphone },
    { title: "ویب ایپ", icon: Globe },
    { title: "اے آئی ماڈل", icon: Brain },
    { title: "ایجنٹک ماڈل", icon: Bot },
  ],
  ar: [
    { title: "الكل", icon: Users },
    { title: "تطبيق الجوال", icon: Smartphone },
    { title: "تطبيق الويب", icon: Globe },
    { title: "نموذج الذكاء الاصطناعي", icon: Brain },
    { title: "النموذج الوكيلي", icon: Bot },
  ],
  zh: [
    { title: "全部", icon: Users },
    { title: "移动应用", icon: Smartphone },
    { title: "网页应用", icon: Globe },
    { title: "AI模型", icon: Brain },
    { title: "Agentic模型", icon: Bot },
  ],
  fr: [
    { title: "Tous", icon: Users },
    { title: "Application mobile", icon: Smartphone },
    { title: "Application web", icon: Globe },
    { title: "Modèle IA", icon: Brain },
    { title: "Modèle agentique", icon: Bot },
  ],
  de: [
    { title: "Alle", icon: Users },
    { title: "Mobile App", icon: Smartphone },
    { title: "Web App", icon: Globe },
    { title: "KI-Modell", icon: Brain },
    { title: "Agentenmodell", icon: Bot },
  ],
  ja: [
    { title: "すべて", icon: Users },
    { title: "モバイルアプリ", icon: Smartphone },
    { title: "ウェブアプリ", icon: Globe },
    { title: "AIモデル", icon: Brain },
    { title: "エージェンティックモデル", icon: Bot },
  ],
};

export type WaitlistTab = {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
};
