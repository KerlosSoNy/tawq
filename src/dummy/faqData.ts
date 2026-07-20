
export type FaqItem = {
    question: string;
    answer: string;
    category: "General" | "Booking" | "Cancellation" | "Customer Support" | "Payment" | "Feedback";
};

export const faqItems: FaqItem[] = [
    {
        category: "General",
        question: "What is the minimum age requirement?",
        answer: "Participants must be at least 8 years old for shallow-water activities and 12 years old for open-water diving. Children under 12 must be accompanied by a parent or guardian at all times.",
    },
    {
        category: "General",
        question: "What documentation is needed to apply?",
        answer: "You'll need a valid government-issued ID, a recent passport-sized photo, and — for diving certifications — proof of any prior diving experience or medical clearance if applicable.",
    },
    {
        category: "General",
        question: "How long is the application process?",
        answer: "Most applications are reviewed and approved within 2–3 business days. Certification course applications may take up to 5 business days due to additional verification steps.",
    },
    {
        category: "General",
        question: "Are there any fees associated with the application?",
        answer: "There is a one-time registration fee of $25, which covers administrative processing. Course and equipment fees are billed separately once your application is approved.",
    },
    {
        category: "General",
        question: "What are the eligibility requirements for the application?",
        answer: "Applicants must meet the minimum age requirement, be in good general health, and be able to swim confidently. A basic health declaration form is required for all activities.",
    },
    {
        category: "General",
        question: "Can the application be submitted online?",
        answer: "Yes. The entire application can be completed through our online portal, including document uploads and payment. In-person submissions are also accepted at any of our centers.",
    },
    {
        category: "General",
        question: "What should I do if my application is denied?",
        answer: "You'll receive an email explaining the reason for denial along with steps to resolve it. Most denials are due to missing documents and can be corrected by resubmitting.",
    },
    {
        category: "General",
        question: "How can I track the status of my application?",
        answer: "Log in to your account dashboard to see real-time status updates, or use the tracking number sent to your email immediately after submission.",
    },
    {
        category: "General",
        question: "Is there a way to expedite the application process?",
        answer: "Yes, we offer an expedited review service for an additional fee, which reduces processing time to 24 hours for standard applications.",
    },
    {
        category: "General",
        question: "What are the next steps after my application is approved?",
        answer: "Once approved, you'll receive a confirmation email with your booking link, orientation schedule, and a checklist of what to bring on your first visit.",
    },
];


export const faqCategories = [
    "General",
    "Booking",
    "Cancellation",
    "Customer Support",
    "Payment",
    "Feedback",
] as const;

export type FaqCategory = (typeof faqCategories)[number];