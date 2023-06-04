import ModeSwitcher from "@/components/mode-switcher";

export default function Home() {
 return (
  <div className="flex flex-col w-full h-full text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800">
   <ModeSwitcher />
   Themes
  </div>
 );
}
