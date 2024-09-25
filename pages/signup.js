import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { email, password, firstname, lastname, confirmPassword } = formData;

    if (!email || !password || !firstname || !lastname || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isChecked) {
      setError("You must agree to the Terms of Service and Privacy Policies");
      return;
    }

    try {
      const { data } = await axios.post("/api/signup", {
        firstname,
        lastname,
        email,
        password, // Sending plain password
      });
      setMessage(data.message);

      // Redirect to the sign-in page after a successful signup
      router.push("/signIn");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center w-full lg:w-6/12 p-8">
        <h1 className="font-bold text-[28px] text-center lg:text-left leading-6">
          Join our community of home seekers and explore the possibilities that
          await.
        </h1>
        <p className="mt-5 text-center lg:text-left">
          Let&apos;s get started by filling out the information below
        </p>

        <form onSubmit={handleSubmit} className="w-full mt-6">
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {message && (
            <p className="text-green-500 mt-4 text-center">{message}</p>
          )}

          <div className="flex flex-col lg:flex-row gap-4 w-full mt-6">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                name="firstname"
                className="border-[#DEDFE0] border-2 rounded p-3 w-full"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your First Name"
                required
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="border-[#DEDFE0] border-2 rounded p-3 w-full"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>

          {["email", "password", "confirmPassword"].map((field, index) => (
            <div className="flex flex-col gap-1 w-full mt-6" key={index}>
              <label className="font-semibold">
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace("Password", " Password")}
              </label>
              <input
                type={field.includes("password") ? "password" : field}
                name={field}
                className="border-[#DEDFE0] border-2 rounded p-3 w-full"
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                required
              />
            </div>
          ))}

          <div className="flex items-center gap-2 mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-0"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                required
              />
              <span className="ml-2 font-semibold">
                I agree to the{" "}
                <span className="text-[#3D9970]">Terms of Service</span> and
                <span className="text-[#3D9970]">Privacy Policies</span>
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <button
              type="submit"
              className="bg-[#3D9970] text-white w-full py-3 rounded-lg"
            >
              Sign Up
            </button>
            <div className="flex gap-5">
              <div className="bg-gradient-to-r from-[white] to-[black] h-[0.5px] w-6/12 mt-3"></div>
              <p>or</p>
              <div className="bg-gradient-to-r from-[black] to-[white] h-[0.5px] w-6/12 mt-3"></div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg mt-4 border border-black">
              <Image
                src="/google.svg"
                width={20}
                height={20}
                alt="gmail icon"
              />
              <p>Continue with Google</p>
            </button>
          </div>
        </form>

        <div className="flex gap-2 justify-center mt-8 items-center">
          <p>Already have an account?</p>
          <Link href="/signIn" className="text-[#3D9970]">
            Sign In
          </Link>
        </div>
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
          <h1 className="text-3xl font-medium beta text-white">BetaHouse</h1>
        </div>
      </div>
    </div>
  );
}
