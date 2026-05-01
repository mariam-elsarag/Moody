import { getLandingHeroData } from "@/app/_lib/data-service";
import Hero from "./Hero";

export default async function HeroWrapper() {
  const heroData = await getLandingHeroData();
  return <Hero data={heroData} />;
}
