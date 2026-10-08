import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { BentoCard } from '@/components/shared/bento/bento-card'
import { StatCounter } from './stat-counter'

/** Three-up statistics tile. */
export const StatsCard: React.FC = () => (
    <BentoCard from="left" className="flex h-full items-center p-6">
        <div className="flex w-full flex-col gap-4 sm:flex-row">
            {HOME_CONTENT.stats.map((stat) => (
                <StatCounter key={stat.label[1]} stat={stat} />
            ))}
        </div>
    </BentoCard>
)
