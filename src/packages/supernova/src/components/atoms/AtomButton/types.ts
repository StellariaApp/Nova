import type { HTMLMotionProps } from 'framer-motion'

export type IButtonHTML = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type IButton = IButtonHTML & HTMLMotionProps<'button'>

export type AsTypeButton = 'flat' | 'outline' | 'none'

export type AtomButtonProps = IButton & {
    disabled?: boolean
    astype?: AsTypeButton
    children?: React.ReactNode
}
