'use client'
import Image from 'next/image'
import React from 'react'
import BlogDefaultImg from '../../public/images/mathamatics.jpg'
import styles from './blogboxs.module.scss'

const BlogBoxs = ({
    BlogImg="",
    title="",
    description=""
}) => {
    return (
        <div className={styles.blogBoxCols}>
            <div className={styles.blogBoxThumb}>
                <Image src={ BlogImg ? BlogImg : BlogDefaultImg} alt={title} />
            </div>
            <div className={styles.blogBoxContent}>
                <h3><a href='/'>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogBoxs
