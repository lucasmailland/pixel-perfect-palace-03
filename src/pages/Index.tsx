
import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { OrganizationSection } from "@/components/sections/OrganizationSection";
import { DiversitySection } from "@/components/sections/DiversitySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden pb-[116px] max-md:pb-[50px]">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <HeroSection />
        <PrinciplesSection />
        <OrganizationSection />
        <DiversitySection />
        <PillarsSection />
        <CertificationsSection />
      </main>
    </div>
  );
};

export default Index;
