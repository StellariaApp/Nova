import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AccordionTriggerProps } from '../types';
import { stylesTrigger } from '../styles';
import { Icon } from '../../Icon';

export const AccordionTrigger = forwardRef(
  (props: AccordionTriggerProps, ref: Ref<HTMLElement>) => {
    const { children, icon } = props;
    const { classes } = stylesTrigger(props);
    return (
      <motion.summary {...props} className={classes} ref={ref}>
        <>
          {children}
          <Icon height={10} icon="chevron-down" width={10} {...icon} />
        </>
      </motion.summary>
    );
  }
);
