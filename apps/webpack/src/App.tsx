import React from "react";
import { css } from "@stellaria/supernova";

const buttoncss = css`
  color: red;
  background-color: green;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;
`;

export function App() {
  return <button className={buttoncss}>button {buttoncss}</button>;
}
