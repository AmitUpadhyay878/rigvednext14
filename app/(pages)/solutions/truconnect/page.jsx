import React from 'react'
import styles from "./page.module.scss";
import Banner from '@/component/Banner'
import TruconnectDealerMobile from '../../../../public/images/truconnect-dealer.webp'
import About from '@/component/About'
import SmallTitle from '@/component/SmallTitle';
import TitleContent from '@/component/TitleContent';
import KeyFeatures from '@/component/KeyFeatures';
import Image from 'next/image';
import Contactus from '@/component/Contactus';
import {TruConnectPageContent} from '@/utils/PagesJson/TruConnectPageContent'
import ImgCard from '@/component/ImgCard';

const truconnect = () => {
  return (
    <main className='solutionInnerPage truConnectPage'>
        <Banner
        Solutionbanner="solution"
        title={TruConnectPageContent?.banner?.title}
        content={TruConnectPageContent?.banner?.caption}
        imagepath={TruConnectPageContent?.banner?.imgSRC['src']}
        />
        <About
        title={TruConnectPageContent?.aboutSection?.title}
        content={TruConnectPageContent?.aboutSection?.desc}
        imagepath={TruConnectPageContent?.aboutSection?.imgSRC}
        left={true} />


        




        <section className={`${styles.challengesSection} pt150`}>
            <div className='container'>
            <SmallTitle title={TruConnectPageContent?.ChallengesSolutionandROI.title} />
            <TitleContent
                title={TruConnectPageContent?.ChallengesSolutionandROI.caption}
                content={TruConnectPageContent?.ChallengesSolutionandROI.desc}
            />
            <div className={styles.challengesWrapper}>

                {
                    TruConnectPageContent?.ChallengesSolutionandROI?.challengesBox?.map((chBox,i)=>{
                        return(
                        <div className={styles.challengesBox} key={i}>
                        <div className={styles.content}>
                            <span>{chBox?.title}</span>
                        </div>
                        <div className={styles.ImageBox}>
                            <div className={styles.innerBox}>
                                <i className={chBox?.SVGClass}></i>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
            </div>
            </div>
        </section>

     

        <div className={styles.mb80}>
            <ImgCard cardImage={TruConnectPageContent?.AboutSolutionSection?.imgSRC} cardTitle={TruConnectPageContent?.AboutSolutionSection?.title} CardContent={TruConnectPageContent?.AboutSolutionSection?.desc} />
        </div>


        <section className={styles.investmentSection}>
            <div className='container'>
                <div className={styles.investmentWrapper}>
                    {
                        TruConnectPageContent?.investmentSection?.map((inv,i)=>{
                            return(
                                <div className={styles.investment} key={i}>
                                <div className={styles.content}>
                                    <span>{inv.per}%</span>
                                    <p>{inv.desc}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
        
        <section className={`${styles.dealerExperienceSection} pt150`}>
            <div className='container'>
                <SmallTitle title={TruConnectPageContent?.dealerExperienceSection?.title} />
                <TitleContent
                    title={TruConnectPageContent?.dealerExperienceSection?.caption}
                    content={TruConnectPageContent?.dealerExperienceSection?.desc}
                />
                <div className={styles.dealersWrapper}>
                    <div className={`${styles.mobileBox} ${styles.dealerContentBox}`}>
                        <div className={styles.innerContent}>
                            <h2 className='gradientText'>{TruConnectPageContent?.dealerExperienceSection?.Dealers?.title}</h2>
                            <div className={styles.dealerMobile}>
                                <Image src={TruConnectPageContent?.dealerExperienceSection?.Dealers?.imgSRC} alt="TruconnectDealerMobile"  />
                            </div>
                        </div>
                    </div>
                    <div className={styles.DealerContentRight}>
                     {
                        TruConnectPageContent?.dealerExperienceSection?.Dealers?.DealerCards?.map((dealCard,i)=>{
                            return(
                                <div className={styles.dealerContentBox} key={i}>
                                <span className='gradientText'>{dealCard?.title}</span>
                                <h3>{dealCard?.caption}</h3>
                                <ul className={styles.innerDetailsList}>
                                    {
                                        dealCard?.list?.map((cardData,i)=>{
                                            return(
                                                <li key={i}>{cardData}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            )
                        })
                     }
                    </div>
                </div>
            </div>
        </section>

        <KeyFeatures params={TruConnectPageContent?.keyFeatures} />
        <Contactus />
    </main>
  )
}

export default truconnect