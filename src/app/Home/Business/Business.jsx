import { Button } from "@/app/components/Button/Button";
import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";

import Image from "next/image";
import Link from "next/link";

import "src/app/Home/Business/Business.scss";


export const Business = () => {

    return (
        <section className="home__business container">
            <ScrollAnimation>
                <h3 className="section__title">
                    事業について
                </h3>
            </ScrollAnimation>
            <div className="home__business__inner">
                <h4 className="home__business__inner__title">
                    食べるから人生を変える
                </h4>
                <div className="home__business__inner__content">
                    フレスコカンパニーは、北信地域を中心に施設給食事業、ケータリング事業などを行うフードビジネスカンパニーです。みなさまの笑顔をつくるあらゆる食体験を提供しています。私たちは、”食べる”を通じて今を生きる私たちや未来の子供たちに笑顔あふれる人生を提供しています。
                </div>
                <Link href="/business">
                    <Button />
                </Link>
            </div>

            <ScrollXAnimation>
                <div className="home__business__img__container">
                    <Image src="/images/business/deco-img.jpg" fill sizes="100%" alt="business-image"></Image>
                </div>
            </ScrollXAnimation>
        </section>
    )
}