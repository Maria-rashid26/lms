"use client";
import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import student1 from "@/assets/images/student1.png";
import student2 from "@/assets/images/student2.png";
import frameImage from "@/assets/images/frame.png";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="lg:mx-20 mx-7 bg-[#E6E1DBCC] dark:bg-slate-700 lg:flex font-sans gap-5 mt-12">
      {/* Left section - Images */}
      <div className="relative  lg:flex  hidden lg:w-[50%]  xl:w-[45%] flex-shrink-0 ">
        <div className="absolute top-0 left-0 right-0 xl:w-[400px] mx-auto bg-transparent">
          <Image src={frameImage} alt="Frame" objectPosition="center" />
        </div>
        <div className="flex justify-end my-3 md:mx-16 space-x-4 z-10 relative">
          <div className="xl:w-[180px] lg:w-[150px] mt-40">
            <Image
              src={student2}
              alt="Student 2"
              className="border-[7px] border-white"
            />
          </div>
          <div className="xl:w-[250px] lg:w-[200px] md:mt-0 mt-3">
            <Image
              src={student1}
              alt="Student 1"
              className="border-[7px] border-white"
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className=" w-full xl:w-[55%]  lg:w-[50%] md:pr-9 space-y-5 my-8 lg:my-0  md:mx-0 px-9 py-7 lg:pb-0">
        <span className="px-4 py-2 md:py-2 bg-[#8799A670]  flex items-center justify-center w-fit rounded-2xl font-semibold text-sm md:text-base">
          Get to know about us
        </span>
        <div className="space-y-7  pb-5">
          <div className="md:space-y-3 space-y-1">
            <h1 className="font-bold text-xl md:text-xl lg:text-3xl ">
              Discover top instructors around the world
            </h1>
            <p className="text-justify text-sm md:text-base mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              incidunt, repellendus eum magnam, delectus eaque ipsam ducimus
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex space-x-3 justify-start items-center">
              <PiChalkboardTeacherDuotone size={35} />
              <div className="text-sm text-start  md:flex md:space-x-2 w-full">
                <p>200+</p>
                <p>Expert Tutors</p>
              </div>
            </div>
            <div className="flex space-x-3 justify-start items-center">
              <IoSchoolOutline size={35} />
              <div className="text-sm text-start  md:flex md:space-x-2 w-full">
                <p>1000+ </p>
                <p>Students</p>
              </div>
            </div>
            <div className="flex space-x-3 md:justify-start md:items-center ">
              <TbNotes size={35} />
              <div className="text-sm text-start  md:flex md:space-x-2 w-full">
                <p>1500+</p>
                <p>Top Lessons</p>
              </div>
            </div>
            <div className="flex space-x-3 justify-start items-center">
              <MdOutlineSlowMotionVideo size={35} />
              <div className="text-sm text-start  md:flex md:space-x-2 w-full">
                <p>1000+ </p>
                <p>Pro videos</p>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-[#1F2E43] text-white  dark:bg-slate-400 dark:text-[#1F2E43]  font-semibold px-3 md:px-4 py-2 md:py-3 rounded-md relative md:right-5  left-20  md:bottom-5 xl:bottom-0 bottom-0">
          <Link href="/courses" className="flex items-center space-x-2 lg:text-base text-sm">
            <span>Discover more</span>
            <TiArrowRight size={20} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
