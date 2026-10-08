'use client'

import { motion, useReducedMotion } from 'motion/react'

const STAR = 'M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z'
/** Keyframe timing shared by every layer so the whole glitch fires as one burst, then rests. */
const BURST = { duration: 2.4, repeat: Infinity, repeatDelay: 1.2, times: [0, 0.12, 0.2, 0.32, 0.45, 1] }

const StarLayer: React.FC<{ color: string; x: number[]; blend?: boolean; reduced: boolean }> = ({
    color,
    x,
    blend,
    reduced,
}) => (
    <motion.svg
        viewBox="0 0 24 24"
        aria-hidden
        className="absolute inset-0 size-full"
        style={blend ? { mixBlendMode: 'screen' } : undefined}
        animate={reduced ? undefined : { x, opacity: [1, 0.9, 1, 0.7, 1, 1] }}
        transition={BURST}
    >
        <path d={STAR} fill={color} />
    </motion.svg>
)

/** An RGB-split sparkle that stutters in short glitch bursts, ringed by a slowly turning broken circle. */
export const GlitchSparkle: React.FC = () => {
    const reduced = useReducedMotion()

    return (
        <div role="img" aria-label="Error" className="relative size-40 sm:size-52">
            <motion.svg
                viewBox="0 0 100 100"
                aria-hidden
                className="absolute -inset-4 size-[calc(100%+2rem)]"
                animate={reduced ? undefined : { rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
                <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="#fb7185"
                    strokeOpacity="0.45"
                    strokeWidth="0.7"
                    strokeDasharray="6 5 22 7"
                />
            </motion.svg>

            <motion.div
                className="absolute inset-0 drop-shadow-[0_0_28px_rgb(91_120_246/0.55)]"
                animate={reduced ? undefined : { rotate: [0, -4, 5, -3, 2, 0], scale: [1, 1.06, 0.97, 1.04, 1, 1] }}
                transition={BURST}
            >
                <StarLayer color="#22d3ee" x={[0, -15, 10, -7, 3, 0]} blend reduced={!!reduced} />
                <StarLayer color="#fb7185" x={[0, 15, -10, 8, -3, 0]} blend reduced={!!reduced} />
                <StarLayer color="#e8eeff" x={[0, 0, 0, 0, 0, 0]} reduced={!!reduced} />
            </motion.div>

            {/* scan-line slices that flash during the burst */}
            {!reduced &&
                [28, 52, 71].map((top, i) => (
                    <motion.span
                        key={top}
                        aria-hidden
                        className="absolute -inset-x-3 h-[3px] bg-white/80 mix-blend-overlay"
                        style={{ top: `${top}%` }}
                        animate={{ scaleX: [0, 0, 1, 0, 0, 0], opacity: [0, 0, 1, 0, 0, 0] }}
                        transition={{ ...BURST, delay: i * 0.05 }}
                    />
                ))}
        </div>
    )
}
