import { AccordionContainer } from "./components/Container";
import { AccordionContent } from "./components/Content";
import { AccordionTrigger } from "./components/Trigger";
import { AccordionItem } from "./components/Item";
import { AccordionProps } from "./types";
import { useId } from "react";

export const Accordion = (props: AccordionProps) => {
  const { items } = props;

  const hash = useId();

  return (
    <AccordionContainer>
      {items?.map((item) => (
        <AccordionItem
          {...item}
          key={item.id}
          autohide={props.autohide}
          hash={hash}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export * from "./types";
