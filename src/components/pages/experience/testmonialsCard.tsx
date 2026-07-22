
import Image from "next/image";

interface Testimonial {
    id: number;
    name: string;
    activity: string;
    rating: number;
    maxRating: number;
    text: string;
    avatar: string;
}

const StarRating = ({ rating, maxRating }: { rating: number; maxRating: number }) => {
    return (
        <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
                {Array.from({ length: maxRating }).map((_, i) => {
                    if (i < rating) {
                        return (
                            <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.60845 0L9.40456 5.81234H15.2169L10.5146 9.40456L12.3107 15.2169L7.60845 11.6247L2.90617 15.2169L4.70228 9.40456L0 5.81234H5.81234L7.60845 0Z" fill="#DFDA60" />
                            </svg>
                        )
                    } else {
                        return (
                            <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.92676 5.95996L9.03613 6.3125H13.7383L10.2109 9.00684L9.93359 9.21875L10.0371 9.55176L11.3711 13.8691L7.91211 11.2275L7.6084 10.9951L7.30469 11.2275L3.84473 13.8691L5.17969 9.55176L5.2832 9.21875L5.00586 9.00684L1.47852 6.3125H6.18164L6.29004 5.95996L7.6084 1.69238L8.92676 5.95996Z" stroke="#DFDA60" />
                            </svg>
                        )
                    }
                }
                )}
            </div>
            <span className="text-xs text-neutral-500 font-medium ml-1">
                {rating}/{maxRating}
            </span>
        </div>
    );
};



export const TestimonialCard = ({ data }: { data: Testimonial }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-3 2xl:p-6 flex flex-col h-94 w-full shadow-sm hover:shadow-md transition-shadow duration-300 select-none">
            <div className="mb-3">
                <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7422 52.2815C13.4868 52.2815 10.5801 51.6421 8.0223 50.3632C5.46447 49.0842 3.48796 47.3403 2.09277 45.1312C0.697591 42.8059 0 40.1899 0 37.2833C0 34.4929 0.523194 31.3538 1.56958 27.8658C2.73223 24.2616 4.18555 20.6574 5.92953 17.0532C7.78977 13.3327 9.65002 9.90283 11.5103 6.76367L28.0781 14.6116C26.9154 16.7044 25.8109 18.9715 24.7645 21.4131C23.7181 23.7384 22.788 25.8312 21.9741 27.6914C21.2765 29.4354 20.8696 30.6562 20.7533 31.3538C23.7762 32.1676 26.1016 33.4466 27.7293 35.1905C29.357 36.8182 30.1708 38.9692 30.1708 41.6433C30.1708 45.1312 28.8919 47.8053 26.3341 49.6656C23.8925 51.4095 20.6952 52.2815 16.7422 52.2815Z" fill="#ECF5FB" />
                    <path d="M37.7947 5.05273L54.3621 12.9004L57.2546 14.2705L55.7 17.0684C54.592 19.0627 53.5317 21.2371 52.5212 23.5947L52.5115 23.6191L52.4998 23.6445C51.4666 25.9404 50.5481 28.0055 49.7449 29.8408C49.6562 30.063 49.5734 30.2716 49.4978 30.4678C51.5862 31.351 53.3959 32.5349 54.8503 34.0693L55.0603 34.2852C57.1956 36.5363 58.1707 39.4169 58.1707 42.6436C58.1706 46.9767 56.5205 50.603 53.0984 53.0918L53.0876 53.0996L53.0779 53.1064C49.9879 55.3136 46.1234 56.2812 41.7419 56.2812C38.3142 56.2812 35.1325 55.6482 32.2527 54.3213L31.6804 54.0469C28.681 52.5472 26.271 50.4481 24.5564 47.7334L24.5378 47.7041L24.5203 47.6748C22.8252 44.8497 21.9998 41.693 21.9998 38.2832C21.9998 35.1276 22.5898 31.6913 23.696 28.0039L23.7048 27.9746L23.7146 27.9443C24.9221 24.201 26.4284 20.4679 28.2292 16.7461L28.2371 16.7285L28.2458 16.7119C30.1337 12.9363 32.0282 9.44266 33.9294 6.23438L35.323 3.88184L37.7947 5.05273Z" fill="#ECF5FB" stroke="white" strokeWidth="6" />
                </svg>
            </div>

            <div className="mb-3">
                <StarRating rating={data.rating} maxRating={data.maxRating} />
            </div>

            <p className="text-neutral-600 text-7 2xl:text-6 leading-relaxed mb-6 shrink-0">
                {data.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-auto pt-4 ">
                <div className="w-10 h-10 rounded-lg overflow-hidden relative bg-gray-100">
                    <Image
                        src={data.avatar}
                        alt={data.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-900 tracking-wide">{data.name}</h4>
                    <p className="text-xs text-gray-500">{data.activity}</p>
                </div>
            </div>
        </div>
    );
};