/** Static copy for the KhiemX Works page — projects taken from Khiem's CV. */

export type ProjectVariant = 'browser' | 'phone' | 'rings' | 'bars' | 'grid' | 'orbit' | 'dashboard'

export interface Project {
    slug: string
    title: string
    category: string
    description: string
    /** Small chips under the description — tech stack or key modules */
    tags: readonly string[]
    /** Public link; the card is not clickable without it */
    url?: string
    variant: ProjectVariant
    /** [from, to] gradient stops for the generated thumbnail */
    palette: readonly [string, string]
}

export const WORKS_CONTENT = {
    heading: 'All Projects',
    filterAll: 'All',
    projects: [
        {
            slug: 'pacific-finance',
            title: 'Pacific Finance',
            category: 'DeFi & Web3',
            description:
                'On-chain finance platform where point markets meet perpetual markets — trade real-world asset (RWA) perpetuals and liquid point markets.',
            tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Arbitrum', 'Orderly', 'Redis'],
            url: 'https://pacificfinance.org/',
            variant: 'bars',
            palette: ['#3c58e3', '#c2ebff'],
        },
        {
            slug: 'pool-spa-ops-crm',
            title: 'Pool & Spa Ops CRM',
            category: 'CRM & HRM',
            description:
                'CRM and operations platform for a US pool & spa company — from leads, proposals and contracts through construction, finance and service work orders, with reporting in one system.',
            tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Leads & Proposals', 'Job Costing', 'Work Orders'],
            variant: 'dashboard',
            palette: ['#0ea5e9', '#bae6fd'],
        },
        {
            slug: 'unleash-protocol',
            title: 'Unleash Protocol',
            category: 'DeFi & Web3',
            description: 'The first lending and borrowing protocol on Story blockchain, built to $15M+ TVL.',
            tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Smart Contracts', 'Zustand'],
            url: 'https://unleashprotocol.xyz',
            variant: 'rings',
            palette: ['#10b981', '#a7f3d0'],
        },
        {
            slug: 'juicy-finance',
            title: 'Juicy Finance',
            category: 'DeFi & Web3',
            description: 'The first lending and borrowing protocol on the VeChain blockchain.',
            tags: ['Next.js', 'VeChain', 'Lending Flow', 'MUI'],
            url: 'https://app.juicyfinance.io/',
            variant: 'orbit',
            palette: ['#f97316', '#fde68a'],
        },
        {
            slug: 'mantra-dex',
            title: 'Mantra DEX',
            category: 'DeFi & Web3',
            description:
                'Decentralized exchange on the Mantra (OM) chain for buying, selling and swapping crypto without intermediaries.',
            tags: ['Node.js', 'Next.js', 'Mantra Chain', 'Uniswap', 'Tailwind'],
            variant: 'grid',
            palette: ['#a855f7', '#fbcfe8'],
        },
        {
            slug: 'pqusd-stablecoin',
            title: 'PQUSD Stablecoin',
            category: 'DeFi & Web3',
            description: 'Stablecoin protocol and DeFi app with multi-chain support and liquidity management.',
            tags: ['Next.js', 'NestJS', 'Microservices', 'Smart Contracts', 'Material UI'],
            url: 'https://app-dev.pqusd.xyz',
            variant: 'rings',
            palette: ['#0ea5e9', '#e0f2fe'],
        },
        {
            slug: 'kldx',
            title: 'KLDX',
            category: 'Trading Platforms',
            description: 'DEX trading platform interface.',
            tags: ['Next.js', 'Tailwind', 'Redux', 'Photoshop'],
            url: 'https://kldx.com',
            variant: 'bars',
            palette: ['#f43f5e', '#fed7aa'],
        },
        {
            slug: 'mememarket',
            title: 'MemeMarket',
            category: 'Trading Platforms',
            description: 'Binary options trading platform — led a team of 3 frontend developers to ship it.',
            tags: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Redis'],
            url: 'https://mememarket.fun/',
            variant: 'browser',
            palette: ['#6366f1', '#c7d2fe'],
        },
        {
            slug: 'varmeta-website',
            title: 'Varmeta Website',
            category: 'Enterprise & Web',
            description: 'Corporate website with a focus on performance, SEO and a friendly user experience.',
            tags: ['Next.js', 'Tailwind', 'Zustand', 'Figma'],
            url: 'https://www.var-meta.com/',
            variant: 'browser',
            palette: ['#14b8a6', '#ccfbf1'],
        },
        {
            slug: 'varmeta-hrm',
            title: 'Varmeta HRM',
            category: 'CRM & HRM',
            description: 'Varmeta Management System — a human resource management web app with Google sign-in.',
            tags: [],
            url: 'https://hrm.var-meta.com',
            variant: 'bars',
            palette: ['#8b5cf6', '#ddd6fe'],
        },
        {
            slug: 'myvnpt-portal',
            title: 'MyVNPT Portal',
            category: 'Enterprise & Web',
            description:
                'Customer management system serving 2M+ users — authentication, billing and service management.',
            tags: ['React', 'Next.js', 'Ant Design', 'Java', 'Spring JPA'],
            url: 'https://my.vnpt.com.vn',
            variant: 'phone',
            palette: ['#2563eb', '#bfdbfe'],
        },
        {
            slug: 'digishop',
            title: 'DigiShop',
            category: 'Enterprise & Web',
            description: 'Complete e-commerce platform with payment integration for VNPT.',
            tags: ['React', 'Next.js', 'Styled Components', 'SCSS', 'Hibernate'],
            url: 'https://digishop.vnpt.vn',
            variant: 'grid',
            palette: ['#eab308', '#fef9c3'],
        },
    ] satisfies Project[],
} as const
