"use client";

import type { AccordionIconProps } from "../types";
import { Icon } from "../..";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

export const AccordionIcons = (props: AccordionIconProps) => {
  const { icon, hashItem } = props;

  const [storage] = useAtom(StorageAccordionAtom);

  const open = storage[hashItem ?? ""] ?? props.open;

  return (
    <Icon
      color="white"
      size="16px"
      icon={Array.isArray(icon) ? icon[open ? 1 : 0] : icon ?? "chevron-down"}
    />
  );
};
