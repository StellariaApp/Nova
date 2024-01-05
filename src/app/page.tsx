import {
  Wrapper,
  Button,
  Icon,
  Accordion,
  ItemAccordion,
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

    <Wrapper as="section" stylex={page.wrapper}>
      {VARIANTS.map((variant) => (
        <Fragment key={variant ?? "none"}>
          <span {...stylex.props(page.title())}>
            {variant?.toUpperCase() ?? "NONE"}
          </span>
          <Wrapper key={variant} stylex={page.content}>
            {COLORS.map((color, idx) => (
              <Icon
                key={variant ?? "none" + color ?? "none"}
                color={color}
                variant={variant}
                gradient={[color, "sweet"]}
                icon={ICONS[idx]}
                size={ICONSIZE}
              />
            ))}
          </Wrapper>
        </Fragment>
      ))}
    </Wrapper>
    <ToggleTheme />
  </Wrapper>
);

export default Home;

const ICONSIZE = 82;
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
