
import { Button } from "@/app/components/Button/Button";
import { ScrollAnimation, ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import "src/app/Home/Jobs/Jobs.scss";



export const Jobs = ({ jobs }) => {
    return (
        <section className="job container">

            <svg className="circleText" viewBox="0 0 100 100">
                <path id="circle" className="circleText__circle" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                <text className="circleText__text">
                    <textPath href="#circle">
                        Dietitian. Professional Chef. Headquarters.
                    </textPath>
                </text>
            </svg>



            <ScrollAnimation>
                <h3 className="section__title">仕事について</h3>
            </ScrollAnimation>
            <div className="job__container">
                {jobs.map((job) => {
                    return (
                        <ScrollXAnimation  key={job.num} >
                            <div className="job__card">
                                <span className="job__card__num">
                                    {job.num}
                                </span>
                                <div className="job__card__title">
                                    <span>
                                        {job.jaType}
                                    </span>
                                    <h3>
                                        {job.enType}
                                    </h3>
                                </div>
                                <Button href={job.name}/>
                                <div className="job__card__image">
                                    <Image src={job.image} fill sizes="100%" alt="job-image"></Image>
                                </div>
                            </div>
                        </ScrollXAnimation>
                    )
                })}
            </div>

            <div className="job__img__left">
                <Image
                    src="/images/home/salad.png"
                    fill
                    sizes="100%"
                    alt="job__img"></Image>
            </div>
            <div className="job__img__right">
                <Image src="/images/home/pumpkin.png" fill sizes="100%" alt="job__img"></Image>
            </div>
        </section>
    )
}