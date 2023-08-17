import { Hero } from "@/app/peoples/components/Hero/Hero";
import { People } from "@/app/peoples/components/People/People";

import peopleItems from "@/app/peoples/components/People/People.json";


const Peoples = () => {
    return (
        <>
            <Hero />
            <People peopleItems={peopleItems}/>
        </>
    )
}

export default Peoples;