"use client";

interface TextareaFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    maxLength: number;
    rows?: number;
}

export default function TextareaField({
    id,
    label,
    placeholder,
    value,
    onChange,
    maxLength,
    rows = 3,
}: TextareaFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <textarea
                id={id}
                rows={rows}
                maxLength={maxLength}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-sm border border-neutral-400 h-31.75 bg-white py-2 px-6 text-7 text-neutral-600"
            />
            <p className="mt-1 text-right text-[11px] text-gray-400">
                {value.length}/{maxLength}
            </p>
        </div>
    );
}