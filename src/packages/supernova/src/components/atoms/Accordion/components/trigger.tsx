import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AccordionTriggerProps } from '../types';
import { stylesTrigger } from '../styles';
import { Icon } from '../../Icon';

export const AccordionTrigger = forwardRef(
  (props: AccordionTriggerProps, ref: Ref<HTMLElement>) => {
    const { children } = props;
    const { classes } = stylesTrigger(props);
    return (
      <motion.summary {...props} className={classes} ref={ref}>
        <>
          {children}
          <Icon icon="chevron-down" />
        </>
      </motion.summary>
    );
  }
);
