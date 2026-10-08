'use client'

import { useAboutScript } from './about.script'
import { About } from './about.ui'

export function AboutModule() {
    const state = useAboutScript()
    return <About {...state} />
}
