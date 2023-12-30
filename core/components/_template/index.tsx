import { TemplateStyles } from "./styles/template";
import { TemplateProps } from "./types";

export const Template = (props: TemplateProps) => {
  const { children } = props;
  const styles = TemplateStyles(props);
  return <div {...styles}>{children ?? "Nova Template"}</div>;
};
