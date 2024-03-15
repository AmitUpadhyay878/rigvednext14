import TruConnectBanner from '../../public/images/truworkplaceMainbnr.webp'
import TruWorkplacebnr from '../../public/images/truworkplaceThumb.webp'
import TruworkBanner from '../../public/images/serviceStoreThumb.svg'
import RipBnr from '../../public/images/consultingThumb.webp'
export const TruWorkPlacePageContent = {
    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    banner: {
        title: 'TRUWorkplace',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imgSRC: TruConnectBanner
    },
    aboutusSection: {
        title: 'TRUWorkplace',
        desc: 'Our framework has core pillars of Process, Applied Technology and People performance. All the while our philosophy of Transformation in this domain is not based on bringing cutting edge tools but making the most of already invested platform technologies that any customers have a base in. Our TRU philosophy of “Trusted, Reliable and Unabated” drive keeps the Business Objectives aligned with the Value Creation Zone for this space. Following infographic explains what the span of services that we intend on engaging when it comes to End User Touchpoints',
        imgSRC: TruWorkplacebnr
    },

    truworkplaceArtSection: {
        truworkplaceArtMainContent: [
            'SERVICE STORE',
            'APP AND INFRA',
            'SELF SERVICE',
            'KNOWLEDGE MANAGEMENT'
        ],
        workbanner: TruworkBanner,
        list: [
            '3RD PARTY APP INTEGRATION',
            "HOW TO'S AND INFORMATION REQUEST",
            'ACCESS REQUEST',
            'COMPLEX AUTOMATED WORKFLOWS',
            'APOPS',
            'E2E MAMAGED SERVICE',
            'BUSINESS SERVICE',
            'DIGITAL TOUCHPOINTS',
            'TECH ENABLED',
            'SERVICE AT A CLICK',
            'MARKETPLACE APP BASED SUPPORT',
            'SEAMLESS, ENCHANCED USER EXPERIENCE'
        ]
    },

    RIPcard: {
        imgSRC: RipBnr,
        desc: 'Rip and Replace is not our consulting philosophy but Reduce and Simplify Clutter is the Torch Light we work with. This ensures that our Customers keep their existing investments in the platforms and licenses as is'
    },

    blockSection: {
        title: 'Lorem Ipsum is simply',
        offeringBox: [
            {
                mainTitle: 'IHD (Integrated Help Desk)',
                mainContent:
                    'Beit Infra, Apps, Cloud or any IT Service block the Integrated Helpdesk is first point of contact with emphasis on First Time Resolution.'
            },
            {
                mainTitle: 'Field Management',
                mainContent:
                    'FMS,AMC, Compliance and Asset Management are core functions of this group. Be it remote or at site operations this group works closely with IHD as well as the SME layer of IT Services for its delivery.'
            }
        ],

        offeringBox2: [
            {
                mainTitle: 'Collaboration',
                mainContent:
                    'O365,GSuite, Conferencing, Share point, Self Service etc. Fall under the collaboration group of services. Be it any technology that enables Collaboration for End Users this group ensures seamless support and handles all User issues/requests centrally.'
            },
            {
                mainTitle: 'Tools and Automation',
                mainContent:
                    'ITSM, Portals, MIS, Dashboards etc. are core to this group. This is the group that enables the entire TRUWorkplace model to come together.'
            }
        ]
    },

    ourValueSection: {
        title: 'OurValue creation Zone works on 5 Areas',
        valueBox: [
            {
                title: 'DO IT Yourself',
                Desc: 'Promote a Do it Yourself culture and Enable Employees to automate their tasks using 0365 and other tools',
                logoSVG: 'icon-do-it-yourself-icon'
            },
            {
                title: <>Self Service Pull <br /> rather Push</>,
                Desc: 'Lets users pull required services rather than pushing services Provision DWP service on any devices from anywhere provisioning service catalog and self heading recommendation / notification to the employee',
                logoSVG: 'icon-self-service-icon'
            },
            {
                title: 'Personalized Assistant',
                Desc: "Personal Tracking and reminding 'My important tasks' Empower people with 'just-in-time' knowledge and expertise Enable consolidation and collaboration",
                logoSVG: 'icon-assistant-icon'
            },
            {
                title: 'Enhanced Workspace',
                Desc: 'Connected and with Collaboration enabled services the users can seamlessly create workspaces to share information. Create Whitespaces to cowork on projects and manage security by default',
                logoSVG: 'icon-enhanced-icon'
            },
            {
                title: 'Applied Tech',
                Desc: 'Transform your data into actionable insights by advising employees on persona-based productivity guidelines Enabling the relevant KPIs and Dashboard for the employee',
                logoSVG: 'icon-applied-tech-icon'
            }
        ]
    }
}
