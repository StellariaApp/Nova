import ThemeKey from "@/components/complex/themeKey";
import { css } from "@stellaria/supernova";
import Toggle from "@/components/complex/toggle";

const wrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Page(): JSX.Element {
  return (
    <main className={wrapper}>
      <div className={content}>
        <Toggle />
        <ThemeKey />
      </div>
    </main>
  );
}
