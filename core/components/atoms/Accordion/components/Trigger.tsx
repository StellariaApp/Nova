import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionTriggerProps } from "../types";
import { TriggerStyles } from "../styles";

const AccordionTriggerRef = (
  props: AccordionTriggerProps,
  ref: Ref<HTMLElement>
) => {
  const { children } = props;

  const styles = TriggerStyles(props);

  return (
    <summary {...styles} ref={ref}>
      {children}
    </summary>
  );
};

export const AccordionTrigger = forwardRef(AccordionTriggerRef);
