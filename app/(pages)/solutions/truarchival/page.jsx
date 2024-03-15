import React from "react";
import styles from "./page.module.scss";
import About from "@/component/About";
import Banner from "@/component/Banner";
import ServicesList from "@/component/ServicesList";
import Contactus from "@/component/Contactus";
import {TRUArchivalPageContent} from '../../../../utils/PagesJson/TRUArchivalPageContent'

import Image from "next/image";
const truarchival = () => {

  return (
    <main className="truarchivalPage">
      <Banner
        Solutionbanner="solution"
        title={TRUArchivalPageContent?.banner?.title}
        content={TRUArchivalPageContent?.banner?.desc}
        imagepath={TRUArchivalPageContent?.banner?.imgSRC["src"]}
      />
      <About
        title={TRUArchivalPageContent?.about?.title}
        content={TRUArchivalPageContent?.about?.desc}
        imagepath={TRUArchivalPageContent?.about?.imgSRC}
        left={true}
      />
      <section className={`${styles.serviceOfferSection}`}>
        <div className="container">
          <div className={styles.serviceListRowswrap}>
            <ServicesList ServicesData={TRUArchivalPageContent?.offeringBox} extra="grid2" />
          </div>
        </div>
      </section>

        <section className={`${styles.treeViewSection} pt150`}>
          <div className="container">
            <h2>{TRUArchivalPageContent?.Outcome?.title}</h2>

            <div className={styles.treeViewBoxwrap}>

                <div className={styles.treeViewBoxThumb}>
                  <Image src={TRUArchivalPageContent?.Outcome?.imgSRC} alt="Tree View Desgin"/>
                </div>
                <div className={styles.treeViewBoxContentLists}>
                  {
                    TRUArchivalPageContent?.Outcome?.treeViewBoxContentLists?.map((mc,i)=>{
                      return(
                        <div className={styles.treeViewBoxLists} key={i}>
                        <h5>{mc}</h5>
                      </div>
                      )
                    })
                  }
                </div>
            </div>
          </div>
        </section>

      <Contactus />
    </main>
  );
};

export default truarchival;
