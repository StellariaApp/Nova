import { css } from "@stellaria/supernova";

const cssButton = css`
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
`;

const Button = () => {
  return (
    <button className={cssButton}>Test Button Component {cssButton}</button>
  );
};

export default Button;
