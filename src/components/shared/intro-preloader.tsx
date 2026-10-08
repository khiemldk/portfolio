'use client'

import { useIntroPreloader } from '@/hooks/useIntroPreloader'
import { AnimatePresence, motion } from 'motion/react'

const WORD = ['K', 'h', 'i', 'e', 'm', 'X']

/** Full-screen intro: staggered wordmark + progress bar, then the curtain slides up to reveal the page. */
export const IntroPreloader: React.FC = () => {
    const { visible, progress, onExited } = useIntroPreloader()

    return (
        <AnimatePresence onExitComplete={onExited}>
            {visible && (
                <motion.div
                    key="preloader"
                    role="status"
                    aria-label="Loading"
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0b0b]"
                    exit={{ y: '-100%', borderBottomLeftRadius: '50% 12%', borderBottomRightRadius: '50% 12%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex overflow-hidden text-6xl font-semibold tracking-tighter text-white sm:text-8xl">
                        {WORD.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className={i === WORD.length - 1 ? 'text-brand' : undefined}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    <div className="absolute inset-x-6 bottom-10 flex items-end justify-between sm:inset-x-12">
                        <span className="text-xs tracking-widest text-white/40 uppercase">Portfolio</span>
                        <span className="text-5xl leading-none font-medium text-white tabular-nums sm:text-7xl">
                            {progress}
                        </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/5">
                        <div
                            className="bg-brand h-full origin-left"
                            style={{ transform: `scaleX(${progress / 100})` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
