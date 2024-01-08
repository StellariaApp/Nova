"use client";

import stylex from "@stylexjs/stylex";
import { setCookie } from "cookies-next";
import { ThemeKeys } from "..";
import { cloneElement, useEffect, useState } from "react";
import { themes } from "../themes/index.stylex";
import { useAtom } from "jotai";
import { ThemeAtom } from "../jotai/theme";
import { ThemeMachine } from "../constants/theme";

type Props = {
  theme: ThemeKeys;
  children: React.ReactNode;
};

const themeSelector = (theme: ThemeKeys) => themes[theme];

const ProviderThemeClient = (props: Props) => {
  const { children, theme } = props;
  const [themeState, setThemeState] = useAtom(ThemeAtom);

  const themeProps = stylex.props(themeSelector(themeState.theme ?? theme));
  const element = children as React.ReactElement;

  useEffect(() => {
    setThemeState({
      theme: theme ?? themeState.theme,
      setTheme: (theme) => {
        const nextTheme = ThemeMachine[theme];
        setCookie("theme", nextTheme);
        setThemeState((prev) => ({ ...prev, theme: nextTheme }));
      },
      toggle: () =>
        setThemeState((prev) => {
          const nextTheme = ThemeMachine[prev.theme ?? theme];
          setCookie("theme", nextTheme);
          return { ...prev, theme: nextTheme };
        }),
    });
  }, []);

  return cloneElement(element, {
    ...element.props,
    className: `${element.props.className ?? ""} ${themeProps.className}`,
    style: {
      ...element.props.style,
      ...themeProps.style,
    },
  });
};

export default ProviderThemeClient;
