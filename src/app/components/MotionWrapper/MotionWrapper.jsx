"use client"

import { motion } from 'framer-motion';
import { usePathname } from "next/navigation"
import { useEffect } from 'react';

import "@/app/styles/globals.scss"


import Lenis from "@studio-freight/lenis"


export const MotionWrapper = ({ children }) => {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

    }, [])

    const pathName = usePathname()
    const childrenPathName = `children1${pathName}`
    console.log(childrenPathName)

    return (
        <motion.div
            key={pathName}
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .5, ease: "easeInOut", type: "spring" }}
        >


            {children}


            <motion.div
                key={`children1${pathName}`}
                className="slide-in"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            </motion.div>
        </motion.div>
    )
}