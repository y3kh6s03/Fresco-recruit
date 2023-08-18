import { Hero } from "src/app/components/Hero/Hero.jsx";
import { People } from "src/app/people/People.jsx";

import peopleItems from "src/app/people/People.json";
import {peopleHero} from "src/app/components/Hero/HeroItems.js";


const Home = () => {
    return (
        <>
            <Hero heroItem={peopleHero}/>
            <People peopleItems={peopleItems}/>
        </>
    )
}

export default Home;