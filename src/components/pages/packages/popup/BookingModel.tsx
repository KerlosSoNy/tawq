"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    Activity,
    BookingFormData,
    BookingStep,
    DEFAULT_ACTIVITIES,
    emptyBookingForm,
} from "./types";
import SelectExperienceStep from "./selectExperience";
import BookingFormStep from "./bookingSiteMap";
import ThankYouStep from "./thanksStep";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    activities?: Activity[];
    /** Called with the final selections + form data once the user submits. */
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

    // Lock page scroll behind the modal while it's open.
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
                        <SelectExperienceStep
                            activities={activities}
                            selectedIds={selectedIds}
                            onToggle={handleToggleActivity}
                            onContinue={() => setStep("form")}
                            onClose={onClose}
                        />
                    </motion.div>
                )}

                {step === "form" && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                    >
                        <BookingFormStep
                            formData={formData}
                            onChange={handleFormChange}
                            onSubmit={handleFinalSubmit}
                            onClose={onClose}
                        />
                    </motion.div>
                )}

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
        </div>,
        document.body
    );
}