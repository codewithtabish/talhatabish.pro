import AboutSection from "@/components/custom/about-section";

export default function AboutPage({ params }: { params: { locale: string } }) {
  return (
    <main className="container md:max-w-4xl mx-auto py-28">
      <AboutSection locale={params.locale} />
    </main>
  );
}
