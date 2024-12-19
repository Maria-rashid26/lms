"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ThemeHandler";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function CategoryLink({ category, selectedLanguage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group min-w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Category Link */}
      <Link
        href={`/courses?category=${category._id}`}
        className="hover:text-blue-600 min-w-[900px]" // Set a minimum width
      >
        {category.name[selectedLanguage]}
      </Link>

      {/* Subcategories */}
      {category.subCategory && isHovered && (
        <div className="absolute left-full top-0 mt-[-1px] min-w-max shadow-lg  p-4">
          {category.subCategory.map((subCategory) => (
            <CategoryLink
              key={subCategory._id}
              category={subCategory}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSearchBarOpen, setisSearchBarOpen] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const openSearchBar = () => {};
  const closeMenu = () => {
    setisMenuOpen(false);
  };
  const categoriesLoading = false;
  const categories = [
    {
      _id: 1,
      name: {
        en: "Category 1",
        ur: "UrduCat 1",
      },
    },
    {
      _id: 2,
      name: {
        en: "Category 2",
        ur: "UrduCat 2",
      },
      subCategory: [
        {
          _id: 21,
          name: {
            en: "SubCategory 2",
            ur: "SubUrduCat 2",
          },
          subCategory: [
            {
              _id: 211,
              name: {
                en: "Category 1",
                ur: "UrduCat 1",
              },
            },
          ],
        },
        {
          _id: 22,
          name: {
            en: "SubCategory 2",
            ur: "SubUrduCat 2",
          },
        },
      ],
    },
    {
      _id: 3,
      name: {
        en: "Category 3",
        ur: "UrduCat 3",
      },
    },
    {
      _id: 4,
      name: {
        en: "Category 4",
        ur: "UrduCat 4",
      },
    },
  ];
  const languages = [
    { value: "en", label: "English", flag: "GB" },
    { value: "ur", label: "Urdu", flag: "PK" },
  ];

  const switchLanguage = async (locale) => {
    // Set the locale cookie
    Cookies.set("locale", locale, { expires: 30 }); // Cookie expires in 30 days

    window.location.reload();
  };

  useEffect(() => {
    const locale = Cookies.get("locale");
    setSelectedLanguage(locale);
  });

  return (
    <nav className="relative ">
      {/* Mobile side menu */}
      <div
        className={`min-h-screen mdd:hidden bg-gray-100 z-10 dark:bg-slate-900 transition-all duration-500 absolute top-0 left-0 w-full ${
          isMenuOpen ? "-translate-x-[0%]" : "-translate-x-[100%]"
        }   `}
      >
        <div className="top-navbar   w-full mx-auto flex items-center shadow-md py-1   justify-between px-3 ">
          {" "}
          {/* Logo */}
          <Link href={"/"}>
            <img
              onClick={closeMenu}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s"
              alt="Logo"
              className="h-[60px] w-[60px] object-cover  rounded-full flex  "
            />
          </Link>
          {/* Close menu button */}
          <div className="flex space-x-2 items-center">
            <ModeToggle></ModeToggle>
            <button
              onClick={() => {
                setisMenuOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                height={30}
                width={30}
                id="cross"
              >
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="9.37"
                  y2="54.63"
                  fill="none"
                  stroke={isDarkTheme ? "#ffffff" : "#010101"}
                  strokeMiterlimit="10"
                  strokeWidth="4"
                ></line>
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="54.63"
                  y2="9.37"
                  fill="none"
                  stroke={isDarkTheme ? "#ffffff" : "#010101"}
                  strokeMiterlimit="10"
                  strokeWidth="4"
                ></line>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex  flex-col mx-4 space-y-2 my-7 text-lg  ">
          <Link href={"/"}>Home</Link>
          <Link href={"/courses"}>Courses</Link>
          <Link href={""}>Pages</Link>
          <Link href={""}>Shop</Link>
        </div>

        <div className="login-signup absolute bottom-0 flex flex-col w-full  bg-gray-200 space-y-4 py-4">
          <Link
            href={""}
            onClick={closeMenu}
            className="login-btn text-center bg-[#0056D2] text-white font-bold text-lg py-4 rounded-lg w-[90%] mx-auto "
          >
            Join For Free
          </Link>
          <Link
            onClick={closeMenu}
            href={"/login"}
            className="login-btn  text-center bg-white text-black font-semibold text-lg py-4 rounded-lg w-[90%] mx-auto border border-blue-500 hover:bg-blue-50 "
          >
            Login
          </Link>
        </div>
      </div>
      {/* Mobile top search */}
      {/* Desktop Navbar  */}
      <div className="dark:bg-slate-900   xl:w-[90%] mx-auto flex items-center shadow-xl shadow-gray-300 dark:shadow-slate-600  py-1  justify-between px-2 ">
        {/*Open Menu Button */}
        <button
          onClick={() => {
            setisMenuOpen(true);
          }}
          className="mdd:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu"
            width="30"
            height="30"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 92 92"
            // stroke={isDarkTheme ? "#ffffff" : "#010101"}
          >
            <path
              fill={isDarkTheme ? "#ffffff" : "#010101"}
              id="XMLID_101_"
              d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"
            ></path>
          </svg>
        </button>
        {/* Logo for mobile */}
        <Link className="mr-4 mdd:hidden" href={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s"
            alt="Logo"
            className="h-[60px] object-cover w-[60px] bg-gray-400 rounded-full flex  "
          />
        </Link>
        {/* Links and logo for desktop */}
        <div className=" hidden mdd:flex lg:space-x-4 space-x-2 items-center">
          {/* Logo */}
          <Link className="lg:mr-4" href={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLXiAUFRc5hMtcUuLk_bdIYZO3q_shTanAA&s"
              alt="Logo"
              className="h-[60px] object-cover w-[60px] bg-gray-400 rounded-full flex  "
            />
          </Link>

          <Link href={"/"}>Home</Link>
          <Link href={"/courses"}>Courses</Link>
          <Link href={"/"}>Pages</Link>
          <Link href={"/"}>Shop</Link>
        </div>

        {/*Categories and Search bar for Desktop view */}
        <div className="mdd:flex hidden items-center space-x-2">
          <div className="categories">
            {/* Custom Dropdown Menu */}
            <div className="relative group h-fit  ">
              <span className=" cursor-pointer flex items-center ">
                Categories
                <IoIosArrowDown className="group-hover:hidden flex h-10 mx-1   " />
                <IoIosArrowUp className="group-hover:flex hidden h-10 mx-1 " />
              </span>

              {/* Dropdown content */}
              <div className="absolute left-0 top-[100%]   min-w-fit w-40 shadow-lg rounded p-4 hidden group-hover:flex  flex-col space-y-2 z-10">
                {categories.map((category) => (
                  <CategoryLink
                    key={category._id}
                    category={category}
                    selectedLanguage={selectedLanguage}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="Search-bar-desktop relative">
            <Input
              className="py-5 bg-gray-200 text-slate-900  xl:min-w-[300px] 2xl:min-w-[500px] px-4 "
              placeholder="Search For Courses..."
            />
            <div className="absolute top-[0.6rem] right-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#010101"
                strokeWidth="2"
                viewBox="0 0 32 32"
                height={23}
                width={23}
                id="Search"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  className="color000000 svgShape"
                ></circle>
                <path
                  d="m18 18 12 12"
                  fill="#f8f8f8"
                  className="color000000 svgShape"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Login signup and  Cart for desktop view */}
        <div className="mdd:flex space-x-2 hidden">
          <div className="language-switch items-center flex   rounded-lg">
            <Select
              onValueChange={(ln) => {
                switchLanguage(ln);
              }}
            >
              <SelectTrigger className="w-[100px]  py-2 border border-gray-600 ">
                <SelectValue
                  placeholder={
                    <div className="flex items-center">
                      {/* <WorldFlag code={"GB"} className="w-5 h-5 mr-2" /> */}
                      {
                        languages.find(
                          (lang) => lang.value === selectedLanguage
                        )?.label
                      }
                    </div>
                  }
                >
                  {/* {selectedLangData ? (
                    <div className="flex items-center">
                      <WorldFlag
                        code={selectedLangData.flag}
                        className="w-5 h-5 mr-2"
                      />
                      {selectedLangData.label}
                    </div>
                  ) : (
                    "Language"
                  )} */}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    <div className="flex items-center">
                      {/* <WorldFlag code={lang.flag} className="w-5 h-5 mr-2" /> */}
                      {lang.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <ModeToggle></ModeToggle>
          </div>
          <div className="icons-sign-in-sign-up-desktop flex items-center space-x-3">
            <Link href={"/cart"}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2C7.31377 2 6.72293 2.48437 6.58835 3.15728L6.2198 5H4.1802L4.62719 2.76505C4.94874 1.15729 6.3604 0 8 0C9.6396 0 11.0513 1.15729 11.3728 2.76505L11.8198 5H9.7802L9.41165 3.15728C9.27707 2.48437 8.68623 2 8 2Z"
                  fill={isDarkTheme ? "white" : "#000000"}
                />
                <path
                  d="M15 15H1V13L2 7H14L15 13V15Z"
                  fill={isDarkTheme ? "white" : "#000000"}
                />
              </svg>
            </Link>
            <Link href={"/login"}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                  fill={isDarkTheme ? "white" : "#000000"}
                />
                <path
                  d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                  fill={isDarkTheme ? "white" : "#000000"}
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Search button for mobile navbar */}
        <button className="mdd:hidden" onClick={openSearchBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={isDarkTheme ? "#ffffff" : "#010101"}
            strokeWidth="2"
            viewBox="0 0 32 32"
            height={27}
            width={27}
            id="Search"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="color000000 svgShape"
            ></circle>
            <path
              d="m18 18 12 12"
              fill="#f8f8f8"
              className="color000000 svgShape"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
