'use client'

export default function DiveButton({
    title,
    id,
    description,
}: {
    title?: string,
    id: string,
    description: string
}
) {
    const handleClick = () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={description}
            title={description}
            className="cursor-pointer uppercase h-fit font-bold text-[14px] 3xl:text-5 text-white"
        >
            {title || 'Dive iN'}
        </button>
    )
}