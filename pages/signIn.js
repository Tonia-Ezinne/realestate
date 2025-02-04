"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn as nextAuthSignIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (!email || !password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/api/auth", { email, password });

      // Save token based on the checkbox
      const storageMethod = isChecked ? localStorage : sessionStorage;
      storageMethod.setItem("token", data.token);

      setMessage("Login successful");
      router.push("/"); // Redirect to homepage after login
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:px-24 md:px-20 p-5 bg-white"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          {message && (
            <p className="text-green-500 mt-4 text-center">{message}</p>
          )}

          <Link href="/" className="lg:hidden flex items-center py-4 px-2">
            <h1 className="bg-[#4BA586] text-white md:text-2xl text-xl font-semibold w-[50.21px] h-[50.21px] rounded-full flex items-center justify-center">
              BH
            </h1>
            <h1 className="text-black hover:text-[#5E3BEE] md:text-3xl text-2xl font-semibold ml-2">
              BetaHouse
            </h1>
          </Link>

          <div className="flex flex-col gap-1 w-full mt-8">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              className="border-[#DEDFE0] border-2 rounded p-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="flex flex-col gap-1 w-full mt-6">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              className="border-[#DEDFE0] border-2 rounded p-3 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              className="bg-green-500"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <p className="font-semibold">Remember Me</p>
            <Link
              href="/forgot-password"
              className="font-semibold ml-auto text-[#EC5E5E]"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <button
              type="submit"
              className={`bg-[#3D9970] text-white w-full py-3 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex gap-5">
              <div className="bg-gradient-to-r from-[white] to-[black] h-[0.5px] w-6/12 mt-3"></div>
              <p>or</p>
              <div className="bg-gradient-to-r from-[black] to-[white] h-[0.5px] w-6/12 mt-3"></div>
            </div>

            <button
              onClick={() =>
                nextAuthSignIn("google").then(() => router.replace("/"))
              }
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg mt-4 border border-black"
              disabled={loading}
            >
              <Image
                src="/google.svg"
                width={20}
                height={20}
                alt="gmail icon"
              />
              <p>Continue with Google</p>
            </button>

            <div className="flex gap-2 justify-center mt-8 items-center">
              <p>New User?</p>
              <Link href="/signup" className="text-[#3D9970]">
                Sign Up
              </Link>
            </div>
            
          </div>
        </form>
      </div>

      <div className="hidden lg:flex lg:w-6/12 justify-start items-start relative">
        <div className="relative w-full h-full">
          <Image
            src="/13625 1.svg"
            width="10"
            height="10"
            alt="house"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute beta flex items-center gap-2 top-20 left-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#4BA586]">
            <Image src="/BH.svg" width={24} height={24} alt="logo" />
          </div>
          <Link href="/" className="text-3xl font-medium beta text-white">
            BetaHouse
          </Link>
        </div>
      </div>
    </div>
  );
}




// pages/signin.js
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";

// export default function SignIn() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const onSubmit = async (data) => {
//     setLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       const response = await fetch("/api/auth", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       console.log("API response:", response);
//       console.log("Result:", result);

//       if (response.ok) {
//         localStorage.setItem("token", result.token); // Store token
//         setMessage("Login successful");
//         console.log("Redirecting to homepage...");
//       } else {
//         setError(result.error || "Login failed");
//       }
//     } catch (err) {
//       setError("Login failed");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (message) {
//       router.push("/"); // Redirect on successful login
//     }
//   }, [message]); // Run when message changes

//   return (
//     <div className="flex flex-col lg:flex-row h-screen">
//       <div className="flex-grow flex items-center justify-center">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full lg:px-24 md:px-20 p-5 bg-white"
//         >
//           {error && <p className="text-red-500 text-center">{error}</p>}
//           {message && (
//             <p className="text-green-500 mt-4 text-center">{message}</p>
//           )}

//           <Link href="/" className="lg:hidden flex items-center py-4 px-2">
//             <h1 className="bg-[#4BA586] text-white md:text-2xl text-xl font-semibold w-[50.21px] h-[50.21px] rounded-full flex items-center justify-center">
//               BH
//             </h1>
//             <h1 className="text-black hover:text-[#5E3BEE] md:text-3xl text-2xl font-semibold ml-2">
//               BetaHouse
//             </h1>
//           </Link>

//           <div className="flex flex-col gap-1 w-full mt-8">
//             <label className="font-semibold">Email</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className={`border-[#DEDFE0] border-2 rounded p-3 w-full ${
//                 errors.email ? "border-red-500" : ""
//               }`}
//               placeholder="Enter your Email"
//             />
//             {errors.email && (
//               <p className="text-red-500">{errors.email.message}</p>
//             )}
//           </div>

//           <div className="flex flex-col gap-1 w-full mt-6">
//             <label className="font-semibold">Password</label>
//             <input
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               className={`border-[#DEDFE0] border-2 rounded p-3 w-full ${
//                 errors.password ? "border-red-500" : ""
//               }`}
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-500">{errors.password.message}</p>
//             )}
//           </div>

//           <div className="flex items-center gap-2 mt-4">
//             <input
//               type="checkbox"
//               className="bg-green-500"
//             />
//             <p className="font-semibold">Remember Me</p>
//             <Link
//               href="/forgot-password"
//               className="font-semibold ml-auto text-[#EC5E5E]"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <div className="flex flex-col gap-3 mt-8">
//             <button
//               type="submit"
//               className={`bg-[#3D9970] text-white w-full py-3 rounded-lg ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </button>

//             <div className="flex gap-5">
//               <div className="bg-gradient-to-r from-[white] to-[black] h-[0.5px] w-6/12 mt-3"></div>
//               <p>or</p>
//               <div className="bg-gradient-to-r from-[black] to-[white] h-[0.5px] w-6/12 mt-3"></div>
//             </div>

//             <button
//               className="w-full flex items-center justify-center gap-2 py-3 rounded-lg mt-4 border border-black"
//               disabled={loading}
//             >
//               <Image
//                 src="/google.svg"
//                 width={20}
//                 height={20}
//                 alt="gmail icon"
//               />
//               <p>Continue with Google</p>
//             </button>

//             <div className="flex gap-2 justify-center mt-8 items-center">
//               <p>New User?</p>
//               <Link href="/signup" className="text-[#3D9970]">
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="hidden lg:flex lg:w-6/12 justify-start items-start relative">
//         <div className="relative w-full h-full">
//           <Image
//             src="/13625 1.svg"
//             width="10"
//             height="10"
//             alt="house"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <Link
//           href="/"
//           className="absolute beta flex items-center gap-2 top-20 left-4"
//         >
//           <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#4BA586]">
//             <Image src="/BH.svg" width={24} height={24} alt="logo" />
//           </div>
//           <h1 className="text-3xl font-medium beta text-white">BetaHouse</h1>
//         </Link>
//       </div>
//     </div>
//   );
// }
