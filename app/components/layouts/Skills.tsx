// components/Skills.js
import React from "react";
import Title from "../elements/Title";
import SkillCard from "../elements/skill/SkillCard";
import {
  backEndSkills,
  frontEndSkills,
  versionControlSkills,
} from "@/constants/skil";

const Skills = () => {
  return (
    <section className="bg-bgMain px-10 py-14 md:py-20 xl:py-32" id="Skills">
      <div className="xl:w-[1000px] xl:mx-auto">
        <Title title="Skills" />
        <div className="mt-10 xl:mt-16 ">
          <SkillCard title="Front-end Development" skills={frontEndSkills} />
          <SkillCard title="Back-end Development" skills={backEndSkills} />
          <SkillCard title="Version Control" skills={versionControlSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
