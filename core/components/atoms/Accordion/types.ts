import {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconProps } from "../Icon/types";

export type AccordionContainerProps = StylexComponent<
  HashItem,
  AccordionContainer
>;

export type AccordionContentProps = StylexComponent<{}, AccordionContent>;
export type AccordionIconProps = HashItem & Omit<IconProps, "icon">;
export type AccordionItemProps = StylexComponent<HashItem, AccordionItem>;
export type AccordionTriggerProps = StylexComponent<{}, AccordionTrigger>;
export type AccordionWrapperProps = StylexComponent<HashItem, AccordionWrapper>;

type IconStringArray =
  | IconProps["icon"]
  | [IconProps["icon"], IconProps["icon"]];

type HashItem = {
  hash?: string;
  hashItem?: string;
  open?: boolean;
  icon?: IconStringArray;
  iconRotate?: boolean;
  autoClose?: boolean;
};

export type AccordionProps = {
  icon?: IconStringArray;
  iconRotate?: boolean;
  autoClose?: boolean;

  items?: ItemAccordion[];

  components?: {
    container?: AccordionContainerProps;
    content?: AccordionContentProps;
    icons?: AccordionIconProps;
    item?: AccordionItemProps;
    trigger?: AccordionTriggerProps;
    wrapper?: AccordionWrapperProps;
  };
};

export type AccordionCollectorProps = AccordionProps & HashItem;

export type ItemAccordion = {
  id: string;
  title?: string;
  content?: string;
  open?: boolean;
  icon?: IconStringArray;
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

export type AccordionWrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
