import { HOME_CONTENT } from '@/core/configs/home-content.config'
import { Github, Linkedin, Send } from 'lucide-react'
import { BentoCard } from './bento-card'
import { CardCaption } from './card-caption'

const { profiles, socials } = HOME_CONTENT

const SOCIAL_LINKS = [
    { name: 'GitHub', href: socials.github, Icon: Github },
    { name: 'LinkedIn', href: socials.linkedin, Icon: Linkedin },
    { name: 'Telegram', href: socials.telegram, Icon: Send },
]

/** Social tile — icon circles sit above the card link (z-20) so they stay individually clickable. */
export const ProfilesCard: React.FC = () => (
    <BentoCard delay={0.2} from="right" className="flex h-full flex-col justify-between p-6">
        <div className="relative z-20 mb-4 flex items-center justify-center gap-3 rounded-[30px] border border-white/10 bg-white/[0.03] p-4">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="grid size-[52px] place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0f0f0f]"
                >
                    <Icon className="size-6" strokeWidth={1.5} />
                </a>
            ))}
        </div>
        <CardCaption label={profiles.label} title={profiles.title} withArrow={false} />
    </BentoCard>
)
