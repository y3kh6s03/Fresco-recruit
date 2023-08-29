import { HeroTitleAnimation } from "@/app/Home/Hero/HeroTitleAnimation/HeroTitleAnimation"
import { Scroll } from "@/app/components/Scroll/Scroll"
import Image from "next/image"
import "src/app/Home/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">


            <div className="hero__text">
                <HeroTitleAnimation texts={"2025 RECRUIT SITE"} num={1} />
                <h1 className="hero__text__headline">
                    <HeroTitleAnimation texts={"ここで働く。"} num={2} />
                    <HeroTitleAnimation texts={"あなたが輝く。"} num={3} />
                </h1>
            </div>
            <div className="hero__inner">
                <div className="hero__image">
                    <div className="hero__image__img"></div>
                    <div className="hero__image__img"></div>
                    <div className="hero__image__img"></div>
                </div>
                <Scroll />
            </div>
            <div className="hero__logo">
                <Image src="/images/logo.png" fill alt="corp-logo"></Image>
            </div>

        </div>
    )
}