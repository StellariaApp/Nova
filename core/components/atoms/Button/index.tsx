import type { Ref } from "react";
import type { ButtonProps } from "./types";
import { forwardRef } from "react";
import { Styles } from "./styles/button";

const ButtonRef = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { children } = props;

  const styles = Styles(props);

  return (
    <button {...styles} ref={ref}>
      {children ?? "Nova Button"}
    </button>
  );
};

export const Button = forwardRef(ButtonRef);
