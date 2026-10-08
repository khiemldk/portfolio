'use client'

import { motion, useReducedMotion } from 'motion/react'

/** Fixed layout (percent positions) so server and client render identically — no hydration mismatch. */
const STARS = [
    { x: 8, y: 18, s: 14, d: 0, t: 3.2 },
    { x: 22, y: 72, s: 9, d: 0.8, t: 2.6 },
    { x: 15, y: 44, s: 6, d: 1.5, t: 3.8 },
    { x: 34, y: 12, s: 8, d: 2.1, t: 2.9 },
    { x: 68, y: 10, s: 10, d: 0.4, t: 3.5 },
    { x: 84, y: 28, s: 16, d: 1.2, t: 3.1 },
    { x: 90, y: 66, s: 8, d: 2.4, t: 2.7 },
    { x: 74, y: 82, s: 12, d: 0.9, t: 3.6 },
    { x: 48, y: 90, s: 6, d: 1.8, t: 3.0 },
    { x: 56, y: 6, s: 6, d: 2.8, t: 2.8 },
]
const STAR_PATH = 'M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z'

/** Decorative twinkling four-point stars scattered behind a screen. Static when reduced motion is on. */
export const TwinkleField: React.FC = () => {
    const reduced = useReducedMotion()

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0">
            {STARS.map((star, i) => (
                <motion.svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="absolute text-white"
                    style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.s, height: star.s }}
                    initial={{ opacity: 0.15, scale: 0.6 }}
                    animate={
                        reduced ? undefined : { opacity: [0.1, 0.9, 0.1], scale: [0.5, 1.15, 0.5], rotate: [0, 45, 90] }
                    }
                    transition={{ duration: star.t, delay: star.d, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <path fill="currentColor" d={STAR_PATH} />
                </motion.svg>
            ))}
        </div>
    )
}
