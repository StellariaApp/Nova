import stylex from "@stylexjs/stylex";

import { TemplateProps } from "./types";
import { StyleWithProps } from "../../utils/style";
import { template } from "./css";

export const TemplateStyles = (props: TemplateProps) => {
  const styles = stylex.props(template.base);

  return StyleWithProps(styles, props, props);
};
