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
      <Accordion items={ACCORDION_ITEMS} icon={["plus", "minus"]} />
    </Wrapper>
    <Wrapper as="section" stylex={page.wrapper}>
      <RefButton />
      <Button color="white" />
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          variant={variant}
          gradient={["danger", "sweet"]}
        />
      ))}
      <Button disabled />
    </Wrapper>
    <Wrapper as="section" stylex={page.wrapper}>
      <Icon icon="arrow-left" />
      <Icon icon="arrow-right" />
      <Icon icon="arrow-up" />
      <Icon icon="arrow-down" />
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
] as ItemAccordion[];
