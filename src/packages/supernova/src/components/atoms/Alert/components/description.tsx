import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import { stylesDescription } from '../styles';
import type { AlertDescriptionProps } from '../types';

export const AlertDescription = forwardRef(
  (props: AlertDescriptionProps, ref: Ref<HTMLParagraphElement>) => {
    const { children } = props;
    const { classes } = stylesDescription(props);
    return (
      <motion.p {...props} className={classes} ref={ref}>
        {children}
      </motion.p>
    );
  }
);
