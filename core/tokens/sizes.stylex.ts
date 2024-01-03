import stylex from "@stylexjs/stylex";

export const sizesRaw = {
  xxsmall: "0.25rem",
  xsmall: "0.5rem",
  small: "0.75rem",
  regular: "0.875rem",
  large: "1rem",
  xlarge: "1.25rem",
  xxlarge: "1.5rem",
};

export const sizes = stylex.defineVars(sizesRaw);
