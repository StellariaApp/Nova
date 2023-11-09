import { themes } from "@stellaria/supernova";

export const theme = themes({
  light: {
    colors: {
      primary: "#242424",
      primaryHover: "#3b3b3b",
      background: "#ffffff",
      text: "#242424",
      textAlt: "#ffffff",
    },
  },
  dark: {
    colors: {
      primary: "#ffffff",
      primaryHover: "#f5f5f5",
      background: "#fd5c5c",
      text: "#ffffff",
      textAlt: "#242424",
    },
  },
});

export default theme;