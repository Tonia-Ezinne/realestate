import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";
import AvailableHouses from "./AvailableHouses";
import FindProperty from "./FindProperty";

const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSearchParams({ location, title, bedrooms });
  };

  return (
    <>
      <div className="hero">
        <Navbar />

        <FindProperty />
      </div>

      <div>
        <AvailableHouses
          location={searchParams.location}
          title={searchParams.title}
          bedrooms={searchParams.bedrooms}
        />
      </div>
    </>
  );
};

export default PropertySearch;
