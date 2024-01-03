"use client";

import type { AccordionIconProps } from "../types";
import { Icon } from "../..";
import useOpen from "../hooks/useOpen";

export const AccordionIcons = (props: AccordionIconProps) => {
  const { icon } = props;

  const { open } = useOpen(props);

  return (
    <Icon
      size="16px"
      icon={Array.isArray(icon) ? icon[open ? 1 : 0] : icon ?? "chevron-down"}
    />
  );
};
