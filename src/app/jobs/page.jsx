import { Jobs } from "src/app/jobs/Jobs.jsx";
import { Hero } from "@/app/components/Hero/Hero.jsx";
import { Recruit } from "@/app/Home/Recruit/Recruit";

import jobItems from "src/app/jobs/Jobs.json";
import {jobsHero} from "src/app/components/Hero/HeroItems.js";



const Home = () => {
    return (
        <>
            <Hero heroItem={jobsHero}/>
            <Jobs jobItems={jobItems}/>
            <Recruit/>
        </>
    )
}

export default Home;