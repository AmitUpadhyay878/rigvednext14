'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import BannerImage from '../../public/images/home-banner.webp'
import lineBgImgae from '../../public/images/bg-layer.webp'
import RoundedNatureImage from '../../public/images/rounded-nature.webp'
import EagalImage from '../../public/images/eagal-image.webp'
import styles from './herobanner.module.scss'
import Image from 'next/image'
import { HomePageContent } from '@/utils/PagesJson/HomePageContent'
import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const HeroBanner = () => {

    useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

      const scrollToTop = () => {
        scroll.scrollToTop();
      };

      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };

      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };

      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };

      // Function to handle the activation of a link.
      const handleSetActive = (to) => {
        console.log(to);
      };

  return (
    <section className={styles.bannerSection}>
      <div className={styles.homeBanner}>
      <div className="container">
          <div className={styles.bannerWrapper}>
              <div className={styles.bannerLeft}>
                  <div className={styles.bannerContent}>
                      <h1>{HomePageContent?.Banner?.title}</h1>
                      <p>{HomePageContent?.Banner?.desc}</p>
                      <div className={styles.buttonWrap}>
                          {/* <Button
                              text={
                                  HomePageContent?.Banner
                                      ?.contactBtnText
                              }
                              extracss="whiteBtn"
                          />
                          <Button
                              text={
                                  HomePageContent?.Banner
                                      ?.aboutusBtnText
                              }
                              extracss="whiteBorderBtn"
                          /> */}

                          <Link href={HomePageContent?.Banner?.aboutusBtnLink} className={`${styles.whiteBtn} ${styles.bannerBtn}`}>{HomePageContent?.Banner?.aboutusBtnText}</Link>
                          <Link href={HomePageContent?.Banner?.contactBtnLink} className={`${styles.whiteBorderBtn} ${styles.bannerBtn}`}>{HomePageContent?.Banner?.contactBtnText}</Link>

                                                  {/* <Button
                                                  title={HomePageContent?.Banner?.aboutusBtnText}
                                                  to='aboutussection'
                                                  spy={true}
                                                  smooth={true}
                                                  isDynamic={true}
                                                  onSetActive={handleSetActive}
                                                  activeClass="active"
                                                  className={`${styles.whiteBorderBtn} ${styles.bannerBtn}`}
                                              >
                                              {HomePageContent?.Banner?.aboutusBtnText}
                                            </Button>  */}
                      </div>
                  </div>
              </div>
              <div className={styles.bannerRight}>
                {/* <div className={styles.liningImageBox}>
                <Image
                  src={lineBgImgae}
                  alt="line shape"
                  className={styles.liningShapeImage}
                />
                  <div className={styles.innerImageBox}>
                    <Image
                      src={RoundedNatureImage}
                      alt="RoundedNatureImage"
                      className={styles.RoundedNatureImage}
                    />
                    <Image
                      src={EagalImage}
                      alt="EagalImage"
                      className={styles.EagalImage}
                  />
                  </div>
                </div> */}
                  <Image
                      src={BannerImage}
                      alt="BannerImage"
                      className={styles.bannerImage}
                  />
                  {/* <Image
                      src={BannerBirdImage}
                      alt="BannerBirdImage"
                      className={styles.bannerBirdImage}
                  /> */}
              </div>
          </div>
      </div>
    </div>
</section>
  )
}

export default HeroBanner