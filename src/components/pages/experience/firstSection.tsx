import { experiencesData } from '@/dummy/experienceData'

export default function FirstSection() {
    return (
        <div className="flex flex-col">
            <span className="text-2 md:text-1 lg:text-0 font-bold font-galderglynn text-neutral-black">Whats Included?</span>
            <span className="text-neutral-600 font-normal font-inter text-6 lg:text-5 mt-3.5 lg:me-6.5">Everything you need for a safe and enjoyable experience is provided by our team. Your booking includes professional guidance, safety equipment, and access to high-quality, regularly maintained gear. Before the activity begins, you will receive a complete safety briefing and instructions to ensure you are comfortable and confident on the water.</span>
            <span className="text-5 text-neutral-black font-extrabold my-2 lg:my-5 font-galderglynn">Included:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-3.5">
                {
                    experiencesData.map((item, index) => {
                        return (
                            <div key={index} className="p-5 gap-3 bg-[#FCFCFC] border border-neutral-400 flex flex-col">
                                {item?.icon}
                                <span className="text-neutral-600 text-7 lg:text-5 font-normal">{item?.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
