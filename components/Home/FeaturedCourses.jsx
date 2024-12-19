"use client";
import React from "react";
import Image from "next/image";
import student1 from "@/assets/images/student1.png";
import { GoBook } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pagination from "../ui/Pagination";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Search Engine Optimization, Beginner Level",
      instructor: "Prof. Elie Jonas",
      lessons: 5,
      students: "60+ Students",
      price: "$34",
      originalPrice: "$45",
      rating: 5,
      image: student1,
      instructorImage: student1,
      classes: "online/onsite",
    },
    {
      id: 3234,
      title: "Digital Marketing Masterclass",
      instructor: "Dr. Jane Smith",
      lessons: 10,
      students: "120+ Students",
      price: "$50",
      originalPrice: "$75",
      rating: 5,
      image: student1,
      instructorImage: student1,
      classes: "online/onsite",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      instructor: "Dr. Jane Smith",
      lessons: 10,
      students: "120+ Students",
      price: "$50",
      originalPrice: "$75",
      rating: 5,
      image: student1,
      instructorImage: student1,
      classes: "online/onsite",
    },
    {
      id: 453,
      title: "Digital Marketing Masterclass",
      instructor: "Dr. Jane Smith",
      lessons: 10,
      students: "120+ Students",
      price: "$50",
      originalPrice: "$75",
      rating: 5,
      image: student1,
      instructorImage: student1,
      classes: "online/onsite",
    },
    {
      id: 3,
      title: "Introduction to Programming",
      instructor: "Mr. John Doe",
      lessons: 8,
      students: "80+ Students",
      price: "$40",
      originalPrice: "$60",
      rating: 5,
      image: student1,
      instructorImage: student1,
      classes: "online/onsite",
    },
    // Add more courses here
  ];

  return (
    <div className="bg-[#E6E1DB]  my-14 py-4 dark:bg-slate-700">
      <div className="md:mx-20 mx-7  font-sans mt-2 ">
        <p className="bg-[#8799A670] py-1 px-3  my-2 rounded-full font-semibold text-sm md:text-[16px] w-fit">
          Our Featured Courses
        </p>
        <div className="w-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3    ">
          {courses.map((course) => (
            <div className="rounded-lg bg-white  dark:bg-slate-900  shadow-md  w-full relative">
              <Image
                src={course.image}
                className="rounded-lg h-[160px] w-full object-cover sm:object-top shadow-sm"
                alt={course.title}
              />
              <div className="px-4 space-y-1 antialiased">
                <h1 className="font-semibold text-start mt-1 ">
                  {course.title}
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10  rounded-full object-cover border-[3px] border-gray-300"
                    />
                    <p className="text-[14px] text-gray-600 font-normal dark:text-white">
                      {course.instructor}
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700 font-bold dark:text-white">
                    {course.classes}
                  </p>
                </div>
                <div className="flex text-[14px] justify-between  text-gray-600 dark:text-white">
                  <div className="flex  justify-between items-center space-x-3 text-[12px] align-middle">
                    <GoBook />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[12px] align-middle">
                    <PiStudent size={15} />
                    <span>{course.students}</span>
                  </div>
                </div>
                <hr className="bg-gray-300 h-[2px]" />
                <div className="flex justify-between pb-3">
                  <div className="flex space-x-5">
                    <h3 className="font-semibold text-gray-900 text-[14px] dark:text-white">
                      {course.price}
                    </h3>
                    <h3 className="font-semibold text-gray-500 text-[14px] line-through">
                      {course.originalPrice}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    {[...Array(course.rating)].map((_, index) => (
                      <div key={index}>
                        <CiStar />
                      </div>
                    ))}
                    <p className="pl-2 text-[12px]">(7493)</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default FeaturedCourses;
