import { useAtom, atom } from 'jotai';
import { ThemeAtom } from '../jotai/theme';

export const createTheme = <T extends object>(themeObject: T) => {
  const keys = Object.keys(themeObject);
  const themes = themeObject;
  const ThemeAtom = atom({});

  // const [theme, setTheme] = useAtom(ThemeAtom)
  // export const ThemeAtom = atom({
  //     default: null,
  //     theme: null,
  //     themes: null,
  //     key: null,
  //     keys: null,
  //     set: () => null,
  //     get: () => null,
  //     toggle: () => null,
  // })
};
