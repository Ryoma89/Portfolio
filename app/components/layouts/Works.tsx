import React from "react";
import Title from "../elements/Title";
import WorkCard from "../elements/work/WorkCard";

const Works = () => {
  return (
    <section className="px-10 py-14 md:py-20 xl:py-32" id="Works">
      <div className="xl:w-[1000px] xl:mx-auto">
        <Title title="Works" />
        <p className="text-center mt-5 text-sm md:text-lg lg:mt-10 xl:text-xl xl:mt-16">
          These are the websites I have developed so far.{" "}
        </p>
        <div className="mt-5 sm:grid sm:grid-cols-3 sm:gap-5 lg:mt-10">
          <WorkCard url={"https://github.com/Ryoma89/household"}/>
          <WorkCard url={"https://github.com/Ryoma89/household"}/>
          <WorkCard url={"https://github.com/Ryoma89/household"}/>
        </div>
      </div>
    </section>
  );
};

export default Works;
