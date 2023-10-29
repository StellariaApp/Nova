import type { Ref } from 'react';
import type { AccordionProps } from './types';
import { AccordionContainer } from './components/container';
import { AccordionItem } from './components/item';
import { AccordionTrigger } from './components/trigger';
import { AccordionContent } from './components/content';

const Accordion = (props: AccordionProps, ref: Ref<HTMLElement>) => {
  const { items, components, autoHide } = props;

  return (
    <AccordionContainer
      autoHide={autoHide}
      ref={ref}
      {...components?.container}
    >
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

Accordion.Container = AccordionContainer;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };

export type * from './types';
