'use client'
import React from 'react'
import styles from './CounterBox.module.scss'
const CounterBox = ({
    extraClass = '',
    counter = [
        {
            title: 'World-Class, Secure Delivery Center',
            count: 2
        },
        {
            title: 'Years of Delivery Experience',
            count: 15
        },
        {
            title: 'Customers',
            count: 60
        },
        {
            title: 'Professionals',
            count: 500
        },
        {
            title: 'CMMI Level',
            count: 5
        }
    ]
}) => {
    return (
        <div
            className={`${styles.aboutCounterBox} ${
                extraClass ? styles?.[extraClass] : ''
            }`}
        >
            <ul className={styles.counterWrapper}>
                {counter?.map((cou, i) => {
                    return (
                        <li key={i}>
                            <h4>
                            {cou?.count} {cou?.count >= 10 ? '+' : ''}
                            </h4>
                            <span>{cou?.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CounterBox
