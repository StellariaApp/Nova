import stylex from "@stylexjs/stylex";

export const fontsRaw = {
  primary: `"Inter", ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,
};

export const fonts = stylex.defineVars(fontsRaw);
