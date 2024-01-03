import stylex from "@stylexjs/stylex";
import { AccordionTriggerProps } from "..";
import { trigger, variants, open } from "../css/trigger";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const TriggerStyles = (props: AccordionTriggerProps) => {
  const { variant = "flat" } = props;

  const styles = stylex.props(
    trigger.base,
    variants[variant](props),
    props.open && open[variant](props)
  );

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
