import React from "react";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <form className="md:mt-14 p-6 md:p-14">
          <h1 className="text-3xl text-[#181A20] leading-6 font-semibold mb-2">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-lg text-[#181A20] mb-6">
            Let's get started by filling out the information below
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="input-group flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#181A20D1]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter Name"
                  required
                  className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="input-group flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#181A20D1]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Name"
                  required
                  className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="input-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#181A20D1]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                required
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#181A20D1]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="input-group">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#181A20D1]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="hidden peer"
              />
              <label
                htmlFor="terms"
                className="flex items-center cursor-pointer"
              >
                <span className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-md bg-white peer-checked:bg-[#3D9970]">
                  <span className="hidden peer-checked:block text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.485 1.343a1 1 0 0 1 1.414 1.414l-9 9a1 1 0 0 1-1.415 0l-4-4a1 1 0 0 1 1.414-1.414L5 10.586l8.485-8.243z"
                      />
                    </svg>
                  </span>
                </span>
                <span className="ml-2 font-medium text-gray-700">
                  I agree to
                  <span className="text-[#3D9970]"> Terms of Service</span> and
                  <span className="text-[#3D9970]"> Privacy Policies</span>
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-5 mt-4 text-white bg-[#3D9970] text-lg rounded-xl hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="mx-2 text-[#4F4E4E]">Or</p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex items-center justify-center">
              <button className="flex items-center text-lg justify-center w-full py-5 text-[#292929] bg-white border border-black rounded-xl hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500">
                <Image
                  src="/google.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Or Continue with Google</span>
              </button>
            </div>
          </div>

          <p className="text-center leading-loose tracking-wide mt-5 mb-4">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-[#3D9970] hover:underline hover:text-[#2C7A4D]">
                SignIn
              </span>
            </Link>
          </p>
        </form>

        <div className="flex  items-center justify-center">
          <Image
            src="/Frame img.svg"
            alt="Description of the image"
            width={300}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
