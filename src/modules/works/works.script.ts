'use client'

import { WORKS_CONTENT, type Project } from '@/core/configs/works-content.config'
import { useMemo, useState } from 'react'

export const useWorksScript = () => {
    const [category, setCategory] = useState<string>(WORKS_CONTENT.filterAll)
    const projects: readonly Project[] = WORKS_CONTENT.projects

    const categories = useMemo(
        () => [WORKS_CONTENT.filterAll, ...Array.from(new Set(projects.map((p) => p.category)))],
        [projects],
    )
    const visible = useMemo(
        () => (category === WORKS_CONTENT.filterAll ? projects : projects.filter((p) => p.category === category)),
        [projects, category],
    )

    return { heading: WORKS_CONTENT.heading, categories, category, setCategory, projects: visible }
}
