import stylex from "@stylexjs/stylex";
import { baseLight } from "../themes/light.stylex";
import { DARK, baseDark } from "../themes/dark.stylex";

export const base = stylex.defineVars({
  "background.100": {
    default: baseLight["background.100"],
    [DARK]: baseDark["background.100"],
  },
  "background.200": {
    default: baseLight["background.200"],
    [DARK]: baseDark["background.200"],
  },
  "background.300": {
    default: baseLight["background.300"],
    [DARK]: baseDark["background.300"],
  },
  "background.400": {
    default: baseLight["background.400"],
    [DARK]: baseDark["background.400"],
  },
  background: {
    default: baseLight.background,
    [DARK]: baseDark.background,
  },
  "background.600": {
    default: baseLight["background.600"],
    [DARK]: baseDark["background.600"],
  },
  "background.700": {
    default: baseLight["background.700"],
    [DARK]: baseDark["background.700"],
  },
  "background.800": {
    default: baseLight["background.800"],
    [DARK]: baseDark["background.800"],
  },
  "background.900": {
    default: baseLight["background.900"],
    [DARK]: baseDark["background.900"],
  },

  "backgroundAlt.100": {
    default: baseLight["backgroundAlt.100"],
    [DARK]: baseDark["backgroundAlt.100"],
  },
  "backgroundAlt.200": {
    default: baseLight["backgroundAlt.200"],
    [DARK]: baseDark["backgroundAlt.200"],
  },
  "backgroundAlt.300": {
    default: baseLight["backgroundAlt.300"],
    [DARK]: baseDark["backgroundAlt.300"],
  },
  "backgroundAlt.400": {
    default: baseLight["backgroundAlt.400"],
    [DARK]: baseDark["backgroundAlt.400"],
  },
  backgroundAlt: {
    default: baseLight.backgroundAlt,
    [DARK]: baseDark.backgroundAlt,
  },
  "backgroundAlt.600": {
    default: baseLight["backgroundAlt.600"],
    [DARK]: baseDark["backgroundAlt.600"],
  },
  "backgroundAlt.700": {
    default: baseLight["backgroundAlt.700"],
    [DARK]: baseDark["backgroundAlt.700"],
  },
  "backgroundAlt.800": {
    default: baseLight["backgroundAlt.800"],
    [DARK]: baseDark["backgroundAlt.800"],
  },
  "backgroundAlt.900": {
    default: baseLight["backgroundAlt.900"],
    [DARK]: baseDark["backgroundAlt.900"],
  },

  "text.100": {
    default: baseLight["text.100"],
    [DARK]: baseDark["text.100"],
  },
  "text.200": {
    default: baseLight["text.200"],
    [DARK]: baseDark["text.200"],
  },
  "text.300": {
    default: baseLight["text.300"],
    [DARK]: baseDark["text.300"],
  },
  "text.400": {
    default: baseLight["text.400"],
    [DARK]: baseDark["text.400"],
  },
  text: {
    default: baseLight.text,
    [DARK]: baseDark.text,
  },
  "text.600": {
    default: baseLight["text.600"],
    [DARK]: baseDark["text.600"],
  },
  "text.700": {
    default: baseLight["text.700"],
    [DARK]: baseDark["text.700"],
  },
  "text.800": {
    default: baseLight["text.800"],
    [DARK]: baseDark["text.800"],
  },
  "text.900": {
    default: baseLight["text.900"],
    [DARK]: baseDark["text.900"],
  },

  "textAlt.100": {
    default: baseLight["textAlt.100"],
    [DARK]: baseDark["textAlt.100"],
  },
  "textAlt.200": {
    default: baseLight["textAlt.200"],
    [DARK]: baseDark["textAlt.200"],
  },
  "textAlt.300": {
    default: baseLight["textAlt.300"],
    [DARK]: baseDark["textAlt.300"],
  },
  "textAlt.400": {
    default: baseLight["textAlt.400"],
    [DARK]: baseDark["textAlt.400"],
  },
  textAlt: {
    default: baseLight.textAlt,
    [DARK]: baseDark.textAlt,
  },
  "textAlt.600": {
    default: baseLight["textAlt.600"],
    [DARK]: baseDark["textAlt.600"],
  },
  "textAlt.700": {
    default: baseLight["textAlt.700"],
    [DARK]: baseDark["textAlt.700"],
  },
  "textAlt.800": {
    default: baseLight["textAlt.800"],
    [DARK]: baseDark["textAlt.800"],
  },
  "textAlt.900": {
    default: baseLight["textAlt.900"],
    [DARK]: baseDark["textAlt.900"],
  },
});
