"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import icons from react-icons
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { auth } from "@/config/firebaseConfig";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginUserWithGoogle } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

function Page() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const t = useTranslations("login");
  const [locale, setLocale] = useState("en");

  const loginWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        result.user.getIdToken().then(async (token) => {
          console.log(token);
          dispatch(loginUserWithGoogle(token));
        });
      })
      .catch((error) => {
        console.error("Google login failed:", error);
      });
  };
  const loginWithFacebook = async () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        result.user.getIdToken().then(async (token) => {
          try {
            const response = await axios.post(
              "http://localhost:5000/api/v1/social-login",
              {
                idToken: token,
                role: 0,
                registerType: 1,
              },
              {
                withCredentials: true, // Ensure cookies (including firebaseToken) are sent
              }
            );

            console.log(response);
          } catch (error) {
            console.error("Error Login user:", error);
          }
        });
      })
      .catch((error) => {
        console.log("facebook login failed:", error);
      });
  };

  // Functions
  const loginWithEmailPassword = async (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    const secondLocale = Cookies.get("locale") || "en";
    setLocale(secondLocale);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated]);

  return (
    <div className="py-9 my-6 sm:w-[80%] mx-auto md:w-[50%] lg:w-[40%] xl:w-[30%] ">
      <h3 className="uppercase font-bold text-center py-6 text-2xl">
        {t("title")}
      </h3>
      <form className="space-y-6" onSubmit={loginWithEmailPassword}>
        <Input
          className={`bg-[#D9D9D9] text-black dark:placeholder:text-slate-700 py-5 w-[90%] mx-auto  px-6 ${
            locale === "ur" ? "text-right" : "text-left"
          }`}
          placeholder={t("email")}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
        />

        {/* Password field */}
        <div className="relative  w-[90%] mx-auto">
          <Input
            className={`bg-[#D9D9D9] dark:placeholder:text-slate-700 text-black  py-5  px-6 ${
              locale === "ur" ? "text-right" : "text-left"
            }`}
            type={showPassword ? "text" : "password"}
            required={true}
            placeholder={t("password")}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            type="button"
            // className="absolute right-5 top-1/2 transform -translate-y-1/2"
            className={`absolute right-5 top-1/2 transform -translate-y-1/2 ${
              locale === "ur" ? "left-3" : "right-3"
            }`}
            onClick={togglePasswordVisibility}
          >
            {!showPassword ? (
              <EyeClosedIcon width={24} height={24} color="black" />
            ) : (
              <EyeOpenIcon width={24} height={24} color="black" />
            )}
          </button>
        </div>
        {/* Section 2 for manage spacing y */}
        <div className="space-y-3">
          {/* Forget Password Link */}
          <div className="w-fit mx-auto">
            <Link
              href={"/"}
              className="text-sm hover:border-b dark:text-white border-[#414040] text-[#5C5C5C] transition-all duration-150   "
            >
              {t("forgetPassword")}
            </Link>
          </div>
          {/* Login Button */}
          <div className="w-[90%] mx-auto">
            <Button
              type={"submit"}
              className="w-full py-5 dark:text-white  bg-[#061E43] hover:bg-[#041436] "
            >
              {t("title")}
            </Button>
          </div>
          {/* Sign Up  */}
          <div className="w-fit mx-auto dark:text-gray-200 text-[#5C5C5C] ">
            {t("question")}
            <Link
              href={"/signup"}
              className="text-sm hover:border-b ml-2  border-[#414040] text-[#1363DF] transition-all duration-150   "
            >
              {t("signup")}
            </Link>
          </div>
          {/* Or line  */}
          <div className="relative  w-[90%] mx-auto py-10 ">
            <hr className="border-t border-gray-400" />
            <span className="bg-white dark:bg-slate-700  dark:text-white px-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-[#5C5C5C] transition-all duration-150">
              {t("or")}
            </span>
          </div>
          {/* Section 3 for login with fb or google */}
          <div className=" space-y-4">
            {/* Login wiht facebook */}
            <div className="w-[90%] mx-auto relative ">
              <span className="Facebook-Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="facebook"
                  height={26}
                  className="absolute top-[50%] -translate-y-[50%] left-3 "
                >
                  <path
                    // fill="#1877f2"
                    fill="#fff"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  ></path>
                  <path
                    fill="#1877f2"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
              </span>
              <Button
                onClick={loginWithFacebook}
                className="w-full bg-[#3D6AD6] py-5  text-white hover:bg-[#365fbd] "
              >
                {t("loginFacebook")}{" "}
              </Button>
            </div>

            <div className="w-[90%] mx-auto relative">
              <span className="Google-Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  id="google"
                  height={26}
                  className="absolute top-[50%] -translate-y-[50%] left-3 "
                >
                  <path
                    fill="#fbbb00"
                    d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                  ></path>
                  <path
                    fill="#518ef8"
                    d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                  ></path>
                  <path
                    fill="#28b446"
                    d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                  ></path>
                  <path
                    fill="#f14336"
                    d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                  ></path>
                </svg>
              </span>

              <Button
                onClick={loginWithGoogle}
                className="w-full dark:text-white bg-transparent py-5 text-black border border-slate-700 hover:bg-[#F3F8FF] "
              >
                {t("loginGoogle")}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;
