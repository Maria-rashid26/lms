import { FaUserFriends, FaClock, FaStar } from "react-icons/fa";
import Image from "next/image";
import seo from "/assets/images/ss.png"; // Image import

const CourseHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
      <div className="mb-4 sm:mb-0 sm:mr-3">
        <Image
          src={seo} // Use the imported image path
          width={40}
          height={40}
          alt="Instructor"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <p className="font-semibold text-lg sm:mr-4 text-center sm:text-left">Elly John</p>
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left text-gray-400">
          <span className="flex items-center mb-2 sm:mb-0">
            <FaUserFriends className="mr-1" /> 22
          </span>
          <span className="flex items-center mb-2 sm:mb-0">
            <FaClock className="mr-1" /> 11h 30m
          </span>
          <span className="flex items-center">
            <FaStar className="mr-1" /> 20
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
