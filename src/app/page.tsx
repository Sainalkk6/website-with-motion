import BelowCarouselContainer from "@/components/BelowCarouselContainer";
import HeroSection from "@/components/CarouselSection";
import MidPart from "@/components/MidPart";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="h-[1000vh] font-ds">
      <Navbar />
      <MidPart />
      <HeroSection />
      <BelowCarouselContainer />
    </div>
  );
};

export default Page;
