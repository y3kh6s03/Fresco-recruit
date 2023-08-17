import Image from "next/image"

import "src/app/peoples/components/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">
            <h1 className="hero__page__title">
                People
                <span className="hero__page__jatitle">
                    フレスコ・カンパニーの人
                </span>
            </h1>
            <div className="hero__inner">
                <div className="hero__image__container">
                    <Image src="/images/business/working.jpg" fill sizes="100%" alt="hero-image" loading="eager"></Image>
                </div>
                <div className="hero__contents">
                    <p>
                        フレスコ・カンパニーで働くメンバーの仕事内容や想い、社員それぞれのまっすぐな思いを、ぜひ見てみてください。
                    </p>
                </div>
            </div>
            <div className="circle__container">
                <svg className="circleText" viewBox="0 0 100 100">
                    <path id="circle" className="circleText__circle" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                    <text className="circleText__text">
                        <textPath href="#circle">
                            Dietitian. Professional Chef. Headquarters.
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    )
}