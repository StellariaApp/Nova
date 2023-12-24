import { TemplateStyles } from "./styles";
import { TemplateProps } from "./types";

export const Template = (props: TemplateProps) => {
  const { children } = props;
  const styles = TemplateStyles(props);
  return <div {...styles}>{children ?? "Nova Template"}</div>;
};
