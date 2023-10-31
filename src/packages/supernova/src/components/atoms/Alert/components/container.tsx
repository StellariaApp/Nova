import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AlertContainerProps } from '../types';
import { StylesContainer } from '../styles';

const AlertContainerRef = (
  props: AlertContainerProps,
  ref: Ref<HTMLElement>
) => {
  const { children } = props;

  const { classes } = StylesContainer(props);

  return (
    <motion.figure {...props} className={classes} ref={ref}>
      {children}
    </motion.figure>
  );
};

export const AlertContainer = forwardRef(AlertContainerRef);
