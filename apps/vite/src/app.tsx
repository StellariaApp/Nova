import { css, variables } from "@stellaria/supernova";
import AtomButton from "./components/atom/button";

const vars = variables({
  wrapper: {
    backgroundColor: "#242424",
  },
});

const wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${vars.wrapper.backgroundColor};
`;

const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <div className={wrapper}>
      <div className={content}>
        <AtomButton />
      </div>
    </div>
  );
};

export default App;
