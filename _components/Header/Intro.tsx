'use client'
import Image from "next/image";
import favicon from "../../app/favicon.ico";
import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ShowSession from "./showSession";  
import LangSelector from "./LangSelector";

const Intro: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <header className="w-full bg-green-50 pt-32 px-16 pb-[30%] flex flex-col justify-center items-center gap-4 relative">

      <div className="flex gap-1 absolute top-4 right-4">
        <LangSelector />
        <ShowSession status={status} router={router} />
      </div>

      <Image src={favicon} alt="Logo" width={90} height={90} className="mb-4" />
      <div className='flex '>
        <h1 className="text-3xl font-bold">InterviewAce-AI</h1>
      </div>
      <p className="text-xl text-center">Doing mock interviews with our AI sensei and get tailored feedback.</p>

      <div className="mt-8"><p>495+ people loved this app</p></div>

      {status !== "authenticated" && (
        <div className="flex flex-col items-center justify-center"> 
          <button className="bg-green-600 border text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <Link href='/register'>Start For Free -&gt;</Link>
          </button>
          <p className="flex gap-2">
            <a>Already had an account? </a>
            <Link className="text-green-600 hover:text-green-700 hover:underline" 
              href='/login'>
              Sign in
            </Link>
          </p>
        </div>
        )
      }
     
    </header>
  );
};

export default Intro;