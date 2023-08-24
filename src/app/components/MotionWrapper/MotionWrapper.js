"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation"

const MotionWrapper = ({ children }) => {

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