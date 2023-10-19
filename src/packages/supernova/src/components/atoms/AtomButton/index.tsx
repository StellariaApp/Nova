import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { cssWithProps, cx } from '../../../utils/css';
import { AnimationFadeInOut } from '../../../animations/fade';
import { useTheme } from '../../../hooks/useTheme';
import type { AtomButtonProps } from './types';
import { cvAsTypeButton, cvStylesButton } from './css';

const Button = (props: AtomButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { className, children, astype } = props;
  const { cssWithTheme } = useTheme();

  const cssAsType = cvAsTypeButton(astype ?? 'flat');
  const cssStyles = cvStylesButton(props);
  const cssProps = cssWithProps(props);
  const cssTheme = cssWithTheme(props, 'AtomButton');

  const classes = cx([cssAsType, cssStyles, cssProps, className, cssTheme]);

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
