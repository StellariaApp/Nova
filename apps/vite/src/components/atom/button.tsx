import { css } from "@stellaria/supernova";
import { varsButton } from "../../vars/button";
import { theme } from "../../themes";

const button = css`
  background-color: ${theme?.colors?.primary};
  width: max-content;
  padding: 0.7rem 1rem;
  border-radius: 0.32rem;
  border: 2px solid ${varsButton?.button?.base?.border};
  color: ${varsButton?.button?.base?.text};
  box-shadow: ${varsButton?.button?.base?.boxShadow};
  &:hover {
    background-color: ${varsButton?.button?.base?.hoverBackground};
    transform: scale(1.12);
  }
  &:active {
    transform: scale(0.98);
  }

  transition: all 0.2s ease-in-out;
`;

const AtomButton = () => {
  return <button className={button}>Server Side Button </button>;
};

export default AtomButton;
