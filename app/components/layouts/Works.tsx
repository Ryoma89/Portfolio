"use client";
import React from "react";
import Title from "../elements/Title";
import WorkCard from "../elements/work/WorkCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Works = () => {
  const { ref, controls, animationVariants } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className="px-10 py-14 md:py-20 xl:py-32"
      id="Works"
    >
      <div className="xl:max-w-[1280px] xl:mx-auto">
        <Title title="Works" />
        <p className="text-center mt-5 text-sm md:text-lg lg:mt-10 xl:text-xl xl:mt-16">
          These are the websites I have developed so far.{" "}
        </p>
        <div className="mt-5 sm:grid sm:grid-cols-3 sm:gap-5 lg:mt-10">
          <WorkCard url={"https://github.com/Ryoma89/household"} />
          <WorkCard url={"https://github.com/Ryoma89/household"} />
          <WorkCard url={"https://github.com/Ryoma89/household"} />
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
