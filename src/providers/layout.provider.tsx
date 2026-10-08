'use client'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { IntroPreloader } from '@/components/shared/intro-preloader'
import { Toaster } from '@/components/base/toaster'
import { FCC } from '@/core/types/common.type'
import { memo } from 'react'

export const LayoutProvider: FCC = memo(({ children }) => {
    return (
        <div id="home" className="flex min-h-screen w-full flex-col">
            <IntroPreloader />
            <Header />
            <main className="w-full max-w-full flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div>
    )
})

LayoutProvider.displayName = 'LayoutProvider'
