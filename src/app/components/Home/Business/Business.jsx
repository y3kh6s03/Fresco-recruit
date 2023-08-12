import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import "src/app/components/Home/Business/Business.scss";


export const Business = () => {
    return (
        <section className="business container">
            <h3 className="section__title">事業について</h3>
            <div className="business__inner">
                <h4 className="business__inner__title">
                    Lorem ipsum dolor sit amet.
                </h4>
                <div className="business__inner__content">
                    事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。事業展開の方針を記載します。
                </div>
                <Button></Button>
            </div>
            <div className="business__img__container">
                <Image src="/images/business/deco_img13.jpg" fill sizes="100%" alt="business-image"></Image>
            </div>
        </section>
    )
}