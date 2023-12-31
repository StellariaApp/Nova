import stylex from "@stylexjs/stylex";
import { colors, fonts, sizes } from "../../core/themes/index.stylex";

export const page = stylex.create({
  container: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    height: "max-content",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    display: "flex",
    width: "100%",
    gap: "1rem",
    flexWrap: "wrap",
    height: "max-content",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: () => ({
    fontFamily: fonts.primary,
    color: colors.sweet,
    fontSize: sizes.large,
    fontWeight: "bold",
  }),
});
