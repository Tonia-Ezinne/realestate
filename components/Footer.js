import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#035A33]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
          <div className="flex flex-col mb-6 md:mb-0 px-4">
            <Link href="/" className="flex items-center mb-4">
              <h1 className="bg-[#4BA586] text-white w-[47.21px] h-[47.21px] rounded-full flex items-center font-bold justify-center">
                BH
              </h1>
              <h1 className="text-white hover:text-[#5E3BEE] text-xl font-semibold ml-2">
                BetaHouse
              </h1>
            </Link>
            <p
              className="text-white mb-4"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              Discover, rent, and find your ideal home hassle-free with
              BetaHouse. Take control of your rental journey today!
            </p>
            <div className="text-white flex items-center mb-2">
              <Image
                src="/Vector (7).svg"
                width={10}
                height={10}
                alt="location"
              />
              <p className="ml-2 text-sm" style={{ letterSpacing: "0.05em" }}>
                Address: 95 Tinubu Estate, Lekki, Lagos
              </p>
            </div>
            <div className="text-white flex items-center mb-2">
              <Image src="/Vector (8).svg" width={10} height={10} alt="phone" />
              <p className="ml-2 text-sm" style={{ letterSpacing: "0.05em" }}>
                +234 675 8935 675
              </p>
            </div>
            <div className="text-white flex items-center">
              <Image src="/Vector (9).svg" width={10} height={10} alt="email" />
              <p className="ml-2 text-sm" style={{ letterSpacing: "0.05em" }}>
                support@rentbetahouse.com
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="text-white flex flex-col gap-2">
              <h1 className="font-bold text-lg">Quick Links</h1>
              <h3 className="text-sm">Home</h3>
              <h3 className="text-sm">Properties</h3>
              <h3 className="text-sm">About</h3>
              <h3 className="text-sm">Contact us</h3>
              <h3 className="text-sm">Blog</h3>
            </div>
            <div className="text-white flex flex-col gap-2">
              <h1 className="font-bold text-lg">More</h1>
              <h3 className="text-sm">Agents</h3>
              <h3 className="text-sm">Affordable Houses</h3>
              <h3 className="text-sm">FAQ's</h3>
            </div>
            <div className="text-white flex flex-col gap-2">
              <h1 className="font-bold text-lg">Popular Search</h1>
              <h3 className="text-sm">Apartment for sale</h3>
              <h3 className="text-sm">Apartment for rent</h3>
              <h3 className="text-sm">3 bedroom</h3>
              <h3 className="text-sm">Bungalow</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t mt-4"></div>
      <div className="flex flex-col md:flex-row text-center justify-between items-center gap-4 p-4 px-36">
        <div>
          <p className="text-white text-sm">
            Copyright 2023 Betahouse | Designed by Michael.fig
          </p>
        </div>
        <div>
          <p className="text-white text-sm cursor-pointer hover:underline">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
