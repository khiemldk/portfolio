export const LOCALE_KEY = 'NEXT_LINGUI_LOCALE'

export const SUPPORTED_LOCALES = ['en', 'nl', 'zh'] as const

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: SupportedLocale = 'en'

/** Minimum time (ms) the loader covers the page on every route change, measured from the click. */
export const ROUTE_TRANSITION_MIN_MS = 1500

/** Safety net: if navigation never completes, drop the loader after this long (ms). */
export const ROUTE_TRANSITION_MAX_MS = 8000
