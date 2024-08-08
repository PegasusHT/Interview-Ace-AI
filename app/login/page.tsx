'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      if (res?.error) {
        setError(res.error as string);
      }
      if (res?.ok) {
        return router.push("/selectSensei");
      }
    };

    const handleGoogleSignIn = async () => {
      await signIn("google", { callbackUrl: "/selectSensei" });
    };

    return (
      <section className="w-full px-8 bg-green-50 h-screen flex items-center justify-center">
        <form
          className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
          border border-solid border-black bg-white rounded"
          onSubmit={handleSubmit}>
          {error && <div className="text-black">{error}</div>}
          <h1 className="mb-5 w-full text-2xl font-bold text-center">Sign In</h1>
          <button className="border w-full mb-4 border-black bg-white p-2 rounded-lg hover:bg-gray-100"
           onClick={handleGoogleSignIn}>Sign in with Google</button>
          <label className="w-full text-sm">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full h-8 border border-solid border-black rounded p-2"
            name="email" />
          <label className="w-full text-sm">Password</label>
          <div className="flex w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-8 border border-solid border-black rounded p-2"
              name="password" />
          </div>
          <button className="w-full border border-solid border-black rounded">
            Sign In
          </button>
          
          <Link
            href="/register"
            className="text-sm text-[#888] transition duration-150 ease hover:text-black">
            Don't have an account?
          </Link>
        </form>
      </section>
  );
};