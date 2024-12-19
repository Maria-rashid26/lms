"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaClock, FaUserFriends, FaStar, FaAngleLeft } from "react-icons/fa";
import seo from "/assets/images/ss.png";
import img from "/assets/images/seo.png";
import instructorImg from "/assets/images/cats.jpg";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import FilterSidebar from "@/components/ui/FilterSidebar";
import Pagination from "@/components/ui/Pagination";
import stud from "/assets/images/studying-togethe.jpg";

  // Import statements (same as above)

const Page = () => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Sample course data
  const courses = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Course ${i + 1}`,
    professorName: `Professor ${i + 1}`,
    mode: i % 2 === 0 ? "Online" : "Physical",
    lessons: Math.floor(Math.random() * 20) + 1,
    students: Math.floor(Math.random() * 200) + 1,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    actualPrice: `$${(Math.random() * 150).toFixed(2)}`,
    rating: (Math.random() * 5).toFixed(1),
    image: i % 2 === 0 ? seo : img,
  }));

  const totalCourses = courses.length;
  const totalPages = Math.ceil(totalCourses / itemsPerPage);

  const displayedCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating 1 second loading
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="relative mt-5 antialiased">
      {/* Header Section */}
      <div className="relative xl:h-[430px] lg:h-[350px] md:h-[280px] h-[150px]">
        <Image
          src={stud}
          alt={t("courseThumbnail")}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-blue-950/70"></div>
        <div className="absolute inset-0 text-white flex items-center justify-center">
          <div className="text-center space-y-2">
            <h1 className="font-bold md:text-3xl text-xl">{t("ourCourses")}</h1>
            <div className="flex justify-center space-x-4 text-sm md:text-base">
              <Link href="/" className="hover:underline flex items-center">
                <span>{t("home")}</span>
                <FaAngleLeft size={12} className="ml-1" />
              </Link>
              <p>{t("allCourses")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        <FilterSidebar />
        <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedCourses.map((course) => (
            <div key={course.id} className="flex flex-col">
              {isLoading ? (
                <SkeletonCard />
              ) : (
                <div className="border rounded-lg shadow-sm p-3 bg-white dark:bg-gray-900 hover:shadow-md transition duration-200">
                  {/* Course Image */}
                  <div className="w-full h-28 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  {/* Course Title */}
                  <h2 className="font-bold text-sm leading-tight mt-3 text-gray-900 dark:text-white">
                    {course.title}
                  </h2>

                  {/* Instructor and Mode */}
                  <div className="flex items-center mt-3">
                    <div className="w-12 h-10 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700 shadow-md">
                      <Image
                        src={instructorImg}
                        alt={course.professorName}
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full ml-3">
                      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                        {course.professorName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                        {course.mode}
                      </p>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-gray-400 mt-3 text-xs dark:text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaClock size={12} />
                      <span>{`${course.lessons} ${t("lessons")}`}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUserFriends size={12} />
                      <span>{`${course.students} ${t("students")}`}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-3 dark:border-gray-600"></div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {course.price}
                      </span>
                      <span className="ml-2 text-xs text-gray-500 line-through dark:text-gray-400">
                        {course.actualPrice}
                      </span>
                    </div>
                    <div className="flex items-center text-yellow-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(course.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={12}
                        />
                      ))}
                      <span className="ml-1 text-gray-500 text-xs dark:text-gray-400">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Page;
