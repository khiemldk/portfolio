'use client'

import { cn } from '@/utils'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { TwinkleField } from '../twinkle-field'

interface StatusScreenProps {
    visual: ReactNode
    eyebrow: string
    title: string
    description: string
    actions: ReactNode
    /** Extra block under the description (error id, dev message…) */
    extra?: ReactNode
    /** Take the whole viewport (used when the root layout is gone, e.g. global-error) */
    fullscreen?: boolean
}

const ITEM = {
    hide: { opacity: 0, y: 22, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const GRID =
    '[background-image:linear-gradient(rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.045)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_68%)]'

/** Shared layout for 404 / error screens: drifting grid, twinkles, glow, then visual → text → actions stagger in. */
export const StatusScreen: React.FC<StatusScreenProps> = ({
    visual,
    eyebrow,
    title,
    description,
    actions,
    extra,
    fullscreen,
}) => {
    const reduced = useReducedMotion()

    return (
        <div
            className={cn(
                'relative flex w-full items-center justify-center overflow-x-clip px-4 py-16',
                fullscreen ? 'min-h-screen' : 'min-h-[70vh]',
            )}
        >
            <motion.div
                aria-hidden
                className={cn('pointer-events-none absolute inset-0', GRID)}
                animate={reduced ? undefined : { backgroundPosition: ['0px 0px', '56px 56px'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <TwinkleField />
            <div
                aria-hidden
                className="bg-brand/20 pointer-events-none absolute size-[300px] rounded-full blur-[110px] sm:size-[460px]"
            />

            <motion.div
                initial="hide"
                animate="show"
                transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
                className="relative flex max-w-xl flex-col items-center text-center"
            >
                <motion.div variants={ITEM} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                    {visual}
                </motion.div>
                <motion.p variants={ITEM} className="kx-label mt-8 !text-sm !tracking-[0.3em]">
                    {eyebrow}
                </motion.p>
                <motion.h1 variants={ITEM} className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-5xl">
                    {title}
                </motion.h1>
                <motion.p variants={ITEM} className="text-text-label/70 mt-4 max-w-md text-base leading-relaxed">
                    {description}
                </motion.p>
                {extra && (
                    <motion.div variants={ITEM} className="mt-5 w-full">
                        {extra}
                    </motion.div>
                )}
                <motion.div variants={ITEM} className="mt-9 flex flex-wrap items-center justify-center gap-3">
                    {actions}
                </motion.div>
            </motion.div>
        </div>
    )
}
