import stylex from "@stylexjs/stylex";
import { Wrapper, Button, theme } from "@stellaria/nova";
import { Fragment } from "react";
import { Icon } from "../../core/components/atoms/Icon";
import { IconsArray } from "../../core/utils/icon";

const styles = stylex.create({
  container: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    gap: "1rem",
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
  button: () => ({
    backgroundColor: theme.colors["secondary.dark"],
    borderColor: theme.colors["secondary.light"],
    color: theme.colors["secondary.lightness"],
    ":hover": {
      backgroundColor: theme.colors["secondary.darkness"],
      color: theme.colors["secondary.lightness"],
      borderColor: theme.colors["secondary.lightness"],
    },
  }),
});

const COLORS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "sweet",
  "info",
] as const;

const COLOR_VARIANTS = [
  "darkness",
  "dark",
  undefined,
  "light",
  "lightness",
] as const;

const VARIANTS = ["flat", "glow", "gradient", "outline"] as const;

const Home = () => (
  <Wrapper as="main" stylex={styles.container}>
    <Wrapper as="section" stylex={styles.wrapper}>
      {IconsArray.map(({ icon, variant }) => (
        <Icon key={icon + variant} icon={icon} variant={variant} size="10px" />
      ))}
    </Wrapper>
    <Wrapper as="section" stylex={styles.wrapper}>
      <Button
        variant="flat"
        color="primary"
        colorvariant="darkness"
        stylex={(theme) => ({
          backgroundColor: theme.colors["primary.darkness"],
          color: theme.colors["primary.lightness"],
          border: `1px solid ${theme.colors["primary.lightness"]}`,
        })}
      />
      <Button
        variant="flat"
        color="primary"
        colorvariant="darkness"
        stylex={styles.button()}
      />
      <Button variant="gradient" gradient={["primary", "primary"]} />
      <Button variant="gradient" gradient={["secondary", "secondary"]} />
      <Button disabled />
    </Wrapper>
    {VARIANTS.map((variant) => (
      <Fragment key={variant}>
        {COLORS.map((color, colorIndex, colorArray) => (
          <Wrapper stylex={styles.wrapper} key={variant + color}>
            {COLOR_VARIANTS.map((colorvariant) => (
              <Button
                key={variant + color + colorvariant}
                variant={variant}
                color={color}
                colorvariant={colorvariant}
                gradient={[
                  colorArray[colorIndex],
                  colorArray[
                    colorIndex + 1 === colorArray.length ? 0 : colorIndex + 1
                  ],
                ]}
              />
            ))}
          </Wrapper>
        ))}
      </Fragment>
    ))}
  </Wrapper>
);

export default Home;
