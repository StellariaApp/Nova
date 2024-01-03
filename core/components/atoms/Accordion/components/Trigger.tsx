"use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionTriggerProps } from "../types";
import { TriggerStyles } from "../styles";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

const AccordionTriggerRef = (
  props: AccordionTriggerProps,
  ref: Ref<HTMLElement>
) => {
  const { children, hashItem } = props;

  const [storage] = useAtom(StorageAccordionAtom);

  const open = storage[hashItem ?? ""] ?? props.open;

  const styles = TriggerStyles({
    ...props,
    open,
  });

  return (
    <summary {...styles} ref={ref}>
      {children}
    </summary>
  );
};

export const AccordionTrigger = forwardRef(AccordionTriggerRef);
