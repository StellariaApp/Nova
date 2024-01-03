"use client";
import { Button } from "@stellaria/nova";
import { ChangeTheme } from "../../core/providers/theme.client";

export const ToggleTheme = () => {
  return (
    <Button
      onClick={() => {
        ChangeTheme.set((theme) => (theme === "dark" ? "light" : "dark"));
      }}
    >
      Toggle Theme
    </Button>
  );
};
