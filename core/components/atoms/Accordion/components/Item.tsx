// "use client";

import type { Ref } from "react";
import { forwardRef } from "react";
import type { AccordionItemProps } from "../types";
import { ItemStyles } from "../styles";
// import { useAtom } from "jotai";
// import { StorageAccordionAtom } from "../jotai/storage";
// import { useAutoClose } from "../hooks/useAutoClose";

const AccordionItemRef = (
  props: AccordionItemProps,
  ref: Ref<HTMLDetailsElement>
) => {
  const { children, hashItem } = props;

  // const [storage] = useAtom(StorageAccordionAtom);

  // const open = storage[hashItem ?? ""] ?? props.open;

  const styles = ItemStyles({
    ...props,
    // open,
  });

  // const { onClick } = useAutoClose(props);

  return (
    <details
      data-hash-item={hashItem}
      // onClick={onClick}
      {...styles}
      ref={ref}
    >
      {children}
    </details>
  );
};

export const AccordionItem = forwardRef(AccordionItemRef);
