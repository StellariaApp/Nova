import { motion } from 'framer-motion';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { AccordionContainerProps } from '../types';
import { StylesContainer } from '../styles';
import useAutoClose from '../hooks/useAutoClose';

export const AccordionContainer = forwardRef(
  (props: AccordionContainerProps, ref: Ref<HTMLElement>) => {
    const { children, autoHide } = props;

    const { classes } = StylesContainer(props);

    const { id } = useAutoClose({ autoHide });

    return (
      <motion.section id={id} {...props} className={classes} ref={ref}>
        {children}
      </motion.section>
    );
  }
);
