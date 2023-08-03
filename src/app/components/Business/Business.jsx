import Image from "next/image";
import "src/app/components/Business/Business.scss";

export const Business = () => {
    return (
        <section className="business container">
            <h3 className="business__title">事業について</h3>
            <div className="business__inner">
                <div className="business__inner__content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime architecto sequi quia autem! Nobis blanditiis vero quo voluptatem assumenda ex.
                </div>
            </div>
            <div className="business__img__container">
                <Image src="/images/home/mailchimp-Vc2dD4l57og-unsplash.jpg" fill alt="business-image"></Image>
            </div>
        </section>
    )
}