

import Image from "next/image";
import "src/app/components/Hero/Hero.scss";


export const Hero = ({ heroItem }) => {
    return (
        <div className="hero">
            <h1 className="hero__page__title">
                {heroItem.title}
                <span className="hero__page__jatitle">
                    {heroItem.jaTitle}
                </span>
            </h1>
            <div className="hero__inner">
                <div className="hero__image__container">
                    <Image src={heroItem.image} fill sizes="100%" alt="hero-image" loading="eager" priority></Image>
                </div>
                <div className="hero__contents">
                    <h2 className="hero__contents__headline">
                        {heroItem.headline}
                    </h2>
                    <p>
                        {heroItem.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

