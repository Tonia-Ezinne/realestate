// components/DropDown.js
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const DropDown = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(); // Sign out the user
    router.push("/signIn"); // Redirect to sign-in page
    onClose(); // Close the dropdown
  };

  return (
    <div
      className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="py-1">
        <Link href="/dashboard">
          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Dashboard
          </div>
        </Link>
        <Link href="/settings">
          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Settings
          </div>
        </Link>
        <div
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default DropDown;
