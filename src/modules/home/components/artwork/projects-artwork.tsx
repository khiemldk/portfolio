/** Three browser-window thumbnails fanned out; they spread wider when the parent `.group` is hovered. */
export const ProjectsArtwork: React.FC = () => (
    <div aria-hidden className="relative mx-auto mb-2 h-24 w-48">
        {[
            { rotate: '-10deg', hover: '-16deg', x: '-30px', tint: 'from-white/10 to-white/0' },
            { rotate: '0deg', hover: '0deg', x: '0px', tint: 'from-brand/40 to-white/5' },
            { rotate: '10deg', hover: '16deg', x: '30px', tint: 'from-white/10 to-white/0' },
        ].map((card, i) => (
            <div
                key={i}
                className={`absolute inset-x-6 top-2 h-20 rounded-xl border border-white/15 bg-gradient-to-br ${card.tint} backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:translateX(var(--x))_rotate(var(--hr))]`}
                style={
                    {
                        '--x': `calc(${card.x} * 1.5)`,
                        '--hr': card.hover,
                        transform: `translateX(${card.x}) rotate(${card.rotate})`,
                    } as React.CSSProperties
                }
            >
                <div className="flex gap-1 p-2">
                    <span className="size-1.5 rounded-full bg-white/30" />
                    <span className="size-1.5 rounded-full bg-white/30" />
                    <span className="size-1.5 rounded-full bg-white/30" />
                </div>
                <div className="mx-2 h-1.5 w-1/2 rounded-full bg-white/20" />
                <div className="mx-2 mt-1.5 h-1.5 w-1/3 rounded-full bg-white/10" />
            </div>
        ))}
    </div>
)
