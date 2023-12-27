"use client";

import type { AccordionIconProps } from "../types";
import { IconStyles } from "../styles";
import { Icon, Wrapper } from "../..";
import { useAtom } from "jotai";
import { StorageAccordionAtom } from "../jotai/storage";

export const AccordionIcon = (props: AccordionIconProps) => {
  const { icon } = props;

  const { stylesIcon, stylesWrapper } = IconStyles(props);

  const [open] = useAtom(StorageAccordionAtom(props));

  return (
    <Wrapper {...stylesWrapper}>
      <Icon
        color="white"
        size="16px"
        icon={Array.isArray(icon) ? icon[open ? 1 : 0] : icon ?? "chevron-down"}
        {...stylesIcon}
      />
    </Wrapper>
  );
};
