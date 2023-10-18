'use client'
import { motion } from 'framer-motion'
import { css, cx } from '@emotion/css'
import type { Ref } from 'react'
import { forwardRef } from 'react'
import type { AtomButtonProps } from './types'

const cssBase = css`
    width: max-content;
    height: max-content;
    background-color: red;
`

const animation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

const Button = (props: AtomButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { className, children, ...rest } = props

    const classes = cx(cssBase, className)

    return (
        <motion.button {...rest} {...animation} className={classes} ref={ref}>
            {children}
        </motion.button>
    )
}

export const AtomButton = forwardRef(Button)

export type * from './types'
