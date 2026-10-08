'use client'

import { motion } from 'motion/react'

const STAR = 'M100 78c1.2 13.2 9.8 22.8 22 22-12.2 1.2-20.8 8.8-22 22-1.2-13.2-9.8-20.8-22-22 12.2.8 20.8-8.8 22-22Z'
const ORBIT_PATH = 'M 24 100 a 76 28 0 1 0 152 0 a 76 28 0 1 0 -152 0'

const ORBITS = [
    { angle: 0, dur: 2.6, begin: 0 },
    { angle: 60, dur: 3.2, begin: -1.1 },
    { angle: 120, dur: 3.8, begin: -2.2 },
]
/** Comet tail: each follower trails the leader by `lag` seconds and fades out. */
const TAIL = [
    { r: 3.2, o: 1, lag: 0 },
    { r: 2.6, o: 0.55, lag: 0.07 },
    { r: 2, o: 0.3, lag: 0.14 },
    { r: 1.4, o: 0.15, lag: 0.22 },
]
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
    dx: Math.cos((i / 12) * Math.PI * 2),
    dy: Math.sin((i / 12) * Math.PI * 2),
    dist: 52 + (i % 3) * 16,
    delay: (i % 6) * 0.3,
}))
const CENTER = { originX: 0.5, originY: 0.5 } as const

/**
 * The KhiemX "atom": glowing sparkle core with shockwave ripples and radiating sparks, three orbits whose dots
 * drag comet tails, a counter-rotating halo and a sweeping progress arc. Sized by the parent (fills the box).
 */
export const OrbitSystem: React.FC<{ animated: boolean; className?: string }> = ({ animated, className }) => (
    <svg viewBox="0 0 200 200" aria-hidden className={className ?? 'size-52 overflow-visible sm:size-60'}>
        <defs>
            <filter id="kx-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <linearGradient id="kx-star" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#c2ebff" />
                <stop offset="1" stopColor="#5b78f6" />
            </linearGradient>
            <linearGradient id="kx-arc" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#5b78f6" stopOpacity="0" />
                <stop offset="1" stopColor="#c2ebff" />
            </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="94" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="1.5" />
        <motion.circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="url(#kx-arc)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="150 441"
            style={CENTER}
            animate={animated ? { rotate: 360 } : undefined}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />

        {/* shockwave ripples */}
        {animated &&
            [0, 1, 2].map((i) => (
                <motion.circle
                    key={i}
                    cx="100"
                    cy="100"
                    r="18"
                    fill="none"
                    stroke="#8fa6ff"
                    strokeWidth="1.2"
                    style={CENTER}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1, 5], opacity: [0.55, 0] }}
                    transition={{ duration: 2.7, delay: i * 0.9, repeat: Infinity, ease: 'easeOut' }}
                />
            ))}

        {/* orbits with comet-tail dots */}
        {ORBITS.map(({ angle, dur, begin }) => (
            <g key={angle} transform={`rotate(${angle} 100 100)`}>
                <path d={ORBIT_PATH} fill="none" stroke="white" strokeOpacity="0.14" strokeWidth="1" />
                {TAIL.map(({ r, o, lag }) => (
                    <circle
                        key={lag}
                        r={r}
                        fill="#c2ebff"
                        fillOpacity={o}
                        filter={lag === 0 ? 'url(#kx-glow)' : undefined}
                    >
                        {animated && (
                            <animateMotion
                                dur={`${dur}s`}
                                begin={`${begin + lag}s`}
                                repeatCount="indefinite"
                                path={ORBIT_PATH}
                            />
                        )}
                    </circle>
                ))}
            </g>
        ))}

        {/* radiating sparks */}
        {animated &&
            PARTICLES.map((p, i) => (
                <motion.circle
                    key={i}
                    cx="100"
                    cy="100"
                    r="1.6"
                    fill="#c2ebff"
                    initial={{ opacity: 0 }}
                    animate={{ x: [0, p.dx * p.dist], y: [0, p.dy * p.dist], opacity: [0, 1, 0], scale: [1, 0.3] }}
                    transition={{ duration: 1.8, delay: p.delay, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.3 }}
                />
            ))}

        {/* counter-rotating faint halo + pulsing core */}
        <motion.g
            style={CENTER}
            animate={animated ? { scale: [1.8, 2.3, 1.8], rotate: [0, -90, -180] } : { scale: 2 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            opacity={0.22}
        >
            <path d={STAR} fill="#5b78f6" />
        </motion.g>
        <motion.g
            style={CENTER}
            animate={animated ? { scale: [0.9, 1.5, 0.9], rotate: [0, 90, 180] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
            <path d={STAR} fill="url(#kx-star)" filter="url(#kx-glow)" />
        </motion.g>
    </svg>
)
