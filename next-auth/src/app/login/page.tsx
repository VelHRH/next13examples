// @ts-nocheck

"use client";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login: FC = () => {
 const [email, setEmail] = useState("");
 const [pass, setPass] = useState("");
 const [isLoading, setIsLoading] = useState(false);
 const router = useRouter();
 const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setIsLoading(true);
  signIn("credentials", {
   email: email,
   password: pass,
   redirect: false,
  }).then(({ ok, error }) => {
   if (ok) {
    router.push("/");
   } else {
    toast.error("Wrong login or password!");
   }
   setIsLoading(false);
  });
 };
 return (
  <div
   onSubmit={handleSubmit}
   className="flex flex-col w-full items-center pt-5 text-white font-bold text-3xl"
  >
   Login
   <form className="w-1/2 flex flex-col gap-1 text-black font-semibold mt-3 text-xl">
    <input
     type="text"
     name="email"
     placeholder="123@example.com"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="rounded-md p-2 focus:outline-none"
    />
    <input
     type="password"
     name="password"
     placeholder="Password"
     value={pass}
     onChange={(e) => setPass(e.target.value)}
     className="rounded-md p-2 focus:outline-none"
    />
    <button className=" w-full py-1 bg-pink-500 hover:bg-pink-600 transition-colors mt-1 rounded-full text-white">
     {isLoading ? "Loading..." : "Login"}
    </button>
   </form>
  </div>
 );
};

export default Login;
