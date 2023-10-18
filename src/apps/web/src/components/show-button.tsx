'use client';
import { AtomButton, AnimatePresence } from '@stellaria/supernova';
import { useState } from 'react';

const ShowButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <AnimatePresence>
        <AtomButton
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          Get Started
        </AtomButton>
        {show ? (
          <AtomButton key="supernova-atom-button">Animations</AtomButton>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ShowButton;
