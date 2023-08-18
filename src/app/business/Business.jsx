import Image from "next/image"

import "src/app/business/Business.scss"



export const Business = ({ contentItems }) => {
    return (
        <div className="business__wrapper">
            {
                contentItems.map((contentItem) => {
                    return (
                        <section key={contentItem.title} className={`business container ${contentItem.title.toLowerCase()}`}>
                            <div className="business__title">
                                <h2>{contentItem.title}
                                    <span>{contentItem.jaTitle}</span>
                                </h2>
                            </div>
                            <div className="business__image__container">
                                <Image src={contentItem.image1} fill sizes="100%" alt="business-image" ></Image>
                            </div>
                            <div className="business__subimage__container">
                                <Image src={contentItem.image2} fill sizes="100%" alt="business-image" ></Image>
                            </div>
                            <div className="business__text">
                                <h4 className="business__text__headline">
                                    {contentItem.headline}
                                </h4>
                                <p className="business__text__description">
                                    {contentItem.description}
                                </p>
                            </div>
                        </section>
                    )
                })
            }

        </div>
    )
}