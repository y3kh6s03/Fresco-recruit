"use client"

import Image from "next/image";
import Link from "next/link"

import { useState } from "react";

import "src/app/components/Footer/Footer.scss"


export const Footer = ({ footerItems }) => {

    const [selected, setSlected] = useState(null);

    const footerToggle = (i) => {
        if (selected === i) {
            return setSlected(null)
        }
        return setSlected(i)
    }

    return (
        <div className="footer">
            <nav className="mobile nav">
                {
                    footerItems.map((footerItem, i) => {
                        return (
                            <ul key={i}
                                className="nav__ul"
                                onMouseEnter={() => footerToggle(i)}>
                                <li className="nav__ul__item">
                                    <Link href={footerItem.mainLink}>
                                        <div>
                                            <p>
                                                {footerItem.title}
                                            </p>
                                            <span>
                                                {footerItem.jaTitle}
                                            </span>
                                        </div>
                                    </Link>
                                    {
                                        footerItem.types.map((type) => {
                                            return (
                                                <ul key={type.name}
                                                    className={selected === i ? "open" : ""}>
                                                    <li>
                                                        <Link href={type.url}>{type.name}</Link>
                                                    </li>
                                                </ul>
                                            )
                                        })}

                                </li>
                            </ul>
                        )
                    })
                }
            </nav>

            <div className="info">
                <div className="info__contents">
                    <div className="info__contents__image">
                        <Image src="/images/fresco_logo.png" alt="logo" fill sizes="100%"></Image>
                    </div>
                    <p className="info__contents__address">
                        381-2203 <br />
                        長野県長野市真島町川合263-3
                    </p>
                    <p className="info__contents__tell">
                        TEL  026-247-8770
                    </p>
                    <p className="info__contents__fax">
                        FAX  026-247-7881
                    </p>
                </div>
            </div>

            <small>
                &copy; 2023 fresco company. All rights reserved.
            </small>
        </div>
    )
}