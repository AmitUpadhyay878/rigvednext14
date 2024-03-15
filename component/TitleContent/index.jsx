'use client'
import React from 'react'
import styles from './titlecontent.module.scss'

const index = ({title, content}) => {
  return (
    <>
       <div className={styles.titleWrapper}>
            <div className={styles.titleContentLeft}>
                <h2>{title}</h2>

            </div>
            <div className={styles.titleContentRight}>
                <p>{content}</p>
            </div>
        </div>
    </>
  )
}

export default index
