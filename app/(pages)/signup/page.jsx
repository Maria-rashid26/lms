"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { VscEyeClosed } from "react-icons/vsc";
import { RxEyeOpen } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import { UserRole } from "@/constants/UserConstants";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  loginUserWithGoogle,
  signUpWithGoogle,
} from "@/redux/slices/userSlice";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [timeToResend, setTimeToResend] = useState(60);
  const [loading, setloading] = useState(false);
  const [emailSend, setemailSend] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, seterror] = useState(null);
  const [email, setemail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const [showConfirmPass, setConfirmPass] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setConfirmPass(!showConfirmPass);
  };
  const t = useTranslations("signup");
  const [locale, setLocale] = useState("en");
  const googleProvider = new GoogleAuthProvider();
  const { isAuthenticated, error: signUperror } = useSelector(
    (state) => state.user
  );
  const signUpWithGoolgleHandler = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.loading("Signing In...");
        result.user.getIdToken().then(async (token) => {
          dispatch(signUpWithGoogle(token));
        });
      })
      .catch((error) => {
        console.error("Google login failed:", error);
      });
  };
  const handleSignUpButton = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        seterror("Password and confirm password should match");
        return;
      }
      toast.loading("Sending Verfication email.");
      const response = await axios.post(
        `http://localhost:5000/api/v1/signup-email`,
        {
          name: firstName + " " + lastName,
          email,
          password,
          role: UserRole.STUDENT,
        }
      );
      toast.dismiss();
      toast.success(response.data.message);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);

      seterror(error.response.data.message);
    }
  };
  useEffect(() => {
    const secondLocale = Cookies.get("locale") || "en";
    setLocale(secondLocale);
  }, []);

  useEffect(() => {
    if (error) {
      toast.dismiss();
      toast.error(error);
      seterror(null);
    }
  }, [error]);

  useState(() => {
    console.log(signUperror);
    if (signUperror) {
      console.log(signUperror);
      toast.dismiss();
      toast.error(error);
      dispatch(clearError);
    }
  }, [signUperror]);
  useEffect(() => {
    var timer = null;
    if (success) {
      timer = setInterval(() => {
        setTimeToResend((prevTime) => prevTime - 1);
      }, 1000);
      setTimeout(() => {
        setSuccess(false);
      }, 60000);
    }

    return () => {
      clearInterval(timer), setTimeToResend(60);
    };
  }, [success]);

  useEffect(() => {}, [timeToResend]);
  return (
    <div className="mt-11 ">
      <div>{error}</div>
      <div className="  w-[80%] sm:w-[80%]   mx-auto md:w-[50%] lg:w-[40%] xl:w-[30%] antialiased  ">
        <h3 className=" font-bold text-center tracking-wider  py-6 text-2xl dark:text-white text-gray-800 ">
          {t("title")}
        </h3>

        <form onSubmit={handleSignUpButton} className="space-y-4">
          <div
            className={`flex gap-5 justify-between ${
              locale === "ur" ? "flex-row-reverse  " : "flex-row "
            }  `}
          >
            <Input
              type="text"
              name=""
              id=""
              required={true}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder={t("firstName")}
              className={`bg-[#D9D9D9] h-10 border dark:text-gray-800  dark:placeholder:text-gray-500  border-[#d7d5d5] ${
                locale === "ur" ? "text-right" : "text-left"
              }`}
            />
            <Input
              type="text"
              name=""
              id=""
              required={true}
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              placeholder={t("lastName")}
              className={`bg-[#D9D9D9] h-10 border  dark:text-gray-800 dark:placeholder:text-gray-500   border-[#d7d5d5] ${
                locale === "ur" ? "text-right" : "text-left"
              }`}
            />
          </div>
          <Input
            type="text"
            name=""
            id=""
            required={true}
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder={t("email")}
            className={`bg-[#D9D9D9] h-10 border dark:text-gray-800  dark:placeholder:text-gray-500   border-[#d7d5d5] ${
              locale === "ur" ? "text-right" : "text-left"
            }`}
          />
          <div
            className={`flex relative  justify-between    ${
              locale === "ur" ? "flex-row-reverse  " : "flex-row "
            }  `}
          >
            <Input
              type={showPassword ? "text" : "password"}
              name=""
              required={true}
              id=""
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder={t("createPassword")}
              className={`bg-[#D9D9D9] h-10 border  dark:text-gray-800 dark:placeholder:text-gray-500   border-[#d7d5d5] ${
                locale === "ur" ? "text-right" : "text-left"
              }`}
            />
            <button
              type="button"
              className={`absolute mt-3 dark:text-gray-800   ${
                locale === "ur" ? "left-3" : " right-3"
              }`}
              onClick={handlePasswordVisibility}
            >
              {!showPassword ? (
                <VscEyeClosed width={28} height={28} />
              ) : (
                <RxEyeOpen width={24} height={24} />
              )}
            </button>
          </div>

          <div
            className={`flex relative  justify-between ${
              locale === "ur" ? "flex-row-reverse  " : "flex-row "
            }  `}
          >
            <Input
              type={showConfirmPass ? "text" : "password"}
              name=""
              id=""
              required={true}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder={t("confirmPassword")}
              className={`bg-[#D9D9D9] h-10 border  dark:text-gray-800  dark:placeholder:text-gray-500  border-[#d7d5d5] ${
                locale === "ur" ? "text-right" : "text-left"
              }`}
            />
            <button
              type="button"
              className={`absolute mt-3 dark:text-gray-800  ${
                locale === "ur" ? "left-3" : " right-3"
              }`}
              onClick={handleConfirmPassword}
            >
              {!showConfirmPass ? (
                <VscEyeClosed width={28} height={28} />
              ) : (
                <RxEyeOpen width={24} height={24} />
              )}
            </button>
          </div>
          <Button
            type="submit"
            disabled={timeToResend > 0 && success}
            className="w-full h-10 bg-[#061E43] dark:bg-[#061E43]/90 hover:bg-[#061E43]/90 duration-300 tracking-wider dark:text-white"
          >
            {t("title")}
          </Button>

          <div className="">
            <p className=" w-full min-w-fit text-center">
              {timeToResend > 0 && success ? (
                <span className=" text-sm">
                  {`Email sended to ${email} : `}{" "}
                  <span className="text-red-400 font-bold text-lg ">
                    {timeToResend}
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
        </form>

        {/*  ====================================== */}
        <div>
          <p className="py-4  text-center text-gray-700 dark:text-white">
            {t("question")}
            <Link href={"/login"} className="text-[#1363DF] ">
              {t("login")}
            </Link>
          </p>

          <div className="relative  w-[96%] mx-auto py-3">
            <hr className="border-t border-gray-400" />
            <span className="bg-white px-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-[#5C5C5C] transition-all duration-150">
              {t("or")}
            </span>
          </div>

          {/* ====================== login with facebook and google ======================== */}

          <div className="space-y-3  py-4  ">
            <Button className="w-full relative justify-center  bg-[#3D6AD6] flex  dark:text-white  hover:bg-[#3D6AD6]/80 h-10 ">
              <SiFacebook size={20} className="absolute left-2" />

              <span className="font-sans    tracking-wider  ">
                {t("loginFacebook")}
              </span>
            </Button>
            <Button
              onClick={signUpWithGoolgleHandler}
              className="w-full relative bg-[#D9D9D9] justify-center  flex   hover:bg-[#D9D9D9]/80 "
            >
              <FcGoogle size={30} className="absolute left-2" />

              <span className="font-sans  tracking-wider  text-gray-600">
                {t("loginGoogle")}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
