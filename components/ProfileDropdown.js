import { useState, useEffect } from "react";
import Image from "next/image";
import DropDown from "@/components/DropDown";
import { useSession } from "next-auth/react";

const ProfileDropdown = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Image
          key={session?.user?.image}
          src={session?.user?.image || "/pro.jpg"}
          width={50}
          height={50}
          alt="profile"
        />
        <h1 className="text-white md:text-lg ml-2">
          {session?.user?.name || "Guest"}
        </h1>
        <Image
          src="/Vector (13).svg"
          width={10}
          height={10}
          alt="dropdown icon"
          className="ml-2 cursor-pointer"
        />
      </div>

      {/* Profile dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 z-20">
          <DropDown
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
