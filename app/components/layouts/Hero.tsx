import React from "react";

const Hero = () => {
  return (
    <section className="p-10 mt-[96px] mb-10 md:py-20 lg:py-24 xl:py-32">
      <div className="sm:grid sm:grid-cols-2 sm:items-center xl:w-[1280px] xl:mx-auto">
      <div className="">
        <h2 className="text-2xl xs:text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">Hi, I'm Ryoma</h2>
        <p className="xs:text-xl xs:mt-2 md:text-xl lg:text-3xl lg:mt-4 xl:text-4xl">I'm a <span className="text-blue-500 font-semibold text-xl xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl">Front-End Developer</span></p>
      </div>
      <div className="mt-7 sm:mt-0">
        <img src="/Hero.webp" alt="Hero Image" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
