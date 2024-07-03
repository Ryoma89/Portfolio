import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    name: string;
    src: string;
  };
  index: number;
};

const SkillItem = ({ skill, index }: Props) => {
  return (
    <li key={index} className="flex justify-center sm:mr-5 sm:flex-wrap">
      <Image src={skill.src} alt={skill.name} width={48} height={48} className="w-12 h-12 lg:w-16 lg:h-16 xl:h-20 xl:w-20" />
    </li>
  );
};

export default SkillItem;
