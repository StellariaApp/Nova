import { AccordionContainer } from "./components/Container";
import { AccordionContent } from "./components/Content";
import { AccordionTrigger } from "./components/Trigger";
import { AccordionItem } from "./components/Item";
import { AccordionProps } from "./types";
import { AccordionIcons } from "./components/Icons";
import { AccordionWrapper } from "./components/Wrapper";
import { useId } from "react";

export const Accordion = (props: AccordionProps) => {
  const { items, components, autoClose, icon, iconRotate, ...rest } = props;

  const hash = useId();

  return (
    <AccordionContainer hash={hash} {...rest} {...components?.container}>
      {items?.map((item, index) => {
        const hashItem = {
          hash: hash,
          hashItem: hash + index,
          open: item.open,
          iconRotate,
          autoClose,
          icon: item.icon ?? icon,
        };
        return (
          <AccordionItem
            key={item.id}
            {...hashItem}
            {...rest}
            {...components?.item}
          >
            <AccordionTrigger {...hashItem} {...rest} {...components?.trigger}>
              {item.title}
              <AccordionWrapper
                {...hashItem}
                {...rest}
                {...components?.wrapper}
              >
                <AccordionIcons
                  {...hashItem}
                  {...rest}
                  {...components?.icons}
                />
              </AccordionWrapper>
            </AccordionTrigger>
            <AccordionContent {...hashItem} {...rest} {...components?.content}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
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
