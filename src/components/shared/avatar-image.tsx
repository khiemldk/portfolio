import Image from 'next/image'
import avatar from '@/assets/images/avatar.jpg'
import { PROFILE } from '@/core/configs/profile.config'
import { cn } from '@/utils'

interface AvatarImageProps {
    /** CSS object-position, to keep the face framed when the box crops the photo */
    position?: string
    sizes: string
    priority?: boolean
    className?: string
}

/** Khiem's portrait, filling its (relatively positioned) parent. Blurred placeholder while it loads. */
export const AvatarImage: React.FC<AvatarImageProps> = ({ position = '50% 30%', sizes, priority, className }) => (
    <Image
        src={avatar}
        alt={`${PROFILE.name} — portrait`}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        style={{ objectPosition: position }}
        className={cn('object-cover', className)}
    />
)
