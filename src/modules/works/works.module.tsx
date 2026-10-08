'use client'

import { useWorksScript } from './works.script'
import { Works } from './works.ui'

export function WorksModule() {
    const state = useWorksScript()
    return <Works {...state} />
}
