'use client'

import { motion } from 'motion/react'

const WORD = ['K', 'h', 'i', 'e', 'm', 'X']

/** Wordmark whose letters ripple up and down in sequence, with a light glint sliding along an underline. */
export const LoaderWordmark: React.FC<{ animated: boolean }> = ({ animated }) => (
    <div className="mt-2 flex flex-col items-center" aria-hidden>
        <div className="flex text-3xl font-semibold tracking-tight text-white">
            {WORD.map((char, i) => (
                <motion.span
                    key={i}
                    animate={animated ? { y: [0, -9, 0], opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] } : undefined}
                    transition={{ duration: 1.4, delay: i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                    className={i === WORD.length - 1 ? 'text-brand' : undefined}
                >
                    {char}
                </motion.span>
            ))}
        </div>
        <div className="relative mt-3 h-px w-28 overflow-hidden bg-white/10">
            <motion.span
                className="via-brand absolute inset-y-0 w-10 bg-gradient-to-r from-transparent to-transparent"
                initial={{ x: '-100%' }}
                animate={animated ? { x: '300%' } : undefined}
                transition={{ duration: 1.6, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
            />
        </div>
    </div>
)
