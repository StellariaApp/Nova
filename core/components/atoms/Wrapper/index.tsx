import type { Ref } from "react";

import { forwardRef } from "react";
import { Styles } from "./styles";
import { WrapperProps } from "./types";
import { SelectorWrapper } from "./constants/selector";

const WrapperRef = (props: WrapperProps, ref: Ref<HTMLDivElement>) => {
  const { as = "div" } = props;
  const Component = SelectorWrapper[as];
  const styles = Styles(props);

  return <Component {...styles} ref={ref} />;
};

export const Wrapper = forwardRef(WrapperRef);
