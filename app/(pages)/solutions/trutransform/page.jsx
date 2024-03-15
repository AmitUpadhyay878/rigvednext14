import React from 'react'
import styles from "./page.module.scss";
import About from '@/component/About'
import Banner from '@/component/Banner'
import ServicesList from '@/component/ServicesList'
import Contactus from '@/component/Contactus'
import SmallTitle from "@/component/SmallTitle";
import TitleContent from "@/component/TitleContent";
import Image from 'next/image';
import {TruTranformationPageContent} from '../../../../utils/PagesJson/TruTranformationPageContent'
const trutransform = () => {

  return (
    <main className='trutransformPage'>
      <Banner
        Solutionbanner="solution"
        title={TruTranformationPageContent?.banner?.title}
        content={TruTranformationPageContent?.banner?.desc}
        imagepath={TruTranformationPageContent?.banner?.imgSRC['src']}
        />
        <About
        title={TruTranformationPageContent?.aboutSection?.title}
        content={TruTranformationPageContent?.aboutSection?.desc}
        imagepath={TruTranformationPageContent?.aboutSection?.imgSRC}
        left={true} />

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
              <SmallTitle title={TruTranformationPageContent?.serviceOfferSection?.title} />
              <TitleContent
                  title={TruTranformationPageContent?.serviceOfferSection?.caption}
                  content={TruTranformationPageContent?.serviceOfferSection?.desc}
              />
              <div className={styles.serviceListRowswrap}>
                  <ServicesList
                      ServicesData={
                        TruTranformationPageContent?.serviceOfferSection?.offeringBox
                      }
                      extra='grid2'
                  />
              </div>
          </div>
        </section>

        <section className={`${styles.frameWorkSection} pt150`}>
        <div className="container">
          <SmallTitle title={TruTranformationPageContent?.frameWorkSection?.title} />
            <TitleContent
                title={TruTranformationPageContent?.frameWorkSection?.caption}
                content={TruTranformationPageContent?.frameWorkSection?.desc}
            />
            <div className={styles.framewrokWrapper}>
              <div className={styles.frameworkBox}>
                <div className={styles.frameworkCenterContent}>
                  <Image src={TruTranformationPageContent?.frameWorkSection?.imgSRC} alt="TrutransformFramework" className={styles.SolutionAntImage} />
                  <span className={`${styles.Title} gradientText`}>{TruTranformationPageContent?.frameWorkSection?.TRUTransformTitle}</span>
                </div>
                <div className={styles.frameworkContentWrapper}>
                  {
                    TruTranformationPageContent?.frameWorkSection?.frameworkContent?.map((list,i)=>{
                      return(
                      <div className={styles.innerContent} key={i}>
                      <span className={styles.roundedShape}>{i+1}</span>
                      <p>{list}</p>
                    </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
        </div>
      </section>
        <Contactus />
    </main>
  )
}

export default trutransform