'use client'

import { NAV_ITEMS } from '@/core/configs/home-content.config'
import { useScrolled } from '@/hooks/useScrolled'
import { useUIStore } from '@/stores'
import { cn } from '@/utils'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { Logo } from '../shared/logo'
import { ScrollProgress } from './scroll-progress'
import { MobileMenu } from './mobile-menu'

/** Sticky top bar: logo, route-aware nav with a sliding dot, CTA, and an animated hamburger on mobile. */
export const Header: FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const scrolled = useScrolled()
    const pathname = usePathname()
    const activeId = NAV_ITEMS.find((item) => item.href === pathname)?.id ?? ''
    const isIntroDone = useUIStore((s) => s.isIntroDone)

    return (
        <>
            <motion.header
                initial={{ y: -24, opacity: 0 }}
                animate={isIntroDone ? { y: 0, opacity: 1 } : undefined}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    'sticky top-0 z-40 border-b border-transparent transition-[background,border-color,backdrop-filter] duration-500',
                    scrolled && 'border-white/10 bg-[#0f0f0f]/70 backdrop-blur-xl',
                )}
            >
                <div className="mx-auto flex h-20 w-full max-w-[1170px] items-center justify-between px-4">
                    <Link href="/" className="relative z-40" aria-label="KhiemX home">
                        <Logo />
                    </Link>

                    <nav aria-label="Primary" className="hidden md:block">
                        <ul className="flex items-center gap-12">
                            {NAV_ITEMS.map((item) => {
                                const active = activeId === item.id
                                return (
                                    <li key={item.id} className="relative">
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                'block py-6 text-base transition-colors duration-300 hover:text-white',
                                                active ? 'text-white' : 'text-text-dim',
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                        {active && (
                                            <motion.span
                                                layoutId="nav-dot"
                                                className="bg-brand absolute bottom-3.5 left-1/2 size-1 -translate-x-1/2 rounded-full"
                                                transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                                            />
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <Link
                        href="/contact"
                        className="group bg-secondary hover:text-secondary hidden items-center gap-1 rounded-2xl px-7 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-white md:inline-flex"
                    >
                        Let&apos;s talk
                        <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100">
                            <ArrowUpRight className="size-4" />
                        </span>
                    </Link>

                    <button
                        type="button"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                        className="relative z-40 flex h-[18px] w-6 cursor-pointer flex-col justify-between md:hidden"
                    >
                        <motion.span
                            className="block h-px w-full origin-center bg-white"
                            animate={menuOpen ? { y: 8.5, rotate: 45 } : { y: 0, rotate: 0 }}
                        />
                        <motion.span
                            className="block h-px w-full bg-white"
                            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                        />
                        <motion.span
                            className="block h-px w-full origin-center bg-white"
                            animate={menuOpen ? { y: -8.5, rotate: -45 } : { y: 0, rotate: 0 }}
                        />
                    </button>
                </div>
                <ScrollProgress />
            </motion.header>

            <MobileMenu open={menuOpen} activeId={activeId} onNavigate={() => setMenuOpen(false)} />
        </>
    )
}
