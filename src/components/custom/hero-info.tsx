import { getHeroInfo } from "@/actions/hero-actions";

type HeroInfoProps = {
  locale: string;
};

const heroImage =
  "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww";

export default async function HeroInfo({ locale }: HeroInfoProps) {
  const data = await getHeroInfo(locale);

  if (!data || data.length === 0) {
    return <div>No data found for this language.</div>;
  }

  return (
    <div className="flex flex-row max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden mt-8">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={heroImage}
          alt={data[0].name}
          className="h-64 w-64 object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{data[0].name}</h1>
        <p className="text-lg text-gray-600 mb-4">{data[0].shortDesc}</p>
        <p className="text-gray-700">{data[0].description}</p>
      </div>
    </div>
  );
}
