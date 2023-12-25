import stylex from "@stylexjs/stylex";

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
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
});
