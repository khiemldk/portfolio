'use client'

import { SplitHeading } from '@/components/shared/split-heading'
import { AnimatePresence, motion } from 'motion/react'
import { CategoryFilter } from './components/category-filter'
import { ProjectCard } from './components/project-card'
import type { useWorksScript } from './works.script'

type WorksProps = ReturnType<typeof useWorksScript>

/** Works page: title, category filter, and a 2-column project grid that re-flows with layout animation. */
export const Works: React.FC<WorksProps> = ({ heading, categories, category, setCategory, projects }) => (
    <div className="mx-auto flex w-full max-w-[1170px] flex-col gap-8 px-4 pt-6 sm:pt-10">
        <div className="flex flex-col gap-8">
            <SplitHeading text={heading} />
            <CategoryFilter categories={categories} active={category} onChange={setCategory} />
        </div>

        <motion.section layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.slug}
                        layout
                        exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                    >
                        <ProjectCard project={project} delay={(i % 2) * 0.12} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.section>
    </div>
)
