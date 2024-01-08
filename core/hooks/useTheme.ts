import { useAtomValue } from "jotai";
import { ThemeAtom } from "../jotai/theme";

const useTheme = () => {
  const themeState = useAtomValue(ThemeAtom);

  return themeState;
};

export default useTheme;
