import React, { useState } from "react";
import Image from "next/image"; // Ensure you import Image if using Next.js

const FindProperty = () => {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here, e.g., logging the values
    console.log("Search initiated with:", { location, title, bedrooms });
    // You can also perform further actions like API calls or redirects
  };

  return (
    <div>


      <div className="flex flex-col items-center text-center mt-12 lg-mt-6 px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">
          Browse Our Properties
        </h1>
        <div className="w-full md:w-6/12 p-2 mt-8">
          <p className="text-white text-xl md:text-2xl tracking-wide">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </div>
      </div>


      <div className="bg-[#FFFFFF33]  md:mt-24 mt-40 md:py-4 py-6  container mx-auto px-2 sm:px-4 lg:px-8">
        <form onSubmit={handleSearch}>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white p-1 rounded-lg rounded-br-none rounded-tr-none divide-y md:divide-y-0 md:divide-x divide-[#CAD4DE] w-full">
              <div className="flex flex-col mt-1 text-center items-center">
                <h1 className="font-semibold">LOCATION</h1>
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded p-2 mt-1 w-full text-center"
                />
              </div>

              <div className="flex flex-col mt-1">
                <h1 className="font-semibold text-center">PROPERTY TITLE</h1>
                <input
                  type="text"
                  placeholder="Enter property type"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded p-2 mt-1 w-full text-center"
                />
              </div>

              <div className="flex mt-1 flex-col items-center">
                <h1 className="font-semibold">BEDROOM</h1>
                <div className="flex items-center gap-5 mt-2 w-full justify-center">
                  <button
                    type="button"
                    aria-label="Decrease"
                    onClick={() => setBedrooms((prev) => Math.max(prev - 1, 0))}
                    className="focus:outline-none"
                  >
                    <Image
                      src="/btn.svg"
                      width={20}
                      height={15}
                      alt="Decrease"
                    />
                  </button>
                  <span>{bedrooms}</span>
                  <button
                    type="button"
                    aria-label="Increase"
                    onClick={() => setBedrooms((prev) => prev + 1)}
                    className="focus:outline-none"
                  >
                    <Image
                      src="/bttn.svg"
                      width={20}
                      height={10}
                      alt="Increase"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0">
              <button
                type="submit"
                className="bg-[#3D9970] cursor-pointer rounded-tr-lg rounded-br-lg p-3 px-6 lg:px-24"
              >
                <p className="text-white font-medium text-lg">Find Property</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindProperty;
