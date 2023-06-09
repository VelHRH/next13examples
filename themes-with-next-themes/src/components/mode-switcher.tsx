"use client";
import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ModeSwitcher: FC = ({}) => {
 const { systemTheme, theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);
 useEffect(() => {
  setMounted(true);
 }, []);
 if (!mounted) return null;
 const themeChanger = () => {
  const currentTheme = theme === "system" ? systemTheme : theme;
  setTheme(currentTheme === "light" ? "dark" : "light");
 };
 return <button onClick={themeChanger}>{theme}</button>;
};

export default ModeSwitcher;
