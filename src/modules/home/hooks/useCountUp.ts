'use client'

import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

/** Counts from 0 to `target` the first time the element scrolls into view. */
export const useCountUp = <T extends HTMLElement>(target: number, duration = 1.8) => {
    const ref = useRef<T>(null)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
    const [value, setValue] = useState(reduced ? target : 0)

    useEffect(() => {
        if (!inView || reduced) return
        const controls = animate(0, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setValue(Math.round(v)),
        })
        return () => controls.stop()
    }, [inView, reduced, target, duration])

    return { ref, value }
}
