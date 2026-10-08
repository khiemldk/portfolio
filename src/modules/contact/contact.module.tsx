'use client'

import { useContactScript } from './contact.script'
import { Contact } from './contact.ui'

export function ContactModule() {
    const state = useContactScript()
    return <Contact {...state} />
}
