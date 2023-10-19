'use client';
import { AtomButton, useTheme } from '@stellaria/supernova';

const ToggleTheme = () => {
  const { toggle } = useTheme();
  return (
    <AtomButton
      onClick={() => {
        toggle();
      }}
    >
      ToggleTheme
    </AtomButton>
  );
};

export default ToggleTheme;
