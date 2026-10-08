import { ArrowUpRight } from 'lucide-react'

/** Decorative circular arrow in a card corner. Rotation/opacity are driven by `.kx-card:hover` in CSS. */
export const CornerArrowButton: React.FC = () => (
    <span
        aria-hidden
        className="kx-corner grid size-11 shrink-0 place-items-center rounded-full border border-white/20 text-white"
    >
        <ArrowUpRight className="size-5" strokeWidth={1.5} />
    </span>
)
