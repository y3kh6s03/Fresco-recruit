"use client"

import { motion } from 'framer-motion';
import { usePathname } from "next/navigation"
import { useEffect } from 'react';

import Lenis from "@studio-freight/lenis"


const MotionWrapper = ({ children }) => {

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

    const pathName = usePathname()

    return (
        <>
            {/* <AnimatePresence> */}
            <motion.div
                key={pathName}
                initial={{ opacity: 0, y: 500}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >
                {children}
            </motion.div>
            {/* </AnimatePresence> */}
        </>
    )
}

export default MotionWrapper;