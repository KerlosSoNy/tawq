"use client";

interface TextFieldProps {
    id: string;
    label: string;
    type?: "text" | "tel" | "number";
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    min?: number;
}

export default function TextField({
    id,
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    min,
}: TextFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                id={id}
                type={type}
                min={min}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                title={label}
                className="w-full rounded-sm border border-neutral-400 h-14 bg-white p-6 text-7 text-neutral-600"
            />
        </div>
    );
}