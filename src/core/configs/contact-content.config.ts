/** Static copy for the KhiemX Contact page. Details come from profile.config.ts. */

import { PROFILE } from './profile.config'

export const CONTACT_CONTENT = {
    email: PROFILE.email,
    phone: PROFILE.phone,
    location: PROFILE.location,
    socials: [
        { name: 'GitHub', href: PROFILE.github },
        { name: 'LinkedIn', href: PROFILE.linkedin },
        { name: 'Telegram', href: PROFILE.telegram },
    ],
} as const
