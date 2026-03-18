import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem("theme") === "light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const shouldUseLight = storedTheme === "light";

    if (shouldUseLight) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }

    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return (
    <button
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-50 bg-gymGold text-black p-2 sm:p-3 rounded-full shadow-2xl animate-bounce"
      onClick={() => setIsLightMode((prev) => !prev)}
      type="button"
    >
      {isLightMode ? (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
