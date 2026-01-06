import { HeroSection } from "../components/hero-section";
import { ChallengesSection } from "../components/challenges-section";
import { HowSkolistHelpsSection } from "../components/how-skolist-helps-section";
import { WhySkolistSection } from "../components/why-skolist-section";
import { WhoSkolistForSection } from "../components/who-skolist-for-section";
import { WhatSkolistNotDoSection } from "../components/what-skolist-not-do-section";
import { BuiltWithRigorSection } from "../components/built-with-rigor-section";
import { TestimonialsSection } from "../components/testimonials-section";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ChallengesSection />
      <HowSkolistHelpsSection />
      <WhySkolistSection />
      <WhoSkolistForSection />
      <WhatSkolistNotDoSection />
      <BuiltWithRigorSection />
      <TestimonialsSection />
    </div>
  );
}
