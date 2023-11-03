import Button from "../components/button";
import styles from "./page.module.css";
import { css } from "@stellaria/supernova";

const cssButton = css`
  background-color: red;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-transform: uppercase;
`;

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <button className={cssButton}>Test Button {cssButton}</button>
      <Button />
    </main>
  );
}
