import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { Sparkle } from 'lucide-react'
import { BentoCard } from '@/components/shared/bento/bento-card'

const { marquee } = HOME_CONTENT

const MarqueeItem: React.FC = () => (
    <span className="inline-flex items-center gap-3 pr-3 text-xs">
        {marquee.lead} <b className="font-normal text-white">{marquee.strong}</b>
        <Sparkle className="size-3.5 fill-white text-white" aria-hidden />
    </span>
)

/** Slim ticker tile. The track renders two identical groups so the -50% keyframe loops seamlessly. */
export const MarqueeBannerCard: React.FC = () => (
    <BentoCard delay={0.1} from="right" className="kx-marquee overflow-hidden px-6 py-4">
        <div
            className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] whitespace-nowrap"
            aria-label={`${marquee.lead} ${marquee.strong}`}
        >
            <div className="kx-marquee-track flex w-max" aria-hidden>
                {[0, 1].map((group) => (
                    <div key={group} className="flex shrink-0">
                        {Array.from({ length: 6 }, (_, i) => (
                            <MarqueeItem key={i} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </BentoCard>
)
