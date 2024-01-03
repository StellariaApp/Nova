import { cookies } from "next/headers";
import { ThemeKeys } from "..";
import ProviderThemeClient from "./theme.client";

type Props = {
  theme?: ThemeKeys;
  children: React.ReactNode;
};

const ProviderTheme = (props: Props) => {
  const { children, theme } = props;

  const themeCookie = cookies().get("theme")?.value as ThemeKeys;
  const key = theme ?? themeCookie ?? "light";

  return <ProviderThemeClient theme={key}>{children}</ProviderThemeClient>;
};

export default ProviderTheme;
