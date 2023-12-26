import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionContainerProps } from "../types";
import { ContainerStyles } from "../styles";

const AccordionContainerRef = (
  props: AccordionContainerProps,
  ref: Ref<HTMLElement>
) => {
  const { children } = props;

  const styles = ContainerStyles(props);

  return (
    <section {...styles} ref={ref}>
      {children}
    </section>
  );
};

export const AccordionContainer = forwardRef(AccordionContainerRef);
