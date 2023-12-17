import stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primary: "#006FEE",
  primaryHover: "#005BC4",
  primaryActive: "#338EF7",

  secondary: "#7828C8",
  secondaryHover: "#6020A0",
  secondaryActive: "#9353D3",

  tertiary: "#FFC107",
  tertiaryHover: "#FFB300",
  tertiaryActive: "#FFCA28",

  text: { default: "#18181b", [DARK]: "#ffffff" },
  textSecondary: { default: "#a1a1a1", [DARK]: "#888888" },
  textAlt: { default: "#ffffff", [DARK]: "#18181b" },
  background: { default: "#ffffff", [DARK]: "#000000" },

  border: {
    default: `1px solid #d6d6d6`,
    [DARK]: `1px solid #3f3f3f`,
  },
  borderAlt: {
    default: `1px solid #3f3f3f`,
    [DARK]: `1px solid #d6d6d6`,
  },

  borderRadius: { default: "4px" },

  shadow: {
    default: "0px 0px 8px #00000080",
    [DARK]: "0px 0px 8px #00000025",
  },
  shadowAlt: {
    default: "0px 0px 4px #0000003a",
    [DARK]: "0px 0px 4px #0000000c",
  },
});

export const sizes = stylex.defineVars({
  xxsmall: { default: "0.25rem" },
  xsmall: { default: "0.5rem" },
  small: { default: "0.75rem" },
  button: { default: "0.875rem" },
  medium: { default: "1rem" },
  large: { default: "1.25rem" },
  xlarge: { default: "1.5rem" },
  xxlarge: { default: "1.75rem" },
});

export const spacing = stylex.defineVars({
  xsmall: { default: "0.5rem" },
  small: { default: "0.75rem" },
  medium: { default: "1rem" },
  large: { default: "1.25rem" },
  xlarge: { default: "1.5rem" },
  xxlarge: { default: "1.75rem" },
});

export const borderRadius = stylex.defineVars({
  small: { default: "0.25rem" },
  medium: { default: "0.5rem" },
  large: { default: "0.75rem" },
  xlarge: { default: "1rem" },
});

export const fonts = stylex.defineVars({
  primary: {
    default: `"Inter", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,
  },
});

export const theme = {
  colors,
  sizes,
  fonts,
  spacing,
  borderRadius,
};
