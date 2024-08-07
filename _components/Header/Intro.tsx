'use client'
import Image from "next/image";
import favicon from "../../app/favicon.ico";
import { useSession, signIn } from 'next-auth/react';

const Intro: React.FC = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn('google');

  };

  return (
    <header className="w-full bg-green-50 pt-20 px-16 pb-[30%] flex flex-col justify-center items-center gap-4">
      <Image src={favicon} alt="Logo" width={90} height={90} className="mb-4" />
      <div className='flex '>
        <h1 className="text-3xl font-bold">InterviewAce-AI</h1>
      </div>
      <p className="text-xl text-center">Doing mock interviews with our AI sensei and get tailored feedback.</p>

      <div className="mt-8"><p>495+ people loved this app</p></div>

      <div className="flex flex-col items-center justify-center"> 
        <button className="bg-green-600 border text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Start For Free -&gt;
        </button>
        <p className="flex gap-2">
          <a>Already had an account? </a>
          <button className="text-green-600 hover:text-green-700" 
            onClick={handleSignIn}>
            Sign in
          </button>
        </p>
      </div>
    </header>
  );
};

export default Intro;