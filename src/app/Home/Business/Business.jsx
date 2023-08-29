import { Button } from "@/app/components/Button/Button";
import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";

import Image from "next/image";
import Link from "next/link";

import "src/app/Home/Business/Business.scss";


export const Business = () => {

    const business = "/business/";
    console.log(business)

    return (
        <section className="home__business container">
            <ScrollAnimation>
                <h3 className="section__title">
                    事業について
                </h3>
            </ScrollAnimation>
            <div className="home__business__inner">
                <h4 className="home__business__inner__title">
                    Lorem ipsum dolor sit amet.
                </h4>
                <div className="home__business__inner__content">
                    事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。
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