"use client";

import { useId } from "react";
import { Activity } from "./types";
import ProgressHeader from "./progressBar";

interface SelectExperienceStepProps {
    activities: Activity[];
    selectedIds: Set<string>;
    onToggle: (id: string) => void;
    onContinue: () => void;
    onClose: () => void;
}

export default function SelectExperienceStep({
    activities,
    selectedIds,
    onToggle,
    onContinue,
    onClose,
}: SelectExperienceStepProps) {
    const headingId = useId();

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            className="w-screen xl:w-276.5 max-w-[95vw] rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-scroll"
        >
            <ProgressHeader activeStep={1} onClose={onClose} />

            <h2 id={headingId} className="text-4 md:text-2 font-bold font-galderglynn text-neutral-black">
                Tailor Your Experience
            </h2>
            <p className="text-5 text-neutral-600 font-normal font-inter">Personalize Your Journey</p>

            <fieldset className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                    {activities.map((activity) => {
                        const checked = selectedIds.has(activity.id);
                        const inputId = `activity-${activity.id}`;
                        return (
                            <label
                                key={activity.id}
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
                                    onChange={() => onToggle(activity.id)}
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
                                {activity.label}
                            </label>
                        );
                    })}
                </div>
            </fieldset>

            <button
                type="button"
                onClick={onContinue}
                disabled={selectedIds.size === 0}
                className="mt-9 mb-4 w-58 rounded-lg bg-linear-to-r from-secondary-300 to-primary-300 py-3 text-5 font-galderglynn font-bold tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
                CONTINUE
            </button>
        </div>
    );
}