import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionContentProps } from "../types";
import { ContentStyles } from "../styles";

const AccordionContentRef = (
  props: AccordionContentProps,
  ref: Ref<HTMLParagraphElement>
) => {
  const { children } = props;

  const styles = ContentStyles(props);

  return (
    <p {...styles} ref={ref}>
      {children}
    </p>
  );
};

export const AccordionContent = forwardRef(AccordionContentRef);
