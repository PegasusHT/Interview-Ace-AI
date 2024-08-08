"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "../../_actions/register";
import { signIn } from "next-auth/react";

export default function Register() {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name")    
        });
        ref.current?.reset();
        if(r?.error){
            setError(r.error);
            return;
        } else {
            return router.push("/selectSensei");
        }
    };

    const handleGoogleSignIn = async () => {
        await signIn("google", { callbackUrl: "/selectSensei" });
    };
    
    return(
        <section className="w-full px-8 bg-green-50 h-screen flex flex-col items-center justify-center">
           
         <form ref = {ref}
         action={handleSubmit}
         className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
         border border-solid border-black bg-white rounded">
            <h1 className="mb-5 text-center w-full text-2xl font-bold">Register</h1>
            <button
             className="border w-full mb-4 border-black bg-white p-2 rounded-lg hover:bg-gray-100"
             onClick={handleGoogleSignIn}>
                Register with Google
            </button>
            {error && <div className="">{error}</div>}
    
            <label className="w-full text-sm">Full Name</label>
            <input
                type="text"
                placeholder="Full Name"
                className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
                name="name"
            />
    
            <label className="w-full text-sm">Email</label>
            <input
                type="email"
                placeholder="Email"
                className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
                name="email"
            />
    
            <label className="w-full text-sm">Password</label>
            <div className="flex w-full">
                <input
                type="password"
                placeholder="Password"
                className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
                name="password"
                />
            </div>
    
            <button className="w-full border border-solid border-black py-1.5 mt-2.5 rounded bg-green-500 font-semibold
            transition duration-150 ease hover:bg-black">
                Create your account
            </button>
    
            
            <Link href="/login" className=" transition duration-150 ease hover:text-black">
                Sign In
            </Link>
         </form>
        </section>
    )

}
