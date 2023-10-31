import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import { StylesDescription } from '../styles';
import type { AlertDescriptionProps } from '../types';

const AlertDescriptionRef = (
  props: AlertDescriptionProps,
  ref: Ref<HTMLParagraphElement>
) => {
  const { children } = props;
  const { classes } = StylesDescription(props);
  return (
    <motion.p {...props} className={classes} ref={ref}>
      {children ?? 'Description Alert Example'}
    </motion.p>
  );
};

export const AlertDescription = forwardRef(AlertDescriptionRef);
