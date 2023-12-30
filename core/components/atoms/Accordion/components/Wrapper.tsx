"use client";
import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionWrapperProps } from "../types";
import { WrapperStyles } from "../styles";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

const AccordionWrapperRef = (
  props: AccordionWrapperProps,
  ref: Ref<HTMLDivElement>
) => {
  const { children, hashItem } = props;

  const [storage] = useAtom(StorageAccordionAtom);
  const open = storage[hashItem ?? ""] ?? props.open;

  const styles = WrapperStyles(Object.assign({}, props, { open }));

  return (
    <div {...styles} ref={ref}>
      {children}
    </div>
  );
};

export const AccordionWrapper = forwardRef(AccordionWrapperRef);
