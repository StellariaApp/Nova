import {
  Wrapper,
  Button,
  Icon,
  Accordion,
  ItemAccordion,
} from "@stellaria/nova";
import { page } from "./styles";
import { ToggleTheme } from "@/components/ToggleTheme";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <ToggleTheme />
    <Wrapper as="section" stylex={page.wrapper}>
      {VARIANTS.map((variant) => (
        <Accordion
          key={variant}
          variant={variant}
          autoClose
          items={ACCORDION_ITEMS}
        />
      ))}
    </Wrapper>
    <Button disabled />
    {VARIANTS.map((variant) => (
      <Wrapper key={variant} as="section" stylex={page.wrapper}>
        {COLORS.map((color) => (
          <Button
            key={variant + color}
            color={color}
            variant={variant}
            gradient={[color, "sweet"]}
          />
        ))}
      </Wrapper>
    ))}

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
const SHADE = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

const ACCORDION_ITEMS = [
  {
    id: "1",
    open: true,
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
