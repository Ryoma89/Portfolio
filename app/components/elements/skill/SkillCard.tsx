// components/SkillCard.tsx
import { Skill } from "@/types/skill";
import React from "react";
import SkillItem from "./SkillItem";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  skills: Skill[];
};
const SkillCard = ({ title, skills }: Props) => {
  return (
    <>
    <Card className="my-5 sm:hidden">
      <CardHeader className="text-lg font-semibold text-center">
        {title}
      </CardHeader>
      <CardContent className="grid grid-cols-3 xs:grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </CardContent>
    </Card>

    <Card className="hidden my-5 sm:flex sm:items-center  sm:px-5 sm:py-7 xl:my-7">
      <h3 className="text-md font-semibold min-w-[190px] sm:mr-5 lg:text-xl lg:min-w-[235px] xl:text-2xl xl:w-4/12">{title}: </h3>
      {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
    </Card>
    </>
  );
};

export default SkillCard;
