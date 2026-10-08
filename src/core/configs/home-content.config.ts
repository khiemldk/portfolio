/** Static copy for the KhiemX home page. Personal details come from profile.config.ts. */

import { PROFILE } from './profile.config'

export interface NavItem {
    label: string
    href: string
    /** Stable key used to mark the active link */
    id: string
}

export interface StatItem {
    value: number
    prefix?: string
    suffix?: string
    /** Minimum digits, zero-padded (7 -> "07") */
    pad?: number
    label: [string, string]
}

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/about', id: 'about' },
    { label: 'Works', href: '/works', id: 'works' },
    { label: 'Contact', href: '/contact', id: 'contact' },
]

export const HOME_CONTENT = {
    brand: 'KhiemX',
    hero: {
        role: `A ${PROFILE.role}`,
        name: `${PROFILE.name}.`,
        intro: 'I build scalable web and Web3 products, from DeFi platforms to CRM and HRM systems.',
    },
    marquee: { lead: 'LATEST WORK AND', strong: 'FEATURED' },
    credentials: { label: 'More about me', title: 'Credentials', href: '/about#experience' },
    projects: { label: 'Showcase', title: 'Projects', href: '/works' },
    blog: { label: 'Open source', title: 'GitHub', href: PROFILE.github },
    services: { label: 'Specialization', title: 'What I Do', href: '/about#skills' },
    profiles: { label: 'Stay with me', title: 'Profiles', href: '/contact' },
    stats: [
        { value: 6, pad: 2, suffix: '+', label: ['Years', 'Experience'] },
        { value: 20, suffix: '+', label: ['Projects', 'Managed'] },
        { value: 6, pad: 2, label: ['Countries', 'Worldwide'] },
    ] satisfies StatItem[],
    contact: { href: '/contact' },
    socials: {
        github: PROFILE.github,
        linkedin: PROFILE.linkedin,
        telegram: PROFILE.telegram,
    },
    copyright: 'KhiemX',
} as const
