import { WorksModule } from '@/modules/works/works.module'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Works — KhiemX',
    description: 'Selected projects by Khiem — web, mobile, branding and UI / UX.',
}

export default function Page() {
    return <WorksModule />
}
