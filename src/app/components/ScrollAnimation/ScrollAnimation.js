"use client"

import { useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


export const ScrollAnimation = ({ children }) => {

    const variants = {
        hidden: {
            opacity: 0,
            // x: 100,
            y: 100,
            // scale: 0
        },
        visible: {
            opacity: 1,
            // scale: 1,
            x: 0,
            y: 0,
            transition: {
                duration: .8,
                ease: "easeInOut",
                type: "spring"

            }
        }
    }

    const control = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="scroll__container"
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    )
}


export const ScrollXAnimation = ({ children }) => {

    const variants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .8,
                type: "spring"
            }
        }
    }

    const control = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="scroll__X__container"
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    )
}