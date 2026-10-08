'use client'

import { ROUTE_TRANSITION_MAX_MS, ROUTE_TRANSITION_MIN_MS } from '@/core/constants/common.constant'
import { useUIStore } from '@/stores'
import { useReducedMotion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

/** true for plain left-clicks on same-origin links that lead to a different path (hash-only / new-tab / downloads excluded). */
const isInternalNavigation = (e: MouseEvent, currentPath: string): boolean => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false
    const anchor = (e.target as Element | null)?.closest?.('a')
    if (!anchor || (anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return false
    const url = new URL(anchor.href, window.location.href)
    return url.origin === window.location.origin && url.pathname !== currentPath
}

/**
 * Shows the loader on every route change and keeps it up for at least ROUTE_TRANSITION_MIN_MS (counted from the
 * click), then ends it. Skipped before the intro finishes and for visitors who prefer reduced motion.
 * Mount once, high in the tree.
 */
export const useRouteTransition = () => {
    const pathname = usePathname()
    const reduced = useReducedMotion()
    const isIntroDone = useUIStore((s) => s.isIntroDone)
    const beginTransition = useUIStore((s) => s.beginTransition)
    const finishTransition = useUIStore((s) => s.finishTransition)

    const currentPath = useRef(pathname)
    const startedAt = useRef<number | null>(null)
    const timers = useRef<ReturnType<typeof setTimeout>[]>([])

    const clearTimers = useCallback(() => {
        timers.current.forEach(clearTimeout)
        timers.current = []
    }, [])

    const finish = useCallback(() => {
        clearTimers()
        startedAt.current = null
        finishTransition()
    }, [clearTimers, finishTransition])

    const start = useCallback(() => {
        if (startedAt.current !== null) return
        startedAt.current = Date.now()
        beginTransition()
        timers.current.push(setTimeout(finish, ROUTE_TRANSITION_MAX_MS))
    }, [beginTransition, finish])

    // The route actually changed: hold the loader until the minimum time has elapsed
    useEffect(() => {
        currentPath.current = pathname
        if (startedAt.current === null) return
        clearTimers()
        const remaining = Math.max(0, ROUTE_TRANSITION_MIN_MS - (Date.now() - startedAt.current))
        timers.current.push(setTimeout(finish, remaining))
    }, [pathname, clearTimers, finish])

    // Start on link clicks and on browser back/forward
    useEffect(() => {
        if (!isIntroDone || reduced) return
        const onClick = (e: MouseEvent) => {
            if (isInternalNavigation(e, currentPath.current)) start()
        }
        const onPopState = () => {
            if (window.location.pathname !== currentPath.current) start()
        }
        document.addEventListener('click', onClick, true)
        window.addEventListener('popstate', onPopState)
        return () => {
            document.removeEventListener('click', onClick, true)
            window.removeEventListener('popstate', onPopState)
        }
    }, [isIntroDone, reduced, start])

    useEffect(() => clearTimers, [clearTimers])
}
