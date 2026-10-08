'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const MESSAGES = ['Warming up the pixels', 'Aligning the grid', 'Polishing the details', 'Almost there']

/** Uppercase caption that cycles through playful status lines with a slide-and-fade swap. */
export const LoaderStatus: React.FC<{ animated: boolean }> = ({ animated }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!animated) return
        const timer = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 1800)
        return () => clearInterval(timer)
    }, [animated])

    return (
        <div className="text-text-dim mt-4 flex h-4 items-center gap-1 text-xs tracking-[0.3em] uppercase">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35 }}
                >
                    {MESSAGES[index]}
                </motion.span>
            </AnimatePresence>
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    animate={animated ? { opacity: [0.15, 1, 0.15] } : { opacity: 1 }}
                    transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                >
                    .
                </motion.span>
            ))}
        </div>
    )
}
