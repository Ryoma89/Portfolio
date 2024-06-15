"use client";
import React, { useEffect, useState } from "react";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../ui/typewriter-effect";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="p-10 mt-[96px] mb-10 md:py-20 lg:py-24 xl:py-32">
      <div className="sm:grid sm:grid-cols-2 sm:items-center xl:w-[1000px] xl:mx-auto">
        <div className="">
          <h2 className="text-2xl xs:text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            <TypewriterEffectSmooth
              words={[{ text: "Hi, I'm Ryoma!" }]}
              className=""
              cursorClassName="bg-blue-500"
            />
          </h2>

          {showText && (
            <TypewriterEffectSmooth
              words={[
                {
                  text: "I'm a ",
                  className:
                    "xs:text-xl xs:mt-2 md:text-xl lg:text-3xl lg:mt-4 xl:text-4xl",
                },
                {
                  text: "Front-End Developer",
                  className:
                    "text-blue-500 font-semibold text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl",
                },
                {
                  text: ".",
                  className:
                    "xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold",
                },
              ]}
              className="xs:text-xl xs:mt-2 md:text-xl lg:text-3xl lg:mt-4 xl:text-4xl"
              cursorClassName="bg-blue-500"
            />
          )}
        </div>
        <div className="mt-7 sm:mt-0">
          <img src="/Hero.webp" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
