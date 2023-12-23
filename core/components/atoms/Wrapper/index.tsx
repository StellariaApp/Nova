import { WrapperStyles } from "./styles";
import { AsWrapper, WrapperProps } from "./types";

export type SelectorAsWrapper = Record<
  AsWrapper,
  (props: Omit<WrapperProps, "className">) => JSX.Element
>;

const SelectorAsWrapper: SelectorAsWrapper = {
  div: (props) => <div {...props} />,
  article: (props) => <article {...props} />,
  section: (props) => <section {...props} />,
  main: (props) => <main {...props} />,
  footer: (props) => <footer {...props} />,
  nav: (props) => <nav {...props} />,
};

export const Wrapper = (props: WrapperProps) => {
  const { as = "div" } = props;
  const Component = SelectorAsWrapper[as];
  const styles = WrapperStyles(props);

  return <Component {...styles} />;
};
