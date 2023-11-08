import { css } from "@stellaria/supernova";
import { varsButton } from "../../vars/button";
import { theme } from "../../themes";

const button = css`
  background-color: ${theme?.colors?.primary};
  width: max-content;
  padding: 0.7rem 1rem;
  border-radius: 0.32rem;
  border: 1px solid ${theme?.colors?.primary};
  color: ${theme?.colors?.textAlt};
  box-shadow: ${varsButton?.button?.base?.boxShadow};
  &:hover {
    border: 1px solid ${theme?.colors?.primaryHover};
    background-color: ${theme?.colors?.primaryHover};
    transform: scale(1.12);
  }
  &:active {
    transform: scale(0.98);
  }

  transition: all 0.3s ease-in-out;
`;

type AtomButtonProps = {
  onClick?: () => void;
};

const AtomButton = (props: AtomButtonProps) => {
  return (
    <button {...props} className={button}>
      Toggle theme
    </button>
  );
};

export default AtomButton;
