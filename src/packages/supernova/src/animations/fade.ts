import type { MotionProps } from 'framer-motion'

export const AnimationFadeInOut: MotionProps = {
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
