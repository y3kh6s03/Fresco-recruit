import Image from "next/image"

import "@/app/peoples/components/People/People.scss"

export const People = ({ peopleItems }) => {
    return (
        <>
            {
                peopleItems.map((peopleItem) => {
                    return (
                        <section key={peopleItem.department}className="people container">
                            <div className="people__image__container">
                                <Image src={peopleItem.image} fill sizes="100%" alt="person1-image"></Image>
                            </div>
                            <div className="people__headline__inner">
                                <h3>
                                    {peopleItem.headline}
                                </h3>
                                <p>{peopleItem.department}</p>
                                <p>{peopleItem.since}</p>
                            </div>
                            <div className="people__coÍntents">
                                <h4 className="people__contents__question">
                                    {peopleItem.interview1}
                                </h4>
                                <p className="people__contents__answer">
                                    {peopleItem.answer1}
                                </p>
                                <h4 className="people__contents__question">
                                    {peopleItem.interview2}
                                </h4>
                                <p className="people__contents__answer">
                                    {peopleItem.answer2}
                                </p>
                            </div>
                        </section>

                    )
                })
            }
        </>
    )
}