import BookNow from "./bookNow";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

export default function BigSection() {
    return (
        <div
            data-nav-bg="white"
            className="flex flex-col  xl:flex-row justify-center 3xl:justify-start gap-5 2xl:gap-20 3xl:gap-37.75 ps-5 xl:ps-10 3xl:ps-31 pe-5 xl:pe-10 3xl:pe-25 py-20 xl:py-37.5 relative"
        >
            <div className="flex flex-col w-full xl:w-245.75">
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
            <div className="lg:sticky top-0 lg:-mt-20 self-start lg:pt-28">
                <BookNow />
            </div>
        </div>
    )
}
