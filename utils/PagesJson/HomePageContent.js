import SolutionAntImage from '../../public/images/solutions-ant-image.webp'

import service1 from '../../public/images/home-service-image1.webp'
import service2 from '../../public/images/home-service-image2.webp'
import service3 from '../../public/images/home-service-image3.webp'
import service4 from '../../public/images/home-service-image4.webp'
import service5 from '../../public/images/home-service-image5.webp'

import SolutionCardImage1 from '../../public/images/solution-card-1.webp'
import SolutionCardImage2 from '../../public/images/solution-card-2.webp'
import SolutionCardImage3 from '../../public/images/solution-card-3.webp'
import SolutionCardImage4 from '../../public/images/solution-card-4.webp'
import SolutionCardImage5 from '../../public/images/solution-card-5.webp'
import SolutionCardImage6 from '../../public/images/solution-card-6.webp'

import AboutUsMainImage from '../../public/images/aboutus-main-image.webp'

import OurMissionIcon from '../../public/images/our-mission-icon.svg'
import OurVisionIcon from '../../public/images/our-vision-icon.svg'
import OurValueIcon from '../../public/images/our-values-icons.svg'
import OurValueInnerImage from '../../public/images/our-value-inner-image.webp'

//new images for Partners
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
//----------------------------------------

import TrustedPartnerImage1 from '../../public/images/trusted-partners-1.svg'
import TrustedPartnerImage2 from '../../public/images/trusted-partners-2.svg'
import TrustedPartnerImage3 from '../../public/images/trusted-partners-3.svg'
import TrustedPartnerImage4 from '../../public/images/trusted-partners-4.svg'
import TrustedPartnerImage5 from '../../public/images/trusted-partners-5.svg'
import TrustedPartnerImage6 from '../../public/images/trusted-partners-6.svg'
import TrustedPartnerImage7 from '../../public/images/trusted-partners-7.svg'
import TrustedPartnerImage8 from '../../public/images/trusted-partners-8.svg'

import clientBaner from '../../public/images/teamBanner.webp'

import rakeshVerma from '../../public/images/rakesh-verma.webp'
import sureshjain from '../../public/images/suresh-jain.webp'
import nitin from '../../public/images/nitin.webp'

