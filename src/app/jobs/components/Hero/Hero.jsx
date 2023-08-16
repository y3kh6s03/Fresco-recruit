import Image from "next/image";
import "src/app/jobs/components/Hero/Hero.scss";


export const Hero = () => {
    return (
        <div className="hero container">
            <h1 className="hero__page__title">
                Jobs
                <span className="hero__page__jatitle">
                    フレスコ・カンパニーの仕事
                </span>
            </h1>
            <div className="hero__inner">
                <div className="hero__image__container">
                    <Image src="/images/business/kyushoku.jpg" fill sizes="100%" alt="hero-image" loading="eager"></Image>
                </div>
                <div className="hero__contents">
                    <h2 className="hero__contents__headline">
                        一人一人が大切な役割として活躍できる仕事
                    </h2>
                    <p>
                        フレスコのさまざまな職種は、組織の目標達成や成長、顧客満足度の向上など、多岐にわたる影響をもたらす重要な要素となります。異なる職種が協力し、連携して働くことで、組織全体がより強力で効果的な存在となるのです。
                    </p>
                </div>
            </div>
        </div>
    )
}

