"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
 return (
  <div className="text-zinc-800 dark:text-zinc-100 bg-purple-300 dark:bg-purple-950 min-h-screen min-w-screen transition-colors duration-300">
   <ThemeProvider enableSystem={true} attribute="class">
    {children}
   </ThemeProvider>
  </div>
 );
}
