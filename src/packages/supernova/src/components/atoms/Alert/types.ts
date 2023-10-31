import type { HTMLMotionProps } from 'framer-motion';
import type { MouseEventHandler } from 'react';
import type { CSSProperties } from '../../../types/css';
import type { IconProps } from '../Icon';
import type { ButtonProps } from '../Button';

export type AlertContainerProps = HTMLMotionProps<'figure'> &
  CSSProperties & {
    percentage?: number;
  };
export type AlertTitleProps = HTMLMotionProps<'figcaption'> & CSSProperties;
export type AlertDescriptionProps = HTMLMotionProps<'p'> & CSSProperties;

export type VariantAlert = 'success' | 'warning' | 'error' | 'info';

export type AlertProps = {
  title?: string;
  percentage?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  description?: string;
  icon?: IconProps['icon'];
  variant?: VariantAlert;
  components?: {
    container?: AlertContainerProps;
    icon?: IconProps;
    button?: ButtonProps;
    title?: AlertTitleProps;
    description?: AlertDescriptionProps;
  };
};
