'use client'

import { NAV_ITEMS } from '@/core/configs/home-content.config'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'

const MotionLink = motion.create(Link)

interface MobileMenuProps {
    open: boolean
    activeId: string
    onNavigate: () => void
}

/** Full-screen overlay menu (< md). Links rise in with a stagger; clip-path reveals from the top-right. */
export const MobileMenu: React.FC<MobileMenuProps> = ({ open, activeId, onNavigate }) => (
    <AnimatePresence>
        {open && (
            <motion.nav
                aria-label="Mobile"
                initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
                animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
                exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-30 flex flex-col justify-center bg-[#0f0f0f]/95 px-8 backdrop-blur-xl md:hidden"
            >
                <ul className="flex flex-col gap-2">
                    {NAV_ITEMS.map((item, i) => (
                        <li key={item.id} className="overflow-hidden">
                            <MotionLink
                                href={item.href}
                                onClick={onNavigate}
                                initial={{ y: '100%' }}
                                animate={{
                                    y: 0,
                                    transition: { delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                                }}
                                exit={{ y: '100%', transition: { duration: 0.3 } }}
                                className={`block text-5xl font-medium tracking-tight ${
                                    activeId === item.id ? 'text-white' : 'text-text-dim'
                                }`}
                            >
                                {item.label}
                            </MotionLink>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        )}
    </AnimatePresence>
)
