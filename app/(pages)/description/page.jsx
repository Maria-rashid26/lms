import { FaUserFriends, FaClock, FaStar } from "react-icons/fa";
import Image from "next/image";
import OverlappingCard from "@/components/layout/OverlappingCard"; // Import the OverlappingCard component
import CourseHeader from "@/components/layout/CourseHeader"; // Import the CourseHeader component

const CoursePage = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Section - Course Info */}
          <div className="w-full lg:w-2/3 space-y-6">
            <button className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
              Web Development
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold">Course Description/Level</h1>
            <p className="text-gray-300 text-lg lg:text-xl">Courses Description Level</p>
            <CourseHeader />
          </div>

          {/* Overlapping Card Section */}
          <div className="w-full lg:w-1/2 relative">
            <OverlappingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
