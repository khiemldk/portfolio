import type { Project, ProjectVariant } from '@/core/configs/works-content.config'

const INK = '#0f0f0f'

/** Abstract UI-mock compositions drawn in a 400x300 box — stand-ins until real screenshots exist. */
const ARTWORK: Record<ProjectVariant, React.ReactNode> = {
    browser: (
        <>
            <rect x="60" y="50" width="280" height="200" rx="16" fill="#fff" fillOpacity=".55" />
            <rect x="60" y="50" width="280" height="30" rx="16" fill={INK} fillOpacity=".8" />
            {[0, 1, 2].map((i) => (
                <circle key={i} cx={80 + i * 16} cy="65" r="4" fill="#fff" fillOpacity=".6" />
            ))}
            <rect x="80" y="100" width="120" height="14" rx="7" fill={INK} fillOpacity=".75" />
            <rect x="80" y="124" width="170" height="8" rx="4" fill={INK} fillOpacity=".3" />
            <rect x="80" y="150" width="70" height="70" rx="12" fill={INK} fillOpacity=".8" />
            <rect x="160" y="150" width="70" height="70" rx="12" fill={INK} fillOpacity=".25" />
            <rect x="240" y="150" width="70" height="70" rx="12" fill={INK} fillOpacity=".5" />
        </>
    ),
    phone: (
        <>
            <rect x="140" y="30" width="120" height="240" rx="24" fill={INK} fillOpacity=".85" />
            <rect x="148" y="42" width="104" height="216" rx="18" fill="#fff" fillOpacity=".7" />
            <rect x="162" y="62" width="76" height="76" rx="14" fill={INK} fillOpacity=".8" />
            <rect x="162" y="152" width="76" height="10" rx="5" fill={INK} fillOpacity=".5" />
            <rect x="162" y="172" width="52" height="8" rx="4" fill={INK} fillOpacity=".25" />
            <rect x="162" y="206" width="76" height="30" rx="15" fill={INK} fillOpacity=".85" />
            <rect
                x="60"
                y="90"
                width="64"
                height="100"
                rx="14"
                fill="#fff"
                fillOpacity=".4"
                transform="rotate(-10 92 140)"
            />
            <rect
                x="276"
                y="110"
                width="64"
                height="100"
                rx="14"
                fill="#fff"
                fillOpacity=".4"
                transform="rotate(10 308 160)"
            />
        </>
    ),
    rings: (
        <>
            {[110, 80, 52, 26].map((r, i) => (
                <circle key={r} cx="200" cy="150" r={r} fill={i % 2 ? INK : '#fff'} fillOpacity={i % 2 ? 0.75 : 0.35} />
            ))}
            <circle cx="200" cy="150" r="10" fill="#fff" />
        </>
    ),
    bars: (
        <>
            <rect x="70" y="40" width="260" height="220" rx="18" fill="#fff" fillOpacity=".45" />
            {[60, 110, 80, 150, 120, 170].map((h, i) => (
                <rect
                    key={i}
                    x={92 + i * 38}
                    y={240 - h}
                    width="22"
                    height={h}
                    rx="8"
                    fill={INK}
                    fillOpacity={0.3 + i * 0.12}
                />
            ))}
            <path
                d="M92 150 C 140 90, 180 130, 230 80 S 300 70, 312 60"
                fill="none"
                stroke={INK}
                strokeWidth="4"
                strokeLinecap="round"
            />
        </>
    ),
    grid: (
        <>
            {Array.from({ length: 12 }, (_, i) => (
                <rect
                    key={i}
                    x={70 + (i % 4) * 66}
                    y={60 + Math.floor(i / 4) * 66}
                    width="56"
                    height="56"
                    rx="14"
                    fill={i === 5 ? INK : '#fff'}
                    fillOpacity={i === 5 ? 0.85 : 0.25 + ((i * 7) % 5) * 0.08}
                />
            ))}
        </>
    ),
    dashboard: (
        <>
            <rect x="50" y="40" width="300" height="220" rx="16" fill="#fff" fillOpacity=".55" />
            <rect x="50" y="40" width="72" height="220" rx="16" fill={INK} fillOpacity=".8" />
            {[0, 1, 2, 3, 4].map((i) => (
                <rect
                    key={i}
                    x="64"
                    y={64 + i * 30}
                    width={i === 1 ? 44 : 36}
                    height="8"
                    rx="4"
                    fill="#fff"
                    fillOpacity={i === 1 ? 0.9 : 0.35}
                />
            ))}
            <rect x="138" y="56" width="90" height="12" rx="6" fill={INK} fillOpacity=".75" />
            <rect x="138" y="82" width="98" height="52" rx="12" fill="#fff" fillOpacity=".8" />
            <rect x="248" y="82" width="86" height="52" rx="12" fill="#fff" fillOpacity=".8" />
            <rect x="148" y="94" width="34" height="8" rx="4" fill={INK} fillOpacity=".35" />
            <rect x="148" y="108" width="22" height="14" rx="4" fill={INK} fillOpacity=".85" />
            <rect x="258" y="94" width="34" height="8" rx="4" fill={INK} fillOpacity=".35" />
            <rect x="258" y="108" width="22" height="14" rx="4" fill={INK} fillOpacity=".85" />
            {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                    <rect
                        x="138"
                        y={150 + i * 26}
                        width={196 - i * 24}
                        height="16"
                        rx="8"
                        fill={INK}
                        fillOpacity={0.55 - i * 0.1}
                    />
                </g>
            ))}
        </>
    ),
    orbit: (
        <>
            <ellipse
                cx="200"
                cy="150"
                rx="140"
                ry="52"
                fill="none"
                stroke={INK}
                strokeOpacity=".35"
                strokeWidth="2"
                transform="rotate(-18 200 150)"
            />
            <ellipse
                cx="200"
                cy="150"
                rx="110"
                ry="36"
                fill="none"
                stroke="#fff"
                strokeOpacity=".6"
                strokeWidth="2"
                transform="rotate(24 200 150)"
            />
            <circle cx="200" cy="150" r="44" fill={INK} fillOpacity=".85" />
            <circle cx="318" cy="112" r="14" fill="#fff" />
            <circle cx="86" cy="190" r="10" fill={INK} fillOpacity=".6" />
        </>
    ),
}

/** Generated gradient thumbnail for a project. Fills its parent; parent controls aspect ratio. */
export const ProjectThumbnail: React.FC<{ project: Project }> = ({ project }) => (
    <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${project.palette[0]} -15%, ${project.palette[1]} 100%)` }}
    >
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="size-full">
            {ARTWORK[project.variant]}
        </svg>
    </div>
)
