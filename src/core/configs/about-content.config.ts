/** Static copy for the KhiemX About page — sourced from Khiem's CV. */

import { PROFILE } from './profile.config'

export interface TimelineEntry {
    date: string
    title: string
    org: string
    /** One-line highlight shown under the organisation */
    note?: string
}

export interface SkillGroup {
    label: string
    level?: string
    items: readonly string[]
    /** Span both columns */
    wide?: boolean
}

export const ABOUT_CONTENT = {
    heading: 'Self-summary',
    name: PROFILE.name,
    summary:
        'A Full-stack Developer with over 6 years of experience building scalable web and Web3 applications. Strong expertise in architecture, multi-chain blockchain development and performance optimization, with a proven ability to lead teams in developing high-impact products.',
    goals: [
        {
            label: 'Short-term',
            text: 'Keep growing as a Technical Lead — owning architecture while guiding and directing the team.',
        },
        {
            label: 'Long-term',
            text: 'Become a Technical Leader spearheading the design of large-scale products and systems.',
        },
    ],
    badge: 'Based in Ha Noi, Vietnam',
    experience: {
        title: 'Experience',
        items: [
            {
                date: '04/2025 - Present',
                title: 'Fullstack Developer',
                org: 'Freelancer · Remote',
                note: 'Web3 products: Pacific Finance, Mantra DEX, VeChain lending, MemeMarket. ERP, HRM, CRM',
            },
            {
                date: '04/2022 - 04/2025',
                title: 'Team Leader / Fullstack Developer / Scrum Master',
                org: 'Varmeta',
                note: 'Led 5-8 developers; managed 20+ projects across 6 countries; mentored 6+ juniors.',
            },
            {
                date: '06/2020 - 04/2022',
                title: 'Fullstack Developer',
                org: 'VNPT Media Corporation',
                note: '6+ enterprise web apps; MyVNPT portal serving 2M+ users; page load cut by 45%.',
            },
        ] satisfies TimelineEntry[],
    },
    education: {
        title: 'Education',
        items: [
            {
                date: '08/2017 - 08/2021',
                title: 'Information Technology',
                org: 'Hanoi University of Industry',
                note: 'Graduated with Distinction · scholarships · ACM/ICPC national competitor.',
            },
        ] satisfies TimelineEntry[],
    },
    awards: {
        title: 'Titles & Awards',
        items: [
            { date: '2022', title: 'Outstanding Employee of the Year', org: 'Varmeta' },
            { date: '2021', title: 'Employee of the Month (2 times)', org: 'VNPT Media' },
        ] satisfies TimelineEntry[],
    },
    skills: {
        title: 'Skills',
        groups: [
            {
                label: 'Project Domains',
                wide: true,
                items: ['DeFi & Web3', 'CRM', 'HRM', 'E-commerce', 'Telecom', 'Trading Platforms', 'Social Network'],
            },
            {
                label: 'Frontend Development',
                level: 'Expert',
                items: [
                    'React',
                    'Next.js',
                    'TypeScript',
                    'JavaScript (ES6+)',
                    'Redux',
                    'Zustand',
                    'TailwindCSS',
                    'Material-UI',
                    'Bootstrap',
                    'Chakra UI',
                    'Ant Design',
                    'HTML5',
                    'CSS3',
                    'Sass',
                    'Responsive Design',
                ],
            },
            {
                label: 'Backend Development',
                items: [
                    'Node.js',
                    'NestJS',
                    'Express.js',
                    'RESTful API',
                    'Microservices',
                    'Socket.io',
                    'WebSocket',
                    'Redis',
                    'PostgreSQL',
                    'MySQL',
                    'Java',
                ],
            },
            {
                label: 'Blockchain & Web3',
                level: 'Advanced',
                items: [
                    'Ethereum (EVM)',
                    'Solana',
                    'Mantra',
                    'Hedera',
                    'Cardano',
                    'Starknet',
                    'Web3.js',
                    'Ethers.js',
                    'Smart Contract Integration',
                    'Wallet Integration',
                    'DeFi Protocols',
                ],
            },
            {
                label: 'DevOps & Tools',
                level: 'Intermediate',
                items: [
                    'Git',
                    'GitHub',
                    'GitLab',
                    'Docker',
                    'Nginx',
                    'CI/CD',
                    'Digital Ocean',
                    'AWS (Basic)',
                    'Linux',
                    'Jira',
                    'Confluence',
                ],
            },
            {
                label: 'Software Engineering',
                items: [
                    'Agile/Scrum',
                    'Team Leadership',
                    'Code Review',
                    'System Design',
                    'API Design',
                    'Documentation',
                    'Testing (Jest, Mocha)',
                    'Performance Optimization',
                ],
            },
            {
                label: 'Languages',
                items: ['Vietnamese — Native', 'English — Professional Working Proficiency'],
            },
        ] satisfies SkillGroup[],
    },
} as const
