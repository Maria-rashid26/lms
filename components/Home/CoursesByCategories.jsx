import React from "react";
import { PiBankLight } from "react-icons/pi";
import { IoLogoReact } from "react-icons/io5";
import { LiaDesktopSolid } from "react-icons/lia";
import { BsEnvelopePaper } from "react-icons/bs";
import { PiPenNibStraight } from "react-icons/pi";
import { TiArrowRight } from "react-icons/ti";
import Link from "next/link";

const CoursesByCategories = () => {
  return (
    <div className=" mx-7 px-4 md:px-0  lg:mx-20  bg-[#E6E1DB] dark:bg-slate-700 my-12 h-auto rounded-sm flex flex-wrap  justify-around  md:gap-7 font-sans antialiased">
      <div className="lg:space-y-8 space-y-5 md:py-8 py-4  flex-grow-1 w-full md:w-[400px]">
        <p className="  px-4 py-2  bg-[#8799A670] rounded-2xl font-semibold text-sm md:text-xl  text-center w-fit mx-auto md:mx-0 ">
          Unique Online Courses
        </p>
        <h1 className=" text-xl font-bold   md:text-xl  text-center w-fit mx-auto md:mx-0">
          Browse By Cetagory
        </h1>
        <p className=" text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at error,
          facere expedita alias veniam labore amet, rem quidem eveniet
          blanditiis eos voluptatum ullam commodi, id hic architecto laboriosam
          eius.
        </p>

        <div className="flex items-center justify-center md:justify-start md:items-start">
      
          <button className="bg-[#1F2E43] text-white  dark:bg-slate-400 dark:text-[#1F2E43]  font-semibold px-3 md:px-5 py-2 md:py-3 rounded-md">
            <Link href="/courses" className="flex items-center space-x-2 md:text-base text-sm">
              <span>All Category</span>
              <TiArrowRight size={20} />
            </Link>
          </button>
        </div>
      </div>
      <div className="md:my-10 my-3  space-y-4 flex-grow-1 w-[500px]  ">
        <div className="flex justify-center space-x-4  gap-4">
          <div className="bg-[#F7F7F7] dark:bg-slate-900  w-[115px] h-[120px] rounded-md flex-none text-center space-y-2 ">
            <div className="bg-white rounded-full dark:bg-slate-200 dark:text-gray-700  flex items-center justify-center w-12 h-12 mx-auto mt-4  text-center">
              <PiPenNibStraight size={25} />
            </div>
            <div>
              <h1 className="font-semibold text-[12px]">Graphic Design</h1>
              <p className="text-[10px] text-gray-600">23 Courses</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] dark:bg-slate-900  w-[115px] h-[120px] rounded-md flex-none text-center space-y-2 ">
            <div className="bg-white rounded-full dark:bg-slate-200 dark:text-gray-700  flex items-center justify-center w-12 h-12 mx-auto mt-4  text-center">
              <BsEnvelopePaper size={25} />
            </div>
            <div>
              <h1 className="font-semibold text-[12px]">Marketing</h1>
              <p className="text-[10px] text-gray-600">23 Courses</p>
            </div>
          </div>
        </div>
        <div className="sm:flex-nowrap  flex  flex-wrap  justify-center space-x-4 gap-4 sm:gap-0">
          <div className="bg-[#F7F7F7] dark:bg-slate-900  w-[115px] h-[120px] rounded-md flex-none text-center space-y-2 ">
            <div className="bg-white rounded-full dark:bg-slate-200 dark:text-gray-700  flex items-center justify-center w-12 h-12 mx-auto mt-4  text-center">
              <PiBankLight size={25} />
            </div>
            <div>
              <h1 className="font-semibold text-[12px]">Finance</h1>
              <p className="text-[10px] text-gray-600">11 Courses</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] dark:bg-slate-900  w-[115px] h-[120px] rounded-md flex-none text-center space-y-2 ">
            <div className="bg-white rounded-full dark:bg-slate-200 dark:text-gray-700  flex items-center justify-center w-12 h-12 mx-auto mt-4  text-center">
              <LiaDesktopSolid size={25} />
            </div>
            <div>
              <h1 className="font-semibold text-[12px]">Development </h1>
              <p className="text-[10px] text-gray-600">20 Courses</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] dark:bg-slate-900  w-[115px] h-[120px] rounded-md flex-none text-center space-y-2 ">
            <div className="bg-white rounded-full dark:bg-slate-200 dark:text-gray-700  flex items-center justify-center w-12 h-12 mx-auto mt-4  text-center">
              <IoLogoReact size={25} />
            </div>
            <div>
              <h1 className="font-semibold text-[12px]">Science</h1>
              <p className="text-[10px] text-gray-600">11 Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesByCategories;
