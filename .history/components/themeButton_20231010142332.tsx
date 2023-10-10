"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className=" p-1 rounded-lg "
    >
      {resolvedTheme === "dark" ? (
        <BsSun className="w-6 h-6" />
      ) : (
        <BsMoon className="w-6 h-6" />
      )}
    </button>
  );
}
