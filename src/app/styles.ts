import stylex from "@stylexjs/stylex";
import { theme } from "../../core/themes/index.stylex";
import { properties } from "../../core/tokens/properties.stylex";

export const html = stylex.create({
  dynamic: () => ({
    colorScheme: "light",
    backgroundColor: theme.background,
    transition: properties.transition,
  }),
});

export const page = stylex.create({
  container: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
