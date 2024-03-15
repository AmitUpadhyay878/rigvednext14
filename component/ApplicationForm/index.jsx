'use client'
import React, { useState } from 'react'
import styles from "./ApplicationForm.module.scss";
import InputText from '@/component/InputText'
import Button from '@/component/Button'
import CongratulationModal from '../CongratulationModal';

const ApplicationForm = () => {

    const [modal, setmodal] = useState(false)


  return (
    <section className={`${styles.applicationSection} pb150`}>
        <div className='container'>
            <div className={styles.applicationFormWrapper}>
                <div className={styles.titleWrapper}>
                    <h3 className='h3 gradientText'>Application form</h3>
                    <p>To create a new online application account, enter your personal details below. Your e-mail address should be readily accessible since our main method of contact with you will be via e-mail.</p>
                </div>
                <form>
                    <div className={styles.formRow}>
                        <div className={styles.formCols}>
                            <label htmlFor="yourname">Your Name</label>
                            <InputText type='text' name={'yourname'} id={'yourname'} placeholder='Your Name'/>
                        </div>
                        <div className={styles.formCols}>
                            <label htmlFor="linkednprofile">LinkedIn Profile</label>
                            <InputText type='text' name={'linkednprofile'} id={'linkednprofile'} placeholder='Add Here'/>
                        </div>
                        <div className={styles.formCols}>
                            <label htmlFor="email">Email Address</label>
                            <InputText type='email' name={'email'} id={'email'} placeholder='Email Address'/>
                        </div>
                        <div className={styles.formCols}>
                            <label htmlFor="phoneno">Phone Number</label>
                            <InputText type='tel' name={'phoneno'} id={'phoneno'} placeholder='Phone Number'/>
                        </div>
                        <div className={styles.formCols}>
                            <label htmlFor="resume">Resume</label>
                            <InputText type="file" id={'resume'} name={'resume'} placeholder=''/>
                        </div>
                        <div className={styles.formCols}>
                            <label htmlFor="coverlatter">Cover Latter</label>
                            <InputText type="file" name={'coverlatter'} id={'coverlatter'} placeholder=''/>
                        </div>
                        <div className={`${styles.formCols} ${styles.formSubmit}`}>
                        <Button type='button' text='Submit Application' onClick={()=>setmodal(true)} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <CongratulationModal modal={modal} setmodal={setmodal} />
      </section>
  )
}

export default ApplicationForm