import Image from "next/image";

export default function HouseCard({ house }) {
  return (
    <div
      key={house._id}
      className="relative xl:px-3 lg:px-9 md:px-4  rounded-lg "
      style={{ width: "375px", height: "415px" }} // Set the dimensions here
    >
      <div className="relative w-full  h-full">
        <Image
          src={house.image}
          alt={house.title}
          layout="fill" // Use 'layout="fill"' for responsive filling
          objectFit="cover"
          className="rounded-md"
          priority
          sizes="full"
        />
      </div>

      {/* Overlay Container */}
      <div className="absolute inset-0 flex flex-col justify-end rounded-md xl:px-3 md:px-4 lg:px-8 ">
        <div className="p-2 bg-black bg-opacity-30">
          <h3 className="text-lg font-semibold leading-8 text-white">
            {house.title}
          </h3>

          <p className="text-white leading-8 text-lg font-semibold mt-1">
            ₦{house.price.toLocaleString()}
          </p>
          <p className="text-white text-sm leading-5 mt-1 flex items-center">
            <span>{house.bed} Bed</span>
            <div className="border-l border-gray-300 mx-2 h-4" />{" "}
            {/* Vertical Border */}
            <span>{house.bath} Bath</span>
            <div className="border-l border-gray-300 mx-2 h-4" />{" "}
            {/* Vertical Border */}
            <span>{house.sqFt.toLocaleString()} sq ft</span>
          </p>

          {/* <p className="text-gray-200 mt-1"></p> */}
          <div className="flex items-center mt-2">
            <div className="mr-2">
              <Image src="/icon.svg" width={10} height={10} alt="Location Logo" />
            </div>
            <div>
              <p className="text-white text-sm leading-5">{house.location}</p>
            </div>
          </div>
          {/* Uncomment the following if you want to display popular status */}
          {/* {house.popular && (
            <span className="mt-2 text-green-400 font-semibold">Popular</span>
          )} */}
        </div>
      </div>
    </div>
  );
}
