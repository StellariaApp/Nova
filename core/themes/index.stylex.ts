import stylex from "@stylexjs/stylex";

export const DARK = "@media (prefers-color-scheme: dark)";

export const dark = stylex.defineVars({
  "background.100": "#525252",
  "background.200": "#474747",
  "background.300": "#3d3d3d",
  "background.400": "#333333",
  background: "#292929",
  "background.600": "#1f1f1f",
  "background.700": "#141414",
  "background.800": "#0a0a0a",
  "background.900": "#000000",

  "backgroundAlt.100": "#ffffff",
  "backgroundAlt.200": "#fdfdfd",
  "backgroundAlt.300": "#fbfbfb",
  "backgroundAlt.400": "#fcfcfc",
  backgroundAlt: "#fafafa",
  "backgroundAlt.600": "#cccccc",
  "backgroundAlt.700": "#c2c2c2",
  "backgroundAlt.800": "#b8b8b8",
  "backgroundAlt.900": "#adadad",

  "text.100": "#cccccc",
  "text.200": "#c2c2c2",
  "text.300": "#b8b8b8",
  "text.400": "#adadad",
  text: "#ffffff",
  "text.600": "#f5f5f5",
  "text.700": "#ebebeb",
  "text.800": "#e0e0e0",
  "text.900": "#d6d6d6",

  "textAlt.100": "#525252",
  "textAlt.200": "#474747",
  "textAlt.300": "#3d3d3d",
  "textAlt.400": "#333333",
  textAlt: "#000000",
  "textAlt.600": "#0a0a0a",
  "textAlt.700": "#141414",
  "textAlt.800": "#1f1f1f",
  "textAlt.900": "#292929",
});

export const light = stylex.defineVars({
  "background.100": "#ffffff",
  "background.200": "#fefefe",
  "background.300": "#fdfdfd",
  "background.400": "#fcfcfc",
  background: "#fafafa",
  "background.600": "#f1f1f1",
  "background.700": "#e0e0e0",
  "background.800": "#cccccc",
  "background.900": "#b8b8b8",

  "backgroundAlt.100": "#525252",
  "backgroundAlt.200": "#474747",
  "backgroundAlt.300": "#3d3d3d",
  "backgroundAlt.400": "#333333",
  backgroundAlt: "#292929",
  "backgroundAlt.600": "#1f1f1f",
  "backgroundAlt.700": "#141414",
  "backgroundAlt.800": "#0a0a0a",
  "backgroundAlt.900": "#000000",

  "text.100": "#525252",
  "text.200": "#474747",
  "text.300": "#3d3d3d",
  "text.400": "#333333",
  text: "#000000",
  "text.600": "#0a0a0a",
  "text.700": "#141414",
  "text.800": "#1f1f1f",
  "text.900": "#292929",

  "textAlt.100": "#cccccc",
  "textAlt.200": "#c2c2c2",
  "textAlt.300": "#b8b8b8",
  "textAlt.400": "#adadad",
  textAlt: "#ffffff",
  "textAlt.600": "#f5f5f5",
  "textAlt.700": "#ebebeb",
  "textAlt.800": "#e0e0e0",
  "textAlt.900": "#d6d6d6",
});

export const theme = stylex.defineVars({
  "background.100": {
    default: light["background.100"],
    [DARK]: dark["background.100"],
  },
  "background.200": {
    default: light["background.200"],
    [DARK]: dark["background.200"],
  },
  "background.300": {
    default: light["background.300"],
    [DARK]: dark["background.300"],
  },
  "background.400": {
    default: light["background.400"],
    [DARK]: dark["background.400"],
  },
  background: {
    default: light.background,
    [DARK]: dark.background,
  },
  "background.600": {
    default: light["background.600"],
    [DARK]: dark["background.600"],
  },
  "background.700": {
    default: light["background.700"],
    [DARK]: dark["background.700"],
  },
  "background.800": {
    default: light["background.800"],
    [DARK]: dark["background.800"],
  },
  "background.900": {
    default: light["background.900"],
    [DARK]: dark["background.900"],
  },

  "backgroundAlt.100": {
    default: light["backgroundAlt.100"],
    [DARK]: dark["backgroundAlt.100"],
  },
  "backgroundAlt.200": {
    default: light["backgroundAlt.200"],
    [DARK]: dark["backgroundAlt.200"],
  },
  "backgroundAlt.300": {
    default: light["backgroundAlt.300"],
    [DARK]: dark["backgroundAlt.300"],
  },
  "backgroundAlt.400": {
    default: light["backgroundAlt.400"],
    [DARK]: dark["backgroundAlt.400"],
  },
  backgroundAlt: {
    default: light.backgroundAlt,
    [DARK]: dark.backgroundAlt,
  },
  "backgroundAlt.600": {
    default: light["backgroundAlt.600"],
    [DARK]: dark["backgroundAlt.600"],
  },
  "backgroundAlt.700": {
    default: light["backgroundAlt.700"],
    [DARK]: dark["backgroundAlt.700"],
  },
  "backgroundAlt.800": {
    default: light["backgroundAlt.800"],
    [DARK]: dark["backgroundAlt.800"],
  },
  "backgroundAlt.900": {
    default: light["backgroundAlt.900"],
    [DARK]: dark["backgroundAlt.900"],
  },

  "text.100": {
    default: light["text.100"],
    [DARK]: dark["text.100"],
  },
  "text.200": {
    default: light["text.200"],
    [DARK]: dark["text.200"],
  },
  "text.300": {
    default: light["text.300"],
    [DARK]: dark["text.300"],
  },
  "text.400": {
    default: light["text.400"],
    [DARK]: dark["text.400"],
  },
  text: {
    default: light.text,
    [DARK]: dark.text,
  },
  "text.600": {
    default: light["text.600"],
    [DARK]: dark["text.600"],
  },
  "text.700": {
    default: light["text.700"],
    [DARK]: dark["text.700"],
  },
  "text.800": {
    default: light["text.800"],
    [DARK]: dark["text.800"],
  },
  "text.900": {
    default: light["text.900"],
    [DARK]: dark["text.900"],
  },

  "textAlt.100": {
    default: light["textAlt.100"],
    [DARK]: dark["textAlt.100"],
  },
  "textAlt.200": {
    default: light["textAlt.200"],
    [DARK]: dark["textAlt.200"],
  },
  "textAlt.300": {
    default: light["textAlt.300"],
    [DARK]: dark["textAlt.300"],
  },
  "textAlt.400": {
    default: light["textAlt.400"],
    [DARK]: dark["textAlt.400"],
  },
  textAlt: {
    default: light.textAlt,
    [DARK]: dark.textAlt,
  },
  "textAlt.600": {
    default: light["textAlt.600"],
    [DARK]: dark["textAlt.600"],
  },
  "textAlt.700": {
    default: light["textAlt.700"],
    [DARK]: dark["textAlt.700"],
  },
  "textAlt.800": {
    default: light["textAlt.800"],
    [DARK]: dark["textAlt.800"],
  },
  "textAlt.900": {
    default: light["textAlt.900"],
    [DARK]: dark["textAlt.900"],
  },
});

export const themes = {
  dark,
  light,
};

export const themeDark = stylex.createTheme(theme, dark);
export const themeLight = stylex.createTheme(theme, light);
