"use client";

import { useRef } from "react";

interface PickerInputProps {
    id: string;
    /** Used for the sr-only label, the title attribute, and the icon's aria-label. */
    label: string;
    type: "date" | "time";
    value: string;
    onChange: (value: string) => void;
}

function CalendarIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                stroke="#A4A4A4"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="h-5 w-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

/** Opens the native date/time picker, with a focus() fallback for browsers
 * that don't support showPicker() (e.g. Safari). */
function openPicker(ref: React.RefObject<HTMLInputElement | null>) {
    const el = ref.current;
    if (!el) return;
    if (typeof el.showPicker === "function") {
        try {
            el.showPicker();
            return;
        } catch {
            // fall through to focus()
        }
    }
    el.focus();
}

export default function PickerInput({ id, label, type, value, onChange }: PickerInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => openPicker(inputRef)}
                    aria-label={`Open ${label.toLowerCase()} picker`}
                    className="absolute inset-y-0 end-3 flex items-center ps-3.5"
                >
                    {type === "date" ? <CalendarIcon /> : <ClockIcon />}
                </button>
                <input
                    id={id}
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    title={label}
                    className="w-full cursor-pointer rounded-sm border border-neutral-400 h-14 bg-white p-6 text-7 text-neutral-600 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:end-3 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
            </div>
        </div>
    );
}