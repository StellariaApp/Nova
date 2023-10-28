import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import type {
  AccordionProps,
  AccordionContainerProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps
} from './types';
import {
  stylesContainer,
  stylesContent,
  stylesItem,
  stylesTrigger
} from './styles';

const Accordion = (props: AccordionProps, ref: Ref<HTMLElement>) => {
  const { items, components } = props;

  return (
    <AccordionContainer ref={ref} {...components?.container}>
      {items?.map((item) => (
        <AccordionItem key={item.id} open={item.open} {...components?.item}>
          <AccordionTrigger {...components?.trigger}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent {...components?.content}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

const AccordionContainer = forwardRef(
  (props: AccordionContainerProps, ref: Ref<HTMLElement>) => {
    const { children } = props;
    const { classes } = stylesContainer(props);
    return (
      <motion.section {...props} className={classes} ref={ref}>
        {children}
      </motion.section>
    );
  }
);

const AccordionItem = forwardRef(
  (props: AccordionItemProps, ref: Ref<HTMLDetailsElement>) => {
    const { children } = props;
    const { classes } = stylesItem(props);
    return (
      <motion.details {...props} className={classes} ref={ref}>
        {children}
      </motion.details>
    );
  }
);

const AccordionTrigger = forwardRef(
  (props: AccordionTriggerProps, ref: Ref<HTMLElement>) => {
    const { children } = props;
    const { classes } = stylesTrigger(props);
    return (
      <motion.summary {...props} className={classes} ref={ref}>
        {children}
      </motion.summary>
    );
  }
);

const AccordionContent = forwardRef(
  (props: AccordionContentProps, ref: Ref<HTMLParagraphElement>) => {
    const { children } = props;
    const { classes } = stylesContent(props);
    return (
      <motion.p {...props} className={classes} ref={ref}>
        {children}
      </motion.p>
    );
  }
);

Accordion.Container = AccordionContainer;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };

export type * from './types';
