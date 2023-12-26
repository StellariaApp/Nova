import {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconProps } from "../Icon/types";

export type AccordionContainerProps = StylexComponent<{}, AccordionContainer>;
export type AccordionItemProps = StylexComponent<
  {
    hash?: string;
    open?: boolean;
    autohide?: boolean;
  },
  AccordionItem
>;
export type AccordionTriggerProps = StylexComponent<{}, AccordionTrigger>;
export type AccordionContentProps = StylexComponent<{}, AccordionContent>;

export type AccordionProps = StylexComponent<{
  autohide?: boolean;
  items?: ItemAccordion[];
  icon?: IconProps["icon"] | [IconProps["icon"], IconProps["icon"]];
  iconRotate?: boolean;
}>;

export type ItemAccordion = {
  id: string;
  title?: string;
  content?: string;
  open?: boolean;
  icon?: IconProps["icon"] | [IconProps["icon"], IconProps["icon"]];
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
