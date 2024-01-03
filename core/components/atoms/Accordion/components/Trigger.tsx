"use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionTriggerProps } from "../types";
import useOpen from "../hooks/useOpen";
import { TriggerStyles } from "../styles/trigger";

const AccordionTriggerRef = (
  props: AccordionTriggerProps,
  ref: Ref<HTMLElement>
) => {
  const { children } = props;

  const openProps = useOpen(props);

  const styles = TriggerStyles(openProps);

  return (
    <summary {...styles} ref={ref}>
      {children}
    </summary>
  );
};

export const AccordionTrigger = forwardRef(AccordionTriggerRef);
