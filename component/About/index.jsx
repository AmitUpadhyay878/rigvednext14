"use client"
import React from 'react'
import styles from './About.module.scss';
import Image from 'next/image';
const About = ({title="", content="",imagepath="",left=false}) => {
  return (
    <section className={`${styles.AboutSection} pt100`}>
        <div className='container'>
            <div className={`${styles.aboutWrapper} ${left==true ? styles.leftImage :""}`} >
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div className={styles.aboutImage}>
                    <Image src={imagepath} alt="about"  />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About