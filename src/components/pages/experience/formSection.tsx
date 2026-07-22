"use client";

import { useId } from "react";
import { BookingFormData } from "../packages/popup/types";
import TextField from "../packages/popup/Textfield";
import SelectField from "../packages/popup/Selectfield";
import PickerInput from "../packages/popup/Pickerinput";
import TextareaField from "../packages/popup/Textareafield";

interface BookingFormStepProps {
    formData: BookingFormData;
    onChange: (field: keyof BookingFormData, value: string) => void;
    onSubmit: () => void;
    onClose: () => void;
}

const NOTE_MAX_LENGTH = 200;

const CITY_OPTIONS = [
    { value: "jeddah", label: "Jeddah" },
    { value: "riyadh", label: "Riyadh" },
    { value: "dammam", label: "Dammam" },
];

const LOCATION_OPTIONS = [
    { value: "marina", label: "Marina" },
    { value: "corniche", label: "Corniche" },
    { value: "beach-club", label: "Beach Club" },
];

const CONTACT_OPTIONS = [
    { value: "whatsapp", label: "WhatsApp" },
    { value: "phone", label: "Phone call" },
    { value: "email", label: "Email" },
];

export default function BookingFormStep({
    formData,
    onChange,
    onSubmit,
    onClose,
}: BookingFormStepProps) {
    const headingId = useId();
    const firstNameId = useId();
    const familyNameId = useId();
    const phoneId = useId();
    const peopleId = useId();
    const dateId = useId();
    const timeId = useId();
    const cityId = useId();
    const locationId = useId();
    const contactId = useId();
    const noteId = useId();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div
            className="flex flex-col"
        >
            <h2 id={headingId} className="text-4 md:text-2 font-bold font-galderglynn text-neutral-black">
                Reserve Your Adventure
            </h2>
            <p className="text-5 text-neutral-600 font-normal font-inter">Reserve your spot today with ease!</p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-5.25">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5.25">
                    <TextField
                        id={firstNameId}
                        label="First Name"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(value) => onChange("firstName", value)}
                    />
                    <TextField
                        id={familyNameId}
                        label="Family Name"
                        placeholder="Family Name"
                        value={formData.familyName}
                        onChange={(value) => onChange("familyName", value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5.25">
                    <TextField
                        id={phoneId}
                        label="Phone number"
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(value) => onChange("phone", value)}
                    />
                    <TextField
                        id={peopleId}
                        label="Number of people"
                        type="number"
                        min={1}
                        placeholder="Number of people"
                        value={formData.numberOfPeople}
                        onChange={(value) => onChange("numberOfPeople", value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5.25">
                    <PickerInput
                        id={dateId}
                        label="Date"
                        type="date"
                        value={formData.date}
                        onChange={(value) => onChange("date", value)}
                    />
                    <PickerInput
                        id={timeId}
                        label="Time"
                        type="time"
                        value={formData.time}
                        onChange={(value) => onChange("time", value)}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5.25">
                    <SelectField
                        id={cityId}
                        label="City"
                        value={formData.city}
                        onChange={(value) => onChange("city", value)}
                        options={CITY_OPTIONS}
                    />
                    <SelectField
                        id={locationId}
                        label="Location"
                        value={formData.location}
                        onChange={(value) => onChange("location", value)}
                        options={LOCATION_OPTIONS}
                    />
                </div>

                <SelectField
                    id={contactId}
                    label="Preferred contact method"
                    value={formData.contactMethod}
                    onChange={(value) => onChange("contactMethod", value)}
                    options={CONTACT_OPTIONS}
                />

                <TextareaField
                    id={noteId}
                    label="Your special request or note"
                    placeholder="Your special request or note"
                    value={formData.note}
                    onChange={(value) => onChange("note", value)}
                    maxLength={NOTE_MAX_LENGTH}
                />

                <button
                    type="submit"
                    className="mb-4 w-58 rounded-lg bg-linear-to-r from-secondary-300 to-primary-300 py-3 text-5 font-galderglynn font-bold tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
}