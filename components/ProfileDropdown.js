import { useState } from "react";
import Image from "next/image";
import DropDown from "@/components/DropDown";
import { useSession } from "next-auth/react";

const ProfileDropdown = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden md:block items-center ml-auto relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Image
          src={session?.user?.image || "/default-profile.png"}
          width={50}
          height={50}
          alt="profile"
        />
        <h1 className="text-white md:text-sm ml-2">
          {session?.user?.name || "Guest"}
        </h1>
        {/* Dropdown Icon */}
        <Image
          src="/Vector (13).svg" // Update this path
          width={10} // Set the desired width
          height={10} // Set the desired height
          alt="dropdown icon"
          className="ml-2 cursor-pointer"
        />
      </div>

      {/* Profile dropdown */}
      <div className="absolute right-0 mt-2">
        <DropDown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
        />
      </div>
    </div>
  );
};

export default ProfileDropdown;
