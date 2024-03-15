'use client'
import React from 'react'
import styles from './contactusformsection.module.scss'
import InputText from '../InputText'
import Button from '../Button'
import Contactus from '../Contactus'
import ContactForm from '../ContactForm'

const ContactusFormSection = () => {

  return (
    <>
    <div className={styles.contactFormWrap}>
      <div className={styles.contactFormRow}>
        <div className={styles.contactFormLeft}>
          <div className={styles.contactFormLeftContent}>
            <h3>Contact Infomation</h3>
            <div className={styles.contactSocilWrap}>
              <div className={styles.contactSocilBox}>
                <div className={styles.contactSocilIcon}>
                  <i className="icon-email"></i>
                </div>
                <div className={styles.contactSocilRight}>
                  <p>Email Address</p>
                  <a href='mailto:info@rigvedit.com'>info@rigvedit.com</a>
                </div>
              </div>
              <div className={styles.contactSocilBox}>
                <div className={styles.contactSocilIcon}>
                  <i className="icon-call"></i>
                </div>
                <div className={styles.contactSocilRight}>
                  <p>Phone Number</p>
                  <a href='tel:+912246176951'>+91 22 4617 6951</a>
                </div>
              </div>
              <div className={styles.contactSocilBox}>
                <div className={styles.contactSocilIcon}>
                  <i className="icon-location"></i>
                </div>
                <div className={styles.contactSocilRight}>
                  <p>Adddress</p>
                  <a href='https://maps.app.goo.gl/VfNR4s7YakVxKj76A' target='_blank'>Unit No. 405-406, Building-2, Sector-1, Millennium Business Park, Mahape, Navi Mumbai – 400 710.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactFormRigth}>

            <ContactForm/>

        </div>
      </div>
    </div>
    </>
  )
}

export default ContactusFormSection