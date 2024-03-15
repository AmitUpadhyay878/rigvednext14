import React from "react";
import styles from "./page.module.scss";
import Banner from "@/component/Banner";
import About from "@/component/About";
import ImgCard from "@/component/ImgCard";
import Contactus from "@/component/Contactus";
import ServicesList from "@/component/ServicesList";
import SmallTitle from "@/component/SmallTitle";
import TitleContent from "@/component/TitleContent";
import Image from "next/image";
import {TruePlanPageContent} from '../../../../utils/PagesJson/TruePlanPageContent'

const truplan = () => {

  return (
    <>
      <main className="solutionInnerPage truConnectPage">
        <Banner
          Solutionbanner="solution"
          title={TruePlanPageContent?.banner?.title}
          content={TruePlanPageContent?.banner?.desc}
          imagepath={TruePlanPageContent?.banner?.imgSRC["src"]}
        />
        <About
          title={TruePlanPageContent?.aboutSection?.title}
          content={TruePlanPageContent?.aboutSection?.desc}
          imagepath={TruePlanPageContent?.aboutSection?.imgSRC}
          left={true}
        />

          <section className={`${styles.businessChallengesSection} pt150`}>
            <div className="container">

                <div className={styles.businessChallengesWrap}>
                    <div className={styles.businessChallengesCircle}>
                        <Image src={TruePlanPageContent?.businessChallengesSection?.imgSRC} alt="BUSINESS CHALLENGES"/>
                        <div className={styles.businessDotswrap}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{TruePlanPageContent?.businessChallengesSection?.title}</h3>
                    </div>

                    <div className={styles.businessChallengesContentlists}>
                      {
                        TruePlanPageContent?.businessChallengesSection?.list?.map((li,i)=>{
                          return(
                            <div className={styles.bbclist} key={i}>
                            <p>{li}</p>
                        </div>
                          )
                        })
                      }
                    </div>
                </div>
            </div>
        </section>

        <section className={`${styles.rightInfoSection} pt150`}>
            <div className="container">
                <div className={styles.rightInfoWrap}>
                    <h2>{TruePlanPageContent?.rightInfoSection?.title}</h2>

                    <div className={styles.rightInfoBoxContent}>
                        <Image src={TruePlanPageContent?.rightInfoSection?.imgSRC} alt="ACCESS TO RIGHT INFORMATION"/>
                        <h3 className='h2'>{TruePlanPageContent?.rightInfoSection?.Rtitle}</h3>
                        <div className={styles.rightInfoBoxListswrap}>

                          {
                            TruePlanPageContent?.rightInfoSection?.boxsList?.map((box,i)=>{
                              return(
                            <div className={styles.rightInfoBoxLists} key={i}>
                                <p>{box}</p>
                            </div>
                              )
                            })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ImgCard
          cardImage={TruePlanPageContent?.ImgCardSection?.imgSrc}
          cardTitle={TruePlanPageContent?.ImgCardSection?.title}
          CardContent={TruePlanPageContent?.ImgCardSection?.desc}
        />

        <section className={`${styles.salientFeaturesSection} pt150`}>
          <div className="container">
          <SmallTitle title={"Salient Features"} />
            <TitleContent
                title={"Lorem Ipsum is simply dummy text of"}
                content={"A prepackaged Budgeting, Planning and Analytical tool specifically built for  the cement manufacturing companies in IBM Cognos, TM1. It includes the  following:"}
            />
            <div className={styles.salientFeaturesWrapper}>
                <div className={styles.bubblesTop}>
                  {
                      TruePlanPageContent?.salientFeaturesSection?.list?.map((dd)=>(
                            (dd.id%2 !=0) &&
                              <div className={styles.featuresBubble} key={dd?.id}>
                          <i className="icon-bubble"></i>
                          <span className={styles.text}>
                            {dd.title}
                            </span>
                          <span className={styles.number}>{dd?.id >10 ? dd?.id :("0"+dd?.id)}</span>
                        </div> 
                      )
                    )
                  }
                </div>
                <div className={styles.bubblesCenterLine}>
                    <Image src={TruePlanPageContent?.salientFeaturesSection?.salientFeaturesBgIMG} alt="salientFeaturesBg" />
                </div>
                <div className={styles.bubblesBottom}>
                  {
                      TruePlanPageContent?.salientFeaturesSection?.list?.map((dd)=>
                      (dd.id%2===0) &&
                        (
                          <div className={styles.featuresBubble} key={dd?.id}>
                          <i className="icon-bubble"></i>
                          <span className={styles.text}>
                            {dd.title}
                            </span>
                          <span className={styles.number}>{dd?.id >10 ? dd?.id :("0"+dd?.id)}</span>
                        </div>
                        ))   
                  }
                </div>
            </div>
          </div>
          <span className={`${styles.roundedshadow} roundedshadow`}></span>
        </section>

        <section className={`${styles.blockSection} pt150`}>
          <div className="container">
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={TruePlanPageContent?.blockSection} extra="grid2" />
            </div>
          </div>
        </section>

        <Contactus />
      </main>
    </>
  );
};

export default truplan;
