'use client'

import { motion, useReducedMotion } from 'motion/react'

/** Hand-drawn signature that writes itself, holds, then fades — loops forever. */
export const SignatureArtwork: React.FC = () => {
    const reduced = useReducedMotion()

    return (
        <svg viewBox="0 0 220 90" fill="none" aria-hidden className="mx-auto h-24 w-56 text-white">
            <motion.path
                d="M12 62 C 30 14, 58 12, 52 44 C 48 70, 28 82, 40 58 C 56 26, 78 24, 76 52 C 75 66, 92 66, 104 40 C 110 28, 114 46, 124 54 C 134 62, 146 30, 152 22 C 158 14, 148 52, 158 58 C 170 64, 186 40, 208 34"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduced ? 1 : 0, opacity: 1 }}
                animate={reduced ? undefined : { pathLength: [0, 1, 1, 1], opacity: [1, 1, 1, 0] }}
                transition={{ duration: 5.5, times: [0, 0.55, 0.88, 1], repeat: Infinity, ease: 'easeInOut' }}
            />
            <path d="M24 78 H 190" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
        </svg>
    )
}
