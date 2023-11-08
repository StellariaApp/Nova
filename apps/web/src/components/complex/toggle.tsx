"use client";
import SuperNovaTheme from "../../themes/theme";
import AtomButton from "../atom/button";

type Props = {};

const Toggle = (props: Props) => {
  return (
    <AtomButton
      onClick={() => {
        SuperNovaTheme.toggle();
      }}
    />
  );
};

export default Toggle;
