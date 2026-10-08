'use client'

import { CodeArtwork } from './components/artwork/code-artwork'
import { ProjectsArtwork } from './components/artwork/projects-artwork'
import { SignatureArtwork } from '@/components/shared/bento/signature-artwork'
import { ContactCard } from '@/components/shared/bento/contact-card'
import { HeroCard } from './components/hero-card'
import { LinkCard } from '@/components/shared/bento/link-card'
import { MarqueeBannerCard } from './components/marquee-banner-card'
import { ProfilesCard } from '@/components/shared/bento/profiles-card'
import { ServicesCard } from './components/services-card'
import { StatsCard } from './components/stats-card'
import type { useHomeScript } from './home.script'

type HomeProps = ReturnType<typeof useHomeScript>

/** Bento-grid home page: hero + featured tiles, services/profiles row, stats + CTA row. */
export const Home: React.FC<HomeProps> = ({ content }) => {
    const { credentials, projects, blog } = content

    return (
        <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-6 px-4 pt-6 sm:pt-10">
            {/* Row 1 — hero | ticker + credentials/projects */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <HeroCard />
                <div className="flex min-w-0 flex-col gap-6">
                    <MarqueeBannerCard />
                    <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
                        <LinkCard {...credentials} delay={0.15} artwork={<SignatureArtwork />} />
                        <LinkCard {...projects} delay={0.25} artwork={<ProjectsArtwork />} />
                    </div>
                </div>
            </section>

            {/* Row 2 — github | services | profiles */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="order-1">
                    <LinkCard {...blog} external artwork={<CodeArtwork />} className="min-h-64" />
                </div>
                <div className="order-3 md:col-span-2 lg:order-2">
                    <ServicesCard />
                </div>
                <div className="order-2 lg:order-3">
                    <ProfilesCard />
                </div>
            </section>

            {/* Row 3 — stats | contact CTA */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <StatsCard />
                <ContactCard />
            </section>
        </div>
    )
}
