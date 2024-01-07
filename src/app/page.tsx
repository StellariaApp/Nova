import {
  Wrapper,
  Button,
  Icon,
  Accordion,
  ItemAccordion,
  RC,
  Variants,
  Colors,
} from "@stellaria/nova";
import { page } from "./styles";
import { ToggleTheme } from "@/components/ToggleTheme";
import stylex from "@stylexjs/stylex";
import { Fragment, useId } from "react";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <Section
      title="Accordion"
      subtitle="Accordion with different variants and colors"
      variants={(variant) => (
        <Accordion
          variant={variant}
          color={variant === "flat" ? "primary" : undefined}
          autoClose
          items={ACCORDION_ITEMS}
        />
      )}
    />
    <Section
      title="Buttons"
      subtitle="Buttons with different variants and colors"
      disable={<Button disabled />}
      colors={(variant, color) => (
        <Button color={color} variant={variant} gradient={[color, "sweet"]} />
      )}
    />

    <Section
      title="Icons"
      subtitle="Icons with different variants and colors"
      colors={(variant, color, idx = 0) => (
        <Icon
          color={color}
          variant={variant}
          gradient={[color, "sweet"]}
          icon={ICONS[idx]}
          size={ICONSIZE}
        />
      )}
    />

    <ToggleTheme />
  </Wrapper>
);

export default Home;

const ICONSIZE = 24;
const ICONS = [
  "plus",
  "arrow-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "a",
  "b",
  "star",
  "heart",
  "check",
  "clone",
  "filter",
] as const;

const VARIANTS = [
  undefined,
  "flat",
  "outline",
  "glow",
  "glass",
  "gradient",
] as const;

const COLORS = [
  undefined,
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "sweet",
  "disabled",
  "#e42727",
  "#086331",
  "#2323b9",
] as const;

const ACCORDION_ITEMS = [
  {
    id: "1",
    open: true,
    icon: ["plus", "minus"],
    title:
      "Is it possible to use the same component for the accordion and the accordion item?",
    content:
      "Yes, it is possible to use the same component for the accordion and the accordion item.",
  },
  {
    id: "2",
    disabled: true,
    title:
      "What's the difference between a controlled and an uncontrolled component?",
    content:
      "A controlled component has its state controlled by React. An uncontrolled component has its state controlled by the DOM.",
  },
  {
    id: "3",
    title:
      "What's the difference between a controlled and an uncontrolled component?",
    content:
      "A controlled component has its state controlled by React. An uncontrolled component has its state controlled by the DOM.",
  },
] as ItemAccordion[];

type Section = {
  title: string;
  subtitle: string;
  variants?: (variant?: Variants) => JSX.Element;
  colors?: (variant?: Variants, color?: Colors, idx?: number) => JSX.Element;
  disable?: React.ReactNode;
};

const Section = (props: Section) => {
  const { title, subtitle, colors, variants, disable } = props;
  const id = useId();
  return (
    <Wrapper as="section" stylex={page.wrapper}>
      <Wrapper as="section" stylex={page.content_title}>
        <span {...stylex.props(page.title())}>{title}</span>
        <span {...stylex.props(page.subtitle())}>{subtitle}</span>
      </Wrapper>
      {disable && (
        <Wrapper stylex={page.grid}>
          <span {...stylex.props(page.title_content())}>DISABLE</span>
          <Wrapper stylex={page.content}>{disable}</Wrapper>
        </Wrapper>
      )}

      {VARIANTS.map((variant) => (
        <Wrapper key={id + variant} stylex={page.grid}>
          <span {...stylex.props(page.title_content())}>
            {variant?.toUpperCase() ?? "DEFAULT"}
          </span>
          <Wrapper stylex={page.content}>
            {variants && variants?.(variant)}
            {COLORS.map((color, idx = 0) => (
              <Fragment key={id + variant ?? "none" + color ?? "none"}>
                {colors && colors?.(variant, color, idx)}
              </Fragment>
            ))}
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
