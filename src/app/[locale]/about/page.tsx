// app/[locale]/about/page.tsx

// import AboutSection from "@/components/custom/about-section";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="container md:max-w-4xl mx-auto py-28">
      <p>Current Locale: {locale}</p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam incidunt vero quisquam? Tenetur totam repellendus voluptatem, maiores eaque aspernatur facere veritatis earum accusantium inventore quos quaerat, beatae reprehenderit fugit culpa.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam incidunt vero quisquam? Tenetur totam repellendus voluptatem, maiores eaque aspernatur facere veritatis earum accusantium inventore quos quaerat, beatae reprehenderit fugit culpa.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam incidunt vero quisquam? Tenetur totam repellendus voluptatem, maiores eaque aspernatur facere veritatis earum accusantium inventore quos quaerat, beatae reprehenderit fugit culpa.

      {/* Uncomment when ready */}
      {/* <AboutSection locale={locale} /> */}
    </main>
  );
}
