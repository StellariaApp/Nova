import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AlertTitleProps } from '../types';
import { stylesTitle } from '../styles';

export const AlertTitle = forwardRef(
  (props: AlertTitleProps, ref: Ref<HTMLElement>) => {
    const { children } = props;
    const { classes } = stylesTitle(props);
    return (
      <motion.summary {...props} className={classes} ref={ref}>
        {children}
      </motion.summary>
    );
  }
);
