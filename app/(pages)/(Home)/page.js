import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import ServicesBox from '@/component/ServicesBox'
import SmallTitle from '@/component/SmallTitle'
import TitleContent from '@/component/TitleContent'
import Teams from '@/component/Teams'
import Link from 'next/link'
import CounterBox from '@/component/CounterBox'
import { HomePageContent } from '../../../utils/PagesJson/HomePageContent'
import ClientandPartners from '@/component/ClientandPartners'
import Contactus from '@/component/Contactus'
import HeroBanner from '../../../component/HeroBanner'
export default function Home() {
    return (
        <main className="homePage">
            <HeroBanner />
            <section className={`${styles.serviceSection} pt150`}>
                <div className="container">
                    <SmallTitle title={HomePageContent?.services?.title} />

                    <TitleContent
                        title={HomePageContent?.services?.caption}
                        content={HomePageContent?.services?.desc}
                    />

                    <div className={styles.serviceWrap}>
                        <div className={styles.serviceRows}>
                            {HomePageContent?.services?.serviceList?.map(
                                (rc, i) => {
                                    return (
                                        <ServicesBox
                                        key={i}
                                            imgsrc={rc?.imgSrc}
                                            title={rc?.title}
                                            desc={rc?.desc}
                                            url={rc?.URLlink}
                                        />
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.solutionsSection} pt150`}>
                <div className="container">
                    <SmallTitle
                        title={HomePageContent?.SolutionsandFrameworks?.title}
                    />
                    <div className={styles.solutionsWrapper}>
                        <div className={styles.conceptContent}>
                            <h3>
                                {
                                    HomePageContent?.SolutionsandFrameworks
                                        ?.caption
                                }
                            </h3>
                            <div className={styles.solutionsImage}>
                                <Image
                                    src={
                                        HomePageContent?.SolutionsandFrameworks
                                            ?.SecImg
                                    }
                                    alt=""
                                    className={styles.SolutionAntImage}
                                />
                            </div>
                        </div>
                        <div className={styles.solutionsCardsWrap}>
                            <div className={styles.solitionDetails}>
                                {HomePageContent?.SolutionsandFrameworks?.frameworkList?.map(
                                    (FList, i) => {
                                        return (
                                            <div
                                                className={styles.flipCard}
                                                key={i}
                                            >
                                                <div
                                                    className={
                                                        styles.flipCardInner
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.flipCardFront
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.imageBox
                                                            }
                                                        >
                                                            <Image
                                                                src={
                                                                    FList?.imgSrc
                                                                }
                                                                alt="SolutionCardImage1"
                                                            />
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.overlayContent
                                                            }
                                                        >
                                                            <h3>
                                                                {FList?.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.flipCardBack
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.content
                                                            }
                                                        >
                                                            <h3>
                                                                {FList?.title}
                                                            </h3>
                                                            <p>{FList?.desc}</p>
                                                        </div>
                                                        <Link
                                                            href={
                                                                FList?.linkBtn
                                                            }
                                                            className={
                                                                styles.roundedArrowBtn
                                                            }
                                                        >
                                                            <i className="icon-right-arrow"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.aboutSection} pt150`} name="aboutussection">
                <div className="container">
                    <SmallTitle title={HomePageContent?.AboutUs?.title} />
                    <div className={styles.aboutUs}>
                        <TitleContent
                            title={HomePageContent?.AboutUs?.caption}
                            content={HomePageContent?.AboutUs?.desc}
                        />
                        <div className={styles.aboutWrapper}>
                            <div className={styles.aboutLeft}>
                                <Image
                                    src={HomePageContent?.AboutUs?.mainImage}
                                    alt="AboutUsMainImage"
                                />
                            </div>
                            <div className={styles.aboutRight}>
                                <div className={styles.leftContent}>
                                    <div
                                        className={`${styles.detailsBox} ${styles.OurMission}`}
                                    >
                                        <div className={styles.icon}>
                                            <Image
                                                src={
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.imgSVG
                                                }
                                                alt="OurMissionIcon"
                                            />
                                        </div>
                                        <div className={styles.content}>
                                            <h5>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.title
                                                }
                                            </h5>
                                            <p>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.desc
                                                }
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.rightContent}>
                                    <div
                                        className={`${styles.detailsBox} ${styles.OurMissionWrap}`}
                                    >
                                        <div className={styles.icon}>
                                            <Image
                                                src={
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.imgSVG
                                                }
                                                alt="OurMissionIcon"
                                            />
                                        </div>
                                        <div className={styles.content}>
                                            <h5>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.title
                                                }
                                            </h5>
                                            <p>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourMission?.desc
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.detailsBox} ${styles.OurVision}`}
                                    >
                                        <div className={styles.icon}>
                                            <Image
                                                src={
                                                    HomePageContent?.AboutUs
                                                        ?.ourVision?.imgSVG
                                                }
                                                alt="OurVisionIcon"
                                            />
                                        </div>
                                        <div className={styles.content}>
                                            <h5>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourVision?.title
                                                }
                                            </h5>
                                            <p>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.ourVision?.desc
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.detailsBox} ${styles.OurValue}`}
                                    >
                                        <div className={styles.icon}>
                                            <Image
                                                src={
                                                    HomePageContent?.AboutUs?.OurValues?.imgSVG
                                                }
                                                alt="OurValueIcon"
                                            />
                                        </div>
                                        <div className={styles.content}>
                                            <h5>
                                                {
                                                    HomePageContent?.AboutUs
                                                        ?.OurValues?.title
                                                }
                                            </h5>
                                            <div className={styles.valuesWrap}>
                                                <div
                                                    className={
                                                        styles.valuesLeft
                                                    }
                                                >
                                                    <Image
                                                        src={
                                                            HomePageContent
                                                                ?.AboutUs
                                                                ?.OurValues
                                                                ?.desc?.descImg
                                                        }
                                                        alt="OurValueInnerImage"
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.valuesRight
                                                    }
                                                >
                                                    <ul>
                                                        {HomePageContent?.AboutUs?.OurValues?.desc?.ETHOS?.map(
                                                            (ethos, i) => {
                                                                return (
                                                                    <li key={i}>
                                                                        <span>
                                                                            {
                                                                                ethos?.FirstLetter
                                                                            }
                                                                        </span>
                                                                        {
                                                                            ethos?.word
                                                                        }
                                                                    </li>
                                                                )
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CounterBox
                            extraClass="aboutUsCounter"
                            counter={HomePageContent?.counterBox}
                        />
                        <span
                            className={`${styles.innerBoxShadow} roundedshadow`}
                        ></span>
                    </div>
                </div>
            </section>
            <ClientandPartners data={HomePageContent?.partners} home={true} />

            <section className={`${styles.TrustedPartnersSection}`}>
                <div className="container">
                    <div className={styles.trustedPartners}>
                        <TitleContent
                            title={HomePageContent?.TrustedPartnersSection?.title}
                            content={HomePageContent?.TrustedPartnersSection?.desc}
                        />
                        <div className={styles.trustedPartnersWrapper}>
                                {
                                    HomePageContent?.TrustedPartnersSection?.PartnerList?.map((truPart,i)=>{
                                        return(
                                            <div className={styles.partnersBox} key={i}>
                                            <div className={styles.TitleBox}>
                                            <h3>{truPart?.title}</h3>
                                            </div>
                                            <ul>
                                                {
                                            truPart?.List?.map((list,i)=>{
                                                return(
                                                    <li key={i}>
                                                    <Image
                                                        src={list}
                                                        alt="TrustedPartnerImage1"
                                                    />
                                                </li>
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

            <section className={`${styles.clientTeamSection} pt150`}>
                <div className="container">
                    <SmallTitle title={HomePageContent?.ClientTestimonial?.title} />
                    <TitleContent
                        title={HomePageContent?.ClientTestimonial?.caption}
                        content={HomePageContent?.ClientTestimonial?.desc}
                    />

                    <div className={styles.teamClientSection}>
                        <div className={styles.teamClientBnrthumb}>
                            <Image src={HomePageContent?.ClientTestimonial?.mainImg} alt="Client Banner" />
                        </div>
                    </div>
                </div>
                <div className={styles.teamSliderWrap}>
                    <div className="container">
                        <Teams data={HomePageContent?.ClientTestimonial?.testmonialList} />
                    </div>
                </div>
            </section>



            {/* <BlogSection/> */}

            <Contactus />
        </main>
    )
}
