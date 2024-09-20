import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Load email from local storage if it exists
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    setLoading(true); // Set loading state

    // Simulate form submission (replace with actual authentication logic)
    try {
      // Replace this with your authentication API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password") {
            resolve(); // Simulate successful sign-in
          } else {
            reject("Invalid email or password."); // Simulate error
          }
        }, 2000);
      });

      // Save email to local storage if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    } catch (err) {
      setError(err); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to password reset...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:p-0 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-10 md:px-8 lg:px-20 bg-white rounded-lg"
        >
          <div className="mt-10">
            <h1 className="text-[#181A20] font-semibold leading-6 text-2xl">
              Welcome Back to BetaHouse!
            </h1>
            <p className="text-[#181A20] text-xl font-normal mt-5">
              Let’s get started by filling out the information below
            </p>
          </div>

          <div className="input-group mt-10 mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="input-group mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="hidden"
            />
            <label
              htmlFor="terms"
              className="flex items-center cursor-pointer text-sm text-gray-700"
            >
              <span className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-md bg-white mr-2">
                {rememberMe && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.485 1.343a1 1 0 0 1 1.414 1.414l-9 9a1 1 0 0 1-1.415 0l-4-4a1 1 0 0 1 1.414-1.414L5 10.586l8.485-8.243z"
                    />
                  </svg>
                )}
              </span>
              Remember me
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="ml-auto text-sm text-[#EC5E5E] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 mt-4 text-white text-lg rounded-xl ${
                loading ? "bg-gray-400" : "bg-[#3D9970] hover:bg-blue-700"
              } focus:outline-none focus:ring focus:ring-blue-500`}
            >
              {loading ? "Signing in..." : "Sign up"}
            </button>
          </div>

          <p className="text-center text-[#4F4E4E] my-4">Or</p>

          <div className="flex items-center justify-center">
            <button className="flex items-center text-[#292929] text-lg justify-center w-full py-5 bg-white border border-black rounded-xl hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500">
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Continue with Google</span>
            </button>
          </div>

          <p className="text-center leading-loose tracking-wide mt-5 mb-4">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-[#3D9970] hover:underline hover:text-[#2C7A4D]">
                Sign In
              </span>
            </Link>
          </p>
        </form>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/Frame img.svg"
            alt="Description of the image"
            width={300}
            height={200}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
