import { WrapperProps } from "../types";

export const SpreadProps = (props: WrapperProps) => {
  const { as, ...spread } = props;

  return { ...props, spread };
};
