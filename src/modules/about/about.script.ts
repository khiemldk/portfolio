'use client'

import { ABOUT_CONTENT } from '@/core/configs/about-content.config'
import { HOME_CONTENT } from '@/core/configs/home-content.config'

export const useAboutScript = () => {
    return { content: ABOUT_CONTENT, credentials: HOME_CONTENT.credentials }
}
