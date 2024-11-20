"use client";

import React, { useEffect, useState } from "react";

const CarouselSection = () => {
  const [paddingValue, setPaddingValue] = useState(270);
  const maxPadding = 270;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minPadding = 0;
      setPaddingValue(Math.max(minPadding, maxPadding - scrollPosition));
    };

    window.addEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-7">
      <img src="/left-2.jpg" alt="" style={{ paddingTop: `${paddingValue}px` }} />
      <img src="/left-1.png" alt="" style={{ paddingTop: `${Math.max(0, paddingValue / 2)}px` }} />
      <img src="/mid.png" alt="" style={{ paddingTop: `${Math.max(0, paddingValue / 4)}px` }} />
      <img src="/right-1.png" alt="" style={{ paddingTop: `${Math.max(0, paddingValue / 2)}px` }} />
      <img src="/right-2.png" alt="" style={{ paddingTop: `${paddingValue}px` }} />
    </div>
  );
};
export default CarouselSection;
