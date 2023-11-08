"use client"

import { motion } from 'framer-motion';
import { usePathname } from "next/navigation"
import { useEffect } from 'react';

import "@/app/styles/globals.scss"
import "/src/app/components/MotionWrapper/MotionWrapper.scss"


import Lenis from "@studio-freight/lenis"


export const MotionWrapper = ({ children }) => {

    const pathName = usePathname()


    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

    }, [])



    return (
        <motion.main
        key={pathName}
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:1}}
         >
            <motion.div
                className="slide-path"
                initial={{ clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" }}
                animate={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
                transition={{ duration: 1, ease: [.22, 1, .36, 1] }}
            >
                <motion.div
                    initial={{ scaleY: "100%" }}
                    animate={{ scaleY: 0 }}
                    transition={{ duration: 1, delay: 1, ease: [.22, 1, .36, 1] }}
                    className="slide-in"
                >
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: 1 }}
            >
                {children}
            </motion.div>
        </motion.main>
    )
}