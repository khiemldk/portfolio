'use client'

import { AvatarImage } from '@/components/shared/avatar-image'
import { BentoCard } from '@/components/shared/bento/bento-card'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import type { PointerEvent } from 'react'

const SPRING = { stiffness: 160, damping: 18, mass: 0.6 }

/** Portrait tile: 3D tilt toward the cursor, parallax photo, floating availability chip. */
export const PortraitCard: React.FC<{ badge: string }> = ({ badge }) => {
    const reduced = useReducedMotion()
    const px = useMotionValue(0) // -0.5 .. 0.5
    const py = useMotionValue(0)
    const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), SPRING)
    const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), SPRING)
    const imageX = useSpring(useTransform(px, [-0.5, 0.5], [12, -12]), SPRING)
    const imageY = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), SPRING)

    const onMove = (e: PointerEvent<HTMLDivElement>) => {
        if (reduced) return
        const r = e.currentTarget.getBoundingClientRect()
        px.set((e.clientX - r.left) / r.width - 0.5)
        py.set((e.clientY - r.top) / r.height - 0.5)
    }
    const onLeave = () => {
        px.set(0)
        py.set(0)
    }

    return (
        <div className="mx-auto w-full max-w-[370px] [perspective:1100px] lg:mx-0">
            <motion.div style={{ rotateX, rotateY }} onPointerMove={onMove} onPointerLeave={onLeave}>
                <BentoCard from="left" className="p-6">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#3c58e3_-15%,#c2ebff_58%,#5ab5e2_97%)]">
                        {/* photo drifts opposite to the tilt; 1.12 scale hides the edges while it moves */}
                        <motion.div style={{ x: imageX, y: imageY }} className="absolute inset-0 scale-[1.12]">
                            <AvatarImage position="56% 30%" sizes="(min-width: 1024px) 322px, 90vw" priority />
                        </motion.div>
                        <div
                            aria-hidden
                            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
                        />

                        <motion.div
                            animate={reduced ? undefined : { y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-full border border-white/40 bg-[#0f0f0f]/70 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md"
                        >
                            <span className="relative grid size-2.5 place-items-center">
                                <span className="absolute inset-0 animate-[kx-pulse-ring_1.8s_ease-out_infinite] rounded-full bg-emerald-400" />
                                <span className="relative size-2 rounded-full bg-emerald-400" />
                            </span>
                            {badge}
                        </motion.div>
                    </div>
                </BentoCard>
            </motion.div>
        </div>
    )
}
