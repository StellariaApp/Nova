import {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconProps } from "../Icon/types";
import { ColorGradientProps } from "../../../types";

export type AccordionContainerProps = StylexComponent<
  HashItem,
  AccordionContainer & ColorGradientProps
>;

export type AccordionContentProps = StylexComponent<{}, AccordionContent> &
  ColorGradientProps;
export type AccordionIconProps = HashItem & Omit<IconProps, "icon">;
export type AccordionItemProps = StylexComponent<HashItem, AccordionItem> &
  ColorGradientProps;
export type AccordionTriggerProps = StylexComponent<
  {},
  AccordionTrigger & ColorGradientProps
>;
export type AccordionWrapperProps = StylexComponent<
  HashItem,
  AccordionWrapper & ColorGradientProps
>;

type IconStringArray =
  | IconProps["icon"]
  | [IconProps["icon"], IconProps["icon"]];

export type HashItem = {
  hash?: string;
  hashItem?: string;
  open?: boolean;
} & Pick<AccordionProps, "icon" | "iconRotate" | "autoClose">;

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
} & ColorGradientProps;

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
