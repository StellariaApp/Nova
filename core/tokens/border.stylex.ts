import stylex from "@stylexjs/stylex";

export const borderRadiusRaw = {
  xxsmall: "0.0625rem",
  xsmall: "0.125rem",
  small: "0.25rem",
  regular: "0.5rem",
  large: "0.75rem",
  xlarge: "1rem",
  xxlarge: "1.5rem",
};

export const borderRadius = stylex.defineVars(borderRadiusRaw);
