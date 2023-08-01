import Image from "next/image"
import Link from "next/link"
import "src/app/components/Navbar/Navbar.scss"



export const NavBar = () => {
    return (
        <>
            <div className="pc__header">
                <nav className="pc__nav">
                    <div className="pc__nav__title">
                        <Image src="/images/fresco_logo.png" width='150' height='25'></Image>
                        <h2>Recruit Site</h2>
                    </div>
                    <ul className="pc__nav__ul">
                        <li className="pc__nav__li">
                            <Link href='#'>
                                About<br />
                                <span>会社概要</span>
                            </Link>
                        </li>
                        <li className="pc__nav__li">
                            <Link href='#'>
                                Business<br />
                                <span>事業について</span>
                            </Link>
                        </li>
                        <li className="pc__nav__li">
                            <Link href='#'>
                                Works<br />
                                <span>仕事について</span>
                            </Link>
                        </li>
                        <li className="pc__nav__li">
                            <Link href='#'>
                                People<br />
                                <span>働く人について</span>
                            </Link>
                        </li>
                        <li className="pc__nav__li">
                            <Link href='#'>
                                Recruit<br />
                                <span>求人情報</span>
                            </Link>
                        </li>
                    </ul>
                </nav >
            </div>
            <div className="mobile__header">
                <nav className="mobile__nav">
                    <div className="mobile__nav__title">
                        <Image src="/images/fresco_logo.png" width='150' height='25'></Image>
                        <h2>Recruit Site</h2>
                    </div>

                    <div className="mobile__icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className="mobile__nav__ul">
                        <li className="mobile__nav__li">
                            <Link href='#'>
                                About<br />
                                <span>会社概要</span>
                            </Link>
                        </li>
                        <li className="mobile__nav__li">
                            <Link href='#'>
                                Business<br />
                                <span>事業について</span>
                            </Link>
                        </li>
                        <li className="mobile__nav__li">
                            <Link href='#'>
                                Works<br />
                                <span>仕事について</span>
                            </Link>
                        </li>
                        <li className="mobile__nav__li">
                            <Link href='#'>
                                People<br />
                                <span>働く人について</span>
                            </Link>
                        </li>
                        <li className="mobile__nav__li">
                            <Link href='#'>
                                Recruit<br />
                                <span>求人情報</span>
                            </Link>
                        </li>
                    </ul>
                </nav >
            </div>
        </>
    )
}