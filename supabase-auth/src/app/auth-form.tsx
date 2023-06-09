"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default function AuthForm({ view }: { view: ViewType | undefined }) {
 const supabase = createClientComponentClient<Database>();

 return (
  <div>
   <Auth
    supabaseClient={supabase}
    view={view}
    appearance={{ theme: ThemeSupa }}
    theme="dark"
    showLinks={false}
    providers={[]}
    redirectTo="http://localhost:3000/auth/callback"
   />
  </div>
 );
}
