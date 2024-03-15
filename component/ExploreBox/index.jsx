'use client'
import React from 'react'
import styles from './explorebox.module.scss'
const ExploreBox = ({title="" ,description=""}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default ExploreBox