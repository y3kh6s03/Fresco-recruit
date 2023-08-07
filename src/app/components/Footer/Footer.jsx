import Link from "next/link"

import "src/app/components/Footer/Footer.scss"

Link

export const Footer = () => {
    return (
        <div className="footer">
            <nav className="footer__nav">
                <ul>
                    <Link href="#">Footer</Link>
                </ul>
            </nav>
        </div>
    )
}