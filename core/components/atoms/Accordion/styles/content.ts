import stylex from "@stylexjs/stylex";
import { AccordionContentProps } from "..";
import { content, variants, open } from "../css/content";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const ContentStyles = (props: AccordionContentProps) => {
  const { variant = "flat" } = props;

  const styles = stylex.props(
    content.base,
    variants[variant](props),
    props.open && open[variant](props)
  );

  const { spread } = SpreadAccordionProps(props);

  return StyleWithProps(styles, spread, props);
};
