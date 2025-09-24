"use client";

import { MdSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

import Input from "@/app/ui/Input";
import { useEffect, useState } from "react";

function UiMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.cookie = `themeMode=${theme}; path=/; max-age=31536000`;

    const htmlEl = document.documentElement;

    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }, [theme]);

  return (
    <label
      className="bg-grey-background p-2 rounded-lg flex dark:text-primary-text hover:bg-white"
      htmlFor="uimode"
    >
      <Input
        type="checkbox"
        id="uimode"
        onChange={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        className="hidden"
      />
      {theme === "light" ? (
        <MdSunny className="w-5 h-5 text-black" />
      ) : (
        <FaRegMoon className="w-5 h-5 text-black" />
      )}
    </label>
  );
}

export default UiMode;
