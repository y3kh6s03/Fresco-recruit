import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import "src/app/components/Home/Jobs/Jobs.scss";
Image

export const Jobs = () => {
    return (
        <section className="jobs container">
            <h3 className="section__title">仕事について</h3>
            <div className="jobs__img__container">
                <Image src="/images/home/mailchimp-Vc2dD4l57og-unsplash.jpg" fill alt="jobs-image"></Image>
            </div>
            <div className="jobs__inner">
                <h4 className="jobs__inner__title">
                    Lorem ipsum dolor sit amet.
                </h4>
                <div className="jobs__inner__content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime architecto sequi quia autem! Nobis blanditiis vero quo voluptatem assumenda ex.
                </div>
                <Button></Button>
            </div>

            <div className="jobs__img__container2">
                <Image src="/images/home/mailchimp-Vc2dD4l57og-unsplash.jpg" fill alt="jobs-image"></Image>
            </div>
        </section>
    )
}