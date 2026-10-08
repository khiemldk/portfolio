'use client'

import { useUIStore } from '@/stores'
import { useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

/** Returns a ref + `shouldShow` flag: true once the element is in view AND the intro preloader is done. */
export const useRevealOnView = <T extends HTMLElement>() => {
    const ref = useRef<T>(null)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
    const isIntroDone = useUIStore((s) => s.isIntroDone)

    return { ref, shouldShow: reduced || (inView && isIntroDone), reduced: !!reduced }
}
