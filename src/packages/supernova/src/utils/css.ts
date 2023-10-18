'use client'

import { css, cx } from '@emotion/css'
import type { CSSPseudos, CSSInterpolation } from '../types/css'

type VBase = {
    base?: string
}

export const cv =
    <T extends object>(variants: T & VBase) =>
    (variant: keyof T | Partial<Record<keyof T, boolean>>) => {
        const base = variants.base ?? ''

        const isObject = typeof variant === 'object'

        if (isObject) {
            const varts = Object.entries(variant as Record<keyof T, boolean>)
                .filter(([, value]) => value)
                .map(([key]) => variants[key as keyof T])
            const vartsArray = varts as string[]

            return cx([base, ...vartsArray])
        }
        const varts = variants as Record<keyof T, string>
        const vart = varts[variant]
        return cx([base, vart])
    }

export const cssWithProps = (props: { actions?: CSSPseudos }) =>
    cx([css(props as CSSInterpolation), css(props.actions as CSSInterpolation)])

export { css, keyframes, cx, merge } from '@emotion/css'
