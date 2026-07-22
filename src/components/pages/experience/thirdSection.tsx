import { safetyCommitments } from '@/dummy/experienceData'

export default function ThirdSection() {
    return (
        <div className="flex flex-col items-center p-6 3xl:p-12 rounded-xl mt-6 3xl:mt-20 border border-primary-100 bg-primary-50 gap-6">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9299 30.6669L30.2633 36.0002L41.3333 24.9302M31.2673 8.20954L15.2673 12.781C14.1225 13.1081 13.3333 14.1544 13.3333 15.345L13.3333 28.9437C13.3333 37.5558 17.4923 45.6377 24.5002 50.6433L30.4499 54.8931C31.3771 55.5554 32.6227 55.5554 33.5499 54.8931L39.4996 50.6433C46.5075 45.6377 50.6666 37.5558 50.6666 28.9437V15.345C50.6666 14.1544 49.8773 13.1081 48.7325 12.781L32.7325 8.20954C32.2537 8.07273 31.7461 8.07273 31.2673 8.20954Z" stroke="#3B898A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-neutral-black font-bold font-galderglynn text-center text-3 md:text-2">Safety Information</span>
            <span className="text-center text-neutral-500 text-7 md:text-5 font-normal">Your safety is our highest priority. All activities are conducted under the supervision of trained and certified professionals who follow strict safety procedures. Our equipment is regularly inspected and maintained to the highest standards, and every participant receives a comprehensive safety briefing before the activity begins.</span>
            <span className="text-center text-neutral-500 text-7 md:text-5 font-normal">Our team continuously monitors weather and sea conditions to ensure a safe environment. In the event of unfavorable conditions, activities may be delayed, rescheduled, or canceled to protect the well-being of our guests.
            </span>
            <span className="text-neutral-black text-7 md:text-5 font-bold font-galderglynn">Our Safety Commitment:</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    safetyCommitments?.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row items-center gap-4">
                                <div className="flex items-center justify-center bg-primary-400 w-7 h-7 rounded-sm shrink-0">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 4.08333L3.25 6.58333L9.08333 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="font-normal text-6 font-inter text-neutral-black">{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
