'use client'

import { BentoCard } from '@/components/shared/bento/bento-card'
import { CornerArrowButton } from '@/components/shared/bento/corner-arrow-button'
import type { Project } from '@/core/configs/works-content.config'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ProjectThumbnail } from './project-thumbnail'

interface ProjectCardProps {
    project: Project
    /** Stagger offset for the reveal */
    delay?: number
}

/** Project tile: thumbnail drifts with scroll (parallax) and zooms on hover; caption + corner arrow below. */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
    const frame = useRef<HTMLDivElement>(null)
    const reduced = useReducedMotion()
    const { scrollYProgress } = useScroll({ target: frame, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-9%', '9%'])

    return (
        <BentoCard delay={delay} href={project.url} external className="group h-full p-4 pb-6">
            <div ref={frame} className="relative mb-4 aspect-[4/3] overflow-hidden rounded-[22px]">
                <motion.div
                    style={{ y }}
                    className="absolute -inset-[14%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                >
                    <ProjectThumbnail project={project} />
                </motion.div>
            </div>
            <div className="px-2">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="kx-label mb-1 !text-sm">{project.category}</p>
                        <h2 className="text-[22px] font-medium text-white/90">{project.title}</h2>
                    </div>
                    {project.url && <CornerArrowButton />}
                </div>
                <p className="text-text-label/60 mt-3 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
                {project.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                            <li
                                key={t}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/65"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </BentoCard>
    )
}
