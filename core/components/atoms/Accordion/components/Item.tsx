"use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionItemProps } from "../types";
import { ItemStyles } from "../styles";

const AccordionItemRef = (
  props: AccordionItemProps,
  ref: Ref<HTMLDetailsElement>
) => {
  const { children, hash, id } = props;

  const { autohide, ...styles } = ItemStyles(props);

  const onClick = () => {
    if (!autohide) return;
    const elements = Array.from(document.querySelectorAll(`[hash="${hash}"]`));
    const element = elements.find(
      (element) => element.getAttribute("id") === id
    );
    element?.scrollIntoView({ behavior: "smooth" });

    elements.forEach((element) => {
      const details = element as HTMLDetailsElement;
      const isId = details.getAttribute("id") === id;
      if (isId) return;
      details.removeAttribute("open");
    });
  };

  return (
    <details {...styles} ref={ref} onClick={onClick}>
      {children}
    </details>
  );
};

export const AccordionItem = forwardRef(AccordionItemRef);
