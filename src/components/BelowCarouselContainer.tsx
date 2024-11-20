"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useScroll, motion, useTransform } from "framer-motion";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BelowCarouselContainer = () => {
  const tools = ["Figma", "Photoshop", "Spline", "Slack", "Cap Cut", "Webflow", "Framer", "Wix Studio", "Chat GPT's 4.0", "Vs Code"];

  const ref = useRef<HTMLDivElement | null>(null);
  const paraRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const progress = useTransform(scrollYProgress, [1, 0.12], [0, 1.06]);

  const blur = useTransform(scrollYProgress, [0, 1], [0.2, 1.06]);

  const blurTwo = useTransform(scrollYProgress, [0, 1.4], [1, 0]);

  return (
    <div className="flex w-full flex-col py-[100px] px-[250px] gap-8 text-black mt-48">
      <div className="flex flex-col gap-3">
        <div ref={ref} className="flex flex-col relative">
          <span
            className="text-[50px] relative font-medium tracking-[-3px]"
            // ref={strikeThroughRef}
          >
            <motion.span
              style={{
                opacity: blur,
              }}
              className="span"
            >
              You need a website
            </motion.span>
            <motion.div
              style={{
                scaleX: progress,
                transformOrigin: "left",
                background: "black",
                position: "absolute",
                top: 36,
                width: 384,
                height: "6px",
                borderRadius: 120,
              }}
            />
          </span>
          <motion.p
            className="text-[50px] font-medium tracking-[-3px] opacity-0"
            style={{
              opacity: blurTwo,
            }}
          >
            You need a high <span className="font-semibold">performing website</span>
          </motion.p>
        </div>
        <p className="text-2xl font-light tracking-[-1.44px] transition-all duration-500" ref={paraRef}>
          Creative designer, multimedia artist, and coder with a passion for crafting stunning experiences that blend aesthetics, technology, and visual storytelling seamlessly.
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-2xl font-medium uppercase tracking-[-1.44px]">Tools I have worked with:</h1>
        <div className="flex flex-col gap-1">
          {tools.map((tool, index) => (
            <span key={index} className="text-xl font-light capitalize tracking-[-1.2px]">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BelowCarouselContainer;
