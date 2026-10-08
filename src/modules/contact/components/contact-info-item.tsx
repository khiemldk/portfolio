'use client'

import { Check, Copy } from 'lucide-react'
import { motion } from 'motion/react'
import { useState, type ReactNode } from 'react'

interface ContactInfoItemProps {
    icon: ReactNode
    label: string
    lines: readonly string[]
    /** href builder per line (mailto:, tel:) — omit for plain text */
    hrefFor?: (line: string) => string
    /** Shows a copy button; resolves when copied */
    onCopy?: (text: string) => Promise<void>
    delay?: number
}

/** One row of the contact list: tilting icon tile + label + value lines (+ optional copy button). */
export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, lines, hrefFor, onCopy, delay = 0 }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await onCopy?.(lines[0])
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
    }

    return (
        <motion.li
            initial={{ opacity: 0, x: -28, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className="group/item flex items-center gap-6"
        >
            <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                className="grid size-[68px] shrink-0 place-items-center rounded-[10px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-white shadow-[0_8px_24px_-12px_rgb(91_120_246/0.0)] transition-shadow duration-300 group-hover/item:shadow-[0_8px_30px_-8px_rgb(91_120_246/0.55)]"
            >
                {icon}
            </motion.div>
            <div className="min-w-0">
                <span className="kx-label mb-2 block !text-sm leading-tight">{label}</span>
                {lines.map((line) => {
                    const href = hrefFor?.(line)
                    const cls =
                        'block break-words text-base font-medium text-white/80 transition-colors hover:text-white'
                    return href ? (
                        <a key={line} href={href} className={cls}>
                            {line}
                        </a>
                    ) : (
                        <p key={line} className={cls}>
                            {line}
                        </p>
                    )
                })}
                {onCopy && (
                    <button
                        type="button"
                        onClick={handleCopy}
                        aria-label={`Copy ${label}`}
                        className="text-text-dim mt-2 inline-flex cursor-pointer items-center gap-1.5 text-xs opacity-0 transition-all duration-300 group-hover/item:opacity-100 hover:text-white focus-visible:opacity-100"
                    >
                        {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                )}
            </div>
        </motion.li>
    )
}
