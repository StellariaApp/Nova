import { atom } from "jotai";
import { themes } from "../themes/index.stylex";
import { atomWithStorage } from "jotai/utils";

export const ThemeAtom = atomWithStorage("THEME", {
  theme: undefined,
  setTheme: (theme) => {},
  toggle: () => {},
} as {
  theme: keyof typeof themes | undefined;
  setTheme: (theme: keyof typeof themes) => void;
  toggle: () => void;
});
