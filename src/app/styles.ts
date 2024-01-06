import stylex from "@stylexjs/stylex";
import { fonts } from "../../core/tokens/fonts.stylex";
import { colors } from "../../core/tokens/colors.stylex";
import { sizes } from "../../core/tokens/sizes.stylex";
import { theme } from "../../core/themes/index.stylex";

export const html = stylex.create({
  dynamic: () => ({
    colorScheme: "light",
    backgroundColor: theme.background,
  }),
});

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
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "10px",
    padding: "10px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px",
  },
  content: {
    display: "flex",
    width: "100%",
    gap: "12px",
    flexWrap: "wrap",
    height: "max-content",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content_title: {
    display: "flex",
    width: "100%",
    height: "max-content",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "6px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: () => ({
    fontFamily: fonts.primary,
    color: theme["text.400"],
    fontSize: sizes.xlarge,
    fontWeight: "bold",
  }),
  subtitle: () => ({
    fontFamily: fonts.primary,
    color: theme["text.100"],
    fontSize: sizes.small,
    fontWeight: "bold",
  }),
  title_content: () => ({
    fontFamily: fonts.primary,
    color: theme["text.200"],
    fontSize: sizes.regular,
    fontWeight: "bold",
  }),
});
