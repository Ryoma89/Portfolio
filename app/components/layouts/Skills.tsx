"use client";
import React from "react";
import Title from "../elements/Title";
import SkillCard from "../elements/skill/SkillCard";
import {
  backEndSkills,
  frontEndSkills,
  versionControlSkills,
} from "@/constants/skil";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, controls, animationVariants } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className="bg-bgMain px-10 py-14 md:py-20 xl:py-32"
      id="Skills"
    >
      <div className="xl:max-w-[1280px] xl:mx-auto">
        <Title title="Skills" />
        <div className="mt-10 xl:mt-16 ">
          <SkillCard title="Front-end Development" skills={frontEndSkills} />
          <SkillCard title="Back-end Development" skills={backEndSkills} />
          <SkillCard title="Version Control" skills={versionControlSkills} />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
