import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionContainerProps } from "../types";
import { ContainerStyles } from "../styles";

const AccordionContainerRef = (
  props: AccordionContainerProps,
  ref: Ref<HTMLElement>
) => {
  const { children, hash } = props;

  const styles = ContainerStyles(props);

  return (
    <section data-hash={hash} {...styles} ref={ref}>
      {children}
    </section>
  );
};

export const AccordionContainer = forwardRef(AccordionContainerRef);
