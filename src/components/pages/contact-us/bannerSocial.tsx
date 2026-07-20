import Image from 'next/image'

export default function BannerSocial() {
    return (
        <div className="flex flex-row h-11 gap-3 mt-6">
            <div className="flex flex-row items-center rounded-sm bg-white gap-2.5 px-2.5 h-full">
                <Image
                    src="/images/icons/instaBanner.svg"
                    alt="Tawq Logo"
                    width={24}
                    height={24}
                />
                <span className="text-6 text-black font-normal">
                    Instagram
                </span>
            </div>
            <div className="flex flex-row items-center rounded-sm bg-white gap-2.5 px-2.5 h-full">
                <Image
                    src="/images/icons/XBanner.svg"
                    alt="Tawq Logo"
                    width={24}
                    height={24}
                />
                <span className="text-6 text-black font-normal">
                    Twitter
                </span>
            </div>
            <div className="flex flex-row items-center rounded-sm bg-white gap-2.5 px-2.5 h-full">
                <Image
                    src="/images/icons/facebookBanner.svg"
                    alt="Tawq Logo"
                    width={24}
                    height={24}
                />
                <span className="text-6 text-black font-normal">
                    Facebook
                </span>
            </div>
        </div>
    )
}
