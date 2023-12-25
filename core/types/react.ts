export type RC = <P>(
  props: P & {
    children?: JSX.Element | JSX.Element[];
  }
) => JSX.Element;
