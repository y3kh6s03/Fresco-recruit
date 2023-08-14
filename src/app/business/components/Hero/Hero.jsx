import Image from "next/image"

import "src/app/business/components/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">
            <h1 className="hero__page__title">
                Business
                <span className="hero__page__jatitle">
                    フレスコ・カンパニーの事業
                </span>
            </h1>
            <div className="hero__image__container">
                <Image src="/images/business/working.jpg" fill sizes="100%" alt="hero-image" loading="eager"></Image>
            </div>
            <div className="hero__contents">
                <h2 className="hero__contents__headline">
                    事業展開の展望ヘッドライン
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nostrum perspiciatis libero possimus placeat accusantium nobis minima culpa eos temporibus, quisquam architecto deserunt. Asperiores ipsa atque a vel ratione suscipit?
                </p>
            </div>
        </div>
    )
}