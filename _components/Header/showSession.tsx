'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";

interface showSessionProps {
    status: string;
    router: any;
}

const ShowSession: React.FC<showSessionProps> = ({ status, router }) => {    
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (status === "authenticated") {
    return (
      <div>
        <button
          className=""
          onClick={toggleDropdown}
        >
          <CgProfile className="w-full h-full text-lg mt-2"/>
        </button>
        {dropdownVisible && (
          <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
            <button
              className="block w-full text-left p-1 hover:bg-green-100"
              onClick={() => router.push("/profile")}
            >
              Profile
            </button>
            <button
              className="block w-full text-left p-1 hover:bg-green-100"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
          )}
      </div>
    )
  }  else {
    return (
      <div></div>
    )
  }
}

export default ShowSession;