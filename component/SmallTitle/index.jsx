'use client'
import React from 'react'
import styles from './smalltitle.module.scss'

const SmallTitle = ({title="DefaultTitle"}) => {
  return (

    <div className={styles.Smalltitle}>
      <span>{title}</span>
    </div>

  )
}

export default SmallTitle