import { Scroll } from "@/app/components/Scroll/Scroll"
import Image from "next/image"
import "src/app/components/Home/Hero/Hero.scss"

export const Hero = () => {
    return (
        <div className="hero container">
            <h1 className="hero__title">
                ここで働く<br />
                あなたが輝く
            </h1>
            <div className="hero__inner">
                <div className="hero__image">
                    <div className="hero__image__img"></div>
                    <div className="hero__image__img"></div>
                    <div className="hero__image__img"></div>
                </div>
                    <Scroll />
            </div>
        </div>
    )
}