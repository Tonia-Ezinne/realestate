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

      if (isChecked) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      setMessage("Login successful");
      setLoading(false);
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
      setLoading(false);
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex flex-col justify-center p-8 w-full lg:w-6/12">
      
        <div className="flex justify-center lg:hidden items-center gap-2">
          <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[#4BA586]">
            <Image src="/bh.svg" width={25} height={25} alt="logo" />
          </div>
          <h1 className="text-[22px] font-bold">BetaHouse</h1>
        </div>

        <h1 className="font-bold text-[26px] text-center lg:text-left">
          Welcome Back to BetaHouse!
        </h1>
        <p className="mt-5 lg:mt-0 text-center lg:text-left">
          Let&apos;s get started by filling out the information below
        </p>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {message && (
            <p className="text-green-500 mt-4 text-center">{message}</p>
          )}

          <div className="flex flex-col gap-1 w-full mt-6">
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
          </div>
        </form>

        <button
          onClick={() => {
            nextAuthSignIn("google").then(() => {
              router.push("/");
            });
          }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg mt-4 border border-black"
          disabled={loading}
        >
          <Image src="/google.svg" width={20} height={20} alt="gmail icon" />
          <p>Continue with Google</p>
        </button>

        <div className="flex gap-2 justify-center mt-8 items-center">
          <p>New User?</p>
          <Link href="/signup" className="text-[#3D9970]">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-6/12 justify-center items-center">
        <img
          src="/13625 1.svg"
          alt="house"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
