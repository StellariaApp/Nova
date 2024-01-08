"use client";

import { Fragment, useId } from "react";
import { Wrapper } from "../../core/components";
import { VARIANTS } from "@/constants/variants";
import { COLORS, COLORS_GRADIENTS } from "@/constants/colors";
import {
  Colors,
  Gradients,
  GradientsShades,
  Shades,
  Variants,
} from "../../core/types";

type Props = {
  title: string;
  subtitle: string;
  variants?: (variant?: Variants) => JSX.Element;
  colors?: (
    variant?: Variants,
    color?: Colors,
    shade?: Shades,
    idx?: number
  ) => JSX.Element;
  gradient?: () => JSX.Element;
  gradients?: (
    gradient?: Gradients,
    gradientShades?: GradientsShades,
    idx?: number
  ) => JSX.Element;
  disable?: React.ReactNode;

  properties?: {
    maxWidth?: string;
  };
};

export const Section = (props: Props) => {
  const { title, subtitle, colors, gradients, gradient, variants, disable } =
    props;

  const showColors = useAtomValue(ShowColorsAtom);
  const showColorsCSS = useAtomValue(ShowColorsCSSAtom);
  const showShades = useAtomValue(ShowShadesAtom);

  const id = useId();
  return (
    <Wrapper as="section" stylex={styles.wrapper}>
      <Wrapper as="section" stylex={styles.content_title}>
        <span {...stylex.props(styles.title())}>{title}</span>
        <span {...stylex.props(styles.subtitle())}>{subtitle}</span>
      </Wrapper>
      <Wrapper stylex={styles.container}>
        {disable && (
          <Wrapper
            stylex={[
              styles.grid,
              props?.properties?.maxWidth && styles.gridDynamic(props),
            ]}
          >
            <span {...stylex.props(styles.title_content())}>DISABLE</span>
            <Wrapper stylex={styles.content}>{disable}</Wrapper>
          </Wrapper>
        )}

        {VARIANTS.map((variant) => (
          <Wrapper
            key={id + variant}
            stylex={[
              styles.grid,
              props?.properties?.maxWidth && styles.gridDynamic(props),
            ]}
          >
            <span {...stylex.props(styles.title_content())}>
              {variant?.toUpperCase() ?? "DEFAULT"}
            </span>
            <Wrapper stylex={styles.content}>
              {variants && variants?.(variant)}
              {colors &&
                COLORS.filter((_, idx) => (showColors ? true : idx === 0)).map(
                  (color, idx = 0) => (
                    <Fragment key={id + variant ?? "none" + color ?? "none"}>
                      {showShades
                        ? SHADES.map((shade, idx = 0) =>
                            colors?.(variant, color, shade, idx)
                          )
                        : colors?.(variant, color, undefined, idx)}
                    </Fragment>
                  )
                )}
              {showColorsCSS &&
                colors &&
                COLORS_CSS_ARRAY.map((color, idx = 0) => (
                  <Fragment key={id + variant ?? "none" + color ?? "none"}>
                    {showShades
                      ? SHADES.map((shade, idx = 0) =>
                          colors?.(variant, color, shade, idx)
                        )
                      : colors?.(variant, color, undefined, idx)}
                  </Fragment>
                ))}
            </Wrapper>
          </Wrapper>
        ))}
        {gradient && (
          <Wrapper
            stylex={[
              styles.grid,
              props?.properties?.maxWidth && styles.gridDynamic(props),
            ]}
          >
            <span {...stylex.props(styles.title_content())}>GRADIENT</span>
            <Wrapper stylex={styles.content}>{gradient()}</Wrapper>
          </Wrapper>
        )}
        {gradients && (
          <Wrapper
            stylex={[
              styles.grid,
              props?.properties?.maxWidth && styles.gridDynamic(props),
            ]}
          >
            <span {...stylex.props(styles.title_content())}>GRADIENT</span>
            <Wrapper stylex={styles.content}>
              {gradients &&
                COLORS_GRADIENTS.filter((_, idx) =>
                  showColors ? true : idx === 0
                ).map((colors, idx = 0) => (
                  <Fragment
                    key={id + colors[0] ?? "color0" + colors[1] ?? "color1"}
                  >
                    {showShades
                      ? SHADES_COMBINED.map((shades, idx = 0) =>
                          gradients?.(colors, shades, idx)
                        )
                      : gradients?.(colors, undefined, idx)}
                  </Fragment>
                ))}
              {showColorsCSS &&
                gradients &&
                COLORS_CSS_GRADIENTS.map((colors, idx = 0) => (
                  <Fragment
                    key={id + colors[0] ?? "color0" + colors[1] ?? "color1"}
                  >
                    {showShades
                      ? SHADES_COMBINED.map((shade, idx = 0) =>
                          gradients?.(colors, shade, idx)
                        )
                      : gradients?.(colors, undefined, idx)}
                  </Fragment>
                ))}
            </Wrapper>
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};

import stylex from "@stylexjs/stylex";
import { fonts } from "../../core/tokens/fonts.stylex";
import { sizes } from "../../core/tokens/sizes.stylex";
import { theme } from "../../core/themes/index.stylex";
import {
  COLORS_CSS_ARRAY,
  COLORS_CSS_GRADIENTS,
} from "../../core/constants/colors";
import { SHADES, SHADES_COMBINED } from "@/constants/shades";
import { useAtomValue } from "jotai";
import {
  ShowColorsAtom,
  ShowColorsCSSAtom,
  ShowShadesAtom,
} from "../../core/jotai/show";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "max-content",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    padding: "10px",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px",
  },
  containerShow: () => ({
    flexDirection: "column",
  }),
  grid: {
    display: "flex",
    flexDirection: "column",
    height: "max-content",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px",
  },
  gridDynamic: (props: Props) => ({
    display: "flex",
    flexBasis: props?.properties?.maxWidth,
    flexGrow: 1,
  }),
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
    fontSize: sizes.small,
    fontWeight: "bold",
  }),
});
