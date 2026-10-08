'use client'

import { BentoCard } from '@/components/shared/bento/bento-card'
import { motion } from 'motion/react'
import { ScrollRevealText } from './scroll-reveal-text'

interface SummaryCardProps {
    name: string
    summary: string
    goals: readonly { label: string; text: string }[]
}

/** Self-summary tile: rotating sparkle, name, and a paragraph that reveals word by word on scroll. */
export const SummaryCard: React.FC<SummaryCardProps> = ({ name, summary, goals }) => (
    <BentoCard from="right" delay={0.15} className="px-8 pt-24 pb-10 sm:px-14 sm:pt-28 sm:pb-14">
        <motion.svg
            aria-hidden
            viewBox="0 0 24 24"
            className="absolute top-0 left-8 size-12 text-white/50 sm:left-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
            <path
                fill="currentColor"
                d="M12 0c.6 6.6 4.9 11.4 12 12-7.1.6-11.4 5.4-12 12-.6-6.6-4.9-11.4-12-12C7.1 11.4 11.4 6.6 12 0Z"
            />
        </motion.svg>
        <h2 className="mb-5 text-4xl font-medium text-white">{name}</h2>
        <ScrollRevealText text={summary} className="text-base leading-[1.7] text-white" />
        <ul className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6">
            {goals.map((goal, i) => (
                <motion.li
                    key={goal.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm leading-relaxed text-white/70"
                >
                    <span className="text-brand mr-2 font-medium">{goal.label}:</span>
                    {goal.text}
                </motion.li>
            ))}
        </ul>
    </BentoCard>
)
