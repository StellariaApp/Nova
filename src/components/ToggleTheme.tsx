"use client";
import { Button } from "@stellaria/nova";

export const ToggleTheme = () => {
  return (
    <Button
      onClick={() => {
        const theme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute(
          "data-theme",
          theme === "dark" ? "light" : "dark"
        );
      }}
    >
      Toogle Theme
    </Button>
  );
};
