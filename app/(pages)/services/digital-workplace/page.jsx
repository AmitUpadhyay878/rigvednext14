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
import {DigitalWorkplacePageContent} from '../../../../utils/PagesJson/DigitalWorkplacePageContent'

const digitalworkplace = () => {
  return (
    <>
      <main className="noContactform">
        <Banner
         SerivceBanner="service"
          title={DigitalWorkplacePageContent?.Banner?.title}
          content={DigitalWorkplacePageContent?.Banner?.desc}
          imagepath={DigitalWorkplacePageContent?.Banner?.imgSRC['src']}
        />
        <About
          title={DigitalWorkplacePageContent?.Aboutus?.title}
          content={DigitalWorkplacePageContent?.Aboutus?.desc}
          imagepath={DigitalWorkplacePageContent?.Aboutus?.imgSRC}
        />


       <section className={`${styles.digitalCardSection} pt150`}>
          <div className="container">
            <div className={styles.digitalCardWrap}>
              <h2>{DigitalWorkplacePageContent?.DigitalCards?.title}</h2>
              <CardTitleContent cardData={DigitalWorkplacePageContent?.DigitalCards?.cardList}/>
            </div>
          </div>
        </section>

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title={DigitalWorkplacePageContent?.offering?.title} />
            <TitleContent title={DigitalWorkplacePageContent?.offering?.caption} content={DigitalWorkplacePageContent?.offering?.desc}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={DigitalWorkplacePageContent?.offering?.offeringBox} extra='contentStart'/>
            </div>
          </div>
        </section>

        <section className={`${styles.counterSection} pt150 pb150`}>
            <div className="container">
              <SmallTitle title='Success Stories'/>
              <TitleContent title={'Inspiring Success Stories'} content={'Discover the remarkable journeys of individuals and businesses who turned challenges into triumphs, igniting inspiration and motivation along the way.'}/>
              <div className='pt30'>
                <CounterBox  counter={HomePageContent?.counterBox} />
              </div>
            </div>
        </section>

      </main>
    </>
  )
}

export default digitalworkplace