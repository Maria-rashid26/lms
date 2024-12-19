"use client";
import React from "react";
import Image from "next/image";
import stud from "/assets/images/studying-togethe.jpg";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contact = () => {
  return (
    <div>
      <div className="relative xl:h-[350px] lg:h-[300px] md:h-[200px] h-[150px] antialiased font-sans">
        <Image
          src={stud}
          layout="fill"
          objectFit="cover"
          className="rounded-md object-center"
        />
        <div className="absolute inset-0 bg-blue-950/70"></div>
        <div className="absolute inset-0 text-white md:p-20  p-10  md:space-y-6 space-y-3 ">
          <h1 className="font-bold md:text-3xl text-xl tracking-wider">
            Contact With Us
          </h1>
          <div className=" flex space-x-4 text-smlg:text-base px-2 font-semibold">
            <Link href="/" className="hover:underline flex items-center">
              <span>Home</span>
              <FaAngleLeft size={12} className="ml-1" />
            </Link>
            <p>Contact </p>
          </div>
        </div>
      </div>
      <div className="xl:my-28 lg:my-14 md:my-10 my-6 xl:mx-36 lg:mx-16 md:mx-10 mx-6">
        <div className="md:flex gap-12 space-y-8 md:space-y-0">
          <div className="md:space-y-8 space-y-2 flex-grow w-full">
            <h1 className="text-[#082A5E] font-bold md:text-2xl text-xl dark:text-slate-200">
              Keep In Touch With Us
            </h1>
            <div className=" space-y-8 lg:text-base text-sm text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eligendi minus magnam, blanditiis voluptatibus quo
                pariatur, nostrum distinctio reprehenderit veritatis, ad
                corporis. Culpa consequatur esse id. Adipisci cum dolores
                reprehenderit?
              </p>
              <div className=" space-y-8">
                <div className="flex  space-x-8">
                  <span className="w-[40px] h-[40px] rounded-full bg-[#082A5E] text-white flex text-center items-center justify-center">
                    <FaLocationDot size={18} />
                  </span>
                  <div>
                    <p>68 Street Holakt Street world</p>
                    <p>10002 New York</p>
                  </div>
                </div>
                <div className="flex  space-x-8">
                  <span className="w-[40px] h-[40px] rounded-full bg-[#082A5E] text-white flex text-center items-center justify-center">
                    <BiSolidPhoneCall size={18} />
                  </span>
                  <div>
                    <p>+123 555 69090</p>
                    <p>+123 555 69090</p>
                  </div>
                </div>
                <div className="flex  space-x-8">
                  <span className="w-[40px] h-[40px] rounded-full bg-[#082A5E] text-white flex text-center items-center justify-center">
                    <FaEnvelope size={18} />
                  </span>
                  <div>
                    <p>info@gmail.com</p>
                    <p>info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow w-full md:space-y-8 space-y-2 xl:mx-9">
            <h1 className="text-[#082A5E] font-bold md:text-2xl text-xl dark:text-slate-200">
              Get In Touch
            </h1>
            <form
              action=""
              className="rounded-sm m-2 space-y-2 pt-2 px-2 lg:text-base text-sm bg-gray-200 dark:bg-zinc-400 "
            >
              <Input
                type="text"
                name=""
                id=""
                placeholder="Name *"
                className="bg-white h-11 px-5 outline-none rounded-sm w-full dark:bg-[#061E43D9]  dark:text-white 
 "
              />
              <Input
                type="text"
                name=""
                id=""
                placeholder="Email *"
                className="bg-white h-11 px-5 outline-none rounded-sm w-full dark:bg-[#061E43D9]    dark:text-white"
              />
              <div className="flex space-x-2">
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone *"
                  className="bg-white h-11 px-5 outline-none rounded-sm w-full dark:bg-[#061E43D9]   dark:text-white"
                />
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject *"
                  className="bg-white h-11 px-5 outline-none rounded-sm w-full dark:bg-[#061E43D9]  dark:text-white"
                />
              </div>
              <textarea
                onResize="none"
                rows={8}
                name=""
                id=""
                placeholder="Message"
                className="bg-white p-5 outline-none border  focus:border-black rounded-sm w-full dark:text-white dark:bg-[#061E43D9]"
              ></textarea>
            </form>
            <Button className="bg-blue-950 mx-3 items-end px-6 shadow-md shadow-blue-800 dark:text-white dark:hover:bg-blue-700">
              Send message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
