import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import DropDown from "@/components/DropDown";
import { useSession } from "next-auth/react";
import ProfileDropdown from "@/components/ProfileDropdown";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="py-4 ">
      <div
        className="sticky w-11/12 container mx-auto top-0 z-50 py-1 lg:py-2 shadow-lg"
        ref={menuRef}
      >
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 lg:px-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              href="/"
              className="flex items-center py-4 px-2"
              onClick={handleLinkClick}
            >
              <h1 className="bg-[#4BA586] text-white text-center md:text-2xl w-[47.21px] h-[47.21px] rounded-full flex items-center justify-center">
                BH
              </h1>
              <h1 className="text-white hover:text-[#5E3BEE] md:text-xl text-lg font-semibold ml-2">
                BetaHouse
              </h1>
            </Link>

            <div className="md:hidden flex items-center ml-auto">
              <button
                className="outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-white hover:text-gray-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
            {["Home", "Properties", "About Us", "Blog", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="py-4 px-2 text-white hover:text-[#5E3BEE] transition duration-300 font-semibold md:text-lg lg:text-lg"
                  onClick={handleLinkClick}
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Profile Section for Desktop Only */}
          <div className="hidden md:block">
            <ProfileDropdown />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } py-2 shadow-lg`}
        >
          {["Home", "Properties", "About Us", "Blog", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="block py-2 px-4 md:text-lg text-lg text-white hover:text-[#5E3BEE] transition duration-300"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            )
          )}
          {/* Mobile Profile Section */}
          <ProfileDropdown /> {/* This will be visible in mobile as well */}
        </div>
      </div>

      {/* Centered Text and Image */}
     
    </div>
  );
};

export default Navbar;
