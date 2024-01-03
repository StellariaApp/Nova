"use client";

import stylex from "@stylexjs/stylex";
import { setCookie } from "cookies-next";
import { themeDark, themeLight } from "../themes/index.stylex";
import { ThemeKeys } from "..";
import { cloneElement, useState } from "react";

type Props = {
  theme: ThemeKeys;
  children: React.ReactNode;
};

const themeMap = {
  dark: themeDark,
  light: themeLight,
};

const themeSelector = (theme: ThemeKeys) => themeMap[theme];

export const ChangeTheme = {
  set: async (callback: (theme: ThemeKeys) => ThemeKeys) => {},
};

const ProviderThemeClient = (props: Props) => {
  const { children, theme } = props;
  const [themeState, setThemeState] = useState(theme);

  const themeProps = stylex.props(themeSelector(themeState));
  const element = children as React.ReactElement;

  ChangeTheme.set = async (callback) => {
    const newTheme = callback(themeState);
    setCookie("theme", newTheme);
    setThemeState(newTheme);
  };

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
