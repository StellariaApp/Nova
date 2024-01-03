import stylex from "@stylexjs/stylex";
import { fonts } from "../../core/tokens/fonts.stylex";
import { colors } from "../../core/tokens/colors.stylex";
import { sizes } from "../../core/tokens/sizes.stylex";

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
