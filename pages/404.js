// pages/404.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect after a specified time (e.g., 5 seconds)
    const timer = setTimeout(() => {
      router.push("/"); // Redirect to the landing page or a specific route
    }, 1000); // Time in milliseconds

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-4 text-md">
        You will be redirected to the homepage shortly...
      </p>
    </div>
  );
};

export default Custom404;
