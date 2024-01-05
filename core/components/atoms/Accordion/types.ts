import React, {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";
import { StylexComponent } from "../../../types";
import { IconProps } from "../Icon/types";
import { AppearanceProps } from "../../../types";

export type AccordionContainerProps = StylexComponent<
  HashItem,
  AccordionContainer & AppearanceProps
>;

export type AccordionContentProps = StylexComponent<{}, AccordionContent> &
  AppearanceProps &
  HashItem;
export type AccordionIconProps = HashItem & Omit<IconProps, "icon">;
export type AccordionItemProps = StylexComponent<HashItem, AccordionItem> &
  AppearanceProps;
export type AccordionTriggerProps = StylexComponent<
  {},
  AccordionTrigger & AppearanceProps & HashItem
>;
export type AccordionWrapperProps = StylexComponent<
  HashItem,
  AccordionWrapper & AppearanceProps
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
} & AppearanceProps;

export type ItemAccordion = {
  id: string;
  title?: React.ReactNode | string;
  content?: React.ReactNode | string;
  icon?: IconStringArray;
  open?: boolean;
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
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type AccordionWrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
