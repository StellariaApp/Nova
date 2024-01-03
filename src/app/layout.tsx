import { type RC } from "@stellaria/nova";
import type { Metadata } from "next";
import stylex from "@stylexjs/stylex";

import "./main.css";
import ProviderTheme from "../../core/providers/theme";
import { html } from "./styles";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Created by create next app",
};

const Layout: RC = (props) => {
  const { children } = props;

  return (
    <ProviderTheme>
      <html lang="en" {...stylex.props(html.dynamic())}>
        <body>{children}</body>
      </html>
    </ProviderTheme>
  );
};

export default Layout;
