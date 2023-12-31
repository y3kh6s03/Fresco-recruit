'use client'

import Image from "next/image"
import Link from "next/link"
import "src/app/components/Navbar/Navbar.scss"
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"



export const NavBar = ({ navbarItems }) => {

    const [menuClass, setMenuClass] = useState(false);

    const path = usePathname();

    const onMenuOpen = () => {
        setMenuClass((prev) => !prev);
    }

    return (
        <>
            <div className="pc__header">
                <nav className="pc__nav">
                    <div className="pc__nav__title">
                        <Link href="/">
                            <Image src="/images/fresco_logo.png" width='250' height='35' alt="header-logo" priority></Image>
                            <h2>2025 Recruit Site</h2>
                        </Link>
                    </div>
                    <ul className="pc__nav__ul">
                        {
                            navbarItems.map((navbarItem) => {
                                return (
                                    <motion.li key={navbarItem.enPageName} className={`${navbarItem.href === path ? "pc__nav__li select__pc__nav__li" : "pc__nav__li"}`} whileHover={{scale: 1.1}}>
                                        <Link href={navbarItem.href}>
                                            {navbarItem.enPageName}<br />
                                            <span>{navbarItem.jaPageName}</span>
                                        </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </nav >
            </div>
            <div className="mobile__header">
                <nav className={`mobile__nav ${menuClass ? 'mobile__nav__show' : ''}`}>
                    <div className="mobile__nav__title">
                        <Link href="/">
                            <Image src="/images/fresco_logo.png" width='150' height='30' alt="mobile-logo"></Image>
                            <h2>2025 Recruit Site</h2>
                        </Link>
                    </div>

                    <div className="mobile__menu__icon" onClick={onMenuOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>



                    <ul className="mobile__nav__ul" onClick={onMenuOpen}>
                        {
                            navbarItems.map((navbarItem) => {
                                return (
                                    <motion.li key={navbarItem.enPageName} className={`${navbarItem.href === path ? "mobile__nav__li select__mobile__nav__li" : "mobile__nav__li"}`} whileHover={{scale: 1.1}}>
                                        <Link href={navbarItem.href} >
                                            {navbarItem.enPageName}<br />
                                            <span>{navbarItem.jaPageName}</span>
                                        </Link>
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </nav >
            </div>
        </>
    )
}
