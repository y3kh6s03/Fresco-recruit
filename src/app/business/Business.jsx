"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image"
import Lenis from "@studio-freight/lenis"


import "src/app/business/Business.scss"



export const Business = ({ contentItems }) => {

    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            console.log(e)
        })

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
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 600])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 1800])

    return (
        <div ref={container} className="business__wrapper">
            {
                contentItems.map((contentItem) => {
                    return (
                        <section key={contentItem.title} className={`business container ${contentItem.title.toLowerCase()}`} id={contentItem.title.toLowerCase()}>
                            <div className="business__title">
                                <h2>{contentItem.title}
                                    <span>{contentItem.jaTitle}</span>
                                </h2>
                            </div>
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
                                <h4 className="business__text__headline">
                                    {contentItem.headline}
                                </h4>
                                <p className="business__text__description">
                                    {contentItem.description}
                                </p>
                            </div>
                        </section>
                    )
                })
            }

        </div>
    )
}