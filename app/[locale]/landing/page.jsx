import Spinner from "@/app/_components/feadback/Spinner";
import CtaSection from "@/app/_components/feature/landing/CtaSection";
import Faq from "@/app/_components/feature/landing/Faq";
import Features from "@/app/_components/feature/landing/features/Features";
import Hero from "@/app/_components/feature/landing/hero/Hero";
import HeroSkeleton from "@/app/_components/feature/landing/hero/HeroSkeleton";
import HeroWrapper from "@/app/_components/feature/landing/hero/HeroWrapper";
import { getLandingHeroData } from "@/app/_lib/data-service";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <div>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroWrapper />
      </Suspense>
      <Features />
      <Faq />
      <CtaSection />
    </div>
  );
};

export default page;
