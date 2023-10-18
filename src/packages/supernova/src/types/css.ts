import type { Pseudos, Properties } from 'csstype'

export type CSSPseudos = Partial<Record<Pseudos, CSSProperties>>
export type CSSProperties = Properties<number | string> & {
    actions?: CSSPseudos
    css?: string
}

export type { CSSInterpolation } from '@emotion/css'
