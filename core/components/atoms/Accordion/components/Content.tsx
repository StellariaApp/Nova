"use client";
import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionContentProps } from "../types";
import useOpen from "../hooks/useOpen";
import { ContentStyles } from "../styles/content";

const AccordionContentRef = (
  props: AccordionContentProps,
  ref: Ref<HTMLParagraphElement>
) => {
  const { children } = props;

  const openProps = useOpen(props);
  const styles = ContentStyles(openProps);

  return (
    <p {...styles} ref={ref}>
      {children}
    </p>
  );
};

export const AccordionContent = forwardRef(AccordionContentRef);
