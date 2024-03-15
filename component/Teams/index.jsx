'use client'
import React from 'react'
import Slider from "react-slick";
import styles from './teams.module.scss'

import rakeshVerma from '@/public/images/rakesh-verma.webp'
import sureshjain from '@/public/images/suresh-jain.webp'
import nitin from '@/public/images/nitin.webp'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const index = ({data}) => {
  console.log(data,"data in testimonial");

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

        <div className={`${styles.teamClientSliderWrap} slickCustomarrow`}>
          <Slider {...settings}>
            {
              data?.map((listClient,i)=>{
                return(
                <div className={styles.teamClientSlider} key={i}>
                <div className={styles.teamClientSliderContent}>
                  <p>{listClient?.clientMessage}</p>
                  <div className={styles.teamClientSliderTeam}>
  
                    <div className={styles.teamClientTeamThumb}>
                      <Image src={listClient?.clientIMG} alt='Rakesh Verma'/>
                    </div>
                    <div className={styles.teamClientTeamName}>
                      <h4>{listClient?.clientName}</h4>
                      <p>{listClient?.clientDesignation}</p>
                    </div>
                  </div>
                </div>
              </div>
                )


              })
            }
            {/* <div className={styles.teamClientSlider}>
              <div className={styles.teamClientSliderContent}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className={styles.teamClientSliderTeam}>

                  <div className={styles.teamClientTeamThumb}>
                    <Image src={rakeshVerma} alt='Rakesh Verma'/>
                  </div>
                  <div className={styles.teamClientTeamName}>
                    <h4>Rakesh Verma</h4>
                    <p>Lead Intranet Technician</p>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.teamClientSlider}>
              <div className={styles.teamClientSliderContent}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className={styles.teamClientSliderTeam}>

                  <div className={styles.teamClientTeamThumb}>
                    <Image src={sureshjain} alt='Suresh Jain'/>
                  </div>
                  <div className={styles.teamClientTeamName}>
                    <h4>Suresh Jain</h4>
                    <p>Hardware Networking</p>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.teamClientSlider}>
              <div className={styles.teamClientSliderContent}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className={styles.teamClientSliderTeam}>

                  <div className={styles.teamClientTeamThumb}>
                    <Image src={nitin} alt='Nitin'/>
                  </div>
                  <div className={styles.teamClientTeamName}>
                    <h4>Nitin</h4>
                    <p>Lead Intranet Technician</p>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.teamClientSlider}>
              <div className={styles.teamClientSliderContent}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <div className={styles.teamClientSliderTeam}>

                  <div className={styles.teamClientTeamThumb}>
                    <Image src={nitin} alt='Nitin'/>
                  </div>
                  <div className={styles.teamClientTeamName}>
                    <h4>Nitin</h4>
                    <p>Lead Intranet Technician</p>
                  </div>

                </div>
              </div>
            </div> */}
          </Slider>

        </div>


     
    </>
  )
}

export default index
