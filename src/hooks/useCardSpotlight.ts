'use client'

import { useCallback, type PointerEvent } from 'react'

/**
 * Writes the pointer position into --mx / --my on the card element.
 * CSS (bento-card.css) reads them for the spotlight + border glow, so no re-render happens.
 */
export const useCardSpotlight = () => {
    const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
        const el = e.currentTarget
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }, [])

    return { onPointerMove }
}
