import React from 'react'
import Banner from '@/component/Banner'
import styles from "./page.module.scss"
import Link from 'next/link'
import Image from 'next/image'
// import SmallTitle from '@/component/SmallTitle'
// import TitleContent from '@/component/TitleContent'
import CardTitleContent from '@/component/CardTitleContent'
import Contactus from '@/component/Contactus'
import { CareerPageContent } from '@/utils/PagesJson/CareerPageContent'

const careers = () => {

  return (
    <main className='careersPage'>
      <Banner
       title={CareerPageContent?.banner?.title}
       content={CareerPageContent?.banner?.desc}
       imagepath={CareerPageContent?.banner?.imgSRC['src']}
      />
      {/* <section className={`${styles.AboutCareersSection} mt100` }>
        <div className='container'>
          <div className={styles.AboutCareersWrapper}>
            <div className={styles.content}>
              <p>{CareerPageContent?.about?.title}</p>
            </div>
            <div className={styles.aboutImage}>
              <Image src={CareerPageContent?.about?.imgSRC} alt="about Careers" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className={styles.EmpowermentSection}>
        <div className='container'>
          <div className={styles.EmpowermentContent}>
            <SmallTitle title={CareerPageContent?.empowerment?.title} />
            <TitleContent
              title={CareerPageContent?.empowerment?.caption}
              content={CareerPageContent?.empowerment?.desc}
            />
            <Link href={CareerPageContent?.empowerment?.btnLink} className={`${styles.exploreBtn} commonBtn`}>{CareerPageContent?.empowerment?.btnText}</Link>
            <span className={`${styles.roundedInnershadow} roundedshadow`}></span>
          </div>
        </div>
      </section> */}

      <section className={`${styles.idealRoleSection} pt100`}>
        <div className='container'>
          <div className={styles.idealCardsWrapper}>
            <div className={styles.title}>
              <h2>{CareerPageContent?.DigitalCards?.title}</h2>
            </div>
            <CardTitleContent  cardData={CareerPageContent?.DigitalCards?.cardList}/>
            <span className={`${styles.roundedInnershadow} roundedshadow`}></span>
          </div>
        </div>
      </section>

      <section className={`${styles.joinusSection} pt150`}>
        <div className='container'>
          <div className={styles.joinusBox}>
            <Image src={CareerPageContent?.JoinusCard?.imgSRC2} alt="IsolationRoundedTreeImage" className={styles.LeftSideImage} />
              <div className={styles.content}>
                  <span className={styles.badge}>{CareerPageContent?.JoinusCard?.title}</span>
                  <h2>{CareerPageContent?.JoinusCard?.caption}</h2>
                  <p>{CareerPageContent?.JoinusCard?.desc}</p>
                  <Link href={CareerPageContent?.JoinusCard?.btnLink} className={`${styles.exploreBtn} commonBtn`}>{CareerPageContent?.JoinusCard?.btnText}</Link>
              </div>
            <Image src={CareerPageContent?.JoinusCard?.imgSRC} alt="IsolationTreeImage" className={styles.RightSideImage} />
          </div>
        </div>
      </section>

      {/* <section className={`${styles.engagingSection} pt150`}>
        <div className='container'>
          <div className={styles.engagingAndImpact}>
          <SmallTitle title={CareerPageContent?.engagingAndImpact?.title} />
            <TitleContent
              title={CareerPageContent?.engagingAndImpact?.caption}
              content={CareerPageContent?.engagingAndImpact?.desc}
            />
            <ul className={styles.imapactCardWrapper}>
              {CareerPageContent?.engagingAndImpact?.ImapactCardData.map((items,i) =>{
                return(
                  <li className={styles.impactCard} key={i}>
                    <h4>{items.title}</h4>
                    <p>{items.content}</p>
                  </li>
                )
              })}



            </ul>
          </div>
        </div>
      </section> */}

      {/* <section className={`${styles.RigvedJourneySection} pt150`}>
        <div className="container">
          <div className={styles.RigvedJourneyBox}>
            <div className={styles.content}>
              <h3>{CareerPageContent?.RigvedJourneyBox?.title}</h3>
              <p>{CareerPageContent?.RigvedJourneyBox?.desc}</p>
              <Link href={CareerPageContent?.RigvedJourneyBox?.btnLink} className={`${styles.ApplyBtn} commonBtn`}>{CareerPageContent?.RigvedJourneyBox?.btnText}</Link>
            </div>
            <div className={styles.imageBox}>
              <Image src={CareerPageContent?.RigvedJourneyBox?.imgSRC} alt="CareersAtRigvedImage"  />
            </div>
            <Image src={CareerPageContent?.RigvedJourneyBox?.imgSRC2} alt="CareersAtRigvedBgImage" className={styles.bgImage} />
          </div>
        </div>
      </section> */}
      <Contactus />
    </main>
  )
}

export default careers