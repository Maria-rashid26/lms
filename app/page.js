"use client";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import FirstSection from "@/components/Home/FirstSection";
import SecondSection from "@/components/Home/SecondSection";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import CoursesByCategories from "@/components/Home/CoursesByCategories";
import QualifiedInstructor from "@/components/Home/QualifiedInstructor";
import Reviews from "@/components/Home/Reviews";

export default function Home() {
  const t = useTranslations("About");
  const [locale, setlocale] = useState("en");
  useEffect(() => {
    const locale2 = Cookies.get("locale");
    setlocale(locale2);
  });

  return (
    <>

      <div className={`${locale === "en" ? "text-start" : "text-end"}  `}>
        <FirstSection />
        <SecondSection />
        <FeaturedCourses />
        <CoursesByCategories />
        <QualifiedInstructor />
        <Reviews />
      </div>
    </>
  );
}
//
