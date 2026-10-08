'use client'

import { useRouteTransition } from '@/hooks/useRouteTransition'
import { useUIStore } from '@/stores'
import { AnimatePresence, motion } from 'motion/react'
import { PageLoader } from '../shared/page-loader'

/**
 * Full-page loader shown on every route change (see useRouteTransition). Sits under the sticky header (z-30 < z-40)
 * so the nav stays visible, and swallows clicks while the next page is prepared.
 */
export const RouteTransition: React.FC = () => {
    useRouteTransition()
    const isTransitioning = useUIStore((s) => s.isTransitioning)

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    key="route-transition"
                    className="fixed inset-0 z-30 flex items-center justify-center bg-[#0f0f0f]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    <PageLoader />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
