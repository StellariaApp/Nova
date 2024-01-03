import { type RC } from "@stellaria/nova";
import type { Metadata } from "next";
import stylex from "@stylexjs/stylex";

import "./main.css";
import { theme } from "../../core/themes/index.stylex";
import ProviderTheme from "../../core/providers/theme";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Created by create next app",
};

const Layout: RC = (props) => {
  const { children } = props;

  return (
    <ProviderTheme>
      <html lang="en" {...html}>
        <body>{children}</body>
      </html>
    </ProviderTheme>
  );
};

export default Layout;

const styles = stylex.create({
  base: {},
  dynamic: () => ({
    colorScheme: "light",
    backgroundColor: theme.background,
  }),
});

const html = stylex.props(styles.dynamic());
