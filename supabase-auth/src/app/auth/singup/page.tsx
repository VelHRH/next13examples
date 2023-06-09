import AuthForm from "@/app/auth-form";
import Link from "next/link";

export default async function SingUp() {
 return (
  <div className="row">
   <div className="col-6 auth-widget">
    <AuthForm view="sign_up" />
   </div>
   <Link className="duration-300 hover:underline" href="/">
    Already have an account?
   </Link>
  </div>
 );
}
