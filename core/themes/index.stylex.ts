import stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colorsRaw = {
  primary: "#006FEE",
  "primary.dark": "#005BC4",
  "primary.darkness": "#004493",
  "primary.light": "#338EF7",
  "primary.lightness": "#66AAF9",

  secondary: "#7828C8",
  "secondary.dark": "#6020A0",
  "secondary.darkness": "#481878",
  "secondary.light": "#9353D3",
  "secondary.lightness": "#AE7EDE",

  success: "#17C964",
  "success.dark": "#12A150",
  "success.darkness": "#0E793C",
  "success.light": "#45D483",
  "success.lightness": "#74DFA2",

  danger: "#F31260",
  "danger.dark": "#C20E4D",
  "danger.darkness": "#920B3A",
  "danger.light": "#F54180",
  "danger.lightness": "#F871A0",

  warning: "#F5A524",
  "warning.dark": "#C4841D",
  "warning.darkness": "#936316",
  "warning.light": "#F7B750",
  "warning.lightness": "#F9C97C",

  sweet: "#FF4ECD",
  "sweet.dark": "#CC3EA4",
  "sweet.darkness": "#992F7B",
  "sweet.light": "#FF71D7",
  "sweet.lightness": "#FF95E1",

  info: "#7EE7FC",
  "info.dark": "#06B7DB",
  "info.darkness": "#09AACD",
  "info.light": "#A5EEFD",
  "info.lightness": "#A5EEFD",

  disabled: "#71717A",
  "disabled.dark": "#5C5C66",
  "disabled.darkness": "#3F3F46",
  "disabled.light": "#A1A1AA",
  "disabled.lightness": "#D4D4D8",
};

export const propertiesRaw = {
  white: "#ffffff",
  "white.dark": "#f2f2f2",
  "white.darkness": "#e6e6e6",
  "white.light": "#ffffff",
  "white.lightness": "#ffffff",

  black: "#000000",
  "black.dark": "#141414",
  "black.darkness": "#000000",
  "black.light": "#3d3d3d",
  "black.lightness": "#8e8e8e",

  text: "#18181b",
  "text.dark": "#141414",
  "text.darkness": "#000000",
  "text.light": "#3d3d3d",
  "text.lightness": "#8e8e8e",

  textAlt: "#ffffff",
  "textAlt.dark": "#afafaf",
  "textAlt.darkness": "#5f5f5f",
  "textAlt.light": "#18181b",
  "textAlt.lightness": "#000000",

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
  button: "0.875rem",
  medium: "1rem",
  large: "1.25rem",
  xlarge: "1.5rem",
  xxlarge: "1.75rem",
};

export const spacingRaw = {
  xsmall: "0.5rem",
  small: "0.75rem",
  medium: "1rem",
  large: "1.25rem",
  xlarge: "1.5rem",
  xxlarge: "1.75rem",
};
export const borderRadiusRaw = {
  small: "0.25rem",
  medium: "0.5rem",
  large: "0.75rem",
  xlarge: "1rem",
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
