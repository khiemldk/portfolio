'use client'

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import type { PointerEvent, ReactNode } from 'react'

interface MagneticSocialLinkProps {
    href: string
    label: string
    children: ReactNode
}

const SPRING = { stiffness: 220, damping: 15, mass: 0.4 }

/** Round social button that leans toward the cursor (magnetic) and fills white on hover. */
export const MagneticSocialLink: React.FC<MagneticSocialLinkProps> = ({ href, label, children }) => {
    const reduced = useReducedMotion()
    const x = useSpring(useMotionValue(0), SPRING)
    const y = useSpring(useMotionValue(0), SPRING)

    const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
        if (reduced) return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.35)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
    }
    const onLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={{ x, y }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            whileTap={{ scale: 0.92 }}
            className="grid size-[72px] place-items-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-white transition-colors duration-300 hover:bg-white hover:text-[#0f0f0f]"
        >
            {children}
        </motion.a>
    )
}
