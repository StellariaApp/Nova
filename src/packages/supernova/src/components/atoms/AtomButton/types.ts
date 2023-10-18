import type { HTMLMotionProps } from 'framer-motion'
import type { CSSProperties } from '../../../types/css'

export type IButtonHTML = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type IButton = IButtonHTML & HTMLMotionProps<'button'>

export type AsTypeButton = 'flat' | 'outline' | 'none'

export type AtomButtonProps = IButton &
    CSSProperties & {
        disabled?: boolean
        astype?: AsTypeButton
        children?: React.ReactNode
    }
