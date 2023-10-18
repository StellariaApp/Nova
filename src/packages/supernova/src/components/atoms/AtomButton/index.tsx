import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { cssWithProps, cx } from '../../../utils/css';
import { AnimationFadeInOut } from '../../../animations/fade';
import type { AtomButtonProps } from './types';
import { cvAsTypeButton, cvStylesButton } from './css';

const Button = (props: AtomButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { className, children, astype } = props;

  const cssAsType = cvAsTypeButton(astype ?? 'flat');
  const cssStyles = cvStylesButton(props);
  const cssProps = cssWithProps(props);

  const classes = cx([cssAsType, cssStyles, cssProps, className, props.css]);

  return (
    <motion.button
      {...props}
      {...AnimationFadeInOut}
      className={classes}
      ref={ref}
    >
      {children}
    </motion.button>
  );
};

export const AtomButton = forwardRef(Button);

export type * from './types';
