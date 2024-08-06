import Image from "next/image";
import favicon from "../../app/favicon.ico";

const FrontHeader: React.FC = () => {
  return (
    <header className="bg-red-300 pt-5">
      <div className='flex justify-center items-center'>
        <Image src={favicon} alt="Logo" width={50} height={40} className="mr-4" />
        <h1 className="text-3xl font-bold">InterviewAce-AI</h1>
      </div>
      <p className="text-xl text-center">Mock Interview Coach</p>
    </header>
  );
};

export default FrontHeader;