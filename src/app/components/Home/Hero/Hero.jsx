import { Scroll } from "@/app/components/Scroll/Scroll"
import Image from "next/image"
import "src/app/components/Home/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero__title">
                <span>
                  2025 RECRUIT SITE
                </span>
                <h1>
                    ここで働く<br />
                    あなたが輝く
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