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

// const dolceVitaHeavy = localFont({
//   src: [
//     {
//       path: './DolceVitaHeavy-Bold.woff',
//     },
//   ],
// })

export const metadata = {
  title: "Rigved IT",
  description: "A Rigved Tech Company",
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
