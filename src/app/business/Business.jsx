"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image"
import Lenis from "@studio-freight/lenis"


import "src/app/business/Business.scss"

import { ScrollXAnimation } from "@/app/components/ScrollAnimation/ScrollAnimation";




export const Business = ({ contentItems }) => {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

    }, [])

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 450])


    return (
        <div ref={container} className="business__wrapper">
            {
                contentItems.map((contentItem) => {
                    return (
                        <section key={contentItem.title} className={`business container ${contentItem.title.toLowerCase()}`} id={contentItem.title.toLowerCase()}>
                            <ScrollAnimation>
                                <div className="business__title">
                                    <h2>{contentItem.title}
                                        <span>{contentItem.jaTitle}</span>
                                    </h2>
                                </div>
                            </ScrollAnimation>
                            <motion.div
                                style={{ y: y1 }}
                                className="business__image__container">
                                <Image src={contentItem.image1} fill sizes="100%" alt="business-image"></Image>
                            </motion.div>
                            <motion.div
                                style={{ y: y2 }}
                                className="business__subimage__container">
                                <Image src={contentItem.image2} fill sizes="100%" alt="business-image"></Image>
                            </motion.div>
                            <div className="business__text">
                                <ScrollXAnimation>
                                    <h4 className="business__text__headline">
                                        {contentItem.headline}
                                    </h4>
                                </ScrollXAnimation>
                                <ScrollXAnimation>
                                    <p className="business__text__description">
                                        {contentItem.description}
                                    </p>
                                </ScrollXAnimation>
                            </div>
                        </section>
                    )
                })
            }

        </div>
    )
}