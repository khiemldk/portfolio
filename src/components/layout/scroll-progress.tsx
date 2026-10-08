'use client'

import { motion, useScroll, useSpring } from 'motion/react'

/** Hairline reading-progress bar pinned to the bottom edge of the sticky header. */
export const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

    return (
        <motion.span
            aria-hidden
            style={{ scaleX }}
            className="bg-brand absolute inset-x-0 -bottom-px h-px origin-left"
        />
    )
}
