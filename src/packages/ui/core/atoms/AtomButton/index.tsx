"use client"
import type { AtomButtonProps } from "./types"

export const AtomButton = (props: AtomButtonProps) => {
    const { children } = props
    return <div>{children}</div>
}

export type * from "./types"