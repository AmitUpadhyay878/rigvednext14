import About from '@/component/About'
import Banner from '@/component/Banner'
import React from 'react'
import Contactus from '@/component/Contactus'
import styles from './digitalservices.module.scss'
import CounterBox from '@/component/CounterBox'
import TitleContent from '@/component/TitleContent'
import { HomePageContent } from '../../../../utils/PagesJson/HomePageContent'
import SmallTitle from '@/component/SmallTitle'
import CardTitleContent from '@/component/CardTitleContent'
import ServicesList from '@/component/ServicesList'
import Image from 'next/image'
import {InfrastructurePageContent} from '../../../../utils/PagesJson/InfrastructurePageContent'

const infrastructurecloud = () => {
  return (
    <>
      <main className="noContactform">
        <Banner
         SerivceBanner="service"
          title={InfrastructurePageContent?.Banner?.title}
          content={InfrastructurePageContent?.Banner?.desc}
          imagepath={InfrastructurePageContent?.Banner?.imgSRC['src']}
        />
        <About
          title={InfrastructurePageContent?.Aboutus?.title}
          content={InfrastructurePageContent?.Aboutus?.desc}
          imagepath={InfrastructurePageContent?.Aboutus?.imgSRC}
        />

        <section className={`${styles.digitalCardSection} pt150`}>
          <div className="container">
            <div className={styles.digitalCardWrap}>
              <h2>{InfrastructurePageContent?.DigitalCards?.title}</h2>
              <CardTitleContent cardData={InfrastructurePageContent?.DigitalCards?.cardList}/>
            </div>
          </div>
        </section>

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title={InfrastructurePageContent?.offering?.title}/>
            <TitleContent title={InfrastructurePageContent?.offering?.caption} content={InfrastructurePageContent?.offering?.desc}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={InfrastructurePageContent?.offering?.offeringBox} extra="grid4"/>
            </div>
          </div>
        </section>

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title={InfrastructurePageContent?.offering2?.title}/>
            <TitleContent title={InfrastructurePageContent?.offering2?.caption} content={InfrastructurePageContent?.offering2?.desc}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={InfrastructurePageContent?.offering2?.offeringBox}/>
            </div>
          </div>
        </section>

      <section className={`${styles.deliveredSection} pt150` }>
        <div className='container'>
        <div className={styles.deliveredWrapper} >
                <div className={styles.aboutImage}>
                    <Image src={InfrastructurePageContent?.deliverySection?.imgSRC} alt="about"  />
                </div>
                <div className={styles.content}>
                    <h2>{InfrastructurePageContent?.deliverySection?.title}</h2>
                    <ul className={styles.delieveredLists}>
                      {
                        InfrastructurePageContent?.deliverySection?.list?.map((lis,i)=>{
                          return(
                            <li key={i}>{lis}</li>
                          )
                        })
                      }
                    </ul>
                </div>
            </div>
        </div>
      </section>

        <section className={`${styles.counterSection} pt150 pb150`}>
            <div className="container">
              <SmallTitle title={InfrastructurePageContent?.SuccessStories?.title} />
              <TitleContent title={InfrastructurePageContent?.SuccessStories?.caption} content={InfrastructurePageContent?.SuccessStories?.desc}/>
              <div className='pt30'>
                <CounterBox  counter={HomePageContent?.counterBox} />
              </div>
            </div>
        </section>

      </main>
    </>
  )
}

export default infrastructurecloud