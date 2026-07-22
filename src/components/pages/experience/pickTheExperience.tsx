
interface SelectExperienceStepProps {
    activities: any[];
    selectedIds: Set<string>;
    onToggle: (id: string) => void;
}

function ClockIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6.5V12L16 14" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function PriceHour({ time, price }: { time: number, price: number }) {
    return (
        <div className="flex flex-row items-center gap-4 w-full">
            <div className="flex flex-row items-center gap-2.5">
                <ClockIcon />
                <span className="text-7 text-neutral-600 font-normal">{time} minutes</span>
            </div>
            <span className="font-normal font-inter text-5 text-neutral-black">{price} SAR</span>
        </div>
    )
}

export default function PickTheExperience({
    // activities,
    selectedIds,
    onToggle,
}: SelectExperienceStepProps) {
    const durationOptions = [
        {
            city: "JEDDAH",
            options: [
                { id: 1, duration: 15, price: 160, currency: "SAR" },
                { id: 2, duration: 30, price: 250, currency: "SAR" },
                { id: 3, duration: 60, price: 500, currency: "SAR" },
            ],
        },
        {
            city: "KHOBAR",
            options: [
                { id: 4, duration: 15, price: 160, currency: "SAR" },
                { id: 5, duration: 30, price: 250, currency: "SAR" },
                { id: 6, duration: 60, price: 500, currency: "SAR" },
            ],
        },
    ];
    return (
        <div className="p-3 md:p-8 flex flex-col h-fit max-h-full rounded-sm bg-[#FCFCFC] border border-neutral-400">
            <span className="font-bold text-2 text-neutral-black font-galderglynn">Jet Ski</span>
            <span className="text-5 font-normal text-neutral-500 mt-3">Select your prefer time and price</span>
            {
                durationOptions?.map((item, index) => {

                    return (
                        <div key={index} className="flex flex-col mt-3">
                            <span className="font-bold font-galderglynn text-5 text-neutral-black">{item?.city}</span>
                            <div className="flex flex-col gap-3 mt-2">
                                {
                                    item?.options?.map((option, index) => {
                                        const checked = selectedIds.has(option.id.toString());
                                        const inputId = `activity-${option.id}`;
                                        return (
                                            <label
                                                key={index}
                                                htmlFor={inputId}
                                                className={`flex cursor-pointer items-center gap-3 rounded-sm border h-16 px-6 py-2.5 text-5 transition-colors ${checked
                                                    ? "border-primary-100 bg-primary-50 text-neutral-black"
                                                    : "border-neutral-400 text-neutral-black bg-white"
                                                    }`}
                                            >
                                                <input
                                                    id={inputId}
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() => onToggle(option.id.toString())}
                                                    className="sr-only"
                                                />
                                                <span
                                                    aria-hidden="true"
                                                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border ${checked ? "border-secondary-300 bg-secondary-300" : "border-primary-75 bg-primary-50"
                                                        }`}
                                                >
                                                    {checked &&
                                                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.75 4.75L3.75 7.75L10.75 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    }
                                                </span>
                                                <PriceHour time={option.duration} price={option.price} />
                                            </label>
                                        )
                                    })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
