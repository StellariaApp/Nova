import { AccordionContainer } from "./components/Container";
import { AccordionContent } from "./components/Content";
import { AccordionTrigger } from "./components/Trigger";
import { AccordionItem } from "./components/Item";
import { AccordionProps } from "./types";
import { AccordionIcons } from "./components/Icons";
import { AccordionWrapper } from "./components/Wrapper";
import { useId } from "react";

export const Accordion = (props: AccordionProps) => {
  const { items, components } = props;

  const hash = useId();

  return (
    <AccordionContainer hash={hash} {...components?.container}>
      {items?.map((item, index) => (
        <AccordionItem
          key={item.id}
          hash={hash}
          hashItem={hash + index}
          open={item.open}
          {...components?.item}
        >
          <AccordionTrigger {...components?.trigger}>
            {item.title}
            <AccordionWrapper
              hash={hash}
              hashItem={hash + index}
              open={item.open}
              iconRotate={props?.iconRotate}
              {...components?.wrapper}
            >
              <AccordionIcons
                hashItem={hash + index}
                icon={item.icon ?? props?.icon}
                {...components?.icons}
              />
            </AccordionWrapper>
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
  AccordionIcons,
  AccordionWrapper,
};

export * from "./types";
