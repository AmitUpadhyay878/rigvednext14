import Banner from "@/component/Banner";
import React from "react";
import styles from "./page.module.scss";
import About from "@/component/About";
import TitleContent from '@/component/TitleContent'
import WhoWeAreImage from '../../../public/images/who-we-are-image.webp'
import AboutWhoWeAreImage from '../../../public/images/aboutus-who-we-are.webp'
import Image from "next/image";
import ClientandPartners from "@/component/ClientandPartners";
import Contactus from "@/component/Contactus";

import {AboutusPageContent} from '../../../utils/PagesJson/AboutusPageContent'

const aboutus = () => {
  return (
    <main className="aboutUsPage">
      <Banner
        title={AboutusPageContent?.Banner?.title}
        content={
          AboutusPageContent?.Banner?.desc
        }
        imagepath={AboutusPageContent?.Banner?.imgSRC['src']}
      />
      <About  title={AboutusPageContent?.AboutusSection?.title} content={AboutusPageContent?.AboutusSection?.desc}
        imagepath={AboutusPageContent?.AboutusSection?.imgSRC}
      />
      <section className={`${styles.whoWeAreSection} pt150 pb150`}>
        <div className="container">
          <div className={styles.whoWeAreWrapper}>
            <div className={styles.whoWeAreImage}>
              <Image src={AboutWhoWeAreImage} alt="whoWeArImage" />
            </div>
            <div className={styles.WhoWeAreContentWrapper}>
              <div className={styles.innerContent}>
                <h3 className="gradientText">{AboutusPageContent?.WhoWeAre?.title}</h3>
                <p>{AboutusPageContent?.WhoWeAre?.desc}</p>
              </div>
              <div className={styles.innerContent}>
                <h3 className="gradientText">{AboutusPageContent?.WhatWeDo?.title}</h3>
                <p>{AboutusPageContent?.WhatWeDo?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutJourneySection}>
        <div className="container">
          <div className={styles.yearsOfJourney}>
          <TitleContent title={AboutusPageContent?.ShapingExcellence?.title} content={AboutusPageContent?.ShapingExcellence?.desc} />
          <div className={styles.OurGoals}>
            {
              AboutusPageContent?.ShapingExcellence?.List.map((list,i)=>{
                return(
                  <div className={styles.goalsBox} key={i}>
                  <div className={styles.icon}>
                    <Image src={list?.svgSRC} alt="MissionIcon" />
                  </div>
                  <div className={styles.content}>
                    <h4 className="gradientText">{list?.title}</h4>
                    <p>{list?.desc}</p>
                  </div>
                </div>
                )
              })
            }
          </div>
          </div>
        </div>
      </section>
      <section className={`${styles.CounterBoxSection} pt150`}>
        <div className="container">
          <div className={styles.BgCounterBox}>
            <ul className={styles.counterList}>
              {
                AboutusPageContent?.counter?.map((coun,i)=>{
                  return(
                    <li key={i}>
                    <h4>{coun?.count >=10? coun?.count+" +" :coun?.count}</h4>
                    <span>{coun?.desc}</span>
                  </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </section>
      <ClientandPartners  />
      <Contactus />
    </main>
  );
};

export default aboutus;
