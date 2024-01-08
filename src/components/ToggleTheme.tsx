"use client";
import stylex from "@stylexjs/stylex";
import { Button, Icon } from "@stellaria/nova";
import useTheme from "../../core/hooks/useTheme";
import { theme } from "../../core/themes/index.stylex";

export const ToggleTheme = () => {
  const { theme: themeKey, toggle } = useTheme();
  return (
    <Button onClick={toggle} stylex={[styles.button]}>
      <Icon
        icon={themeKey === "light" ? "sun" : "moon"}
        fill={theme["backgroundAlt.600"]}
        size={16}
      />
    </Button>
  );
};

const styles = stylex.create({
  button: {
    width: "max-content",
    height: "max-content",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
    borderColor: theme["background.700"],
    ":hover": {
      backgroundColor: theme["background.600"],
      borderColor: theme["background.700"],
    },
  },
});
