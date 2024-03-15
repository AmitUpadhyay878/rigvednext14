import About from '@/component/About'
import Banner from '@/component/Banner'
import React from 'react'
import serviceBanner from '@/public/images/services-banner.webp'
import dataBanner from '@/public/images/data-decision.webp'
import solutionBanner from '@/public/images/solution-framework.webp'
import Contactus from '@/component/Contactus'
import styles from './digitalservices.module.scss'
import BlogSection from '@/component/BlogSection'
import CounterBox from '@/component/CounterBox'
import TitleContent from '@/component/TitleContent'
import { HomePageContent } from '../../../../utils/PagesJson/HomePageContent'
import SmallTitle from '@/component/SmallTitle'
import CardTitleContent from '@/component/CardTitleContent'
import ServicesList from '@/component/ServicesList'
import Image from 'next/image'
import {StrategicStaffingPageContent} from '../../../../utils/PagesJson/StrategicStaffingPageContent'

const cardData = [
  {
    title: 'Data Analytics & Visualization',
    content: 'Use our advanced data analytics and visualisation tools to uncover practical insights from your data.'
  },
  {
    title: 'Advance Analytics',
    content: 'Utilize Advanced Analytics to Drive Growth and Efficiency through Data-Driven Decision-Making.'
  },
  {
    title: 'Customer Experience',
    content: 'Raise customer contentment with tailor-made solutions that engage and delight your clientele.'
  },
  {
    title: 'Web & Mobility',
    content: 'Guarantee the dependability and effectiveness of your digital resources using our automated testing procedures.'
  },
  {
    title: 'Internet of Things (IOT)',
    content: 'Approach the future with confidence by embarking on a successful journey of digital transformation.'
  },
  {
    title: 'Automated Testing',
    content: 'Easily embrace the mobile landscape with our web accessibility solutions, connecting with your audience wherever they are.'
  },
];


const ServicesData = [
  {
    mainTitle: 'CONSULTING',
      lists: [
        {
          title: 'Strategic Roadmap Assessment',
          link: `/`
        },
        {
          title: 'Capability GAP Assessment',
          link: '/'
        },
        {
          title: 'Profiling & Modeling',
          link: '/'
        },
        {
          title: 'Enterprise Architecture',
          link: '/'
        }
      ]
  },
  {
    mainTitle: 'NEW IMPLIMENTATION',

      lists: [
        {
          title: 'End-to-End Solution Implementation',
          link: `/`
        },
        {
          title: 'Proof of Concepts',
          link: '/'
        },
        {
          title: 'Optimizations & Improvements',
          link: '/'
        }
      ]
  },
  {
    mainTitle: 'SUPPORT ANDMAINTENANCE',
    lists: [
      {
        title: '24 × 7 Support',
        link: `/`
      },
      {
        title: 'Technical Help Desk',
        link: '/'
      },
      {
        title: 'Application Support',
        link: '/'
      },
      {
        title:'Annual Maintenance Support',
        link: '/'
      }
    ]
  },{
    mainTitle: 'UPGRADE',
    lists: [
      {
        title: 'Upgrade Tool Version for New Features',
        link: `/`
      },
      {
        title: 'Audit of the Existing Environment',
        link: '/'
      },
      {
        title: 'Tools Comparison',
        link: '/'
      },
      {
        title:'Upgrade Methodology',
        link: '/'
      }
    ]
  },{
    mainTitle: 'MIGRATION',
      lists: [
        {
          title: 'Change of Technology',
          link: `/`
        },
        {
          title: 'On-Prem to a cloud-based offering',
          link: '/'
        },
        {
          title: 'Profiling& Modeling',
          link: '/'
        },
        {
          title:'Enterprise Architecture',
          link: '/'
        }
      ]
  }
];

const strategicstaffing = () => {
  return (
    <>
      <main className="noContactform">
        <Banner
         SerivceBanner="service"
          title={StrategicStaffingPageContent?.Banner?.title}
          content={StrategicStaffingPageContent?.Banner?.desc}
          imagepath={StrategicStaffingPageContent?.Banner?.imgSRC['src']}
        />
        <About
          title={StrategicStaffingPageContent?.Aboutus?.title}
          content={StrategicStaffingPageContent?.Aboutus?.desc}
          imagepath={StrategicStaffingPageContent?.Aboutus?.imgSRC}
        />

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title={StrategicStaffingPageContent?.offering?.title} />
            <TitleContent title={StrategicStaffingPageContent?.offering?.caption} content={StrategicStaffingPageContent?.offering?.desc}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={StrategicStaffingPageContent?.offering?.offeringBox} extra="grid2" />
            </div>
          </div>
        </section>

        <section className={`${styles.counterSection} pt150 pb150`}>
            <div className="container">
              <SmallTitle title={StrategicStaffingPageContent?.SuccessStories?.title}/>
              <TitleContent title={StrategicStaffingPageContent?.SuccessStories?.caption} content={StrategicStaffingPageContent?.SuccessStories?.desc}/>
              <div className='pt30'>
                <CounterBox  counter={HomePageContent?.counterBox} />
              </div>
            </div>
        </section>


      </main>
    </>
  )
}

export default strategicstaffing