'use client'

import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { Blocks, Gauge, Monitor, Server } from 'lucide-react'
import { motion } from 'motion/react'
import { BentoCard } from '@/components/shared/bento/bento-card'
import { CardCaption } from '@/components/shared/bento/card-caption'

const { services } = HOME_CONTENT
const ICONS = [
    { Icon: Monitor, label: 'Frontend' },
    { Icon: Server, label: 'Backend' },
    { Icon: Blocks, label: 'Web3' },
    { Icon: Gauge, label: 'Performance' },
]

/** Wide tile with four service icons that float in a staggered wave. */
export const ServicesCard: React.FC = () => (
    <BentoCard
        id="services"
        href={services.href}
        delay={0.1}
        className="group flex h-full flex-col justify-between p-6"
    >
        <div className="my-10 flex items-start justify-center gap-8 sm:gap-16">
            {ICONS.map(({ Icon, label }, i) => (
                <motion.div
                    key={label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.2, delay: i * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-3 text-white transition-transform duration-300 group-hover:scale-110"
                >
                    <Icon aria-hidden className="size-10" strokeWidth={1.25} />
                    <span className="kx-label !opacity-70">{label}</span>
                </motion.div>
            ))}
        </div>
        <CardCaption label={services.label} title={services.title} />
    </BentoCard>
)
