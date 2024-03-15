'use client'
import Image from 'next/image'
import React from 'react'
import styles from './servicesbox.module.scss'
import Link from 'next/link'

const ServicesBox = ({ imgsrc = '', title = '', desc = '',key='',url='' }) => {
    return (
        <>
            <div className={styles.serviceCols} key={key}>
      
                <div className={styles.serviceBox}>
                    <div className={styles.serviceThumb}>
                        <Image src={imgsrc} alt={title}/>
                    </div>
                    <div className={styles.serviceContent}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                    <Link href={url} className={styles.link}> </Link>
                </div>
    
            </div>
        </>
    )
}

export default ServicesBox
