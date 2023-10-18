"use client"
import { css, cx } from "@emotion/css"
import type { AtomButtonProps } from "./types"

const cssBase = css`
 width: max-content;
    height: max-content;
`



export const AtomButton = (props: AtomButtonProps) => {
    const { children, className } = props

    const styles = cx(cssBase, className)

    return <button className={styles} {...props}>{children}</button>
}

export type * from "./types"