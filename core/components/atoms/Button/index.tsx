import { ButtonStyles } from "./styles";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { children } = props;
  const styles = ButtonStyles(props);

  return <button {...styles}>{children ?? "Nova Button"}</button>;
};
