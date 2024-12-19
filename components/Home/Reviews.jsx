import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import instructor1 from "@/assets/images/ins1.png";
import instructor2 from "@/assets/images/student2.png";
import instructor3 from "@/assets/images/student1.png";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { BiLeftArrow , BiRightArrow } from "react-icons/bi";
import { Navigation } from "swiper/modules";


const Reviews = () => {
  const qaulifiedTeachers = [
    {
      id: 1,
      instructorName: "Prof Elie Jonas",
      courseName: "javascript ",
      image: instructor1,
      rating: 5,
    },
    {
      id: 2,
      instructorName: "Prof Elie Jonas",
      courseName: "javascript ",
      image: instructor1,
      rating: 5,
    },
    {
      id: 3,
      instructorName: "jonas ",
      courseName: "reactjs",
      image: instructor2,
      rating: 5,
    },
    {
      id: 4,
      instructorName: "jonas ",
      courseName: "reactjs",
      image: instructor2,
      rating: 5,
    },
    {
      id: 4,
      instructorName: "jonas ",
      courseName: "reactjs",
      image: instructor2,
      rating: 5,
    },
    {
      id: 5,
      instructorName: "Prof Elie",
      courseName: "algorhithms",
      image: instructor3,
      rating: 5,
    },
    {
      id: 6,
      instructorName: "Prof Elie",
      courseName: "algorhithms",
      image: instructor3,
      rating: 5,
    },
  ];

  return (
    <div
      className="lg:mx-20 mx-7 my-5 font-sans antialiased"
      style={{ paddingTop: "10px" }}
    >
      <h1 className="py-2 px-4  font-semibold bg-gray-300  dark:text-black mx-auto rounded-3xl w-fit">
        Our Top Reviews
      </h1>

      <div className="relative">
        {/* Custom Navigation Buttons */}
        <div
          className="custom-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer bg-slate-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          role="button"
        >
         <BiLeftArrow />
        </div>
        <div
          className="custom-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer bg-slate-500 text-white   p-3 rounded-full shadow-lg hover:scale-110 transition"
          role="button"
        >
          <BiRightArrow/>
        </div>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            } , 
            1140:{
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: ".custom-next", // Link to custom next button
            prevEl: ".custom-prev", // Link to custom prev button
          }}
          modules={[Navigation]}
          className="mt-3 max-w-[93%] "
        >
          {qaulifiedTeachers.map((item) => (
            <SwiperSlide key={item.id} className="py-2 px-2 text-gray-800 ">
              <div className="bg-[#c7c3be] dark:bg-slate-700 dark:text-white p-6 w-full rounded-md  space-y-4">
                <div
                  className="flex space-x-6 "
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt={item.instructorName}
                      className=" w-[60px] h-[60px] rounded-full  border-[3px] border-white object-cover"
                    />
                  </div>
                  <div className=" text-start">
                    <div className="flex ">
                      {[...Array(item.rating)].map((_, index) => (
                        <CiStar key={index} />
                      ))}
                    </div>
                    <p className="font-bold ">{item.instructorName}</p>
                    <p>{item.courseName}</p>
                  </div>
                </div>
                <p className="text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem minima pariatur quo perferendis officiis repel.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
