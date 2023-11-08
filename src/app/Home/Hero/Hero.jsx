import { HeroTitleAnimation } from "@/app/Home/Hero/HeroTitleAnimation/HeroTitleAnimation"
import { Scroll } from "@/app/components/Scroll/Scroll"
import Image from "next/image"
import "src/app/Home/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="home__hero container">


            <div className="home__hero__text">
                <HeroTitleAnimation texts={"2025 RECRUIT SITE"} num={1} />
                <h1 className="home__hero__text__headline">
                    <HeroTitleAnimation texts={"食で"} num={2} />
                    <HeroTitleAnimation texts={"未来を変えていく。"} num={3} />
                </h1>
            </div>
            <div className="home__hero__inner">
                <div className="home__hero__image">
                    <div className="home__hero__image__img"></div>
                    <div className="home__hero__image__img"></div>
                    <div className="home__hero__image__img"></div>
                </div>
                <Scroll />
            </div>
            <div className="home__hero__logo">
                <Image src="/images/logo.png" fill alt="corp-logo"></Image>
            </div>

        </div>
    )
}