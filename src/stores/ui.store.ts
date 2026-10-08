import { create } from 'zustand'

interface UIStore {
    theme: 'light' | 'dark'
    setTheme: (theme: 'light' | 'dark') => void
    /** true once the intro preloader has finished — page content reveals wait for it */
    isIntroDone: boolean
    setIntroDone: (done: boolean) => void
}

export const useUIStore = create<UIStore>((set) => ({
    theme: 'dark',
    setTheme: (theme) => set({ theme }),
    isIntroDone: false,
    setIntroDone: (isIntroDone) => set({ isIntroDone }),
}))

// Helper for external updates (non-React)
export const setUIStore = (updates: Partial<UIStore>) => {
    useUIStore.setState(updates)
}