export const HomePageContent = {

    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    Banner: {
        title: 'EYES ON TOMORROW',
        desc: 'Empowering growth through innovation',
        contactBtnText: 'Contact Us',
        contactBtnLink: '/contact-us',
        aboutusBtnText: 'About Us',
        aboutusBtnLink: '/about-us'
    },

    services: {
        title: 'Services',
        caption: 'Our Offerings',
        desc: 'Unparalleled expertise with Domain experience. Our seasoned professionals bring a wealth of knowledge, ensuring top-notch solutions and support services for your core business needs.',
        serviceList: [
            {
                imgSrc: service1,
                title: 'Digital Transformation',
                desc: 'Elevating Business Through Digital Prowess: Empowering Growth with Innovative Solutions',
                URLlink:"/services/digital-transformation"
            },
            {
                imgSrc: service2,
                title: 'ERP Transformation & Support',
                desc: 'Seamless ERP Evolution:Transforming Today, Supporting Tomorrow',
                URLlink:"/services/erp-transformation-support"
            },
            {
                imgSrc: service3,
                title: 'Digital workplace (dwp)',
                desc: 'Your One-Stop Hub: Unleashing App and Infra Support with Self-Service Excellence and Knowledge Mastery',
                URLlink:"/services/digital-workplace"
            },
            {
                imgSrc: service4,
                title: 'infrastructure & cloud',
                desc: 'Your One-Stop Hub: Unleashing App and Infra Support with Self-Service Excellence and Knowledge Mastery',
                URLlink:"/services/infrastructure-cloud"
            },
            {
                imgSrc: service5,
                title: 'strategic staffing',
                desc: 'Strategic Workforce Flexibility: Elevate Your Team with Outsourced Excellence in Key Positions',
                URLlink:"/services/strategic-staffing"
            }
        ]
    },

    SolutionsandFrameworks: {
        title: 'Solutions & Frameworks',
        caption: 'From Concept to Creation: Solution-Driven, Framework-Enabled',
        SecImg: SolutionAntImage,
        frameworkList: [
            {
                imgSrc: SolutionCardImage1,
                title: 'TRUPlan',
                desc: 'Pre-built, ready to deploy, plug & play Planning & budgeting solution for cement industry. This solution reduces time for budgeting cycle by 40-60%, increases budgeting accuracy by 20-25%, aids Cost control + Procurement accuracy+ Improved lead time by 5-10% and Improves profitability by 1-2 % ',
                linkBtn: '/solutions/truplan'
            },
            {
                imgSrc: SolutionCardImage2,
                title: 'TRUConnect',
                desc: 'Packaged dealer management portal to connect all dealers to achieve business growth and scalability. Dealer management integrated with SAP modules',
                linkBtn: '/solutions/truconnect'
            },
            {
                imgSrc: SolutionCardImage3,
                title: 'TRUTransformation',
                desc: 'Legacy Transformation is a framework to reduce IT environment complexity and costs by reduce processing time and address mobility challenges with next generation technologies',
                linkBtn: '/solutions/trutransform'
            },
            {
                imgSrc: SolutionCardImage4,
                title: 'TRUWorkplace',
                desc: 'Our framework keeps End User at the core. With One-Stop-Shop pillars we are able to deliver integrated Experience to the users as well as create standardization across the IT Touch points',
                linkBtn: '/solutions/truworkplace'
            },
            {
                imgSrc: SolutionCardImage5,
                title: 'TRUAMS',
                desc: 'TRUAMS places its emphasis on automation, integration, and the implementation of proactive continuous monitoring within our solution framework. This approach is instrumental in providing business users with efficient services that adhere to ITIL compliance standards.',
                linkBtn: '/solutions/truams'
            },
            {
                imgSrc: SolutionCardImage6,
                title: 'TRUArchival',
                desc: 'TRUArchival offers customers to significantly cut their data volume ~50%. Organizations accumulate large volumes of data nowadays. TRUArchival achieves reduction in cost, eliminates storage issues while addressing compliance concerns.',
                linkBtn: '/solutions/truarchival'
            }
        ]
    },

    AboutUs: {
        title: 'About Us',
        caption: 'Shaping Excellence for Over 15 Years',
        desc: "Melding the profound wisdom of The Rigveda with the innovative spirit of modern technology, RigvedIT crafts solutions that harmonize technological advancement with sustainable practices. We're not just a technology company-we're a philosophy, intertwining the deep insights of the past with the vibrant, digital pulse of today, ensuring your business is perpetually forward-moving & ever-thriving.",
        linktext: 'Read More',
        linkURL: '/',
        mainImage: AboutUsMainImage,

        ourMission: {
            title: 'Our Mission',
            desc: 'Our mission is to build lasting relationships with our customers through exceptional IT services delivery, innovation, speed and trust for mutual success',
            imgSVG: OurMissionIcon
        },
        ourVision: {
            title: 'Our Vision',
            desc: 'Enrich Value Driven Relationship with Our Customers and be the Preferred Employer for our Value Creators',
            imgSVG: OurVisionIcon
        },
        OurValues: {
            title: 'Our Values',
            desc: ' ',
            imgSVG: OurValueIcon,
            desc: {
                descImg: OurValueInnerImage,
                ETHOS: [
                    {
                        FirstLetter: 'E',
                        word: 'Ethics'
                    },
                    {
                        FirstLetter: 'T',
                        word: 'Trust'
                    },
                    {
                        FirstLetter: 'H',
                        word: 'Health'
                    },
                    {
                        FirstLetter: 'O',
                        word: 'Objective'
                    },
                    {
                        FirstLetter: 'S',
                        word: 'Spirited'
                    }
                ]
            },
        }
    },

    counterBox: [
        {
            title: 'World-Class, Secure Delivery Center',
            count: 2
        },
        {
            title: 'Years of Delivery Experience',
            count: 15
        },
        {
            title: 'Customers',
            count: 60
        },
        {
            title: 'Professionals',
            count: 500
        },
        {
            title: 'CMMI Level',
            count: 5
        }
    ],

    partners: {
        title: 'Clients & Partners',
        caption: 'Building Success Together',
        desc: 'Experience the synergy of collaboration alongside our esteemed clients. Delve into our shared journey towards success, where we unite to transform visions into tangible realities using inventive approaches and strategic alliances.',
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
    },

    TrustedPartnersSection: {
        title: 'Explore Our Trusted Partnerships Today',
        desc: ' Discover the strength of collaborative success through our trusted partnerships. Explore today to witness how we unite with industry leaders to deliver innovative and impactful solutions.',
        PartnerList: [
            {
                title: 'OEM Partnerships',
                List: [
                    TrustedPartnerImage1,
                    TrustedPartnerImage2,
                    TrustedPartnerImage3,
                    TrustedPartnerImage4
                ]
            },
            {
                title: 'Cloud Partnerships',
                List: [
                    TrustedPartnerImage5,
                    TrustedPartnerImage6,
                    TrustedPartnerImage7,
                    TrustedPartnerImage8
                ]
            },
            // {
            //     title: 'OEMRelationships',
            //     List: [
            //         TrustedPartnerImage9,
            //         TrustedPartnerImage10,
            //         TrustedPartnerImage11,
            //         TrustedPartnerImage12
            //     ]
            // }
        ]
    },

    ClientTestimonial: {
        title: 'Insights from Clients & Team.',
        caption: 'Clients, Team, Excellence Shared Here.',
        desc: 'Explore a space where client and employee perspectives converge. Our dedicated section offers insights into excellence, teamwork, and the collective success experienced within our dynamic environment.',
        mainImg: clientBaner,
        testmonialList: [
            {
                clientIMG: rakeshVerma,
                clientDesignation: 'Team Lead',
                clientMessage:<>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</>,
                clientName:"Rakesh Verma"
            },
            {
                clientIMG: sureshjain,
                clientDesignation:'Tech Lead',
                clientMessage: <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</>,
                clientName:"Suresh Verma"
            },
            {
                clientIMG: nitin,
                clientDesignation: 'Poject Manager',
                clientMessage: <>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</>,
                clientName:"Nitin Verma"
            }
        ]
    },

    blogSection:{
        title:"Blogs",
        caption:"Latest Software Trends and Updates Unveiled",
        desc:"Dive into our diverse and insightful blogs covering the latest trends, expert insights, and practical tips in the dynamic world of technology. Stay informed, inspired, and ahead in the digital landscape.",
        blogList:[
            {
                blogImg:"",
                blogTitle:"",
                blogDesc:""
            },
            {
                blogImg:"",
                blogTitle:"",
                blogDesc:""
            },
            {
                blogImg:"",
                blogTitle:"",
                blogDesc:""
            },

        ]
    },
    ContactusSection:{
        title:"Contact Us",
        caption:"get in touch",
        desc:"Whether you have inquiries, need assistance, or wish to explore collaboration opportunities, our dedicated team is ready to respond promptly and help you thrive in the digital realm.",

    }
}
