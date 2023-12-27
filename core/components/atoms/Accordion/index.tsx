import { AccordionContainer } from "./components/Container";
import { AccordionContent } from "./components/Content";
import { AccordionTrigger } from "./components/Trigger";
import { AccordionItem } from "./components/Item";
import { AccordionProps } from "./types";
import { useId } from "react";
import { AccordionIcon } from "./components/Icons";

export const Accordion = (props: AccordionProps) => {
  const { iconRotate = true } = props;
  const { items, icon, components, autoClose } = props;

  const hash = useId();

  return (
    <AccordionContainer {...components?.container}>
      {items?.map((item) => (
        <AccordionItem
          key={item.id}
          hash={hash}
          hashId={item.id}
          autoClose={autoClose}
          open={item.open}
          {...components?.item}
        >
          <AccordionTrigger {...components?.trigger}>
            {item.title}
            <AccordionIcon
              hash={hash}
              hashId={item.id}
              icon={icon}
              iconRotate={iconRotate}
              {...components?.icon}
            />
          </AccordionTrigger>
          <AccordionContent {...components?.content}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export {
  AccordionContainer,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  AccordionIcon,
};

export * from "./types";
