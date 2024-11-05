"use client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

import DefaultButton from "@/app/Components/DefaultButton";
import BlackButton from "../Components/BlackButton";

import SignIn from "@/public/Assets/register.webp";

export default function Login() {
  const [email, setEmail] = useState("annarosewain9@gmail.com");
  const [password, setPassword] = useState("M155ionyoga");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        toast.error(result?.error);
        setLoading(false);
      } else {
        toast.success("Logged in successfully.");
        router.push("/");
      }
      //
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-none">
      <div className="flex flex-col md:flex-row items-stretch container p-4 border-[1px] border-black  rounded-lg w-4/5 h-2/5">
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center p-1">
          <Image
            src={SignIn}
            alt="Artwork by Lynn Hanford-Day - https://www.sacredintuitiveart.com/gallery?itemId=7o2d2o8ss49rq1dd1lr0gsbwbfhabb"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2 flex items-center mx-20">
          <div>
            <h1 className="mb-6 text-center">Login</h1>
            <p className="font-medium opacity-75 text-center">
              Welcome back! Login to your account to access classes and
              playbacks.
            </p>

            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border bg-[#D9D9D9] rounded-lg p-2 mb-4 w-full"
                placeholder="Enter your email"
                required
              />
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border bg-[#D9D9D9] rounded-lg p-2 mb-4 w-full"
                placeholder="Enter your password"
                required
              />
              <DefaultButton
                text={loading ? "Please wait..." : "Submit"}
                color="primary"
                size="medium"
                className="w-full"
                type="submit"
                loading={loading}
                disabled={loading || !email || !password}
              />
              <Link href="/login">
                <BlackButton text="Login" className="w-full mt-2" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

/*const response = await fetch(`${process.env.NEXT_PUBLIC_API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });*/
