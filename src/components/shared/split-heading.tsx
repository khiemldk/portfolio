'use client'

import { useRevealOnView } from '@/hooks/useRevealOnView'
import { Sparkle } from 'lucide-react'
import { motion } from 'motion/react'

/** One spinning sparkle flanking the heading. */
const Star: React.FC<{ reverse?: boolean }> = ({ reverse }) => (
    <motion.span
        aria-hidden
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="shrink-0"
    >
        <Sparkle className="size-5 fill-white text-white sm:size-9" strokeWidth={1.5} />
    </motion.span>
)

/**
 * Big uppercase page title. Each character rises out of a clipped line with a stagger,
 * flanked by two counter-rotating sparkles that pop in.
 */
export const SplitHeading: React.FC<{ text: string }> = ({ text }) => {
    const { ref, shouldShow, reduced } = useRevealOnView<HTMLHeadingElement>()
    const chars = Array.from(text)

    return (
        <h1
            ref={ref}
            aria-label={text}
            className="flex items-center justify-center gap-2 text-4xl font-semibold tracking-tight text-white uppercase sm:gap-4 sm:text-6xl lg:text-7xl"
        >
            <motion.span
                aria-hidden
                initial={reduced ? false : { scale: 0, opacity: 0 }}
                animate={shouldShow ? { scale: 1, opacity: 1 } : undefined}
                transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
            >
                <Star />
            </motion.span>

            <span aria-hidden className="flex overflow-hidden py-1">
                {chars.map((char, i) => (
                    <motion.span
                        key={i}
                        initial={reduced ? false : { y: '110%', rotate: 8 }}
                        animate={shouldShow ? { y: 0, rotate: 0 } : undefined}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block whitespace-pre"
                    >
                        {char}
                    </motion.span>
                ))}
            </span>

            <motion.span
                aria-hidden
                initial={reduced ? false : { scale: 0, opacity: 0 }}
                animate={shouldShow ? { scale: 1, opacity: 1 } : undefined}
                transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.25 }}
            >
                <Star reverse />
            </motion.span>
        </h1>
    )
}
