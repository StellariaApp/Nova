import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { AnimationFadeInOut } from '../../../animations/fade';
import type { ButtonProps } from './types';
import { styles } from './styles';

const ButtonRef = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { children } = props;

  const { classes } = styles(props);

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

export const Button = forwardRef(ButtonRef);

export type * from './types';
