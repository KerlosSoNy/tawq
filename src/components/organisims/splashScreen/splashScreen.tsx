'use client'

import { useState, useCallback } from 'react'
import { DotLottieReact, type DotLottie } from '@lottiefiles/dotlottie-react'

export default function SplashScreen() {
    const [visible, setVisible] = useState(true)

    const dotLottieRefCallback = useCallback((dotLottie: DotLottie | null) => {
        if (!dotLottie) return
        dotLottie.addEventListener('complete', () => setVisible(false))
    }, [])

    if (!visible) return null

    return (
        <div className='fixed inset-0 w-full h-full z-50'>
            <DotLottieReact
                src="/json/Splash-Screen.json"
                autoplay={true}
                speed={0.8}
                loop={false}
                className="w-full h-full object-cover"
                dotLottieRefCallback={dotLottieRefCallback}
            />
        </div>
    )
}