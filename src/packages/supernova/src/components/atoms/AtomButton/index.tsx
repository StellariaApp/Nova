import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { Ref } from 'react'
import { cx } from '../../../utils/css'
import { AnimationFadeInOut } from '../../../animations/fade'
import type { AtomButtonProps } from './types'
import { cvAsTypeButton, cvPropsButton } from './css'

const Button = (props: AtomButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { className, children, astype = 'flat' } = props

    const cssAsType = cvAsTypeButton(astype)
    const cssProps = cvPropsButton(props)

    const classes = cx(cssAsType, cssProps, className)

    return (
        <motion.button
            {...props}
            {...AnimationFadeInOut}
            className={classes}
            ref={ref}
        >
            {children}
        </motion.button>
    )
}

export const AtomButton = forwardRef(Button)

export type * from './types'
