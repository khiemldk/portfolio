'use client'

import { cn } from '@/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useCardSpotlight } from '@/hooks/useCardSpotlight'
import { useRevealOnView } from '@/hooks/useRevealOnView'

interface BentoCardProps {
    children: ReactNode
    className?: string
    /** Stagger offset (seconds) for the reveal animation */
    delay?: number
    /** Whole card becomes a link (an invisible overlay anchor keeps nested content valid HTML) */
    href?: string
    id?: string
    /** Open `href` in a new tab (for off-site links) */
    external?: boolean
    /** Direction the card slides in from */
    from?: 'up' | 'left' | 'right'
}

const OFFSETS = { up: { x: 0, y: 36 }, left: { x: -36, y: 0 }, right: { x: 36, y: 0 } } as const

/** Base surface of every tile on the home grid: reveal-on-view, gradient border, cursor spotlight. */
export const BentoCard: React.FC<BentoCardProps> = ({
    children,
    className,
    delay = 0,
    href,
    id,
    external,
    from = 'up',
}) => {
    const { ref, shouldShow, reduced } = useRevealOnView<HTMLDivElement>()
    const { onPointerMove } = useCardSpotlight()
    const { x, y } = OFFSETS[from]

    return (
        <motion.div
            ref={ref}
            id={id}
            onPointerMove={onPointerMove}
            initial={reduced ? false : { opacity: 0, x, y, filter: 'blur(10px)' }}
            animate={shouldShow ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            className={cn('kx-card scroll-mt-24', className)}
        >
            {href && (
                <Link
                    href={href}
                    {...(external && { target: '_blank', rel: 'noreferrer' })}
                    aria-label="Open section"
                    className="focus-visible:ring-brand absolute inset-0 z-10 rounded-[30px] focus-visible:ring-2 focus-visible:outline-none"
                />
            )}
            {children}
        </motion.div>
    )
}
