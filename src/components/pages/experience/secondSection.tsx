import { requirements, restrictions } from '@/dummy/experienceData'

export default function SecondSection() {
    return (
        <div className="flex flex-col mt-6 3xl:mt-16">
            <span className="font-bold font-galderglynn text-2 md:text-1 lg:text-0 text-neutral-black">
                Requirements & Restrictions
            </span>
            <span className="text-neutral-600 text-6 lg:text-5 font-normal mt-3.5 lg:me-4">
                To ensure the safety and comfort of all participants, certain requirements may apply depending on the activity. Guests should be in good physical condition and follow all instructions provided by the instructor. Age, weight, and health restrictions may vary based on the selected experience.
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 lg:mt-9">
                <div className="p-3 3xl:p-6 bg-primary-50 border border-neutral-400 rounded-sm flex flex-col gap-4">
                    <span className="text-neutral-black text-5 font-bold font-galderglynn">Requirements:</span>
                    {
                        requirements.map((item, index) => {
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
                <div className="p-3 3xl:p-6 bg-danger-50 border border-neutral-400 rounded-sm flex flex-col gap-4">
                    <span className="text-neutral-black text-5 font-bold font-galderglynn">Restrictions:</span>
                    {
                        restrictions.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-row items-center gap-4">
                                    <div className="flex items-center justify-center bg-danger-300 w-7 h-7 rounded-sm shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66675 6.6665L13.3334 13.3332" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.3333 6.6665L6.66659 13.3332" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="font-normal text-6 font-inter text-neutral-black">{item}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
