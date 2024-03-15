"use client";
import React, { useEffect } from 'react'
import styles from './Banner.module.scss';
import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Banner = ({ title, content, imagepath, btnLink="",Solutionbanner="",SerivceBanner="", }) => {

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
    <section className={`${styles.BannerSection} ${Solutionbanner? styles.SolutionBanner :""} ${SerivceBanner? styles.SerivceBanner :""}`}   style={{ backgroundImage: `url(${imagepath})` }}>
      <div className='container'>
        <div className={styles.BannerContent}>
          <div className={styles.content}>
            <h2>{title}</h2>
            {/* <p>{content}</p> */}
          </div>
          {!btnLink=="" ?
            //  <Button text='Apply Now' />
              <Button type='button' className={`${styles.commonBtn}`}  to={'contactform'} spy={true} smooth={true} isDynamic={true} onSetActive={handleSetActive} offset={-100} >
                  Apply Now
              </Button>
             :
             ""
        }
        </div>
      </div>
    </section>
  );
};

export default Banner;
