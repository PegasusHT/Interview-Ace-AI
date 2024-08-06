import Image from "next/image";
import favicon from "../../app/favicon.ico";

const Intro: React.FC = () => {
  return (
    <header className="w-full bg-green-50 pt-20 px-16 pb-[48%] flex flex-col justify-center items-center gap-4">
      <Image src={favicon} alt="Logo" width={90} height={90} className="mb-4" />
      <div className='flex '>
        <h1 className="text-3xl font-bold">InterviewAce-AI</h1>
      </div>
      <p className="text-xl text-center">Doing mock interviews with our AI sensei and get tailored feedback.</p>

      <div className="mt-8"><p>495+ people loved this app</p></div>

      <div className=""> 
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Start For Free -&gt;
        </button>
        <p className="flex gap-2">
          <a>Already had an account? </a>
        </p>
      </div>
    </header>
  );
};

export default Intro;