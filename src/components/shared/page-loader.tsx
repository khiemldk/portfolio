'use client'

import { motion, useReducedMotion } from 'motion/react'
import { LoaderStatus } from './loader/loader-status'
import { LoaderWordmark } from './loader/loader-wordmark'
import { OrbitSystem } from './loader/orbit-system'
import { TwinkleField } from './twinkle-field'

/**
 * Route-transition loader: twinkling backdrop, breathing glow, the animated orbit system, rippling wordmark,
 * rotating status lines and a sliding indeterminate bar at the top of the viewport.
 * Fades in after a short delay so instant navigations never flash it.
 */
export const PageLoader: React.FC = () => {
    const reduced = useReducedMotion()
    const animated = !reduced

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading"
            className="relative flex min-h-[70vh] w-full items-center justify-center overflow-x-clip"
        >
            <div aria-hidden className="fixed inset-x-0 top-0 z-[90] h-0.5 overflow-hidden bg-white/5">
                <motion.span
                    className="via-brand block h-full w-1/3 bg-gradient-to-r from-transparent to-transparent"
                    initial={{ x: '-100%' }}
                    animate={animated ? { x: '300%' } : { x: '100%' }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
                />
            </div>

            <TwinkleField />

            <motion.div
                aria-hidden
                className="bg-brand/25 pointer-events-none absolute size-[300px] rounded-full blur-[100px] sm:size-[420px] sm:blur-[110px]"
                animate={animated ? { scale: [0.85, 1.2, 0.85], opacity: [0.45, 0.85, 0.45] } : undefined}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center"
            >
                <OrbitSystem animated={animated} />
                <LoaderWordmark animated={animated} />
                <LoaderStatus animated={animated} />
            </motion.div>
        </div>
    )
}
