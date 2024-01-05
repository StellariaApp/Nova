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
import { Fragment } from "react";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    {/* <Wrapper as="section" stylex={page.wrapper}>
      {VARIANTS.map((variant) => (
        <Fragment key={variant}>
          <span {...stylex.props(page.title())}>{variant.toUpperCase()}</span>
          <Wrapper stylex={page.content}>
            <Accordion variant={variant} autoClose items={ACCORDION_ITEMS} />
          </Wrapper>
        </Fragment>
      ))}
    </Wrapper>
    <Wrapper as="section" stylex={page.wrapper}>
      <span {...stylex.props(page.title())}>DISABLE</span>
      <Wrapper stylex={page.content}>
        <Button disabled />
      </Wrapper>
      {VARIANTS.map((variant) => (
        <Fragment key={variant}>
          <span {...stylex.props(page.title())}>{variant.toUpperCase()}</span>
          <Wrapper key={variant} stylex={page.content}>
            {COLORS.map((color) => (
              <Button
                key={variant + color}
                color={color}
                variant={variant}
                gradient={[color, "sweet"]}
              />
            ))}
          </Wrapper>
        </Fragment>
      ))}
    </Wrapper> */}
    <Section title="Icons" subtitle="Icons with different variants and colors">
      {(variant, color, idx = 0) => (
        <Icon
          color={color}
          variant={variant}
          gradient={[color, "sweet"]}
          icon={ICONS[idx]}
          size={ICONSIZE}
        />
      )}
    </Section>

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
  "#3bda3b",
  "#3131df",
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
  children?: (variant?: Variants, color?: Colors, idx?: number) => JSX.Element;
};

const Section = (props: Section) => {
  const { title, subtitle, children } = props;
  return (
    <Wrapper as="section" stylex={page.wrapper}>
      <Wrapper as="section" stylex={page.content_title}>
        <span {...stylex.props(page.title())}>{title}</span>
        <span {...stylex.props(page.subtitle())}>{subtitle}</span>
      </Wrapper>
      {VARIANTS.map((variant) => (
        <Wrapper key={variant} stylex={page.grid}>
          <span {...stylex.props(page.title_content())}>
            {variant?.toUpperCase() ?? "NONE"}
          </span>
          <Wrapper key={variant} stylex={page.content}>
            {COLORS.map((color, idx) => (
              <Fragment key={variant ?? "none" + color ?? "none"}>
                {children?.(variant, color, idx)}
              </Fragment>
            ))}
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};
