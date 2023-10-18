
export type IButton =  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type AtomButtonProps = IButton & {
    children: React.ReactNode;
}