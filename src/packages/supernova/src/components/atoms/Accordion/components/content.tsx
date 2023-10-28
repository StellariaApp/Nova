import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AccordionContentProps } from '../types';
import { stylesContent } from '../styles';

export const AccordionContent = forwardRef(
  (props: AccordionContentProps, ref: Ref<HTMLParagraphElement>) => {
    const { children } = props;
    const { classes } = stylesContent(props);
    return (
      <motion.p {...props} className={classes} ref={ref}>
        {children}
      </motion.p>
    );
  }
);
