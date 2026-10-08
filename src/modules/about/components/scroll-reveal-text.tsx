'use client'

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'

interface WordProps {
    word: string
    progress: MotionValue<number>
    range: [number, number]
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
    const opacity = useTransform(progress, range, [0.18, 1])
    return (
        <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
            {word}
        </motion.span>
    )
}

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export const ScrollRevealText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const reduced = useReducedMotion()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
    const words = text.split(' ')

    if (reduced) return <p className={className}>{text}</p>

    return (
        <p ref={ref} className={`relative ${className ?? ''}`} aria-label={text}>
            {words.map((word, i) => {
                const start = i / words.length
                return (
                    <Word
                        key={i}
                        word={word}
                        progress={scrollYProgress}
                        range={[start, Math.min(start + 1 / words.length + 0.05, 1)]}
                    />
                )
            })}
        </p>
    )
}
