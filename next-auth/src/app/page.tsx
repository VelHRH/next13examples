import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
 const session = await getServerSession(authOptions);
 return (
  <div className="px-20 pt-5 font-bold font-2xl flex justify-between">
   <p>Main Page</p>
   <Link
    href={session === null ? "/login" : `/${session.user?.id}`}
    className="hover:underline"
   >
    {session === null ? "Login" : session.user?.name}
   </Link>
  </div>
 );
}
