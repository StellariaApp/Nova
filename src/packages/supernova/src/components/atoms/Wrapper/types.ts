import type { HTMLMotionProps } from 'framer-motion';
import type { CSSProperties } from '../../../types/css';

export type IWrapperHTML = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type IWrapper = IWrapperHTML & HTMLMotionProps<'button'>;

export type WrapperProps = IWrapper &
  CSSProperties & {
    disabled?: boolean;
    children?: React.ReactNode;
  };
