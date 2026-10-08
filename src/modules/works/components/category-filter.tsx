'use client'

import { cn } from '@/utils'
import { motion } from 'motion/react'

interface CategoryFilterProps {
    categories: string[]
    active: string
    onChange: (category: string) => void
}

/** Pill tabs; a shared-layout highlight glides between the active options. */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, active, onChange }) => (
    <div role="tablist" aria-label="Filter projects" className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => {
            const isActive = category === active
            return (
                <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onChange(category)}
                    className={cn(
                        'relative cursor-pointer rounded-full px-5 py-2.5 text-sm transition-colors duration-300',
                        isActive ? 'text-[#0f0f0f]' : 'text-text-label/70 hover:text-white',
                    )}
                >
                    {isActive && (
                        <motion.span
                            layoutId="filter-pill"
                            className="absolute inset-0 rounded-full bg-white"
                            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                    )}
                    <span className="relative z-10 font-medium">{category}</span>
                </button>
            )
        })}
    </div>
)
