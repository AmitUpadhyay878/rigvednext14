'use client'
import React from 'react'
import styles from "./CongratulationModal.module.scss";
import Link from 'next/link';
const CongratulationModal = ({modal,setmodal}) => {

  return (
    <>
    <div className={`${styles.CongratulationModal} ${modal==true ? styles?.show:""}`}>
        <div className={styles.CongratulationModalWrapper}>
            <div className={styles.CongratulationContent}>
                <div className={styles.iconBox}>
                    <i className='icon-check'></i>
                </div>
                <h3>Congratulation</h3>
                <p>Your application has been submitted successfully.</p>
                <Link href='/' className={styles.modalBtn}>Go Home</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default CongratulationModal