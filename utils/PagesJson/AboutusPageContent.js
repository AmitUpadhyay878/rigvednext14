import AboutRigved from '../../public/images/about-rigved-it.webp'
import AboutUsBannerImage from '../../public/images/aboutus-banner-image.webp'

import MissionIcon from '../../public/images/about-mission-icon.svg'
import VisionIcon from '../../public/images/about-vision-icon.svg'

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

export const AboutusPageContent = {

    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },

    Banner: {
        title: 'About Us',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imgSRC:AboutUsBannerImage
    },
    AboutusSection:{
        title:"About Rigved IT",
        desc:"Rigved IT Solutions is dedicated to providing cutting-edge solutions tailored to meet the unique needs of your business. With a focus on innovation and client satisfaction, we strive to deliver top-notch IT services that propel your organization towards success. Our team of experienced professionals is committed to excellence, working tirelessly to ensure that your technological needs are not just met, but exceeded. At Rigved, we believe in forging long-lasting partnerships built on trust, reliability, and a shared vision for growth.",
        imgSRC:AboutRigved
    },
    WhoWeAre:{
        title:"Who We Are",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    WhatWeDo:{
            title:"What We Do",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    ShapingExcellence:{
        title:"Shaping Excellence for Over 15 Years",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        List:[
            {
                svgSRC:MissionIcon,
                title:"Our Mission",
                desc:"Our mission is to build lasting relationships with our customers through exceptional IT services delivery, innovation, speed and trust for mutual success."
            },
            {
                svgSRC:VisionIcon,
                title:"Our Vision",
                desc:"Enrich Value driven Relationship with Our Customers and be the preferred employer for our Value creators."
            },
            {
                svgSRC:MissionIcon,
                title:"Our Values",
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
            }
        ]
    },
    counter:[
        {
            count:2,
            desc:"World-Class, Secure Delivery Center"
        },
        {
            count:15,
            desc:"Years of Delivery Experience"
        },
        {
            count:60,
            desc:"Customers"
        },
        {
            count:500,
            desc:"Professionals"
        },
        {
            count:5,
            desc:"CMMI Level"
        }
    ],

    partners: {
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
            {
                imageSRC: PartnerImage13
            },
            {
                imageSRC: PartnerImage14
            }
        ]
    },

}