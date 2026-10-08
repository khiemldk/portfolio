import { ContactModule } from '@/modules/contact/contact.module'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact — KhiemX',
    description: 'Get in touch with Khiem — let’s work together.',
}

export default function Page() {
    return <ContactModule />
}
