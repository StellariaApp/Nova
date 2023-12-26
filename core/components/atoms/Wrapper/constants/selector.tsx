import { WrapperProps } from "../types";

export const SelectorWrapper = {
  div: (props: WrapperProps) => <div {...props} />,
  article: (props: WrapperProps) => <article {...props} />,
  section: (props: WrapperProps) => <section {...props} />,
  main: (props: WrapperProps) => <main {...props} />,
  footer: (props: WrapperProps) => <footer {...props} />,
  nav: (props: WrapperProps) => <nav {...props} />,
} as const;
