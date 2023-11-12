"use client";
import { css } from "@stellaria/supernova";
import SuperNovaTheme from "../../themes/theme";

const span = css`
  transition: all 0.3s ease-in-out;
`;

const ThemeKey = () => {
  const [key] = SuperNovaTheme.use();

  return <span className={span}>Theme key: {key}</span>;
};

export default ThemeKey;
