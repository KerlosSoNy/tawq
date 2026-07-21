"use client";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
}

function SelectChevron() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 end-4 my-auto h-2.5 w-2.5"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L5 5L9 1" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function SelectField({ id, label, value, onChange, options }: SelectFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none rounded-sm border border-neutral-400 h-14 bg-white py-2 ps-6 pe-10 text-7 text-neutral-600"
                >
                    <option value="">{label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <SelectChevron />
            </div>
        </div>
    );
}