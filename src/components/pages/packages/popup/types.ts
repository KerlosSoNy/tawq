export type BookingStep = "select" | "form" | "thankyou";

export interface BookingFormData {
  firstName: string;
  familyName: string;
  phone: string;
  numberOfPeople: string;
  date: string;
  time: string;
  city: string;
  location: string;
  contactMethod: string;
  note: string;
}

export const emptyBookingForm: BookingFormData = {
  firstName: "",
  familyName: "",
  phone: "",
  numberOfPeople: "",
  date: "",
  time: "",
  city: "",
  location: "",
  contactMethod: "",
  note: "",
};

export interface Activity {
  id: string;
  label: string;
}

export const DEFAULT_ACTIVITIES: Activity[] = [
  { id: "jet-ski", label: "Jet ski" },
  { id: "wakeboard", label: "Wakeboard" },
  { id: "flyboard", label: "Flyboard" },
  { id: "kitesurfing", label: "Kitesurfing" },
  { id: "parasailing-1", label: "Parasailing" },
  { id: "sup", label: "Stand-up Paddleboarding" },
  { id: "surfing-1", label: "Surfing" },
  { id: "surfing-2", label: "Surfing" },
  { id: "wakeboarding", label: "Wakeboarding" },
  { id: "parasailing-2", label: "Parasailing" },
  { id: "windsurfing", label: "Windsurfing" },
  { id: "jet-skiing", label: "Jet Skiing" },
];