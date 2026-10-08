import { Sparkle } from 'lucide-react'

/** KhiemX wordmark with a sparkle mark. */
export const Logo: React.FC = () => (
    <span className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
        <Sparkle className="fill-brand text-brand size-5" aria-hidden />
        <span>
            Khiem<span className="text-brand">X</span>
        </span>
    </span>
)
