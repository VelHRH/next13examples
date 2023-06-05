import Logout from "@/components/Logout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
 const session = await getServerSession(authOptions);
 return (
  <div className="px-20 pt-5 font-bold font-2xl flex justify-between">
   <p>Main Page</p>
   {session === null ? (
    <Link href="/login" className="hover:underline">
     Login
    </Link>
   ) : (
    <>
     <span>{session.user?.name}</span> <Logout />
    </>
   )}
  </div>
 );
}
