import stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colorsRaw = {
  primary: "#006FEE",
  "primary.dark": "#005BC4",
  "primary.darker": "#004493",
  "primary.light": "#338EF7",
  "primary.lightness": "#66AAF9",

  secondary: "#7828C8",
  "secondary.dark": "#6020A0",
  "secondary.darker": "#481878",
  "secondary.light": "#9353D3",
  "secondary.lightness": "#AE7EDE",

  success: "#17C964",
  "success.dark": "#12A150",
  "success.darker": "#0E793C",
  "success.light": "#45D483",
  "success.lightness": "#74DFA2",

  danger: "#F31260",
  "danger.dark": "#C20E4D",
  "danger.darker": "#920B3A",
  "danger.light": "#F54180",
  "danger.lightness": "#F871A0",

  warning: "#F5A524",
  "warning.dark": "#C4841D",
  "warning.darker": "#936316",
  "warning.light": "#F7B750",
  "warning.lightness": "#F9C97C",

  sweet: "#FF4ECD",
  "sweet.dark": "#CC3EA4",
  "sweet.darker": "#992F7B",
  "sweet.light": "#FF71D7",
  "sweet.lightness": "#FF95E1",

  info: "#7EE7FC",
  "info.dark": "#06B7DB",
  "info.darker": "#09AACD",
  "info.light": "#A5EEFD",
  "info.lightness": "#A5EEFD",

  disabled: "#ebebeb",
  "disabled.dark": "#cccccc",
  "disabled.darker": "#8a8a8a",
  "disabled.light": "#fafafa",
  "disabled.lightness": "#ffffff",

  white: "#fafafa",
  "white.dark": "#afafaf",
  "white.darker": "#5f5f5f",
  "white.light": "#fdfdfd",
  "white.lightness": "#ffffff",

  black: "#232324",
  "black.dark": "#18181a",
  "black.darker": "#000000",
  "black.light": "#303030",
  "black.lightness": "#4b4b4b",
};

export const propertiesRaw = {
  background: "#ffffff",
  foreground: "#ffffff",

  border: "1px solid #d6d6d6",
  borderAlt: "1px solid #3f3f3f",

  shadow: "0px 0px 8px #00000080",
  shadowAlt: "0px 0px 4px #0000003a",
};

export const sizesRaw = {
  xxsmall: "0.25rem",
  xsmall: "0.5rem",
  small: "0.75rem",
  regular: "0.875rem",
  large: "1rem",
  xl: "1.125rem",
  xlarge: "1.25rem",
  xxlarge: "1.5rem",
};

export const spacingRaw = {
  xsmall: "0.5rem",
  small: "0.75rem",
  regular: "0.875rem",
  large: "1rem",
  xlarge: "1.25rem",
  xxlarge: "1.5rem",
};
export const borderRadiusRaw = {
  xxsmall: "0.0625rem",
  xsmall: "0.125rem",
  small: "0.25rem",
  regular: "0.5rem",
  large: "0.75rem",
  xlarge: "1rem",
  xxlarge: "1.5rem",
};

export const fontsRaw = {
  primary: `"Inter", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
  "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
  "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,
};

export const colors = stylex.defineVars(colorsRaw);
export const properties = stylex.defineVars(propertiesRaw);
export const sizes = stylex.defineVars(sizesRaw);
export const spacing = stylex.defineVars(spacingRaw);
export const borderRadius = stylex.defineVars(borderRadiusRaw);
export const fonts = stylex.defineVars(fontsRaw);

export const theme = {
  colors,
  properties,
  sizes,
  spacing,
  borderRadius,
  fonts,
};
