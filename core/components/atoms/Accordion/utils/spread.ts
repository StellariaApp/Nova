import { HashItem } from "..";

export const SpreadAccordionProps = <P = {}>(props: HashItem & P) => {
  const { hash, hashItem, icon, iconRotate, autoClose, ...spread } = props;
  return { ...props, spread };
};
