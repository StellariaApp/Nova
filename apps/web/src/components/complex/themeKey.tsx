"use client";
import { css } from "@stellaria/supernova";
import SuperNovaTheme from "../../themes/theme";
import { theme } from "../../themes";

const span = css`
  color: ${theme?.colors?.text};
`;

const ThemeKey = () => {
  const [key] = SuperNovaTheme.use();

  return <span className={span}>Theme key: {key}</span>;
};

export default ThemeKey;
