import { Hero } from "src/app/components/Hero/Hero.jsx";
import { People } from "src/app/people/People.jsx";

import peopleItems from "src/app/people/People.json";
import {recruitHero} from "src/app/components/Hero/HeroItems.js";
import { Recruit } from "@/app/recruit/Recruit";


const Home = () => {
    return (
        <>
            <Hero heroItem={recruitHero}/>
            <Recruit peopleItems={peopleItems}/>
        </>
    )
}

export default Home;