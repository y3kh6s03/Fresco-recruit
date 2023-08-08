import { Button } from "@/app/components/Button/Button";
import Image from "next/image";
import "src/app/components/Home/Jobs/Jobs.scss";

export const Jobs = () => {
    return (
        <section className="job container">

            <svg className="circleText" viewBox="0 0 100 100">
                <path id="circle" className="circleText__circle" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                <text className="circleText__text">
                    <textPath href="#circle">
                        Dietitian.RegisteredDietician. Professional Chef.
                    </textPath>
                </text>
            </svg>



            <h3 className="section__title">仕事について</h3>
            <div className="job__card">
                <span className="job__card__num">
                    1
                </span>
                <div className="job__card__title">
                    <span>
                        調理師
                    </span>
                    <h3>
                        Professional Chef
                    </h3>
                </div>
                <Button></Button>
            </div>
            <div className="job__card">
                <span className="job__card__num">
                    2
                </span>
                <div className="job__card__title">
                    <span>
                        栄養士/ 管理栄養士
                    </span>
                    <h3>
                        Dietician
                    </h3>
                </div>
                <Button></Button>
            </div>
            <div className="job__card">
                <span className="job__card__num">
                    1
                </span>
                <div className="job__card__title">
                    <span>
                        調理師
                    </span>
                    <h3>
                        Professional Chef
                    </h3>
                </div>
                <Button></Button>
            </div>
            <div className="job__img__left">
                <Image src="/images/home/salad.png" fill alt="job__img"></Image>
            </div>
            <div className="job__img__right">
                <Image src="/images/home/pumpkin.png" fill alt="job__img"></Image>
            </div>
        </section>
    )
}