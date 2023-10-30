import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AlertContainerProps } from '../types';
import { StylesContainer } from '../styles';

export const AlertContainer = forwardRef(
  (props: AlertContainerProps, ref: Ref<HTMLElement>) => {
    const { children } = props;

    const { classes } = StylesContainer(props);

    return (
      <motion.section {...props} className={classes} ref={ref}>
        {children}
      </motion.section>
    );
  }
);
