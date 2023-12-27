"use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionItemProps } from "../types";
import { ItemStyles } from "../styles";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

const AccordionItemRef = (
  props: AccordionItemProps,
  ref: Ref<HTMLDetailsElement>
) => {
  const { children, hash, hashId } = props;

  const [open, toggle] = useAtom(StorageAccordionAtom(props));

  const styles = ItemStyles({ ...props, open });

  return (
    <details
      {...styles}
      ref={ref}
      onClick={toggle}
      open={open}
      data-accordion-item-hash={hash}
      data-accordion-item-hash-id={hashId}
    >
      {children}
    </details>
  );
};

export const AccordionItem = forwardRef(AccordionItemRef);
