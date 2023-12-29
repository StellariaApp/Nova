import {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconProps } from "../Icon/types";
import { WrapperProps } from "../Wrapper/types";

export type AccordionContainerProps = StylexComponent<
  {
    hash?: string;
  },
  AccordionContainer
>;

export type AccordionItemProps = StylexComponent<
  {
    hash?: string;
    hashItem?: string;
    open?: boolean;
    autoClose?: boolean;
  },
  AccordionItem
>;
export type AccordionTriggerProps = StylexComponent<{}, AccordionTrigger>;
export type AccordionContentProps = StylexComponent<{}, AccordionContent>;

type IconStringArray =
  | IconProps["icon"]
  | [IconProps["icon"], IconProps["icon"]];

export type ItemAccordion = {
  id: string;
  title?: string;
  content?: string;
  open?: boolean;
  icon?: IconStringArray;
};

export type AccordionIconProps = {
  hash?: string;
  hashItem?: string;
  icon?: IconStringArray;
  iconRotate?: boolean;
  components?: {
    wrapper?: WrapperProps;
    icon?: IconProps;
  };
};

export type AccordionProps = {
  items?: ItemAccordion[];
  icon?: IconStringArray;
  iconRotate?: boolean;
  autoClose?: boolean;
  components?: {
    container?: AccordionContainerProps;
    item?: AccordionItemProps;
    trigger?: AccordionTriggerProps;
    content?: AccordionContentProps;
    icon?: AccordionIconProps;
  };
};

type AccordionContainer = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

type AccordionItem = DetailedHTMLProps<
  DetailsHTMLAttributes<HTMLDetailsElement>,
  HTMLDetailsElement
>;

type AccordionTrigger = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export type AccordionContent = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
