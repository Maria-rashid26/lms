import React from "react";
import instructor1 from "@/assets/images/ins1.png";
import instructor2 from "@/assets/images/ins2.png";
import instructor3 from "@/assets/images/ins3.png";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { TiArrowRight } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoShareSocialOutline } from "react-icons/io5";

const QualifiedInstructor = () => {
  const getRandomColor = () => {
    const colors = [
      "#009FBD2B",
      "#BD00B02B",
      "#06D00140",
      "#c6edff",
      "#b2f9ff",
      "#ffb2ab ",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const qaulifiedTeachers = [
    {
      id: 1,
      instructorName: "Prof Elie Jonas",
      courseName: "javascript ",
      image: instructor1,
    },

    {
      id: 2,
      instructorName: "jonas ",
      courseName: "reactjs",
      image: instructor2,
    },
    {
      id: 3,
      instructorName: "Prof Elie",
      courseName: "algorithms",
      image: instructor3,
    },
    {
      id: 4,
      instructorName: "Prof Elie",
      courseName: "algorithms",
      image: instructor3,
    },
  ];

  return (
    <div>
      <div className="max-w-full lg:mx-20 mx-7 py-3 relative mb-2 dark:bg-slate-700 rounded-sm font-sans antialiased bg-[#E6E1DB]">
        <p className="px-2 py-1 mx-8 bg-[#8799A670]  rounded-full font-semibold text-sm md:text-base text-center w-fit">
          Our top qualified instructors
        </p>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          className="mt-2 flex justify-center"
          modules={[FreeMode, Pagination]}
        >
          {qaulifiedTeachers.map((ins) => (
            <SwiperSlide key={ins.id}>
              <div className="flex mx-auto my-8 md:my-0 justify-center items-center xl:h-[320px] h-[300px]">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="  w-[270px] relative"
                >
                  <path
                    fill={getRandomColor()} // Random color
                    d="M46.2,-52.8C62.4,-41.5,79.8,-29.3,84,-13.6C88.2,2.1,79.3,21.4,66.6,33.7C53.8,46.1,37.3,51.5,19.9,60.4C2.4,69.2,-15.8,81.5,-26.7,76.2C-37.5,71,-40.8,48.2,-42.7,31.3C-44.6,14.3,-45.1,3.1,-46.3,-11.3C-47.6,-25.8,-49.5,-43.6,-41.9,-56.4C-34.4,-69.1,-17.2,-76.8,-1.1,-75.5C15,-74.2,30.1,-64,46.2,-52.8Z"
                    transform="translate(100 100)"
                  />
                </svg>

                <div className="absolute">
                  <Image
                    src={ins.image}
                    alt={ins.title}
                    height={100}
                    width={200}
                  />

                  <div className="px-5 text-center w-full mt-5">
                    <h3 className="font-semibold text-[1rem]">
                      {ins.courseName}
                    </h3>
                    <h1 className="font-bold text-base font-sans  xl:text-xl">
                      {ins.instructorName}
                    </h1>
                  </div>

                  <Link
                    href={"/"}
                    className="w-10 h-10 absolute top-8 ml-40 xl:ml-48  rounded-full flex bg-blue-300 items-center justify-center hover:bg-blue-400 duration-300"
                  >
                    <IoShareSocialOutline size={25} className="text-blue-900" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:items-end items-center flex justify-center md:justify-end mx-20">
        <button className="bg-[#061E43] text-white px-3 md:px-4 py-2 md:py-3 rounded-md ">
          <Link
            href="/courses"
            className="flex items-center space-x-2 md:text-base text-sm"
          >
            <span>Become a Instructor</span>
            <TiArrowRight size={20} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QualifiedInstructor;
