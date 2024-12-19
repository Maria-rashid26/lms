"use client";

import { Button } from "@/components/ui/button"; // Adjust the path based on your Button component location.
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) return; // Wait until token is available
      setIsLoading(true);

      try {
        const response = await axios.put(
          `http://localhost:5000/api/v1/verify-email?token=${token}`
        );
        setVerificationStatus("success");
        toast.success(response.data.message || "Email verified successfully!");
      } catch (error) {
        setVerificationStatus("error");
        toast.error(
          error.response?.data?.message ||
            "Failed to verify email. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  useEffect(() => {
    if (verificationStatus === "success") {
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  }, [verificationStatus]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        {isLoading && (
          <p className="text-gray-600 dark:text-gray-200">
            Verifying your email...
          </p>
        )}

        {verificationStatus === "success" && (
          <div>
            <h1 className="text-lg font-bold text-green-600 dark:text-green-400">
              Email Verified Successfully!
            </h1>
            <p className="text-gray-600 dark:text-gray-200">
              Your email has been successfully verified. You can now log in.
            </p>
            {/* <Button
              onClick={() => router.push("/login")}
              className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
            >
              Go to Login
            </Button> */}
          </div>
        )}

        {verificationStatus === "error" && (
          <div>
            <h1 className="text-lg font-bold text-red-600 dark:text-red-400">
              Verification Failed
            </h1>
            <p className="text-gray-600 dark:text-gray-200">
              The token is invalid or has expired. Please request a new
              verification email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
