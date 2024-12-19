import React from "react";
import studentImage from "@/assets/images/homeImage.png";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const FirstSection = () => {
  return (
    <div className=" antialiased font-sans h-auto md:px-20  px-7 bg-[#d3d2d299]  dark:bg-slate-800 grid md:grid-cols-3  gap-4 my-3 py-4 md:py-6 xl:h-[400px] lg:py-8 relative md:space-y-0 space-y-3">
      <div className="md:absolute  md:right-10 lg:right-20">
        <div className="w-[250px] h-auto md:w-[300px] lg:w-[400px] pt-2 md:ml-0  ml-16 ">
          <Image src={studentImage} alt="Student" />
        </div>
      </div>
      <div className="space-y-7  text-center items-center  md:items-start  md:text-start  lg:py-5 col-span-2">
        <span className="px-4 py-2 md:py-2 bg-[#8799A670] rounded-2xl font-semibold text-sm md:text-base">
          100% Satisfaction Guarantee
        </span>
        <div className="space-y-3 md:space-y-4 ">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">
            Learn Skills From Our Top Instructors
          </h1>
          <p className="text-justify md:text-lg  md:px-0 px-10 text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            incidunt, repellendus eum magnam, delectus eaque ipsam ducimus
            eveniet voluptates quasi perferendis. Ut non voluptatem tempora
            dolore possimus corporis eaque velit?
          </p>
        </div>

        <button className="bg-[#1F2E43] text-white shadow-sm  dark:bg-slate-400 dark:text-[#1F2E43]  font-semibold px-3 md:px-6 py-2 md:py-3 rounded-md">
          <Link href="/courses" className="flex items-center space-x-2">
            <span>Explore Courses</span>
            <TiArrowRight size={20} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
