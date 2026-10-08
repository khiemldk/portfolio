'use client'

import type { StatItem } from '@/core/configs/home-content.config'
import { useCountUp } from '../hooks/useCountUp'

/** One animated statistic: number counts up on first view, two-line caption underneath. */
export const StatCounter: React.FC<{ stat: StatItem }> = ({ stat }) => {
    const { ref, value } = useCountUp<HTMLHeadingElement>(stat.value)
    const text = String(value).padStart(stat.pad ?? 0, '0')

    return (
        <div className="relative flex-1 rounded-[30px] bg-white/[0.04] px-4 py-10 text-center">
            <h2 ref={ref} className="mb-4 text-3xl leading-tight font-medium tracking-tight text-white tabular-nums">
                {stat.prefix}
                {text}
                {stat.suffix}
            </h2>
            <p className="kx-label leading-snug">
                {stat.label[0]}
                <br />
                {stat.label[1]}
            </p>
        </div>
    )
}
