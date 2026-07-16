
export default function BluredBox({
    icon, title, description, className = ""
}: {
    className?: string
    icon: any;
    title: string;
    description: string;
}) {
    return (
        <div className={`w-full h-full bg-white/24 backdrop-blur-[20px] p-8 flex flex-col ${className}`}>
            {
                icon
            }
            <span className="font-bold font-galderglynn text-2 text-white">
                {title}
            </span>
            <span className="font-bold text-5 text-white">
                {description}
            </span>
        </div>
    )
}
