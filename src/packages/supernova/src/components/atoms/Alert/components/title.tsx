import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AlertTitleProps } from '../types';
import { StylesTitle } from '../styles';

export const AlertTitle = forwardRef(
  (props: AlertTitleProps, ref: Ref<HTMLElement>) => {
    const { children } = props;
    const { classes } = StylesTitle(props);
    return (
      <motion.summary {...props} className={classes} ref={ref}>
        {children ?? 'Title Alert Example'}
      </motion.summary>
    );
  }
);
