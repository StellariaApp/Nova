import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { AnimationFadeZoom } from '../../../animations/fade';
import type { ButtonProps } from './types';
import { styles } from './styles';

const ButtonRef = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { children } = props;

  const { classes } = styles(props);

  return (
    <motion.button
      {...AnimationFadeZoom}
      {...props}
      className={classes}
      ref={ref}
    >
      {children}
    </motion.button>
  );
};

export const Button = forwardRef(ButtonRef);

export type * from './types';
