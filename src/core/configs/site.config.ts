import { envConfig } from '@/core/configs/env.config'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
    title: 'Khiem Le Dinh — Fullstack Engineer | KhiemX',
    description:
        'Khiem Le Dinh — fullstack engineer with 6+ years building scalable web and Web3 products. Selected work, experience and contact.',
    keywords: ['KhiemX', 'Khiem Le Dinh', 'fullstack engineer', 'Web3', 'DeFi', 'Next.js', 'portfolio'],
    url: envConfig.APP_URL,
    ogImage: `${envConfig.APP_URL + '/imgs/og-image.jpg'}`,
}
