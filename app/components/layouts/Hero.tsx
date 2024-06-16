"use client";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const { ref, controls, animationVariants } = useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className="p-10 mt-[96px] mb-10 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="lg:grid lg:grid-cols-2 lg:items-center xl:max-w-[1280px] xl:mx-auto">
        <div className="">
          <TypewriterEffectSmooth
            words={[{ text: "Hi, I'm Ryoma!" }]}
            className="text-2xl xs:text-4xl font-bold md:text-4xl lg:text-4xl xl:text-4xl"
            cursorClassName="bg-blue-500"
          />

          <h2 className="break-words">
          {showText && (
            <TypewriterEffectSmooth
              words={[
                {
                  text: "I'm a ",
                  className:
                    "xs:text-xl xs:mt-2 sm:text-2xl md:text-3xl lg:text-2xl lg:mt-4 xl:text-2xl",
                },
                {
                  text: "Front-End Developer",
                  className:
                    "text-blue-500 font-semibold text-xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl",
                },
                {
                  text: ".",
                  className:
                    "xs:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold",
                },
              ]}
              className="xs:text-xl xs:mt-2 md:text-xl lg:text-3xl lg:mt-4 xl:text-4xl"
              cursorClassName="bg-blue-500"
            />
          )}
          </h2>
        </div>
        <div className="mt-7 sm:mt-0">
          <img src="/Hero.webp" alt="Hero Image" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
