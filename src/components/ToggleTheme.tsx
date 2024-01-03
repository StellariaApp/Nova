"use client";
import stylex from "@stylexjs/stylex";
import { Button } from "@stellaria/nova";
import { ChangeTheme } from "../../core/providers/theme.client";

const styles = stylex.create({
  button: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    "z-index": 1000,
  },
});

export const ToggleTheme = () => {
  return (
    <Button
      stylex={styles.button}
      onClick={() => {
        ChangeTheme.set((theme) => (theme === "dark" ? "light" : "dark"));
      }}
    >
      Toggle Theme
    </Button>
  );
};
