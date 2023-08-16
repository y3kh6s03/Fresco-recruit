import Image from "next/image"

import "src/app/jobs/components/Contents/Contents.scss"


export const Contents = ({ jobItems }) => {
    return (
        <>
            {
                jobItems.map((jobItem) => {
                    return (
                        <section key={jobItems.name} className={`contents ${jobItem.name.toLowerCase()}`}>
                            <h3 className="contents__name">
                                {jobItem.name}
                                <span className="contents__jaName">
                                    {jobItem.jaName}
                                </span>
                            </h3>
                            <div className="contents__wrapper">
                                <div className="contents__image">
                                    <Image src={jobItem.image} fill sizes="100%" alt="contents-image"></Image>
                                </div>
                                <div className="contents__inner">
                                    <div className="contents__text">
                                        <h3 className="contents__text__headline">
                                            {jobItem.headLine1}
                                        </h3>
                                        <p className="contents__text__description">
                                            {jobItem.description1}
                                        </p>
                                    </div>
                                    <div className="contents__text2">
                                        <h3 className="contents__text2__headline">
                                            {jobItem.headLine2}
                                        </h3>
                                        <p className="contents__text2__description">
                                            {jobItem.description2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )
                })
            }
        </>
    )
}