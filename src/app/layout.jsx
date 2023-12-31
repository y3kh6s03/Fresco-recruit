

import { MotionWrapper } from '@/app/components/MotionWrapper/MotionWrapper'

import { Footer } from '@/app/components/Footer/Footer';
import { NavBar } from './components/Navbar/Navbar';

import 'src/app/styles/globals.scss';
import { Noto_Sans, Noto_Sans_JP } from 'next/font/google';

import footerItems from '@/app/components/Footer/Footer.json';
import navbarItems from '@/app/components/Navbar/Navbar.json';


const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

const noto = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});



export const metadata = {
  title: 'Fresco Company 2025 Recruit Site',
  // description: '有限会社フレスコ',
}

export default function RootLayout({ children }) {

  return (
    <html lang="ja" className={`${noto.variable} ${notojp.variable}`}>
      <body>
        <div className="wrapper">
          <NavBar navbarItems={navbarItems}></NavBar>
          <MotionWrapper>
            {children}
          </MotionWrapper>
          <Footer footerItems={footerItems}></Footer>
        </div>
      </body>
    </html>
  )
}
