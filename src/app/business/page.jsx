import { Contents } from "@/app/business/components/Contents/Contents";
import { Hero } from "@/app/business/components/Hero/Hero";

import contentItems from "@/app/business/components/Contents/Contents.json"

const Business = () => {
    return (
        <>
            <Hero></Hero>
            <Contents contentItems={contentItems}></Contents>
        </>
    )
}

export default Business;