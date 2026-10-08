'use client'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { RouteTransition } from '@/components/layout/route-transition'
import { IntroPreloader } from '@/components/shared/intro-preloader'
import { Toaster } from '@/components/base/toaster'
import { FCC } from '@/core/types/common.type'
import { useUIStore } from '@/stores'
import { memo } from 'react'

export const LayoutProvider: FCC = memo(({ children }) => {
    // Changing the key after each route transition remounts the page, so its entrance animations replay as the loader fades
    const transitionKey = useUIStore((s) => s.transitionKey)

    return (
        <div id="home" className="flex min-h-screen w-full flex-col">
            <IntroPreloader />
            <Header />
            <RouteTransition />
            <main key={transitionKey} className="w-full max-w-full flex-1">
                {children}
            </main>
            <Footer />
            <Toaster />
        </div>
    )
})

LayoutProvider.displayName = 'LayoutProvider'
