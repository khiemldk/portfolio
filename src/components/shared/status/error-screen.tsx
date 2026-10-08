'use client'

import { RouteEnum } from '@/core/enums/route.enum'
import { Home, RotateCw } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ActionButton } from './action-button'
import { GlitchSparkle } from './glitch-sparkle'
import { StatusScreen } from './status-screen'

interface ErrorScreenProps {
    error: Error & { digest?: string }
    reset: () => void
    fullscreen?: boolean
}

/** Runtime-error screen: glitching sparkle, friendly copy, retry + home actions, error id for support. */
export const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, reset, fullscreen }) => {
    const [retrying, setRetrying] = useState(false)

    useEffect(() => {
        console.error(error)
        setRetrying(false) // a fresh error object means the previous retry failed
    }, [error])

    const retry = () => {
        setRetrying(true)
        reset()
    }

    const extra = (
        <div className="flex flex-col items-center gap-3">
            {error.digest && (
                <span className="text-text-label/70 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs">
                    Error ID · {error.digest}
                </span>
            )}
            {process.env.NODE_ENV !== 'production' && (
                <pre className="max-h-32 w-full overflow-auto rounded-2xl border border-rose-400/20 bg-rose-400/5 p-4 text-left font-mono text-xs whitespace-pre-wrap text-rose-200/80">
                    {error.message}
                </pre>
            )}
        </div>
    )

    return (
        <StatusScreen
            fullscreen={fullscreen}
            visual={<GlitchSparkle />}
            eyebrow="Something went wrong"
            title="That wasn’t supposed to happen"
            description="An unexpected error knocked this page off course. Give it another try, or head back home."
            extra={error.digest || process.env.NODE_ENV !== 'production' ? extra : undefined}
            actions={
                <>
                    <ActionButton
                        onClick={retry}
                        disabled={retrying}
                        icon={
                            <motion.span
                                animate={retrying ? { rotate: 360 } : { rotate: 0 }}
                                transition={
                                    retrying ? { duration: 0.9, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }
                                }
                                className="grid"
                            >
                                <RotateCw className="size-4" />
                            </motion.span>
                        }
                    >
                        {retrying ? 'Retrying…' : 'Try again'}
                    </ActionButton>
                    <ActionButton variant="ghost" href={RouteEnum.HOME} icon={<Home className="size-4" />}>
                        Back home
                    </ActionButton>
                </>
            }
        />
    )
}
