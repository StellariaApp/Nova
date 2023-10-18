import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import type { Ref } from 'react'
import { cssWithProps, cx } from '../../../utils/css'
import { AnimationFadeInOut } from '../../../animations/fade'
import type { AtomWrapperProps } from './types'
import { cvStylesWrapper } from './css'

const Wrapper = (props: AtomWrapperProps, ref: Ref<HTMLDivElement>) => {
    const { className, children } = props

    const cssStyles = cvStylesWrapper(props)
    const cssProps = cssWithProps(props)

    const classes = cx([cssStyles, cssProps, className, props.css])

    return (
        <motion.div
            {...props}
            {...AnimationFadeInOut}
            className={classes}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}

export const AtomWrapper = forwardRef(Wrapper)

export type * from './types'
