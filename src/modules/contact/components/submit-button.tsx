'use client'

import { cn } from '@/utils'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import type { SubmitStatus } from '../contact.script'

const LABEL: Record<SubmitStatus, string> = { idle: 'Send Message', sending: 'Sending…', sent: 'Message ready' }

/** Full-width CTA that morphs between idle / sending / sent, with a hover light sweep. */
export const SubmitButton: React.FC<{ status: SubmitStatus }> = ({ status }) => (
    <motion.button
        type="submit"
        disabled={status !== 'idle'}
        whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
        className={cn(
            'group/btn relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[10px] px-8 py-4 text-sm font-medium transition-colors duration-500 disabled:cursor-default',
            status === 'sent'
                ? 'bg-emerald-400 text-[#0f0f0f]'
                : 'bg-secondary text-white hover:bg-white hover:text-[#0f0f0f]',
        )}
    >
        <AnimatePresence mode="wait" initial={false}>
            <motion.span
                key={status}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2"
            >
                {status === 'sending' && <Loader2 className="size-4 animate-spin" />}
                {status === 'sent' && (
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <motion.path
                            d="M5 12.5l4.5 4.5L19 7.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.45, delay: 0.1 }}
                        />
                    </svg>
                )}
                {LABEL[status]}
                {status === 'idle' && (
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                )}
            </motion.span>
        </AnimatePresence>
    </motion.button>
)
