import {
  Wrapper,
  Button,
  Icon,
  Accordion,
  ItemAccordion,
} from "@stellaria/nova";
import { page } from "./styles";
import { RefButton } from "@/components/RefButton";

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <Wrapper as="section" stylex={page.wrapper}>
      <Accordion autoClose items={ACCORDION_ITEMS} />
    </Wrapper>
    <Wrapper as="section" stylex={page.wrapper}>
      <RefButton />
      <Button color="white" />
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} />
      ))}
      <Button disabled />
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

const VARIANTS = ["flat", "glow", "gradient", "outline"] as const;
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
  {
    id: "3",
    title: "What is the difference between a fragment and a document fragment?",
    content:
      "A fragment is a component that does not render a DOM element. A document fragment is a DOM node that is not part of the main DOM tree.",
  },
] as ItemAccordion[];
