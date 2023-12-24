import { IconProps } from "../types";

export const GetSize = (props: IconProps) => {
  const { size = "1em" } = props;

  return {
    height: size,
    width: size,
  };
};
