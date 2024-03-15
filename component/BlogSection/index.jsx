import React from 'react'
import styles from './blogsection.module.scss'
import SmallTitle from '@/component/SmallTitle'
import BlogBoxs from '@/component/BlogBoxs'
import TitleContent from '@/component/TitleContent'
import { HomePageContent } from '../../utils/PagesJson/HomePageContent'
import Blogbanner from '@/public/images/blogbox.webp'
import Button from '@/component/Button'

const BlogSection = () => {
  return (
    <>
      <section className={styles.blogSection}>
          <div className='container'>
              <SmallTitle title={HomePageContent?.blogSection?.title} />
              <TitleContent title={HomePageContent?.blogSection?.caption} content={HomePageContent?.blogSection?.desc}/>

              <div className={styles.blogRows}>
                  <BlogBoxs
                      BlogImg={Blogbanner}
                      title="How Much Does It Cost To Create A Social Media App?"
                      description="Complete guide to create a social media app in 2024 and estimate the cost by understanding the major cost-driving "
                  />
                  <BlogBoxs
                      BlogImg={Blogbanner}
                      title="Hospital Management System: Benefits, Features and Trends"
                      description="Complete guide to create a social media app in 2024 and estimate the cost by understanding the major cost-driving "
                  />
                  <BlogBoxs
                      BlogImg={Blogbanner}
                      title="25+ Top Ecommerce Trends and Solutions in 2024"
                      description="Complete guide to create a social media app in 2024 and estimate the cost by understanding the major cost-driving "
                  />
              </div>
              <div className={styles.centerButtonwrap}>
                  <Button text="View more" />
              </div>
          </div>
        </section>
    </>
  )
}

export default BlogSection
