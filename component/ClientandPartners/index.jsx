'use client'
import React from 'react'
import styles from './clientandpartners.module.scss'
import SmallTitle from '../SmallTitle'
import Image from 'next/image'
import TitleContent from '../TitleContent'


import PartnerImage1 from '../../public/images/partner-1.svg'
import PartnerImage2 from '../../public/images/partner-2.svg'
import PartnerImage3 from '../../public/images/partner-3.svg'
import PartnerImage4 from '../../public/images/partner-4.svg'
import PartnerImage5 from '../../public/images/partner-5.svg'
import PartnerImage6 from '../../public/images/partner-6.svg'
import PartnerImage7 from '../../public/images/partner-7.svg'
import PartnerImage8 from '../../public/images/partner-8.svg'
import PartnerImage9 from '../../public/images/partner-9.svg'
import PartnerImage10 from '../../public/images/partner-10.svg'
import PartnerImage11 from '../../public/images/partner-11.svg'
import PartnerImage12 from '../../public/images/partner-12.svg'
// import PartnerImage13 from '../../public/images/partner-13.svg'
// import PartnerImage14 from '../../public/images/partner-14.svg'
// import PartnerImage15 from '../../public/images/partner-15.svg'
// import PartnerImage16 from '../../public/images/partner-16.svg'

const ClientandPartners = ({data=
    {
    title: 'Clients & Partners',
    caption: 'Building Success Together',
    desc: 'Discover the collaborative spirit with our valued clients. Explore how we join forces to achieve success, turning visions into reality through innovative software solutions and strategic partnerships.',
    PartnersListDetails: [
        {
            imageSRC: PartnerImage1
        },
        {
            imageSRC: PartnerImage2
        },
        {
            imageSRC: PartnerImage3
        },
        {
            imageSRC: PartnerImage4
        },
        {
            imageSRC: PartnerImage5
        },
        {
            imageSRC: PartnerImage6
        },
        {
            imageSRC: PartnerImage7
        },
        {
            imageSRC: PartnerImage8
        },
        {
            imageSRC: PartnerImage9
        },
        {
            imageSRC: PartnerImage10
        },
        {
            imageSRC: PartnerImage11
        },
        {
            imageSRC: PartnerImage12
        },
        // {
        //     imageSRC: PartnerImage13
        // },
        // {
        //     imageSRC: PartnerImage14
        // },
        // {
        //     imageSRC: PartnerImage15
        // },
        // {
        //     imageSRC: PartnerImage16
        // }
    ]
},home=false}) => {

  return (
    <>
    <section className={`${styles.partnersSection} pt150`}>
    <div className='container'>
        <div className={styles.partnersContent}>
                <SmallTitle title={data?.title}/>
                <TitleContent title={data?.caption} content={data?.desc}/>
            <div className={styles.partnersWrapper}>
                <ul className={styles.partnersList}>
                    {data?.PartnersListDetails.map((items ,i) => {
                        return(
                            <li key={i}>
                                <Image src={items?.imageSRC} alt='partners'  />
                            </li>
                        )
                    })}
                </ul>
            </div>
            {
            home &&
            <span className={`${styles.innerBoxShadow} roundedshadow`}></span>
            }
        </div>
    </div>
</section>
    </>
  )
}

export default ClientandPartners