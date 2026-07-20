import Image from 'next/image'

export default function ContactSection() {
    return (
        <>
            <div className="flex flex-row mt-7 items-center gap-4">
                <div className="flex items-center justify-center bg-primary-300 w-14 h-14 rounded-sm shrink-0">
                    <Image
                        src="/images/icons/email.svg"
                        alt="Tawq Logo"
                        width={27}
                        height={24}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className={`text-white font-normal text-6 `}>
                        Email us
                    </span>
                    <span className={`font-bold text-3 font-galderglynn text-white -mt-0.5`}>
                        info@tawq.sa
                    </span>
                </div>
            </div>
            <div className="flex flex-row mt-7 items-center gap-4">
                <div className="flex items-center justify-center bg-primary-300 w-14 h-14 rounded-sm shrink-0">
                    <Image
                        src="/images/icons/phone.svg"
                        alt="Tawq Logo"
                        width={27}
                        height={24}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className={`text-white font-normal text-6 `}>
                        phone
                    </span>
                    <span className={`font-bold text-3 font-galderglynn text-white -mt-0.5`}>
                        0539320709
                    </span>
                </div>
            </div>
            <div className="flex flex-row mt-7 items-center gap-4">
                <div className="flex items-center justify-center bg-primary-300 w-14 h-14 rounded-sm shrink-0">
                    <Image
                        src="/images/icons/location.svg"
                        alt="Tawq Logo"
                        width={27}
                        height={24}
                    />
                </div>
                <div className="flex flex-col items-start">
                    <span className={`text-white font-normal text-6 `}>
                        Office
                    </span>
                    <span className={`font-bold text-3 font-galderglynn text-white -mt-0.5`}>
                        Damam - saudi arbia
                    </span>
                </div>
            </div>
        </>
    )
}
