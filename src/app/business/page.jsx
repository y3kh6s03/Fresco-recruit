import { Business } from "@/app/business/Business";
import { Hero } from "@/app/components/Hero/Hero.jsx";
import { Recruit } from "@/app/Home/Recruit/Recruit";

import contentItems from "@/app/business/Business.json"
import {businessHero} from "@/app/components/Hero/HeroItems.js"

const Home = () => {

    return (
        <>
            <Hero heroItem={businessHero}/>
            <Business contentItems={contentItems} />
            <Recruit />
        </>
    )
}

export default Home;