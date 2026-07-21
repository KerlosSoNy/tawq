"use client";

import { useId } from "react";

interface ThankYouStepProps {
    onBackToHome: () => void;
    onClose: () => void;
}

export default function ThankYouStep({ onBackToHome, onClose }: ThankYouStepProps) {
    const headingId = useId();

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            className="relative w-full max-w-138.25 rounded-xl bg-white p-16 text-center shadow-2xl"
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.333 13.3333L26.6663 26.6666" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.667 13.3333L13.3337 26.6666" stroke="#15131A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="mx-auto flex h-11 w-11 items-center justify-center bg-primary-300">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="30" height="30" rx="2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.667 21.6667L16.667 26.6667L28.3337 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <h2 id={headingId} className="mt-8 text-3 font-bold font-galderglynn uppercase leading-snug text-neutral-black">
                Thank You For
                <br />
                Submitting Your Request.
            </h2>

            <p className="mt-1 text-5 text-neutral-600">
                &ldquo;Someone from our team will reach out to you soon on WhatsApp.&rdquo;
            </p>

            <button
                type="button"
                onClick={onBackToHome}
                className="mb-4 mt-6 w-58 rounded-lg bg-linear-to-r from-secondary-300 to-primary-300 py-3 text-5 font-galderglynn font-bold tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
                BACK TO HOME
            </button>
        </div>
    );
}