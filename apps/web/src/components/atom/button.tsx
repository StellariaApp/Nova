import { css } from "@stellaria/supernova";

const button = css`
  width: max-content;
  padding: 0.7rem 1rem;
  border-radius: 0.32rem;
  &:hover {
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
