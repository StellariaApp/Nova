import stylex from "@stylexjs/stylex";
import { AccordionItemProps } from "..";
import { item, variants, open } from "../css/item";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const ItemStyles = (props: AccordionItemProps) => {
  const { variant = "flat" } = props;

  const styles = stylex.props(
    item.base,
    variants[variant](props),
    props.open && open[variant](props)
  );

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
