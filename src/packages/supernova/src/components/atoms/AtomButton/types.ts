import type { HTMLMotionProps } from 'framer-motion'

export type IButtonHTML = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type IButton = IButtonHTML & HTMLMotionProps<'button'>

export type AtomButtonProps = IButton & {
    children: React.ReactNode
}
