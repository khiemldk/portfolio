'use client'

import { BentoCard } from '@/components/shared/bento/bento-card'
import type { TimelineEntry } from '@/core/configs/about-content.config'
import { useRevealOnView } from '@/hooks/useRevealOnView'
import { motion } from 'motion/react'

interface TimelineCardProps {
    title: string
    items: readonly TimelineEntry[]
    id?: string
    delay?: number
}

/** Experience / Education tile: a vertical line draws itself, dots pop in, entries slide up one by one. */
export const TimelineCard: React.FC<TimelineCardProps> = ({ title, items, id, delay = 0 }) => {
    const { ref, shouldShow, reduced } = useRevealOnView<HTMLUListElement>()

    return (
        <BentoCard id={id} delay={delay} className="h-full p-8">
            <h3 className="mb-6 text-base font-medium tracking-wide text-white uppercase">{title}</h3>
            <ul ref={ref} className="relative flex flex-col gap-8 pl-7">
                <motion.span
                    aria-hidden
                    initial={reduced ? false : { scaleY: 0 }}
                    animate={shouldShow ? { scaleY: 1 } : undefined}
                    transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.65, 0, 0.35, 1] }}
                    className="from-brand absolute top-2 bottom-2 left-[5px] w-px origin-top bg-gradient-to-b via-white/25 to-transparent"
                />
                {items.map((item, i) => {
                    const d = delay + 0.35 + i * 0.25
                    return (
                        <motion.li
                            key={`${item.date}-${item.title}`}
                            initial={reduced ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
                            animate={shouldShow ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
                            transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}
                            className="group/item relative transition-transform duration-300 hover:translate-x-1.5"
                        >
                            <motion.span
                                aria-hidden
                                initial={reduced ? false : { scale: 0 }}
                                animate={shouldShow ? { scale: 1 } : undefined}
                                transition={{ type: 'spring', stiffness: 400, damping: 14, delay: d }}
                                className="border-brand group-hover/item:bg-brand absolute top-1 -left-7 size-[11px] rounded-full border-2 bg-[#0f0f0f] transition-colors duration-300"
                            />
                            <p className="text-text-label/60 mb-3 text-base font-medium">{item.date}</p>
                            <h4 className="mb-1.5 text-lg font-medium text-white/90">{item.title}</h4>
                            <p className="text-text-label/60 text-sm">{item.org}</p>
                            {item.note && (
                                <p className="text-text-label/45 mt-2 text-sm leading-relaxed">{item.note}</p>
                            )}
                        </motion.li>
                    )
                })}
            </ul>
        </BentoCard>
    )
}
