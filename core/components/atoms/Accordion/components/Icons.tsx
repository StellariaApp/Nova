"use client";

import type { AccordionIconProps } from "../types";
import { Icon } from "../..";
import useOpen from "../hooks/useOpen";
import { IconStyles } from "../styles/icon";

export const AccordionIcons = (props: AccordionIconProps) => {
  const { icon } = props;

  const openProps = useOpen(props);
  const styles = IconStyles(openProps);

  const { open } = openProps;

  return (
    <Icon
      components={{
        path: styles,
      }}
      size="16px"
      icon={Array.isArray(icon) ? icon[open ? 1 : 0] : icon ?? "chevron-down"}
    />
  );
};
