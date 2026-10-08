import { NotFoundScreen } from '@/components/shared/status/not-found-screen'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Page not found — KhiemX',
}

export default function NotFound() {
    return <NotFoundScreen />
}
