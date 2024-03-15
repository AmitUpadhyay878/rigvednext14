"use client"
import React from 'react'
import styles from './Contactus.module.scss'
import ContactusFormSection from '../ContactusFormSection'
import SmallTitle from '../SmallTitle'
import TitleContent from '@/component/TitleContent'
const Contactus = () => {
  return (
    <section className={`${styles.contactUssection} pt150`}>
        <div className='container'>
            <SmallTitle title='Contact Us'/>
            <TitleContent title={'get in touch'} content={'Whether you have inquiries, need assistance, or wish to explore collaboration opportunities, our dedicated team is ready to respond promptly and help you thrive in the digital realm.'}/>
            <ContactusFormSection/>
        </div>
    </section>
  )
}

export default Contactus