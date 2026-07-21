"use client";


interface ProgressHeaderProps {
    activeStep: 1 | 2;
    onClose: () => void;
}

export default function ProgressHeader({ activeStep, onClose }: ProgressHeaderProps) {
    return (
        <div className="mb-6">
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onClose}
                    className="flex items-center gap-1.5 bg-neutral-300 rounded-md px-4 py-2 text-5 font-inter tracking-wide text-black font-bold duration-500 transition-colors hover:bg-neutral-400"
                >
                    CLOSE
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3335 13.3333L26.6668 26.6666" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.6665 13.3333L13.3332 26.6666" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="mt-4 flex items-center">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center w-full">
                        <span
                            className={`flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-sm text-5 font-normal text-white ${activeStep >= 1 ? "bg-primary-300" : "bg-gray-300"
                                }`}
                        >
                            01
                        </span>
                        <div className="h-2.5 flex-1 overflow-hidden  bg-gray-200">
                            <div
                                className={`h-full bg-primary-300 transition-all duration-500 ${activeStep >= 1 ? "w-full" : "w-0"
                                    }`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="text-neutral-500 font-inter font-normal text-7">First Step</p>
                        <p className="font-galderglynn font-bold text-neutral-black text-5">Choose Your Experience</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center w-full">
                        <span
                            className={`flex h-10.25 w-10.25 shrink-0 items-center justify-center text-5 font-normal text-white transition-colors duration-500 ${activeStep >= 2 ? "bg-teal-500" : "bg-gray-300"
                                }`}
                        >
                            02
                        </span>
                        <div className="h-2.5 flex-1 overflow-hidden bg-gray-200">
                            <div
                                className={`h-full bg-primary-300 transition-all duration-500 ${activeStep >= 2 ? "w-full" : "w-0"
                                    }`}
                            />
                        </div>
                    </div>
                    <div className="text-start mt-4 flex flex-col">
                        <p className="text-neutral-500 font-inter font-normal text-7">Second Step</p>
                        <p className="font-galderglynn font-bold text-neutral-black text-5">Choose Your Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}