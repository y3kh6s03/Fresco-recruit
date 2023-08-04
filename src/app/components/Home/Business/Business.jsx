import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import "src/app/components/Home/Business/Business.scss";


export const Business = () => {
    return (
        <section className="business container">
            <h3 className="section__title">事業について</h3>
            <div className="business__img__container">
                <Image src="/images/home/mailchimp-Vc2dD4l57og-unsplash.jpg" fill alt="business-image"></Image>
            </div>
            <div className="business__inner">
                <h4 className="business__inner__title">
                    Lorem ipsum dolor sit amet.
                </h4>
                <div className="business__inner__content"> Maxime architecto sequi quia autem! Nobis blanditiis vero quo voluptatem assumenda ex.
                </div>
                <Button></Button>
            </div>
            <div className="business__img__container2">
                <Image src="/images/home/mailchimp-Vc2dD4l57og-unsplash.jpg" fill alt="business-image"></Image>
            </div>
        </section>
    )
}