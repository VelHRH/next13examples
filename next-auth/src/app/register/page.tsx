import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const Register = async () => {
 const registerUser = async (data: FormData) => {
  "use server";
  const password = await hash(data.get("password")!.toString(), 12);
  await prisma.user.create({
   data: {
    name: data.get("name")?.toString(),
    email: data.get("email")!.toString(),
    password,
   },
  });
  redirect("/");
 };
 return (
  <div className="flex flex-col w-full items-center pt-5 text-white font-bold text-3xl">
   Register
   <form
    action={registerUser}
    className="w-1/2 flex flex-col gap-1 text-black font-semibold mt-3 text-xl"
   >
    <input
     type="text"
     name="email"
     placeholder="123@example.com"
     className="rounded-md p-2 focus:outline-none"
    />
    <input
     type="password"
     name="password"
     placeholder="Password"
     className="rounded-md p-2 focus:outline-none"
    />
    <input
     type="text"
     name="name"
     placeholder="Ilya Davydov"
     className="rounded-md p-2 focus:outline-none"
    />
    <button className=" w-full py-1 bg-pink-500 hover:bg-pink-600 transition-colors mt-1 rounded-full text-white">
     Register
    </button>
   </form>
  </div>
 );
};

export default Register;
