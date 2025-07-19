import AboutSection from "@/components/mvpblocks/about-us-1";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="w-full min-h-screen flex justify-center bg-background overflow-x-hidden">
      <div
        className="
          w-full
          max-w-screen-sm
          sm:max-w-screen-md
          md:max-w-screen-lg
          lg:max-w-screen-xl
          2xl:max-w-screen-2xl
          px-2
          sm:px-4
          md:px-8
          py-6
          sm:py-8
          md:py-12
          lg:py-16
          xl:py-20
          flex flex-col
        "
      >
        {/* @ts-ignore */}
        <AboutSection locale={locale} />
        {/* Or <AboutUs1 locale={locale} /> */}
      </div>
    </main>
  );
}
