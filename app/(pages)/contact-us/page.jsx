import Banner from '@/component/Banner'
import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import ContactForm from '@/component/ContactForm'
import FormBanner from '@/public/images/contactpgBnr.svg'
import Image from 'next/image'
import {ContactUsPageContent} from '../../../utils/PagesJson/ContactUsPageContent'


const page = () => {
  return (
    <>
    <main className='noContactform'>
        <Banner
            title={ContactUsPageContent?.banner?.title}
            content={
              ContactUsPageContent?.banner?.desc
            }
            imagepath={ContactUsPageContent?.banner?.imgSRC['src']}
        />

        <section className={styles.contactInfoSection}>
            <div className='container'>
              <div className={styles.contactInfoRow}>

                <div className={styles.contactInfoCols}>
                  <div className={styles.contactInfoBoxwrap}>
                    <div className={styles.contactInfoIcon}>
                      <i className="icon-email"></i>
                    </div>
                    <p>Email Address</p>
                    <Link href={'mailto:info@rigvedit.com'}>info@rigvedit.com</Link>
                  </div>
                  <Link href={'mailto:info@rigvedit.com'} className={styles.link}></Link>
                </div>
                <div className={styles.contactInfoCols}>
                  <div className={styles.contactInfoBoxwrap}>
                    <div className={styles.contactInfoIcon}>
                      <i className="icon-call"></i>
                    </div>
                    <p>Phone Number</p>
                    <Link href={'tel:+912246176951'}>+91 22 4617 6951</Link>
                  </div>
                  <Link href={'tel:+912246176951'} className={styles.link}></Link>
                </div>
                <div className={styles.contactInfoCols}>
                  <div className={styles.contactInfoBoxwrap}>
                    <div className={styles.contactInfoIcon}>
                      <i className="icon-location"></i>
                    </div>
                    <p>Adddress</p>
                    <Link href='https://maps.app.goo.gl/VfNR4s7YakVxKj76A' target='_blank'>Unit No. 405-406, Building-2, Sector-1, Millennium Business Park, Mahape, Navi Mumbai – 400 710.</Link>
                  </div>
                  <Link href={'https://maps.app.goo.gl/VfNR4s7YakVxKj76A'} target='_blank' className={styles.link}></Link>
                </div>

              </div>
            </div>
        </section>


        <section className={`${styles.contactPgSection} pb150`}>
            <div className='container'>
              <div className={styles.contactPgRow}>
                <div className={styles.contactPgLeft}>
                  <Image src={FormBanner} alt='Form Banner'/>
                </div>
                <div className={styles.contactPgRight}>
                    <div className={styles.contactFormWrap}>
                      <ContactForm/>
                    </div>
                </div>
              </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default page
