"use client";
import React from "react";
import Title from "../elements/Title";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const { ref, controls, animationVariants } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className="px-10 py-14 bg-bgMain md:py-20 xl:py-32"
      id="About"
    >
      <div className="xl:max-w-[1280px] xl:mx-auto">
        <Title title="About" />
        <div className="sm:grid sm:grid-cols-2 mt-10 xl:mt-16">
          <div className=" sm:relative mx-auto w-[200px] lg:w-[300px] xl:w-[400px]">
            <Image
            width={200}
            height={200}
              className="w-[200px] h-[200px] rounded-full sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]"
              src="/About.webp"
              alt="顔写真"
            />
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="my-5">
              <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                Personal Introduction
              </h3>
              <div className="text-base mt-2 lg:text-lg xl:text-xl xl:mt-4">
                <p className="my-1">Name: Ryoma Suzuki</p>
                <p className="my-1">Age: 23</p>
                <p className="my-1">Bith: 2000/11/01</p>
              </div>
            </div>
            <div className="my-5">
              <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                Career History
              </h3>
              <div className="text-base mt-2 lg:text-lg xl:text-xl xl:mt-4">
                <p className="my-1">
                  ・Played baseball from 1st grade through 3rd year of
                  university.
                </p>
                <p className="my-1">・Studied abroad at CICCC in Vancouver after graduating from university.</p>
              </div>
            </div>
            <div className="my-5">
              <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                Educational
              </h3>
              <div className="text-base mt-2 lg:text-lg xl:text-xl xl:mt-4">
                <p className="my-1">
                  ・Seijo University, Faculty of Economics, Department of
                  Economics (2019 - 2023)
                </p>
                <p className="my-1">・CICCC, Web Development (2023 - Present)</p>
              </div>
            </div>
            <div className="my-5">
              <h3 className="text-xl font-semibold lg:text-2xl xl:text-3xl">
                Hobbies
              </h3>
              <div className="text-base mt-2 lg:text-lg xl:text-xl xl:mt-4">
                <p className="my-1">・Watch sports(baseball,soccer)</p>
                <p className="my-1">・Read manga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
