import JobDetailsBannerImage from '../../public/images/careers-banner.webp'
import AboutCareersImage from '../../public/images/about-careers.webp'
import IsolationTreeImage from '../../public/images/isolation-tree.webp'
import IsolationRoundedTreeImage from '../../public/images/isolation-rounded-tree.webp'
import CareersAtRigvedImage from '../../public/images/careers-at-rigved.webp'
import CareersAtRigvedBgImage from '../../public/images/careers-at-rigved-bg.webp'

export const CareerPageContent={
  seo:{
    title:"",
    description:"",
    link:"",
    image:""
},
      banner:{
       title:"Careers" ,
       desc:"A Career Where Your Potential Matter",
       imgSRC:JobDetailsBannerImage
      },

      // about:{
      //   title:"Explore your ambitions with RigvedIT. Join a diverse team dedicated to realizing your goals in consulting, marketing, sustainability, technology, and more. Unleash your potential in an environment that fosters personal growth and teamwork.",
      //   imgSRC:AboutCareersImage
      // },

      // empowerment:{
      //   title:"Empowerment",
      //   caption:"Unlock a career where your potential and ideas truly count.",
      //   desc:"At RigvedIT, we actively seek individuals with a knack for problem-solving, creative thinking, engineering prowess, and business acumen. Immerse yourself in a realm of boundless opportunities where your talents will be spotlighted, contributing to a significant impact each day. Whether you bring seasoned expertise or recent graduate zeal, joining RigvedIT promises a challenging and gratifying progression in your professional journey.",
      //   btnLink:"/job-listing",
      //   btnText:"Explore our open positions"
      // },

      DigitalCards: {
        title: 'Find your ideal role',
        cardList: [
            {
                title: 'Students',
                desc: 'Start a rewarding career with RigvedIT, leveraging your talents. We welcome exceptional individuals from diverse academic backgrounds, whether you’re completing your undergraduate degree or pursuing postgraduate studies.'
            },
            {
                title: 'Experienced professionals',
                desc: 'Explore opportunities at RigvedIT across a spectrum of fields including technology, finance, government, engineering, law, medicine, and more. Join our team and bring your expertise to shape impactful changes across various industries.'
            },
            {
                title: 'Internal roles',
                desc: 'Gain insight into the intricate operations of our firm as our global internal teams leverage their skills, experience, and unique perspectives to create a significant impact and optimize our overall operations.'
            }
        ]
    },

    JoinusCard:{
        title:"Join us",
        caption:"Why RigvedIT?",
        desc:"Our Mission and Values are centered on two primaries which are our Customers and Our Employees. Be part of a transformation journey with your collogues.",
        btnLink:"/job-listing",
        btnText:"Explore our open positions",
        imgSRC:IsolationTreeImage,
        imgSRC2:IsolationRoundedTreeImage
    },
    // engagingAndImpact:{
    //     title:"Engaging for Impact",
    //     caption:"trengthening Bonds, Inspiring Change",
    //     desc:"Pro Bono Engagement: Our commitment to pro bono work underscores our dedication to making a positive impact beyond profit margins. By offering our expertise and resources to those in need, we contribute to the betterment of society while empowering individuals and communities to thrive.",
    //    ImapactCardData : [
    //         {
    //           title: 'Pro Bono Engagement',
    //           content: 'At RigvedIT, our most valuable resource is our team, with each member contributing unparalleled skills and expertise to their endeavors.'
    //         },
    //         {
    //           title: 'Diversity and Inclusion',
    //           content: 'Leveraging our expertise and cutting-edge competencies, we propel meaningful and lasting change.'
    //         },
    //         {
    //           title: 'Community Engagement',
    //           content: 'RigvedIT is committed to making a positive impact by giving back. We dedicate our time and expertise to contribute to a better world. Acknowledging our responsibility to local communities and the global community, we understand that uplifting those in need benefits us all.'
    //         },
    //         {
    //           title: 'Community Connection',
    //           content: 'Step into the dynamic community of RigvedIT Consulting. Joining our team means becoming part of a global network. With current and former members, our diverse community encompasses a broad spectrum of expertise.'
    //         },
    //       ]
    // },

    RigvedJourneyBox:{
        title:"At RigvedIT, each journey is unique, and many of us end up in roles far from our initial positions. The possibilities are limitless.",
        desc:"At RigvedIT, diverse journeys converge, leading us to roles unforeseen, bound only by limitless possibilities.",
        btnLink:"/job-listing",
        btnText:"Apply Now",
        imgSRC:CareersAtRigvedImage,
        imgSRC2:CareersAtRigvedBgImage
    }

    }