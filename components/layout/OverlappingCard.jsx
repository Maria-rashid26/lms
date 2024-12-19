import { FaClock, FaUserFriends, FaStar, FaShareAlt, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import seo from "/assets/images/ss.png"; // Import the image

const OverlappingCard = () => {
  return (
    <div className="absolute top-22 right-4 sm:right-8 bg-white rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 p-4 sm:p-6">
      <div className="relative">
        <Image
          src={seo} // Replace with course thumbnail image
          width={300}
          height={150}
          alt="Course Thumbnail"
          className="rounded-lg w-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-800 font-bold">
          ▶
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-800 font-bold text-sm sm:text-base">
          Cost:   <span className="text-blue-800 mr-2">$40</span>
          <span className="line-through text-gray-500">$50</span> {/* Lighter color applied */}
        </p>
        <button className="bg-blue-800 text-white w-full py-2 rounded-lg mt-4 font-semibold text-sm sm:text-base">
          Enroll Now
        </button>
        <div className="mt-4">
          <p className="text-gray-500 font-bold text-sm sm:text-base">Include This Course:</p>
          <ul className="text-gray-700 text-xs sm:text-sm mt-2">
            {/* Duration */}
            <li className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center text-xs sm:text-sm">
                <FaClock className="mr-2" /> Duration
              </div>
              <span className="text-gray-500">6 Hours</span>
            </li>

            {/* Seats */}
            <li className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center text-xs sm:text-sm">
                <FaUserFriends className="mr-2" /> Seats
              </div>
              <span className="text-gray-500">100</span>
            </li>

            {/* Join */}
            <li className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center text-xs sm:text-sm">
                <FaStar className="mr-2" /> Join
              </div>
              <span className="text-gray-500">200</span>
            </li>

            {/* Language */}
            <li className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center text-xs sm:text-sm">🌐 Language</div>
              <span className="text-gray-500">English</span>
            </li>

            {/* Category */}
            <li className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center text-xs sm:text-sm">📁 Category</div>
              <span className="text-gray-500">Testing</span>
            </li>

            {/* Social Media Icons */}
            <li className="flex justify-between items-center py-2">
              <div className="flex items-center text-xs sm:text-sm">
                <FaShareAlt className="mr-2" /> Share
              </div>
              <div className="flex space-x-3">
                <FaTwitter className="text-blue-500 cursor-pointer" />
                <FaInstagram className="text-pink-500 cursor-pointer" />
                <FaFacebook className="text-blue-600 cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCard;
