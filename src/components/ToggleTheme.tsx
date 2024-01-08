"use client";
import stylex from "@stylexjs/stylex";
import { Button } from "@stellaria/nova";
import useTheme from "../../core/hooks/useTheme";

const styles = stylex.create({
  button: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    "z-index": 1000,
  },
});

export const ToggleTheme = () => {
  const { toggle } = useTheme();
  return (
    <Button
      stylex={styles.button}
      onClick={() => {
        toggle();
      }}
    >
      Toggle Theme
    </Button>
  );
};
