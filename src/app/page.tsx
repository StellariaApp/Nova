import {
  Wrapper,
  Button,
  Icon,
  Accordion,
  ItemAccordion,
  colors,
  fonts,
  sizes,
} from "@stellaria/nova";
import { page } from "./styles";
import { ToggleTheme } from "@/components/ToggleTheme";
import stylex from "@stylexjs/stylex";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <ToggleTheme />
    <Wrapper as="section" stylex={page.wrapper}>
      {VARIANTS.map((variant) => (
        <Wrapper key={variant} stylex={page.wrapper}>
          <span {...stylex.props(page.title())}>{variant.toUpperCase()}</span>
          <Accordion variant={variant} autoClose items={ACCORDION_ITEMS} />
        </Wrapper>
      ))}
    </Wrapper>
    <Wrapper as="section" stylex={page.wrapper}>
      <Wrapper stylex={page.wrapper}>
        <span {...stylex.props(page.title())}>DISABLE</span>
        <Wrapper stylex={page.wrapper}>
          <Button disabled />
        </Wrapper>
      </Wrapper>
      {VARIANTS.map((variant) => (
        <Wrapper key={variant} stylex={page.wrapper}>
          <span {...stylex.props(page.title())}>{variant.toUpperCase()}</span>
          <Wrapper key={variant} stylex={page.wrapper}>
            {COLORS.map((color) => (
              <Button
                key={variant + color}
                color={color}
                variant={variant}
                gradient={[color, "sweet"]}
              />
            ))}
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>

    <Wrapper as="section" stylex={page.wrapper}>
      <Icon icon="arrow-up" />
      <Icon icon="arrow-up" />
      <Icon icon="arrow-down" />
      <Icon icon="arrow-down" />
      <Icon icon="arrow-left" />
      <Icon icon="arrow-right" />
      <Icon icon="arrow-left" />
      <Icon icon="arrow-right" />
      <Icon icon="b" />
      <Icon icon="a" />
      <Icon icon="star" />
    </Wrapper>
  </Wrapper>
);

export default Home;

const VARIANTS = ["flat", "outline", "glow", "gradient"] as const;
const COLORS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "sweet",
  "disabled",
] as const;

const ACCORDION_ITEMS = [
  {
    id: "1",
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
] as ItemAccordion[];
