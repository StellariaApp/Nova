import { background, type RC } from "@stellaria/nova";
import type { Metadata } from "next";
import stylex from "@stylexjs/stylex";

import "./main.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Created by create next app",
};

const Layout: RC = (props) => {
  const { children } = props;

  return (
    <html
      lang="en"
      style={{
        backgroundColor: background.base,
      }}
    >
      <body>{children}</body>
    </html>
  );
};

export default Layout;
