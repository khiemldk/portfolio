'use client'

import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { AvatarImage } from '@/components/shared/avatar-image'
import { BentoCard } from '@/components/shared/bento/bento-card'
import { CornerArrowButton } from '@/components/shared/bento/corner-arrow-button'

const { hero } = HOME_CONTENT

/** Big intro tile: portrait photo on a gradient block + name + one-line pitch. */
export const HeroCard: React.FC = () => (
    <BentoCard href="/about" from="left" className="flex h-full flex-col gap-8 p-8 sm:flex-row sm:p-12">
        <div className="relative size-56 shrink-0 overflow-hidden rounded-tl-[30px] rounded-br-[30px] bg-[linear-gradient(135deg,#3c58e3_-15%,#c2ebff_58%,#5ab5e2_97%)]">
            <AvatarImage
                position="55% 28%"
                sizes="224px"
                priority
                className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [.kx-card:hover_&]:scale-[1.07]"
            />
            {/* diagonal light sweep, plays on card hover */}
            <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-1/3 -translate-x-[120%] bg-white/40 blur-md [transition:transform_0s] [.kx-card:hover_&]:animate-[kx-shine_1.1s_ease-out]"
            />
        </div>

        <div className="sm:pt-8">
            <p className="text-text-label/70 mb-1 text-sm tracking-wide uppercase">{hero.role}</p>
            <h1 className="mb-3 text-4xl leading-10 font-medium text-white">{hero.name}</h1>
            <p className="max-w-[26ch] tracking-wide">{hero.intro}</p>
        </div>

        <div className="absolute right-8 bottom-8">
            <CornerArrowButton />
        </div>
    </BentoCard>
)
