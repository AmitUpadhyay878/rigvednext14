import React from "react";
import styles from "./page.module.scss";
import Banner from "@/component/Banner";
import Contactus from "@/component/Contactus";
import About from "@/component/About";
import Image from "next/image";
import TitleContent from "@/component/TitleContent";
import ServicesList from "@/component/ServicesList";
import ImgCard from "@/component/ImgCard";
import { TruWorkPlacePageContent } from '../../../../utils/PagesJson/TruWorkPlacePageContent'

const Truworkplace = () => {
  return (
    <>
      <main className="solutionInnerPage truConnectPage">
        <Banner
          Solutionbanner="solution"
          title={TruWorkPlacePageContent?.banner?.title}
          content={TruWorkPlacePageContent?.banner?.desc}
          imagepath={TruWorkPlacePageContent?.banner?.imgSRC['src']}
        />
        <About
          title={TruWorkPlacePageContent?.aboutusSection?.title}
          content={TruWorkPlacePageContent?.aboutusSection?.desc}
          imagepath={TruWorkPlacePageContent?.aboutusSection?.imgSRC}
          left={true}
        />

        <section className={`${styles.truworkplaceArtSection} pt150 position-relative`}>
          <span className={`${styles.Toproundedshadow} roundedshadow`}></span>
          <span className={`${styles.Bottomroundedshadow} roundedshadow`}></span>
          <div className="container">
              <div className={styles.truworkplaceArtWrap}>

                <div className={styles.truworkplaceArtMainContent}>
                  {
                    TruWorkPlacePageContent?.truworkplaceArtSection?.truworkplaceArtMainContent?.map((twpamc,i)=>{
                      return(
                        <div className={styles.truworkplaceArtMainList} key={i}>
                        <h4>{twpamc}</h4>
                      </div>
                      )
                    })
                  }    
                </div>
                <div className={styles.truworkplaceArtThumbWrap}>
                  <div className={styles.truworkplaceArtThumb}>
                    <Image src={TruWorkPlacePageContent?.truworkplaceArtSection?.workbanner} alt="TruworkBanner"/>
                  </div>
                  <div className={styles.truworkplaceArtThumbContent}>
                    {
                      TruWorkPlacePageContent?.truworkplaceArtSection?.list?.map((bc,i)=>{
                        return(
                          <div className={styles.truworkplaceArtThumbList} key={i}>
                          <p>{bc}</p>
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
          cardImage={TruWorkPlacePageContent?.RIPcard?.imgSRC}
          cardTitle={TruWorkPlacePageContent?.RIPcard?.desc}
        />

        <section className={`${styles.blockSection} pt150`}>
          <div className="container">
            <TitleContent title={TruWorkPlacePageContent?.blockSection?.title} />
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={TruWorkPlacePageContent?.blockSection?.offeringBox} extra="grid2" />
              <ServicesList ServicesData={TruWorkPlacePageContent?.blockSection?.offeringBox2} extra="grid1" />
            </div>
          </div>
        </section>

        <section className={`${styles.ourValueSection} pt150`}>
          <div className="container">
            <h2 className="gradientText">{TruWorkPlacePageContent?.ourValueSection?.title}</h2>
            <div className={styles.ourValueWrapper}>
              {
                  TruWorkPlacePageContent?.ourValueSection?.valueBox?.map((vbox,i)=>{
                      return(
                        <div className={styles.valueBox} key={i}>
                        <div className={styles.content}>
                          <h5>{vbox?.title}</h5>
                          <p>{vbox?.Desc}</p>
                        </div>
                        <div className={styles.valueImageBox}>
                          <div className={styles.innerCircle}>
                            <i className={vbox?.logoSVG}></i>
                          </div>
                        </div>
                      </div>
                      )
                  })
              }
            </div>
          </div>
        </section>
        <Contactus />
      </main>
    </>
  );
};

export default Truworkplace;
