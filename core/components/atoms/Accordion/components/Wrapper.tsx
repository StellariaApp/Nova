"use client";
import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionWrapperProps } from "../types";
import useOpen from "../hooks/useOpen";
import { WrapperStyles } from "../styles/wrapper";

const AccordionWrapperRef = (
  props: AccordionWrapperProps,
  ref: Ref<HTMLDivElement>
) => {
  const { children } = props;

  const openProps = useOpen(props);

  const styles = WrapperStyles(openProps);

  return (
    <div {...styles} ref={ref}>
      {children}
    </div>
  );
};

export const AccordionWrapper = forwardRef(AccordionWrapperRef);
