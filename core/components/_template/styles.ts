import stylex from "@stylexjs/stylex";

import { TemplateProps } from "./types";
import { StyleWithProps } from "../../utils/style";
import { template } from "./css";

export const TemplateStyles = (props: TemplateProps) => {
  const styles = stylex.props(template.base);
  const stylesWithProps = StyleWithProps(styles, props);

  return stylesWithProps;
};
