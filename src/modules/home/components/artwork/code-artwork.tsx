/** Oversized "</>" glyph with a gradient fill — nods to open-source / code. */
export const CodeArtwork: React.FC = () => (
    <div aria-hidden className="relative mx-auto mb-2 grid h-24 place-items-center">
        <span className="bg-gradient-to-b from-white to-white/10 bg-clip-text font-mono text-6xl leading-none font-semibold tracking-tighter text-transparent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
            {'</>'}
        </span>
        <span className="via-brand absolute bottom-0 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
    </div>
)
