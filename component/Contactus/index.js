"use client"
import React from 'react'
import styles from './Contactus.module.scss'
import ContactusFormSection from '../ContactusFormSection'
import SmallTitle from '../SmallTitle'
import TitleContent from '@/component/TitleContent'
import {ContactUsPageContent} from '../../utils/PagesJson/ContactUsPageContent'
import { usePathname } from 'next/navigation'
const Contactus = () => {
  const pathname = usePathname()

  const restrictPath=[
    '/'
  ]

  return (
    <section className={`${styles.contactUssection} ${restrictPath.includes(pathname) ?"" :"pt150"} `}>
        <div className='container'>
            <SmallTitle title={ContactUsPageContent?.compContent?.title}/>
            <TitleContent title={ContactUsPageContent?.compContent?.caption} content={ContactUsPageContent?.compContent?.desc}/>
            <ContactusFormSection />
        </div>
    </section>
  )
}

export default Contactus