import stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colorsRaw = {
  "primary.100": "#D6E4FF",
  "primary.200": "#ADC8FF",
  "primary.300": "#84A9FF",
  "primary.400": "#6690FF",
  primary: "#3366FF",
  "primary.600": "#254EDB",
  "primary.700": "#1939B7",
  "primary.800": "#102693",
  "primary.900": "#091A7A",

  "secondary.100": "#F1D8FD",
  "secondary.200": "#E1B2FB",
  "secondary.300": "##C889F3",
  "secondary.400": "#AE6AE7",
  secondary: "#893cd7",
  "secondary.600": "#6A2BB8",
  "secondary.700": "#4F1E9A",
  "secondary.800": "#37137C",
  "secondary.900": "#260B67",

  "success.100": "#D0FCD2",
  "success.200": "#A3FAB0",
  "success.300": "#73F192",
  "success.400": "#4FE382",
  success: "#1cd26d",
  "success.600": "#14B46B",
  "success.700": "#0E9766",
  "success.800": "#08795C",
  "success.900": "#056455",

  "danger.100": "#FFE5D7",
  "danger.200": "#FFC5AF",
  "danger.300": "#FF9D87",
  "danger.400": "#FF7869",
  danger: "#FF3B38",
  "danger.600": "#DB2835",
  "danger.700": "#B71C34",
  "danger.800": "#931131",
  "danger.900": "#7A0A2F",

  "warning.100": "#FEF4D3",
  "warning.200": "#FEE6A7",
  "warning.300": "#FCD47B",
  "warning.400": "#F9C259",
  warning: "#F5A524",
  "warning.600": "#D2841A",
  "warning.700": "#B06712",
  "warning.800": "#8E4C0B",
  "warning.900": "#753906",

  "sweet.100": "#FDD8D7",
  "sweet.200": "#FCAFB3",
  "sweet.300": "#F88697",
  "sweet.400": "#F16789",
  sweet: "#e83775",
  "sweet.600": "#C7286F",
  "sweet.700": "#A71B68",
  "sweet.800": "#86115D",
  "sweet.900": "#6F0A55",

  "info.100": "#D9FCFE",
  "info.200": "#B4F4FD",
  "info.300": "#8EE7FB",
  "info.400": "#44BCF4",
  info: "#44BCF4",
  "info.600": "#3194D1",
  "info.700": "#2270AF",
  "info.800": "#154F8D",
  "info.900": "#0D3875",

  "disabled.100": "#ffffff",
  "disabled.200": "#f0f0f0",
  "disabled.300": "#e0e0e0",
  "disabled.400": "#d1d1d1",
  disabled: "#c2c2c2",
  "disabled.600": "#999999",
  "disabled.700": "#858585",
  "disabled.800": "#757575",
  "disabled.900": "#666666",
};

export const backgroundRaw = {
  "base.100": { default: "#ffffff", [DARK]: "#080808" },
  "base.200": { default: "#fdfdfd", [DARK]: "#070707" },
  "base.300": { default: "#fbfbfb", [DARK]: "#060606" },
  "base.400": { default: "#fcfcfc", [DARK]: "#050505" },
  base: { default: "#fafafa", [DARK]: "#111111" },
  "base.600": { default: "#cccccc", [DARK]: "#030303" },
  "base.700": { default: "#c2c2c2", [DARK]: "#020202" },
  "base.800": { default: "#b8b8b8", [DARK]: "#010101" },
  "base.900": { default: "#adadad", [DARK]: "#000000" },
};

export const textRaw = {
  "base.100": { default: "#525252", [DARK]: "#cccccc" },
  "base.200": { default: "#474747", [DARK]: "#c2c2c2" },
  "base.300": { default: "#3d3d3d", [DARK]: "#b8b8b8" },
  "base.400": { default: "#333333", [DARK]: "#adadad" },
  base: { default: "#000000", [DARK]: "#ffffff" },
  "base.600": { default: "#0a0a0a", [DARK]: "#f5f5f5" },
  "base.700": { default: "#141414", [DARK]: "#ebebeb" },
  "base.800": { default: "#1f1f1f", [DARK]: "#e0e0e0" },
  "base.900": { default: "#292929", [DARK]: "#d6d6d6" },

  "alt.100": { default: "#cccccc", [DARK]: "#525252" },
  "alt.200": { default: "#c2c2c2", [DARK]: "#474747" },
  "alt.300": { default: "#b8b8b8", [DARK]: "#3d3d3d" },
  "alt.400": { default: "#adadad", [DARK]: "#333333" },
  alt: { default: "#ffffff", [DARK]: "#000000" },
  "alt.600": { default: "#f5f5f5", [DARK]: "#0a0a0a" },
  "alt.700": { default: "#ebebeb", [DARK]: "#141414" },
  "alt.800": { default: "#e0e0e0", [DARK]: "#1f1f1f" },
  "alt.900": { default: "#d6d6d6", [DARK]: "#292929" },
};

export const propertiesRaw = {
  white: "#ffffff",
  black: "#000000",

  border: "1px solid #d6d6d6",
  borderAlt: "1px solid #3f3f3f",

  shadow: { default: "0px 0px 8px #00000020", [DARK]: "0px 0px 8px #ffffff20" },
  shadowAlt: {
    default: "0px 0px 8px #00000040",
    [DARK]: "0px 0px 8px #ffffff40",
  },
};

export const sizesRaw = {
  xxsmall: "0.25rem",
  xsmall: "0.5rem",
  small: "0.75rem",
  regular: "0.875rem",
  large: "1rem",
  xlarge: "1.25rem",
  xxlarge: "1.5rem",
};

export const spacingRaw = {
  xxsmall: "0.25rem",
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
export const text = stylex.defineVars(textRaw);
export const background = stylex.defineVars(backgroundRaw);
export const properties = stylex.defineVars(propertiesRaw);
export const sizes = stylex.defineVars(sizesRaw);
export const spacing = stylex.defineVars(spacingRaw);
export const borderRadius = stylex.defineVars(borderRadiusRaw);
export const fonts = stylex.defineVars(fontsRaw);

export const theme = {
  colors,
  text,
  background,
  properties,
  sizes,
  spacing,
  borderRadius,
  fonts,
};
