'use client'
import React from 'react'
import styles from './button.module.scss'

const Button = ({ type = 'button', onClick,extracss='', text = '' }) => {
    return (
        <button type={type} onClick={onClick} className={`${styles.commonBtn} ${extracss ? styles?.[extracss]:""}`}>
            {text}
        </button>
    )
}

export default Button
