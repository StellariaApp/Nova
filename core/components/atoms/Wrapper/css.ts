import stylex from "@stylexjs/stylex";

export const wrapper = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",
  },
});
