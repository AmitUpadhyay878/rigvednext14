import React from "react";
import styles from "./page.module.scss";
import About from "@/component/About";
import Banner from "@/component/Banner";
import Image from "next/image";
import ServicesList from "@/component/ServicesList";
import Contactus from "@/component/Contactus";
import {TRUAMSPageContent} from '../../../../utils/PagesJson/TRUAMSPageContent'

const truams = () => {

  return (
    <main className="trumsPage">
      <Banner
        Solutionbanner="solution"
        title={TRUAMSPageContent?.banner?.title}
        content={
          TRUAMSPageContent?.banner?.desc
        }
        imagepath={TRUAMSPageContent?.banner?.imgSRC["src"]}
      />
      <About
        title={TRUAMSPageContent?.about?.title}
        content={TRUAMSPageContent?.about?.desc}
        imagepath={TRUAMSPageContent?.about?.imgSRC}
        left={true}
      />

      <section className={`${styles.serviceOfferSection}`}>
        <div className="container">
          <div className={styles.serviceListRowswrap}>
            <ServicesList ServicesData={TRUAMSPageContent?.serviceOfferSection?.offeringBox} extra="grid2" />
          </div>
        </div>
      </section>

      <section className={`${styles.outComesectionss} pt150 position-relative`}>
          <div className="container">
            <div className={styles.outComesection}>
              <div className={styles.outComeContent}>
                <h3>{TRUAMSPageContent?.outComesectionss?.title}</h3>
                <Image src={TRUAMSPageContent?.outComesectionss?.roundIMG} alt="Round Circle" width={400} height={400} className={styles.circle}/>
              </div>
              <div className={styles.outComeContentLists}>
                {
                  TRUAMSPageContent?.outComesectionss?.outComeContentLists?.map((MC,i)=>{
                    return(
                      <div className={styles.outComeList} key={i}>
                      <span className={styles.dots}></span>
                      <Image src={MC?.imgSRC} alt="Round Circle" className={styles.shadow}/>
                      <span className={styles.number}><label>{i+1}</label></span><p>{MC?.title}</p>
                    </div>
                    )
                  })
                }
              </div>
            </div> 
          </div>
          <span className={`${styles.roundedshadowTop} roundedshadow`}></span>
          <span className={`${styles.roundedshadowBottom} roundedshadow`}></span>
      </section>

      <Contactus />
    </main>
  )}

  export default truams