import { useEffect, useState } from "react";
import Image from "next/image";

export default function AvailableHouses() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const res = await fetch("/api/houses");
        if (!res.ok) throw new Error("Failed to fetch houses");

        const data = await res.json();
        setHouses(data.houses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) return <p>Loading houses...</p>;
  if (error) return <p>{error}</p>;
  if (houses.length === 0) return <p>No houses available.</p>;

  return (
    <div className="available-houses grid grid-cols-1 gap-5 mt-20 container mx-auto w-11/12  md:grid-cols-3">
      {houses.map((house) => (
        <div key={house._id} className="house-card">
          <div className="house-image">
            <Image
              src={house.image}
              alt={house.title}
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              className="w-full h-full"
            />
          </div>
          <div className="house-details  p-5">
            <h3 className="text-2xl text-[#444444] font-semibold">
              {house.title}
            </h3>
            <div className="flex items-center space-x-2 mt-5 gap-1">
              <div className="logo ">
                <Image
                  src="/Vector (1).svg"
                  width={10}
                  height={10}
                  alt="location logo"
                />
              </div>
              <div>
                <p className="text-[#666666] ">{house.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-12 mt-8">
              <div className="flex items-center space-x-2">
                <div className="logo">
                  <Image
                    src="/Vector.svg"
                    width={15}
                    height={10}
                    alt="bedroom logo"
                  />
                </div>
                <p>{house.bedrooms} Bedrooms</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="logo">
                  <Image
                    src="/Vector (3).svg"
                    width={15}
                    height={10}
                    alt="bathroom logo"
                  />
                </div>
                <p>{house.bathrooms} Bathrooms</p>
              </div>
            </div>
            <hr className="my-8 border-t border-gray-300" />

            <div className="flex flex-col-2 items-center gap-14 mt-10">
              <div>
                <p className="text-[#373737]  text-2xl font-semibold">
                  ₦{house.price.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-10">
                <div className="logo">
                  <Image
                    src="/Vector (4).svg"
                    width={15}
                    height={10}
                    alt="bathroom logo"
                  />
                </div>
                <div className="logo">
                  <Image
                    src="/Vector (5).svg"
                    width={15}
                    height={10}
                    alt="bathroom logo"
                  />
                </div>
                <div className="logo">
                  <Image
                    src="/Vector (6).svg"
                    width={15}
                    height={10}
                    alt="bathroom logo"
                  />
                </div>
              </div>
            </div>

            {/* <p>Status: {house.status}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
