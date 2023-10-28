import type { MotionProps } from 'framer-motion';

export const AnimationFade: MotionProps = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  transition: {
    duration: 0.4,
    ease: 'easeInOut'
  }
};

export const AnimationFadeZoom: MotionProps = {
  initial: {
    opacity: 0,
    transform: 'perspective(600px) translate3d(0, 0, -20px)'
  },
  animate: {
    opacity: 1,
    transform: 'perspective(600px) translate3d(0, 0, 0px)'
  },
  exit: {
    opacity: 0,
    transform: 'perspective(600px) translate3d(0, 0, -20px)'
  },
  transition: {
    duration: 0.18,
    ease: 'easeInOut'
  }
};
