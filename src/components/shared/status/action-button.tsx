'use client'

import { cn } from '@/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import type { ReactNode } from 'react'

type ActionButtonProps = {
    children: ReactNode
    icon?: ReactNode
    variant?: 'primary' | 'ghost'
} & ({ href: string; onClick?: never; disabled?: never } | { href?: never; onClick: () => void; disabled?: boolean })

const STYLES = {
    primary: 'bg-white text-[#0f0f0f] hover:bg-secondary hover:text-white',
    ghost: 'border border-white/15 bg-white/[0.04] text-white hover:bg-white hover:text-[#0f0f0f]',
}

/** Pill button / link used on status screens. Springs on hover and press. */
export const ActionButton: React.FC<ActionButtonProps> = ({
    children,
    icon,
    variant = 'primary',
    href,
    onClick,
    disabled,
}) => {
    const className = cn(
        'group/btn inline-flex cursor-pointer items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-medium transition-colors duration-300 disabled:cursor-default disabled:opacity-70',
        STYLES[variant],
    )
    const content = (
        <>
            {icon}
            {children}
        </>
    )

    return (
        <motion.span
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
            {href ? (
                <Link href={href} className={className}>
                    {content}
                </Link>
            ) : (
                <button type="button" onClick={onClick} disabled={disabled} className={className}>
                    {content}
                </button>
            )}
        </motion.span>
    )
}
