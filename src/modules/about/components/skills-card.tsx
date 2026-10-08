'use client'

import { BentoCard } from '@/components/shared/bento/bento-card'
import type { SkillGroup } from '@/core/configs/about-content.config'
import { useRevealOnView } from '@/hooks/useRevealOnView'
import { motion } from 'motion/react'

interface SkillsCardProps {
    title: string
    groups: readonly SkillGroup[]
}

const CHIP = {
    hide: { opacity: 0, scale: 0.7, y: 10 },
    show: { opacity: 1, scale: 1, y: 0 },
}

/** One skill group: heading + level, then chips that pop in with a quick stagger. */
const Group: React.FC<{ group: SkillGroup }> = ({ group }) => {
    const { ref, shouldShow, reduced } = useRevealOnView<HTMLDivElement>()

    return (
        <div ref={ref} className={group.wide ? 'md:col-span-2' : undefined}>
            <div className="mb-4 flex items-baseline gap-3">
                <h3 className="text-lg font-medium text-white/90">{group.label}</h3>
                {group.level && <span className="kx-label !text-xs">{group.level}</span>}
            </div>
            <motion.ul
                initial={reduced ? false : 'hide'}
                animate={shouldShow ? 'show' : 'hide'}
                transition={{ staggerChildren: 0.035 }}
                className="flex flex-wrap gap-2"
            >
                {group.items.map((item) => (
                    <motion.li
                        key={item}
                        variants={CHIP}
                        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="hover:border-brand/60 hover:bg-brand/15 cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/75 transition-colors duration-300 hover:text-white"
                    >
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

/** Full-width skills tile: six groups in two columns. */
export const SkillsCard: React.FC<SkillsCardProps> = ({ title, groups }) => (
    <BentoCard id="skills" delay={0.05} className="p-8 sm:p-10">
        <h2 className="mb-8 text-base font-medium tracking-wide text-white uppercase">{title}</h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
            {groups.map((group) => (
                <Group key={group.label} group={group} />
            ))}
        </div>
    </BentoCard>
)
