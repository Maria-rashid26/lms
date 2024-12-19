import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#082A5E] dark:bg-slate-700  text-white/55 px-20  pt-7 pb-4 font-sans antialiased  ">
      <div className="lg:flex justify-between mb-4 items-center space-y-5 lg:space-y-0 space-x-6 ">
        <div className=" flex justify-between md:w-[600px] space-x-4 lg:space-x-0">
          <ul className="space-y-2 text-sm  ">
            <li className="font-bold text-white">Logo</li>
            <li>Employee database</li>
            <li>Payroll</li>
            <li>Absences</li>
            <li>time tracking</li>
            <li>shift Planner </li>
            <li>Recruiting </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="font-bold text-white">Informations</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
          <ul className="space-y-2 text-sm  ">
            <li className="font-bold text-white">Company</li>
            <li>About us</li>
            <li>
              <Link href={"/contact"}>Contact us</Link>
            </li>
            <li>Careers</li>
            <li>E learning</li>
          </ul>
        </div>
        <div className="w-[300px] bg-white/20 rounded-[2px] p-4 space-y-2">
          <h1 className="font-semibold text-white">Subscribe</h1>
          <div className="flex  bg-white w-full h-12 rounded-md hover:border-[3px] hover:border-blue-400 duration-200 border-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email address"
              className=" bg-transparent w-full h-12 rounded-md outline-none text-gray-800 p-2"
            />{" "}
            <span className="bg-blue-500 w-[50px] rounded-e-md flex justify-center items-center text-white ">
              <TiArrowRight size={25} />
            </span>
          </div>
          <p>
            Hello, we are Media. Our goal is to translate the positive effects
            from revolutionizing how companies engage with their clients & their
            team.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-2">
        <div className="flex space-x-4 ">
          <span className=" rounded-full border-2 border-white py-2 px-3 text-white">
            <MdOutlineFacebook size={20} />
          </span>
          <span className=" rounded-full border-2 border-white py-2 px-3 text-white">
            <FaTwitter size={20} />
          </span>
          <span className=" rounded-full border-2 border-white py-2 px-3 text-white">
            <FaLinkedin size={20} />
          </span>
        </div>
        <div className="mr-44 space-x-5 text-white  text-sm">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
