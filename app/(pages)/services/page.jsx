// import About from '@/component/About'
// import Banner from '@/component/Banner'
// import React from 'react'
// import serviceBanner from '@/public/images/services-banner.webp'
// import dataBanner from '@/public/images/data-decision.webp'
// import solutionBanner from '@/public/images/solution-framework.webp'
// import Contactus from '@/component/Contactus'
// import styles from './page.module.scss'
// import BlogSection from '@/component/BlogSection'
// import CounterBox from '@/component/CounterBox'
// import TitleContent from '@/component/TitleContent'
// import { HomePageContent } from '../../../utils/PagesJson/HomePageContent'
// import SmallTitle from '@/component/SmallTitle'
// import CardTitleContent from '@/component/CardTitleContent'
// import ServicesList from '@/component/ServicesList'
// import Image from 'next/image'


// const cardData = [
//   {
//     title: 'Data Analytics & Visualization',
//     content: 'Use our advanced data analytics and visualisation tools to uncover practical insights from your data.'
//   },
//   {
//     title: 'Advance Analytics',
//     content: 'Utilize Advanced Analytics to Drive Growth and Efficiency through Data-Driven Decision-Making.'
//   },
//   {
//     title: 'Customer Experience',
//     content: 'Raise customer contentment with tailor-made solutions that engage and delight your clientele.'
//   },
//   {
//     title: 'Web & Mobility',
//     content: 'Guarantee the dependability and effectiveness of your digital resources using our automated testing procedures.'
//   },
//   {
//     title: 'Internet of Things (IOT)',
//     content: 'Approach the future with confidence by embarking on a successful journey of digital transformation.'
//   },
//   {
//     title: 'Automated Testing',
//     content: 'Easily embrace the mobile landscape with our web accessibility solutions, connecting with your audience wherever they are.'
//   },
// ];


// const ServicesData = [
//   {
//     mainTitle: 'CONSULTING',
//       lists: [
//         {
//           title: 'Strategic Roadmap Assessment',
//           link: `/`
//         },
//         {
//           title: 'Capability GAP Assessment',
//           link: '/'
//         },
//         {
//           title: 'Profiling & Modeling',
//           link: '/'
//         },
//         {
//           title: 'Enterprise Architecture',
//           link: '/'
//         }
//       ]
//   },
//   {
//     mainTitle: 'NEW IMPLIMENTATION',

//       lists: [
//         {
//           title: 'End-to-End Solution Implementation',
//           link: `/`
//         },
//         {
//           title: 'Proof of Concepts',
//           link: '/'
//         },
//         {
//           title: 'Optimizations & Improvements',
//           link: '/'
//         }
//       ]
//   },
//   {
//     mainTitle: 'SUPPORT ANDMAINTENANCE',
//     lists: [
//       {
//         title: '24 × 7 Support',
//         link: `/`
//       },
//       {
//         title: 'Technical Help Desk',
//         link: '/'
//       },
//       {
//         title: 'Application Support',
//         link: '/'
//       },
//       {
//         title:'Annual Maintenance Support',
//         link: '/'
//       }
//     ]
//   },{
//     mainTitle: 'UPGRADE',
//     lists: [
//       {
//         title: 'Upgrade Tool Version for New Features',
//         link: `/`
//       },
//       {
//         title: 'Audit of the Existing Environment',
//         link: '/'
//       },
//       {
//         title: 'Tools Comparison',
//         link: '/'
//       },
//       {
//         title:'Upgrade Methodology',
//         link: '/'
//       }
//     ]
//   },{
//     mainTitle: 'MIGRATION',
//       lists: [
//         {
//           title: 'Change of Technology',
//           link: `/`
//         },
//         {
//           title: 'On-Prem to a cloud-based offering',
//           link: '/'
//         },
//         {
//           title: 'Profiling& Modeling',
//           link: '/'
//         },
//         {
//           title:'Enterprise Architecture',
//           link: '/'
//         }
//       ]
//   }
// ];

const services = () => {
  return (
    <>
      {/* <main>
        <Banner
          title={"Digital Transformation"}
          content={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
          imagepath={serviceBanner['src']}
        />
        <About
          title={"Data to Decision"}
          content={
            "Digital transformation sits at the heart ofevery organization that intends to change. All running and upcoming trends haveDigital essence to them. CXO's have clearly indicated the next spend cycle inIT Transformation is going to be in Digital. We at RigvedIT keep Value Chain ofthe business at the heart and align the strategy and objectives as enablers ofDigital transformation."
          }
          imagepath={dataBanner}
        />


        <section className={`${styles.digitalCardSection} pt150`}>
          <div className="container">
            <div className={styles.digitalCardWrap}>
              <h2>Our Digital Transformation Service Lines covers.</h2>
              <CardTitleContent cardData={cardData}/>
            </div>
          </div>
        </section>

        <section className={`${styles.serviceOfferSection} pt150`}>
          <div className="container">
            <SmallTitle title='Service Offerings'/>
            <TitleContent title={'Service Spectrum: Your Path to Excellence'} content={'Explore our diverse range of service offerings meticulously designed to address your unique needs and propel your success forward.'}/>
            <div className={styles.serviceListRowswrap}>
              <ServicesList ServicesData={ServicesData}/>
            </div>
          </div>
        </section>


        <section className={`${styles.solutionSection} pt150`}>
          <div className="container">
            <div className={styles.solutionWrap}>
              <div className={styles.solutionLeft}>
                <span className={styles.smallTitlesm}>Solutions & Frameworks</span>
                <h2>Solution Frameworks: Guiding Success</h2>
                <div className={styles.solutionLeftIMgqwrap}>
                 <Image src={solutionBanner} alt="Solutions Banner" />
                </div>
              </div>
              <div className={styles.solutionRight}>

                <div className={styles.solutionBoxlistingWrap}>
                  <div className={styles.solutionBoxlistingRow}>

                    <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i class="icon-list"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUPIan (Demo Ready)</h3>
                        <p>Pre-built, ready to deploy, plug & play Planning & budgeting solution for cement industry. This solution reduces time for budgeting cycle by 40- 60%, increases budgeting accuracy by 20-25%, aids Cost control + Procurement accuracy+ Improved lead time by 5-10% and Improves profitability by 1-2%</p>
                      </div>
                    </div>

                    <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i class="icon-persons"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUConnect (Demo Ready)</h3>
                        <p>Packaged dealer management portal to connect all dealers to achieve business growth and scalability. Dealer management integrated with SAP modules</p>
                      </div>
                    </div>

                    <div className={styles.solutionBoxlistingCols}>
                      <div className={styles.solutionBoxlistingColsLeft}>
                        <div className={styles.icon}>
                          <i class="icon-world"></i>
                        </div>
                      </div>
                      <div className={styles.solutionBoxlistingColsRight}>
                        <h3>TRUTransformation</h3>
                        <p>Legacy Transformation is a framework to reduce IT environment complexity and costs by reduce processing time and address mobility challenges with next generation technologies</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className={`${styles.counterSection} pt150`}>
            <div className="container">
              <SmallTitle title='Success Stories'/>
              <TitleContent title={'Inspiring Success Stories'} content={'Discover the remarkable journeys of individuals and businesses who turned challenges into triumphs, igniting inspiration and motivation along the way.'}/>
              <div className='pt30'>
                <CounterBox  counter={HomePageContent?.counterBox} />
              </div>
            </div>
        </section>

        <Contactus/>

      </main> */}
      <div>services</div>
    </>
  )
}

export default services