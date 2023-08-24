"use client"

import { Button } from '@/app/components/Button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Image from "next/image";

import "src/app/Home/People/People.scss"
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';


export const People = ({ peoples }) => {

    return (
        <section className="people">
            <h2 className="section__title">
                フレスコ・カンパニーの人
            </h2>

            <div className="swiper__container">
                <Swiper
                    modules={[Autoplay]}
                    // slidesPerGroup={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={8000}
                    spaceBetween={10}
                    slidesPerView={1.3}
                    className="mySwiper"
                    loop={true}

                    breakpoints={{
                        600: {
                            width: 600,
                            slidesPerView: 1.3,
                        },
                        960: {
                            width: 960,
                            slidesPerView: 1.3,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 1.7,
                        },
                    }}
                >
                    {
                        peoples.map((people) => {
                            return (
                                <SwiperSlide key={people.image}>
                                    <div className="people__card">
                                        <Link href={people.href}>
                                            <div className="people__card__image">
                                                <Image src={people.image} fill sizes="100%" alt={people.num}></Image>
                                            </div>
                                            <div className="people__card__num">
                                                <span>{people.num}</span>
                                            </div>
                                            <div className="people__card__contents">
                                                <h3>
                                                    {people.headline}
                                                </h3>
                                                <p>
                                                    担当部署 : {people.position} <br />
                                                    担当業務 : {people.job}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}