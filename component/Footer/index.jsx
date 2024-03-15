'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'
import FooterLogo from "../../public/images/footer-logo.svg";
import { usePathname } from 'next/navigation'
const Footer = () => {


  const GetCurrentYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
}

  const pathname = usePathname()
  const ServicesLinks = [
    {
      text : "Digital Transformation",
      link : "/services/digital-transformation"
    },
    {
      text : "ERP Transformation & Support",
      link : "/services/erp-transformation-support"
    },
    {
      text : "Digital Workplace (DWP)",
      link : "/services/digital-workplace"
    },
    {
      text : "Infrastructure and Cloud",
      link : "/services/infrastructure-cloud"
    },
    ,{
      text : "Strategic Staffing",
      link : "/services/strategic-staffing"
    }
  ]
  const SolutionsLinks = [
    {
      text : "TRUPlan",
      link : "/solutions/truplan"
    },
    {
      text : "TRUConnect",
      link : "/solutions/truconnect"
    },
    {
      text : "TRUTransformation",
      link : "/solutions/trutransform"
    },
    {
      text : "TRUWorkplace",
      link : "/solutions/truworkplace"
    },
    {
      text : "TRUAMS",
      link : "/solutions/truams"
    },
    {
      text : "TRUArchival",
      link : "/solutions/truarchival"
    }
  ]
  return (
    <>
      <footer className={`${styles.footerSection} `}>
        <div className={styles.footerWrapper}>
          <div className="container">
              <div className={`${styles.footerRow} customizeFormSec`}>
                <div className={styles.footerDetails}>
                  <div className={styles.aboutFooter}>
                      <div className={styles.footerLogo}>
                        <Link href="/" className={styles.FooterLogo} title="RigvedIT">
                          <Image src={FooterLogo} alt='rigvedIT' />
                        </Link>
                      </div>
                      {/* <p>Transform your business through digital excellence with our skilled team, dedicated to empowering innovation, growth, and lasting success.</p> */}
                      <ul className={styles.footerSocialLink}>
                        <li>
                          <Link href={'https://www.facebook.com/Multiqos/'} target='_blank'  className={styles.roundIcon}><i className='icon-facebook'></i></Link>
                        </li>
                        <li>
                          <Link href={'https://www.linkedin.com/company/multiqos/'} target='_blank' className={styles.roundIcon}><i className='icon-linkedin'></i></Link>
                        </li>
                        <li>
                          <Link href={'https://twitter.com/multiqos'} target='_blank' className={styles.roundIcon}><i className='icon-twitter'></i></Link>
                        </li>
                        <li>
                          <Link href={'https://www.instagram.com/'} target='_blank' className={styles.roundIcon}><i className='icon-instagram'></i></Link>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className={styles.footerMenuLinks}>
                  <div className={`${styles.footerCols} ${styles.footerLink}`}>
                    <h3>Services</h3>
                    <ul>
                      {ServicesLinks.map((fc, i) => {
                        console.log(fc.link , "Link from map");
                        return (
                          <li key={i}
                          className={`${fc.link == pathname ? styles.active:""}`}
                          >
                            <Link href={fc.link}>{fc.text}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className={`${styles.footerCols} ${styles.footerLink}`}>
                  <h3>Solutions</h3>
                    <ul>
                      {SolutionsLinks.map((fc, i) => {

                        return (
                          <li key={i}
                          className={`${fc.link == pathname ? styles.active:""}`}
                          >
                            <Link href={fc.link}>{fc.text}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        <div className={styles.copyrightFooter}>
          <div className='container'>
            <div className={styles.copyrightWrapper}>
              <p>© {GetCurrentYear()} rigvedit.Copyright and rights reserved</p>
              <ul className={styles.wrapLinks}>
                <li>
                  <Link href='/'>Terms and Condtions</Link>
                </li>
                <li>
                  <Link href='/'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      </footer>
    </>
  )
}

export default Footer