// components/HouseCarousel.js
import { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import axios from "axios";
import HouseCard from "./HouseCard"; // Make sure the path is correct
import Image from "next/image";

export default function PopularHousesCarousel() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const { data } = await axios.get("/api/popular");
        setHouses(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1440, // For medium screens
        settings: {
          slidesToShow: 4,
        },
      },
    ],
    prevArrow: <Image src="/prev.svg" width={100} height={100} alt="icon" />,
    nextArrow: <Image src="/next.svg" width={100} height={100} alt="icon" />,
  };

  return (
    <div className="my-8 w-11/12  mx-auto relative">
      <Slider {...settings}>
        
          {houses.map((house) => (
            <HouseCard key={house._id} house={house} />
          ))}
        
      </Slider>
    </div>
  );
}
