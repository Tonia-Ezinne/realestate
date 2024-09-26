import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react"; // Import useSession
import { useRouter } from "next/router";

const DropDown = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { data: session } = useSession(); // Get session data

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/signIn" }); // Sign out and redirect
    onClose(); // Close the dropdown
  };

  return (
    <div
      className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="py-1">
        <Link href="/#">
          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Dashboard
          </div>
        </Link>
        <Link href="/#">
          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Settings
          </div>
        </Link>

        {/* Conditionally render Logout or Sign Up/Sign In based on session status */}
        {session ? (
          <div
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        ) : (
          <>
            <Link href="/signIn">
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                onClick={onClose}
              >
                Sign In
              </div>
            </Link>
            <Link href="/signup">
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                onClick={onClose}
              >
                Sign Up
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DropDown;
