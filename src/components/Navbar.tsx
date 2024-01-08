"use client";
import stylex from "@stylexjs/stylex";
import { Button, Icon, Wrapper } from "../../core/components";
import { ToggleTheme } from "./ToggleTheme";
import { theme } from "../../core/themes/index.stylex";
import { spacing } from "../../core/tokens/spacing.stylex";
import { borderRadius } from "../../core/tokens/border.stylex";
import { useAtom } from "jotai";
import {
  ShowColorsAtom,
  ShowColorsCSSAtom,
  ShowGradientsColorsAtom,
  ShowShadesAtom,
} from "../../core/jotai/show";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [showColors, setShowColors] = useAtom(ShowColorsAtom);
  const [showColorsCSS, setShowColorsCSS] = useAtom(ShowColorsCSSAtom);
  const [showGradientsColors, setShowGradientsColors] = useAtom(
    ShowGradientsColorsAtom
  );
  const [showShades, setShowShades] = useAtom(ShowShadesAtom);
  return (
    <Wrapper stylex={styles.nav}>
      {show && (
        <Wrapper stylex={styles.wrapper}>
          <Button
            stylex={styles.button}
            onClick={() => {
              setShowColors(!showColors);
            }}
          >
            {showColors ? "Hide Colors" : "Show Colors"}
            <Icon icon="palette" size={16} />
          </Button>

          <Button
            stylex={styles.button}
            onClick={() => {
              setShowColorsCSS(!showColorsCSS);
            }}
          >
            {showColorsCSS ? "Hide Colors CSS" : "Show Colors CSS"}
            <Icon icon="palette" size={16} />
          </Button>

          <Button
            stylex={styles.button}
            onClick={() => {
              setShowGradientsColors(!showGradientsColors);
            }}
          >
            {showGradientsColors ? "Hide Gradients" : "Show Gradients"}
            <Icon icon="palette" size={16} />
          </Button>

          <Button
            stylex={styles.button}
            onClick={() => {
              setShowShades(!showShades);
            }}
          >
            {showShades ? "Hide Shades" : "Show Shades"}
            <Icon icon="palette" size={16} />
          </Button>
        </Wrapper>
      )}

      <ToggleTheme />
      <Button
        stylex={styles.buttonShow}
        onClick={() => {
          setShow(!show);
        }}
      >
        <Icon icon={!show ? "chevron-left" : "chevron-right"} size={16} />
      </Button>
    </Wrapper>
  );
};

const styles = stylex.create({
  nav: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    maxWidth: "calc(100% - 2rem)",

    backgroundColor: theme["background.100"],
    padding: spacing.small,
    borderRadius: borderRadius.small,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    "z-index": 1000,
    gap: spacing.small,
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "max-content",
    gap: spacing.small,
  },
  button: {
    width: "max-content",
    height: "max-content",
    flexBasis: "320px",
    flexGrow: 1,
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
    fontSize: "12px !important",
    borderColor: theme["background.700"],
    color: theme["text"],
    gap: "8px",
    ":hover": {
      backgroundColor: theme["background.600"],
      borderColor: theme["background.700"],
    },
  },
  buttonShow: {
    width: "max-content",
    height: "max-content",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.background,
    fontSize: "12px !important",
    borderColor: theme["background.700"],
    color: theme["text"],
    gap: "8px",
    ":hover": {
      backgroundColor: theme["background.600"],
      borderColor: theme["background.700"],
    },
  },
});
