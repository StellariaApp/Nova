import type { HTMLMotionProps } from 'framer-motion';
import type { CSSProperties } from '../../../types/css';
import type { IconProps } from '../Icon';

export type AlertContainerProps = HTMLMotionProps<'figure'> & CSSProperties;
export type AlertTitleProps = HTMLMotionProps<'figcaption'> & CSSProperties;
export type AlertDescriptionProps = HTMLMotionProps<'p'> & CSSProperties;

export type VariantAlert = 'success' | 'warning' | 'error' | 'info';

export type AlertProps = {
  title?: string;
  description?: string;
  icon?: IconProps['icon'];
  variant?: VariantAlert;
  components?: {
    container?: AlertContainerProps;
    icon?: IconProps;
    title?: AlertTitleProps;
    description?: AlertDescriptionProps;
  };
};
