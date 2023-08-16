import Image from "next/image"

import "src/app/business/components/Contents/Contents.scss"



export const Contents = ({ contentItems }) => {
    return (
        <div className="contents__wrapper">
            {
                contentItems.map((contentItem) => {
                    return (
                        <section key={contentItem.title} className={`contents container ${contentItem.title.toLowerCase()}`}>
                            <div className="contents__title">
                                <h2>{contentItem.title}
                                    <span>{contentItem.jaTitle}</span>
                                </h2>
                            </div>
                            <div className="contents__image__container">
                                <Image src={contentItem.image1} fill sizes="100%" alt="contents-image" ></Image>
                            </div>
                            <div className="contents__subimage__container">
                                <Image src={contentItem.image2} fill sizes="100%" alt="contents-image" ></Image>
                            </div>
                            <div className="contents__text">
                                <h4 className="contents__text__headline">
                                    {contentItem.headline}
                                </h4>
                                <p className="contents__text__description">
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