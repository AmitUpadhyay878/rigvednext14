'use client'
import React from 'react'
import styles from './pagebanner.module.scss'

const PageBanner = ({backImgSrc="", title="", desc="",}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{desc}</p>
    </div>
  )
}

export default PageBanner