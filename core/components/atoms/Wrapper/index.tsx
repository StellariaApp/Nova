import { WrapperStyles } from "./styles";
import { WrapperProps } from "./types";

const SelectorAsWrapper = {
  div: (props: WrapperProps) => <div {...props} />,
  article: (props: WrapperProps) => <article {...props} />,
  section: (props: WrapperProps) => <section {...props} />,
  main: (props: WrapperProps) => <main {...props} />,
  footer: (props: WrapperProps) => <footer {...props} />,
  nav: (props: WrapperProps) => <nav {...props} />,
} as const;

export const Wrapper = (props: WrapperProps) => {
  const { as = "div" } = props;
  const Component = SelectorAsWrapper[as];
  const styles = WrapperStyles(props);

  return <Component {...styles} />;
};
