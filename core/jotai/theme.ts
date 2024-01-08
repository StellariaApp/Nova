import { atom } from "jotai";
import { themes } from "../themes/index.stylex";

export const ThemeAtom = atom({
  theme: undefined,
  setTheme: (theme) => {},
  toggle: () => {},
} as {
  theme: keyof typeof themes | undefined;
  setTheme: (theme: keyof typeof themes) => void;
  toggle: () => void;
});
