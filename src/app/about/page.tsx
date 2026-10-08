import { AboutModule } from '@/modules/about/about.module'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About — KhiemX',
    description: 'Self-summary, experience and education of Khiem — web developer.',
}

export default function Page() {
    return <AboutModule />
}
