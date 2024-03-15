import { Geologica } from "next/font/google";
//import { DolceVitaHeavy } from '@/public/fonts/DolceVitaHeavy-Bold.woff'
import "./globals.scss";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
//import localFont from 'next/font/local'
import bannerimage from '../public/images/bannerimage.png'
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
  //  image:`../public/images/bannerimage.png`,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Rigved ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text men book.",
    images: [
      {
        url: bannerimage,
        width: 800,
        height: 600,
      },
      {
        url: bannerimage,
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
