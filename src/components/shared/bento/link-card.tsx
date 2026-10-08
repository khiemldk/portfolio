import { cn } from '@/utils'
import type { ReactNode } from 'react'
import { BentoCard } from './bento-card'
import { CardCaption } from './card-caption'

interface LinkCardProps {
    label: string
    title: string
    href: string
    artwork: ReactNode
    delay?: number
    id?: string
    className?: string
    /** Open `href` in a new tab */
    external?: boolean
}

/** Standard small tile: artwork on top, caption row at the bottom. */
export const LinkCard: React.FC<LinkCardProps> = ({ label, title, href, artwork, delay, id, className, external }) => (
    <BentoCard
        id={id}
        href={href}
        external={external}
        delay={delay}
        className={cn('group flex h-full flex-col justify-between p-6', className)}
    >
        <div className="grid flex-1 place-items-center py-4">{artwork}</div>
        <CardCaption label={label} title={title} />
    </BentoCard>
)
