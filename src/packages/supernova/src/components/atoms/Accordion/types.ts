import type { HTMLMotionProps } from 'framer-motion';
import type { CSSProperties } from '../../../types/css';

export type AccordionContainerProps = HTMLMotionProps<'section'> &
  CSSProperties & {
    autoHide?: boolean;
  };
export type AccordionItemProps = HTMLMotionProps<'details'> & CSSProperties;
export type AccordionTriggerProps = HTMLMotionProps<'summary'> & CSSProperties;
export type AccordionContentProps = HTMLMotionProps<'p'> & CSSProperties;

type ItemAccordion = {
  id: string;
  title: string;
  content?: string;
  open?: boolean;
};

type ItemsAccordion = ItemAccordion[];

export type AccordionProps = {
  autoHide?: boolean;
  items?: ItemsAccordion;
  components?: {
    container?: AccordionContainerProps;
    item?: AccordionItemProps;
    trigger?: AccordionTriggerProps;
    content?: AccordionContentProps;
  };
};
