import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { cssWithProps, cx } from '../../../utils/css';
import { AnimationFadeInOut } from '../../../animations/fade';
import { useTheme } from '../../../hooks/useTheme';
import type { WrapperProps } from './types';
import { cvStylesWrapper } from './css';

const WrapperRef = (props: WrapperProps, ref: Ref<HTMLDivElement>) => {
  const { className, children } = props;
  const { cssTheme } = useTheme();

  const cssStyles = cvStylesWrapper(props);
  const cssProps = cssWithProps(props);
  const cssWithTheme = cssTheme(props, 'wrapper');

  const classes = cx([cssStyles, cssProps, className, cssWithTheme]);

  return (
    <motion.div
      {...props}
      {...AnimationFadeInOut}
      className={classes}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export const Wrapper = forwardRef(WrapperRef);

export type * from './types';
