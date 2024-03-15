import About from '@/component/About'
import Banner from '@/component/Banner'
import React from 'react'
import Contactus from '@/component/Contactus'
import styles from './digitalservices.module.scss'
// import BlogSection from '@/component/BlogSection'
import CounterBox from '@/component/CounterBox'
import TitleContent from '@/component/TitleContent'
import { HomePageContent } from '../../../../utils/PagesJson/HomePageContent'
import SmallTitle from '@/component/SmallTitle'
import CardTitleContent from '@/component/CardTitleContent'
import ServicesList from '@/component/ServicesList'
import Image from 'next/image'
import {DigitalServicesContent} from '../../../../utils/PagesJson/DigitalServicesContent'


const digitaltransformation = () => {
  return (
    <>
      <main className="noContactform">
        <Banner
         SerivceBanner="service"
          title={DigitalServicesContent?.Banner?.title}
          content={
           DigitalServicesContent?.Banner?.desc
          }
          imagepath={DigitalServicesContent?.Banner?.imgSRC['src']}
        />
        <About
          title={DigitalServicesContent?.Aboutus?.title}
          content={DigitalServicesContent?.Aboutus?.desc}
          imagepath={DigitalServicesContent?.Aboutus?.imgSRC}
        />


        <section className={`${styles.digitalCardSection} pt150`}>
          <div className="container">
            <div className={styles.digitalCardWrap}>
              <h2>{DigitalServicesContent?.DigitalCards?.title}</h2>
              <CardTitleContent cardData={DigitalServicesContent?.DigitalCards?.cardList}/>
            </div>
          </div>
        </section>

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title={DigitalServicesContent?.offering?.title}/>
            <TitleContent title={DigitalServicesContent?.offering?.caption} content={DigitalServicesContent?.offering?.desc}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={DigitalServicesContent?.offering?.offeringBox}/>
            </div>
          </div>
        </section>


        <section className={`${styles.solutionSection} pt150`}>
          <div className="container">
            <div className={styles.solutionWrap}>
              <div className={styles.solutionLeft}>
                <span className={styles.smallTitlesm}>{DigitalServicesContent?.solutionandframework?.title}</span>
                <h2>{DigitalServicesContent?.solutionandframework?.caption}</h2>
                <div className={styles.solutionLeftIMgqwrap}>
                 <Image src={DigitalServicesContent?.solutionandframework?.mainIMG} alt="Solutions Banner" />
                </div>
              </div>
              <div className={styles.solutionRight}>

                <div className={styles.solutionBoxlistingWrap}>
                  <div className={styles.solutionBoxlistingRow}>
                    {
                      DigitalServicesContent?.solutionandframework?.List?.map((list,i)=>{
                        return(
                          <div className={styles.solutionBoxlistingCols} key={i}>
                          <div className={styles.solutionBoxlistingColsLeft}>
                            <div className={styles.icon}>
                              <i className={list?.svgImgClass}></i>
                            </div>
                          </div>
                          <div className={styles.solutionBoxlistingColsRight}>
                            <h3>{list?.title}</h3>
                            <p>{list?.desc}</p>
                          </div>
                        </div>
                        )
                      })
                    }

                    {/* <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i className="icon-list"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUPIan (Demo Ready)</h3>
                        <p>Pre-built, ready to deploy, plug & play Planning & budgeting solution for cement industry. This solution reduces time for budgeting cycle by 40- 60%, increases budgeting accuracy by 20-25%, aids Cost control + Procurement accuracy+ Improved lead time by 5-10% and Improves profitability by 1-2%</p>
                      </div>
                    </div>

                    <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i className="icon-persons"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUConnect (Demo Ready)</h3>
                        <p>Packaged dealer management portal to connect all dealers to achieve business growth and scalability. Dealer management integrated with SAP modules</p>
                      </div>
                    </div>

                    <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i className="icon-world"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUTransformation</h3>
                        <p>Legacy Transformation is a framework to reduce IT environment complexity and costs by reduce processing time and address mobility challenges with next generation technologies</p>
                      </div>
                    </div> */}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className={`${styles.counterSection} pt150 pb150`}>
            <div className="container">
              <SmallTitle title={DigitalServicesContent?.SuccessStories?.title}/>
              <TitleContent title={DigitalServicesContent?.SuccessStories?.caption} content={DigitalServicesContent?.SuccessStories?.desc}/>
              <div className='pt30'>
                <CounterBox  counter={HomePageContent?.counterBox} />
              </div>
            </div>
        </section>

        {/* <BlogSection/> */}

      </main>
    </>
  )
}

export default digitaltransformation