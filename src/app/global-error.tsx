'use client'

import '@/assets/fonts/fonts.css'
import '@/styles/globals.css'
import { ErrorScreen } from '@/components/shared/status/error-screen'

/** Last-resort boundary: replaces the root layout, so it must render its own <html> and <body>. */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased">
                <ErrorScreen error={error} reset={reset} fullscreen />
            </body>
        </html>
    )
}
