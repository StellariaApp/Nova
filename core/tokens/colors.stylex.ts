import stylex from "@stylexjs/stylex";

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
  "secondary.300": "#C889F3",
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
  "info.400": "#72D6F8",
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

export const colors = stylex.defineVars(colorsRaw);
