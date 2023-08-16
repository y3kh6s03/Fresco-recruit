import { Contents } from "@/app/jobs/components/Contents/Contents";
import { Hero } from "@/app/jobs/components/Hero/Hero";
import { Recruit } from "@/app/Home/Recruit/Recruit";

import jobItems from "src/app/jobs/Jobs.json";



const Jobs = () => {
    return (
        <>
            <Hero />
            <Contents jobItems={jobItems}/>
            <Recruit/>
        </>
    )
}

export default Jobs;