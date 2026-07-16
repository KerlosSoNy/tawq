import Image from 'next/image'
import SecondSection from './secondSection'

export default function BigSection() {

    return (
        <div className="relative w-full min-h-[2529px] pt-66 flex flex-col ">
            <div className="w-full rotate-180 absolute top-0 z-6 h-125 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
            <div className="w-full rotate-180 absolute top-0 z-2 h-125 bg-linear-to-b from-primary-400/0 to-secondary2-400" />
            <div className="absolute w-266.5 h-256.75 top-10 -left-80.25">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/home/surface.png"
                        alt="Gallery"
                        fill
                        className="object-cover z-5"
                    />
                </div>
            </div>
            <span className="font-galderglynn absolute top-22 w-fit opacity-15 left-[9%] font-bold text-[300px] faqs-text z-2">
                About us
            </span>
            <div className="flex flex-col ps-70 mx-auto z-10">
                <div className="flex flex-col items-start  max-w-217.5 relative ms-52 text-white font-galderglynn">
                    <svg width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.750244 4.15267L17.37 9.15267L37.3136 0.819336L58.9193 10.8193L77.2009 2.486L100.469 9.15267L118.75 2.486" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[80px] font-bold leading-24 mt-6">Redefining Aquatic Leisure.</span>
                </div>
                <div className="flex flex-row items-start ms-20 mt-15.5 gap-42.5">
                    <Image
                        src="/images/home/topBig.png"
                        alt="Gallery"
                        width={425}
                        height={542}
                        className="object-cover z-5"
                    />
                    <div className="flex flex-col w-143.25 pt-11">
                        <span className="text-5 text-white leading-8">
                            TAWQ Entertainment is the experiential side of the brand, where  technology is used to create immersive, large-scale, and emotionally  driven experiences. We focuses on transforming spaces through water sport, light, motion, and digital interaction delivering moments that feel futuristic, cinematic, and memorable Rather than showcasing technology itself,
                        </span>
                        <span className="text-5 text-white leading-8 mt-11">
                            TAWQ Entertainment uses it  as a gateway to another world, blending innovation with imagination to  create experiences that are felt, not just seen                        </span>
                        <button className="relative w-59 h-14 mt-11 flex items-center gap-1.5 justify-center rounded-sm overflow-hidden group cursor-pointer hover:gap-3 hover:w-62 transition-all duration-300">
                            <span className="absolute inset-0 bg-linear-to-l from-primary-300 to-secondary-300" />
                            <span className="absolute inset-0 bg-linear-to-l from-secondary-300 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                            <span className="relative z-10 uppercase text-5 font-bold text-white">Explore More</span>
                            <svg className="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12L20 12M14 6L20 12L14 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-1 isolate bg-secondary2-400">
                <Image
                    src="/images/home/bg-bigSection.jpg"
                    alt="Gallery"
                    fill
                    className="object-cover mix-blend-luminosity opacity-100"
                />
            </div>

            <SecondSection />
            <div className="w-full absolute bottom-0 z-6 h-125 bg-linear-to-b from-[#002023]/0 to-[#002125]" />
            <div className="w-full absolute bottom-0 z-6 h-full bg-linear-to-b opacity-50 from-[#002023]/0 to-[#002125]" />
        </div>
    )
}
