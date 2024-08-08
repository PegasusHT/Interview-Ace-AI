'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { signOut } from "next-auth/react";

interface showSessionProps {
    status: string;
    router: any;
}

const ShowSession: React.FC<showSessionProps> = ({ status, router }) => {    
    if (status === "authenticated") {
      return (
        <button
          className="border border-solid border-black rounded"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });

          }}
        >
          Sign Out
        </button>
      )
    }  else {
      return (
        <div></div>
      )
    }
}

export default ShowSession;