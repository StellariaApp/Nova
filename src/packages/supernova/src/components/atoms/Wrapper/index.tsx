import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import type { Ref } from 'react';
import { AnimationFade } from '../../../animations/fade';
import type { WrapperProps } from './types';
import { styles } from './styles';

const WrapperRef = (props: WrapperProps, ref: Ref<HTMLDivElement>) => {
  const { children } = props;

  const { classes } = styles(props);

  return (
    <motion.div {...props} {...AnimationFade} className={classes} ref={ref}>
      {children}
    </motion.div>
  );
};

export const Wrapper = forwardRef(WrapperRef);

export type * from './types';
