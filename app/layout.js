import { Geologica } from "next/font/google";
//import { DolceVitaHeavy } from '@/public/fonts/DolceVitaHeavy-Bold.woff'
import "./globals.scss";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
//import localFont from 'next/font/local'
import {DolceVitaHeavy} from '../utils/customFonts'


const geologica = Geologica({
  weight:["300","400","500"],
  subsets: ['latin'],
  display: "swap",
  variable: "--font-geologica"
})

export const metadata = {
  title: "Rigved ",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text men book.",
  siteName: 'Rigved',
  icons: {
    icon: "./favicon.ico"
  },
  openGraph: {
    title: 'Rigved ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text men book.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_OG_PURPOSE}/images/namascapeLogo.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_OG_PURPOSE}/images/namascapeLogo.png`,
        width: 1800,
        height: 1600,
        alt: 'Rigved',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geologica.variable} ${dolceVitaHeavy.variable}`}>{children}</body> */}
      <body className={`${geologica.variable} ${DolceVitaHeavy.variable}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
