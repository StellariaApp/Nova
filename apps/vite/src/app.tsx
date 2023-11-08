import { css } from "@stellaria/supernova";
import AtomButton from "./components/atom/button";
import SuperNovaTheme from "./themes/theme";
import { theme } from "./themes";

const wrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme?.colors?.background};
  transition: background-color 0.3s ease-in-out;
`;

const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [key] = SuperNovaTheme.use();
  return (
    <div className={wrapper}>
      <div className={content}>
        <AtomButton
          onClick={() => {
            SuperNovaTheme.toggle();
          }}
        />
        <span
          className={css`
            color: ${theme?.colors?.text};
          `}
        >
          Theme key: {key}
        </span>
        <span
          className={css`
            color: ${theme?.colors?.text};
          `}
        ></span>
      </div>
    </div>
  );
};

export default App;
