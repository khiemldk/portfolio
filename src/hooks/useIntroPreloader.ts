'use client'

import { useUIStore } from '@/stores'
import { animate, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const LOAD_DURATION = 1.6

/**
 * Drives the intro: counts progress 0→100, then hides the preloader.
 * Locks page scroll while visible and flips `isIntroDone` so page content can start revealing.
 */
export const useIntroPreloader = () => {
    const reduced = useReducedMotion()
    const setIntroDone = useUIStore((s) => s.setIntroDone)
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (reduced) {
            setVisible(false)
            setIntroDone(true)
            return
        }
        document.documentElement.style.overflow = 'hidden'
        const controls = animate(0, 100, {
            duration: LOAD_DURATION,
            ease: [0.65, 0, 0.35, 1],
            onUpdate: (v) => setProgress(Math.round(v)),
            onComplete: () => setVisible(false),
        })
        return () => {
            controls.stop()
            document.documentElement.style.overflow = ''
        }
    }, [reduced, setIntroDone])

    /** Called when the exit (slide-up) animation finishes. */
    const onExited = () => {
        document.documentElement.style.overflow = ''
        setIntroDone(true)
    }

    return { visible, progress, onExited }
}
