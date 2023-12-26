import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionTriggerProps } from "../types";
import { TriggerStyles } from "../styles";
import { Icon } from "../..";

const AccordionTriggerRef = (
  props: AccordionTriggerProps,
  ref: Ref<HTMLElement>
) => {
  const { children } = props;

  const styles = TriggerStyles(props);

  return (
    <summary {...styles} ref={ref}>
      {children}
      <Icon color="white" height={10} width={10} icon="chevron-down" />
    </summary>
  );
};

export const AccordionTrigger = forwardRef(AccordionTriggerRef);
