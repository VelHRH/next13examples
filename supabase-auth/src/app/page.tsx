import Link from "next/link";
import AuthForm from "./auth-form";

export default function Home() {
 return (
  <div className="row">
   <div className="col-6">
    <h1 className="header">Supabase Auth + Storage</h1>
    <p className="">
     Experience our Auth and Storage through a simple profile management
     example. Create a user profile and upload an avatar image. Fast, simple,
     secure.
    </p>
   </div>
   <div className="col-6 auth-widget">
    <AuthForm view="forgotten_password" />
   </div>
   <Link className="duration-300 hover:underline" href="/auth/singup">
    Have no account yet?
   </Link>
  </div>
 );
}
