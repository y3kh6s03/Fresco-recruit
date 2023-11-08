import { Hero } from "src/app/components/Hero/Hero.jsx";
import { People } from "src/app/people/People.jsx";

import peopleItems from "src/app/people/People.json";
import {recruitHero,midHero} from "src/app/components/Hero/HeroItems.js";
import { Recruit } from "@/app/recruit/Recruit";
import { Mid } from "@/app/recruit/Mid";


const Home = () => {
    return (
        <>
            <Hero heroItem={recruitHero}/>
            <Recruit/>
            <Hero heroItem={midHero}/>
            <Mid/>
        </>
    )
}

export default Home;