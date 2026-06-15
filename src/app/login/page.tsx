"use client";

import { useEffect, useState } from "react";
import { loginUser } from "../actions/authActions";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [registered, setRegistered] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("registered")) {
      setRegistered(true);
    }
  }, []);
  
  return (
      
    <div className="min-h-screen bg-[#f8f8fa] flex items-center justify-center">

      <div className="
          bg-white
          rounded-3xl
          shadow-lg
          p-10
          w-full
          max-w-md
      ">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logos/solinea-hub-3.svg"
            alt="Solinea Hub"
            width={85}
            height={85}
            className="mb-2"
          />

          <h1 className="
              text-4xl
              font-normal
              text-[#1f1f1f]
        ">
              <span className="font-serif">Solinea</span> 
              {" "}
              <span className="text-[#9b8acb] font-medium">Hub</span>
          </h1>

          <p className="
            text-center
            text-gray-500
            mb-6 mt-4
          ">
            Create your account
          </p>
        </div>

        {registered && (
          <div className="
            bg-green-50 border border-green-200 text-green-700
            rounded-xl p-3 mb-6 text-center
          ">
            Account created successfully!
          </div>
        )}

        <form
        action={loginUser}
        className="space-y-4"
        >
          <input 
              name="email"
              type="email"
              placeholder="Email"
              className="border p-3 w-full rounded-xl"
          />

          <div className="relative">

            <input
              name="password"
              type={
                  showPassword
                      ? "text"
                      : "password"
              }
              placeholder="Password"
              className="
                  border p-3 w-full
                  rounded-xl
              "
            />

            <button
              type="button"
              onClick={() =>
                  setShowPassword(!showPassword)
              }
              className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-sm text-gray-500
              "
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <button
            type="submit"
            className="mx-auto block bg-[#9b8acb] text-white px-8 py-2 rounded-xl hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="
          text-center
          text-sm
          text-gray-500
          mt-6
        ">
          Don't have an account?
        </p>

        <Link
          href="/register"
          className="
            block
            text-center
            text-[#9b8acb]
            mt-2
          "
        >
          Register
        </Link>
      </div>
    </div>
  );
}