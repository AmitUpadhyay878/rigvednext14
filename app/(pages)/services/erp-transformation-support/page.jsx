import React from 'react'
import About from '@/component/About'
import Banner from '@/component/Banner'
import Contactus from '@/component/Contactus'
import styles from './digitalservices.module.scss'
import CounterBox from '@/component/CounterBox'
import TitleContent from '@/component/TitleContent'
import { HomePageContent } from '../../../../utils/PagesJson/HomePageContent'
import SmallTitle from '@/component/SmallTitle'
import ServicesList from '@/component/ServicesList'
import Image from 'next/image'
import { ERPPageContent } from '../../../../utils/PagesJson/ERPPageContent'

const erptransformationsupport = () => {
    return (
        <>
            <main className="noContactform">
                <Banner
                 SerivceBanner="service"
                    title={ERPPageContent?.Banner?.title}
                    content={ERPPageContent?.Banner?.desc}
                    imagepath={ERPPageContent?.Banner?.imgSRC['src']}
                />
                <About
                    title={ERPPageContent?.Aboutus?.title}
                    content={ERPPageContent?.Aboutus?.desc}
                    imagepath={ERPPageContent?.Aboutus?.imgSRC}
                />

                <section className={`${styles.serviceOfferSection} pt150`}>
                    <div className="container">
                        <SmallTitle title={ERPPageContent?.offering?.title} />
                        <TitleContent
                            title={ERPPageContent?.offering?.caption}
                            content={ERPPageContent?.offering?.desc}
                        />
                        <div className={styles.serviceListRowswrap}>
                            <ServicesList
                                ServicesData={
                                    ERPPageContent?.offering?.offeringBox
                                }
                                extra='contentStart'
                            />
                        </div>
                    </div>
                </section>

                <section className={`${styles.solutionSection} pt150`}>
                    <div className="container">
                        <div className={styles.solutionWrap}>
                            <div className={styles.solutionLeft}>
                                <span className={styles.smallTitlesm}>
                                    {
                                        ERPPageContent?.solutionandframework
                                            ?.title
                                    }
                                </span>
                                <h2>
                                    {
                                        ERPPageContent?.solutionandframework
                                            ?.caption
                                    }
                                </h2>
                                <div className={styles.solutionLeftIMgqwrap}>
                                    <Image
                                        src={
                                            ERPPageContent?.solutionandframework
                                                ?.mainIMG
                                        }
                                        alt="Solutions Banner"
                                    />
                                </div>
                            </div>
                            <div className={styles.solutionRight}>
                                <div className={styles.solutionBoxlistingWrap}>
                                    <div
                                        className={styles.solutionBoxlistingRow}
                                    >
                                        {ERPPageContent?.solutionandframework?.List?.map(
                                            (list, i) => {
                                                return (
                                                    <div
                                                        className={
                                                            styles.solutionBoxlistingCols
                                                        }
                                                        key={i}
                                                    >
                                                        <div
                                                            className={
                                                                styles.solutionBoxlistingColsLeft
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles.icon
                                                                }
                                                            >
                                                                <i
                                                                    className={
                                                                        list?.svgImgClass
                                                                    }
                                                                ></i>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.solutionBoxlistingColsRight
                                                            }
                                                        >
                                                            <h3>
                                                                {list?.title}
                                                            </h3>
                                                            <p>{list?.desc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.counterSection} pt150 pb150`}>
                    <div className="container">
                        <SmallTitle title={ERPPageContent?.SuccessStories?.title} />
                        <TitleContent
                            title={ERPPageContent?.SuccessStories?.caption}
                            content={ERPPageContent?.SuccessStories?.desc}
                        />
                        <div className="pt30">
                            <CounterBox counter={HomePageContent?.counterBox} />
                        </div>
                    </div>
                </section>

                {/* <BlogSection/> */}
            </main>
        </>
    )
}

export default erptransformationsupport
