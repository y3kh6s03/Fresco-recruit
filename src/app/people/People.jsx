import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";
import Image from "next/image"

import "src/app/people/People.scss";

export const People = ({ peopleItems }) => {
    return (
        <>
            {
                peopleItems.map((peopleItem) => {
                    return (
                        <section key={peopleItem.department} className="people container" id={peopleItem.enName}>
                            <div className="people__image__container">
                                <Image src={peopleItem.image} fill sizes="100%" alt="person1-image"></Image>
                            </div>
                            <ScrollAnimation>
                                <div className="people__headline__inner">
                                    <h3>
                                        {peopleItem.headline}
                                    </h3>
                                    <p>{peopleItem.department}</p>
                                    <p>{peopleItem.name}</p>
                                    <p>{peopleItem.since}</p>
                                    <p>{peopleItem.career}</p>
                                </div>
                            </ScrollAnimation>
                            <div className="people__contents">
                                <ScrollXAnimation>
                                {/* <h4 className="people__contents__question">
                                    {peopleItem.interview1}
                                </h4> */}
                                <p className="people__contents__answer">
                                    {peopleItem.answer1}
                                </p>
                                </ScrollXAnimation>
                                <ScrollXAnimation>
                                {/* <h4 className="people__contents__question">
                                    {peopleItem.interview2}
                                </h4> */}
                                <p className="people__contents__answer">
                                    {peopleItem.answer2}
                                </p>
                                </ScrollXAnimation>
                            </div>
                        </section>

                    )
                })
            }
        </>
    )
}