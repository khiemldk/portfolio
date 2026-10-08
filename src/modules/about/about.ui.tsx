'use client'

import { ContactCard } from '@/components/shared/bento/contact-card'
import { LinkCard } from '@/components/shared/bento/link-card'
import { ProfilesCard } from '@/components/shared/bento/profiles-card'
import { SignatureArtwork } from '@/components/shared/bento/signature-artwork'
import { PortraitCard } from './components/portrait-card'
import { SplitHeading } from '@/components/shared/split-heading'
import { SummaryCard } from './components/summary-card'
import { SkillsCard } from './components/skills-card'
import { TimelineCard } from './components/timeline-card'
import type { useAboutScript } from './about.script'

type AboutProps = ReturnType<typeof useAboutScript>

/** About page: portrait + self-summary, experience/education timelines, then profiles / contact / credentials. */
export const About: React.FC<AboutProps> = ({ content, credentials }) => (
    <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-6 px-4 pt-6 sm:pt-10">
        {/* Row 1 — portrait | heading + summary */}
        <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[370px_minmax(0,1fr)] lg:gap-x-8">
            <PortraitCard badge={content.badge} />
            <div className="flex min-w-0 flex-col gap-8 lg:gap-10">
                <SplitHeading text={content.heading} />
                <SummaryCard name={content.name} summary={content.summary} goals={content.goals} />
            </div>
        </section>

        {/* Row 2 — experience | education + awards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TimelineCard id="experience" title={content.experience.title} items={content.experience.items} />
            <div className="flex flex-col gap-6">
                <TimelineCard title={content.education.title} items={content.education.items} delay={0.15} />
                <TimelineCard title={content.awards.title} items={content.awards.items} delay={0.25} />
            </div>
        </section>

        {/* Skills */}
        <SkillsCard title={content.skills.title} groups={content.skills.groups} />

        {/* Row 3 — profiles | contact | credentials */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProfilesCard />
            <ContactCard />
            <LinkCard
                {...credentials}
                delay={0.2}
                artwork={<SignatureArtwork />}
                className="min-h-64 md:col-span-2 lg:col-span-1"
            />
        </section>
    </div>
)
