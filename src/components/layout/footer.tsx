'use client'

import { HOME_CONTENT, NAV_ITEMS } from '@/core/configs/home-content.config'
import { motion } from 'motion/react'
import Link from 'next/link'
import { FC } from 'react'
import { Logo } from '../shared/logo'

export const Footer: FC = () => (
    <motion.footer
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="px-4 pt-32 pb-20 text-center"
    >
        <Link href="/" aria-label="Back to top" className="inline-block">
            <Logo />
        </Link>
        <ul className="my-9 flex flex-wrap items-center justify-center gap-x-11 gap-y-3">
            {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                    <Link
                        href={item.href}
                        className="text-text-dim text-xs font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-white"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
        <p className="text-sm font-medium text-[#727272]">
            © {new Date().getFullYear()} All rights reserved by{' '}
            <span className="text-brand">{HOME_CONTENT.copyright}</span>
        </p>
    </motion.footer>
)
