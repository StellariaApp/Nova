"use client";
import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionContentProps } from "../types";
import { ContentStyles } from "../styles";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

const AccordionContentRef = (
  props: AccordionContentProps,
  ref: Ref<HTMLParagraphElement>
) => {
  const { children, hashItem } = props;

  const [storage] = useAtom(StorageAccordionAtom);

  const open = storage[hashItem ?? ""] ?? props.open;

  const styles = ContentStyles({
    ...props,
    open,
  });

  return (
    <p {...styles} ref={ref}>
      {children}
    </p>
  );
};

export const AccordionContent = forwardRef(AccordionContentRef);
