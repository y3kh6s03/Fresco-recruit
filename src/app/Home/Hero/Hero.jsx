import { Scroll } from "@/app/components/Scroll/Scroll"
import { TextAnimation } from "@/app/components/TextAnimation/TextAnimation"
import Image from "next/image"
import "src/app/Home/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">

            <TextAnimation texts={"2025 RECRUIT SITE"} num={1}/>

            <div className="hero__text">
                <h1 className="hero__text__headline">
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