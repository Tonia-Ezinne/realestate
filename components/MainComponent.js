// MainComponent.js
import React, { useState } from "react";
import PropertySearch from "@/pages/PropertySearch";
import AvailableHouses from "./AvailableHouses";

const MainComponent = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    bedrooms: 0,
  });

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <PropertySearch onSearch={handleSearch} />{" "}
      {/* Ensure this is correctly passed */}
      <AvailableHouses filters={filters} />
    </div>
  );
};

export default MainComponent;
