import { atom, useAtom, useSetAtom } from 'jotai';
import { useEffect, useLayoutEffect } from 'react';

type CreateThemeOpts<T extends object> = {
  default?: keyof T;
};

type Theme = object;

type ThemeAtom = {
  default: keyof Theme;
  theme: Theme[keyof Theme];
  themes: Theme;
  key: keyof Theme;
  keys: Array<keyof Theme>;
  toggle: () => void;
  set: (key: keyof Theme) => void;
  get: () => Theme[keyof Theme];
};

const ThemeAtom = atom({
  default: null,
  theme: null,
  themes: [],
  key: null,
  keys: [],
  toggle: () => null,
  set: () => null,
  get: () => null
} as unknown as ThemeAtom);

export const createTheme = <T extends Theme>(
  themes: T,
  options: CreateThemeOpts<T>
) => {
  const SetupTheme = useSetupTheme({ themes, options });

  return {
    SetupTheme
  };
};

type IConfig<T extends Theme> = {
  themes: T;
  options: CreateThemeOpts<T>;
};

export const useSetupTheme =
  <T extends Theme>(config: IConfig<T>) =>
  () => {
    const setTheme = useSetAtom(ThemeAtom);

    useEffect(() => {
      const themes = config.themes;
      const options = config.options;

      const keys = Object.keys(themes) as Array<keyof T>;
      const firstKey = keys[0];
      const defaultKey = options.default ?? firstKey;
      const defaultTheme = themes[defaultKey];

      const set = (key: keyof T) => {
        document.documentElement.dataset.theme = key.toString();
        localStorage.setItem('theme', key.toString());
        window.dispatchEvent(new Event('storage'));
        setTheme((prev) => {
          const newAtom = {
            ...prev,
            key,
            theme: themes[key]
          } as ThemeAtom;
          return newAtom;
        });
      };

      const toggle = () => {
        const getTheme = document.documentElement.dataset.theme as
          | keyof T
          | null;
        const index = keys.indexOf(getTheme ?? defaultKey);
        const next = keys[(index + 1) % keys.length];
        set(next);
      };

      const get = () => {
        const getTheme = document.documentElement.dataset.theme as keyof T;
        return getTheme;
      };

      const state = {
        default: defaultKey,
        theme: defaultTheme,
        key: defaultKey,
        themes,
        keys,
        toggle,
        set,
        get
      } as unknown as ThemeAtom;

      setTheme(state);
    }, [config]);

    return null;
  };

export const useTheme = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);

  const listener = () => {
    theme.set(theme.get());
  };

  useLayoutEffect(() => {
    listener();
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, []);

  return [theme, setTheme] as const;
};
