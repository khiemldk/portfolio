import { create } from 'zustand'

interface UIStore {
    theme: 'light' | 'dark'
    setTheme: (theme: 'light' | 'dark') => void
    /** true once the intro preloader has finished — page content reveals wait for it */
    isIntroDone: boolean
    setIntroDone: (done: boolean) => void
    /** true while the route-change loader covers the page */
    isTransitioning: boolean
    /** bumped each time a transition ends; used as a React key so the new page remounts and replays its entrance */
    transitionKey: number
    beginTransition: () => void
    finishTransition: () => void
}

export const useUIStore = create<UIStore>((set) => ({
    theme: 'dark',
    setTheme: (theme) => set({ theme }),
    isIntroDone: false,
    setIntroDone: (isIntroDone) => set({ isIntroDone }),
    isTransitioning: false,
    transitionKey: 0,
    beginTransition: () => set({ isTransitioning: true }),
    finishTransition: () => set((s) => ({ isTransitioning: false, transitionKey: s.transitionKey + 1 })),
}))

// Helper for external updates (non-React)
export const setUIStore = (updates: Partial<UIStore>) => {
    useUIStore.setState(updates)
}
