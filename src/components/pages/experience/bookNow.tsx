import BookNowButton from "./buttonForBook"

function ClockIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6.5V12L16 14" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function PriceTime({ time, price }: { time: number, price: number }) {
    return (
        <div className="flex flex-row-reverse justify-between md:justify-baseline md:flex-col items-center xl:items-start">
            <span className="font-bold font-galderglynn text-5 md:text-3 text-neutral-black">{price} SAR</span>
            <div className="flex flex-row items-center gap-2.5">
                <ClockIcon />
                <span className="font-normal text-7 text-neutral-600">{time} minutes</span>
            </div>
        </div>
    )
}

export default function BookNow() {
    return (
        <div className="flex flex-col p-8 shrink-0 rounded-xl h-fit bg-[#F8F8F8] w-full xl:w-142.5 border border-neutral-400">
            <span className="text-neutral-black font-bold font-galderglynn text-2">Jet Ski</span>
            <span className="text-neutral-500 text-5 font-normal mt-3.5">Feel the rush of adrenaline as you explore the open waters with our high-performance jet skis, perfect for thrill-seekers and water sports enthusiasts.</span>
            <div className="flex flex-col p-6 bg-white mt-4">
                <span className="text-neutral-black text-5 font-normal">Jeddah</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                    <PriceTime time={15} price={150} />
                    <PriceTime time={30} price={250} />
                    <PriceTime time={60} price={450} />
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white mt-6">
                <span className="text-neutral-black text-5 font-normal">Khobar</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                    <PriceTime time={15} price={160} />
                    <PriceTime time={30} price={280} />
                    <PriceTime time={60} price={480} />
                </div>
            </div>
            <BookNowButton />
        </div>
    )
}
