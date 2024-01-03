"use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionItemProps } from "../types";
import { useAutoClose } from "../hooks/useAutoClose";
import useOpen from "../hooks/useOpen";
import { ItemStyles } from "../styles/item";

const AccordionItemRef = (
  props: AccordionItemProps,
  ref: Ref<HTMLDetailsElement>
) => {
  const { children, hashItem } = props;

  const openProps = useOpen(props);

  const styles = ItemStyles(openProps);

  const { onClick } = useAutoClose(props);

  return (
    <details data-hash-item={hashItem} onClick={onClick} {...styles} ref={ref}>
      {children}
    </details>
  );
};

export const AccordionItem = forwardRef(AccordionItemRef);
