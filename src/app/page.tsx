import { Wrapper, Button, Icon } from "@stellaria/nova";
import { page } from "./styles";

const VARIANTS = ["flat", "glow", "gradient", "outline"] as const;

const Home = () => (
  <Wrapper as="main" stylex={page.container}>
    <Wrapper as="section" stylex={page.wrapper}>
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} />
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
