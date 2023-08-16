import { Contents } from "@/app/business/components/Contents/Contents";
import { Hero } from "@/app/business/components/Hero/Hero";
import { Recruit } from "@/app/Home/Recruit/Recruit";

import contentItems from "@/app/business/components/Contents/Contents.json"

const Business = () => {
    return (
        <>
            <Hero></Hero>
            <Contents contentItems={contentItems} />
            <Recruit />
        </>
    )
}

export default Business;