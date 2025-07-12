"use server";

export async function getHeroInfo(locale: string) {
  const res = await fetch(`http://localhost:1337/api/hero-infos?locale=${locale}`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}
