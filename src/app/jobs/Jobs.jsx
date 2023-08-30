import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";
import Image from "next/image"

import "src/app/jobs/Jobs.scss";


export const Jobs = ({ jobItems }) => {
    return (
        <>
            {
                jobItems.map((jobItem) => {
                    return (
                        <section key={jobItems.name} className={`jobs ${jobItem.name.toLowerCase()}`} id={jobItem.name.toLowerCase()}>
                            <ScrollAnimation>
                                <h3 className="jobs__name">
                                    {jobItem.name}
                                    <span className="jobs__jaName">
                                        {jobItem.jaName}
                                    </span>
                                </h3>
                            </ScrollAnimation>

                            <div className="jobs__wrapper">
                                <div className="jobs__image">
                                    <Image src={jobItem.image} fill sizes="100%" alt="jobs-image"></Image>
                                </div>
                                <div className="jobs__inner">
                                    <ScrollXAnimation>
                                        <div className="jobs__text">
                                            <h3 className="jobs__text__headline">
                                                {jobItem.headLine1}
                                            </h3>
                                            <p className="jobs__text__description">
                                                {jobItem.description1}
                                            </p>
                                        </div>
                                    </ScrollXAnimation>
                                    <ScrollXAnimation>

                                        <div className="jobs__text2">
                                            <h3 className="jobs__text2__headline">
                                                {jobItem.headLine2}
                                            </h3>
                                            <p className="jobs__text2__description">
                                                {jobItem.description2}
                                            </p>
                                        </div>
                                    </ScrollXAnimation>
                                </div>
                            </div>
                        </section>

                    )
                })
            }
        </>
    )
}