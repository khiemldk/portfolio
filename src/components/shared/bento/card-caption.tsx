import { CornerArrowButton } from './corner-arrow-button'

interface CardCaptionProps {
    label: string
    title: string
    withArrow?: boolean
}

/** Bottom row shared by the small tiles: dim uppercase label, white title, optional corner arrow. */
export const CardCaption: React.FC<CardCaptionProps> = ({ label, title, withArrow = true }) => (
    <div className="flex items-end justify-between gap-4">
        <div>
            <p className="kx-label mb-3">{label}</p>
            <h2 className="text-xl font-medium text-white">{title}</h2>
        </div>
        {withArrow && <CornerArrowButton />}
    </div>
)
