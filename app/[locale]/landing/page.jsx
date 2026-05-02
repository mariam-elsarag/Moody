import Spinner from "@/app/_components/feadback/Spinner";
import CtaSection from "@/app/_components/feature/landing/CtaSection";
import Faq from "@/app/_components/feature/landing/Faq";
import Features from "@/app/_components/feature/landing/features/Features";
import Hero from "@/app/_components/feature/landing/hero/Hero";
import HeroSkeleton from "@/app/_components/feature/landing/hero/HeroSkeleton";
import HeroWrapper from "@/app/_components/feature/landing/hero/HeroWrapper";
import Trust from "@/app/_components/feature/landing/hero/trust/Trust";
import HowItWorks from "@/app/_components/feature/landing/howItWorks/HowItWorks";
import { getLandingHeroData } from "@/app/_lib/data-service";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <div>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroWrapper />
      </Suspense>
      <Features />
      <HowItWorks />
      <Trust />
      <Faq />
      <CtaSection />
    </div>
  );
};

export default page;
