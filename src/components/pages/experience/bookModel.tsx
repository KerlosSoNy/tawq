'use client'
import { useEffect, useState } from "react";
import { Activity, BookingFormData, DEFAULT_ACTIVITIES, emptyBookingForm } from "../packages/popup/types";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import ThankYouStep from "../packages/popup/thanksStep";
import BookingFormStep from "./formSection";
import PickTheExperience from "./pickTheExperience";
export type BookingStep = "select" | "thankyou";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    activities?: Activity[];
    onSubmit?: (payload: { activityIds: string[]; form: BookingFormData }) => void;
}

export default function BookingModal({
    isOpen,
    onClose,
    activities = DEFAULT_ACTIVITIES,
    onSubmit,
}: BookingModalProps) {
    const [step, setStep] = useState<BookingStep>("select");
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [formData, setFormData] = useState<BookingFormData>(emptyBookingForm);


    useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleToggleActivity = (id: string) => {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            return next;
        });
    };

    const handleFormChange = (field: keyof BookingFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFinalSubmit = () => {
        onSubmit?.({ activityIds: Array.from(selectedIds), form: formData });
        setStep("thankyou");
    };

    const handleReset = () => {
        setStep("select");
        setSelectedIds(new Set());
        setFormData(emptyBookingForm);
        onClose();
    };

    return createPortal(
        <div
            className="fixed inset-0 w-full z-100 flex items-center justify-center bg-black/60 p-4"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <AnimatePresence mode="wait">
                {step === "select" && (
                    <motion.div
                        key="select"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            className="w-[90vw] flex flex-col xl:w-360 max-w-[98vw] rounded-2xl bg-white p-4 lg:p-10 shadow-2xl max-h-[90vh] overflow-y-scroll"
                        >
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
                            <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 gap-9 mt-8">
                                <BookingFormStep
                                    formData={formData}
                                    onChange={handleFormChange}
                                    onSubmit={handleFinalSubmit}
                                    onClose={onClose}
                                />
                                <PickTheExperience
                                    activities={activities}
                                    selectedIds={selectedIds}
                                    onToggle={handleToggleActivity}
                                />
                            </div>
                        </div>
                    </motion.div>)}
                {step === "thankyou" && (
                    <motion.div
                        key="thankyou"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ThankYouStep onBackToHome={handleReset} onClose={onClose} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>, document.body
    )
}
