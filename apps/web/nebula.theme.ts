import { defineThemes } from "@stellaria/supernova";

const theme = defineThemes({
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
      background: "#242424",
      text: "#ffffff",
      textAlt: "#242424",
    },
  },
});

export default theme;
