import { atom } from 'jotai';

export const createTheme = <T extends object>(themeObject: T) => {
  const keys = Object.keys(themeObject);
  const themes = themeObject;
  const ThemeAtom = atom({});

  return {
    keys,
    themes,
    ThemeAtom
  };

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
