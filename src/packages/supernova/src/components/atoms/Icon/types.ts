import type { SVGMotionProps } from 'framer-motion';
import type { CSSProperties } from '../../../types/css';
import type { EnumIcon, EnumIconType } from '../../../utils/icons';

export type IIcon = SVGMotionProps<SVGSVGElement>;

export type IconProps = Partial<IIcon> &
  CSSProperties & {
    variant?: EnumIconType;
    icon?: EnumIcon;
    children?: React.ReactNode;
  };
