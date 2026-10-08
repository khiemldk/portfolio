'use client'

import { RouteEnum } from '@/core/enums/route.enum'
import { ArrowLeft, Home } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { OrbitSystem } from '../loader/orbit-system'
import { ActionButton } from './action-button'
import { StatusScreen } from './status-screen'

const DIGIT =
    'block bg-gradient-to-b from-white to-white/10 bg-clip-text text-[8.5rem] leading-[0.9] font-semibold tracking-tighter text-transparent sm:text-[13rem]'

/** One giant "4" that rises out of a clipped line, then bobs gently. */
const Digit: React.FC<{ delay: number; float: number }> = ({ delay, float }) => {
    const reduced = useReducedMotion()
    return (
        <span aria-hidden className="block overflow-hidden px-1 pb-3">
            <motion.span
                initial={{ y: '110%', rotate: 6 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
                className="block"
            >
                <motion.span
                    className={DIGIT}
                    animate={reduced ? undefined : { y: [0, -10, 0] }}
                    transition={{ duration: 4, delay: float, repeat: Infinity, ease: 'easeInOut' }}
                >
                    4
                </motion.span>
            </motion.span>
        </span>
    )
}

/** 404: "4 · atom · 4" — the middle digit is the live orbit system, so the "0" is literally in orbit. */
export const NotFoundScreen: React.FC = () => {
    const router = useRouter()
    const reduced = useReducedMotion()

    return (
        <StatusScreen
            visual={
                <div role="img" aria-label="404" className="flex items-center justify-center">
                    <Digit delay={0.1} float={0} />
                    <motion.div
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.35 }}
                    >
                        <OrbitSystem animated={!reduced} className="size-32 overflow-visible sm:size-52" />
                    </motion.div>
                    <Digit delay={0.2} float={0.6} />
                </div>
            }
            eyebrow="Error 404"
            title="Lost in the grid"
            description="This page drifted out of orbit. It may have moved, or it never existed in the first place."
            actions={
                <>
                    <ActionButton href={RouteEnum.HOME} icon={<Home className="size-4" />}>
                        Back home
                    </ActionButton>
                    <ActionButton variant="ghost" onClick={() => router.back()} icon={<ArrowLeft className="size-4" />}>
                        Go back
                    </ActionButton>
                </>
            }
        />
    )
}
