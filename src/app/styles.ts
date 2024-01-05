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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundImage:
      "url(https://png.pngtree.com/thumb_back/fh260/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png)",
    backgroundSize: "cover",
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
