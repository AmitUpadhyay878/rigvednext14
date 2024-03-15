import bannerIMG from '../../public/images/truconnectMain.webp'
import AboutTruConnectBanner from '../../public/images/truconnect-about.webp'
import challengesImage from '../../public/images/interllibridgeBnr.webp'
import TruconnectDealerMobile from '../../public/images/truconnect-dealer.webp'

export const TruConnectPageContent={
    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    banner:{
        title:"TRUConnect",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgSRC:bannerIMG
    },

    aboutSection:{
            title:"DIGITALLY TRANSFORMING SALES AND DISTRIBUTION ECOSYSTEM TO FUEL REVENUE GROWTH!",
            desc:"A company's dealer often finds it challenging to help grow the business because of technological gaps due to the traditional system of field work flows and are dependent upon the company’s POCs for the most trivial task like placing or tracking orders. Often sales teams find themselves over burdened with calls from dealers, and retailers, making it harder for them to create new business.",
            imgSRC:AboutTruConnectBanner
    },

    ChallengesSolutionandROI:{
        title:"Challenges, Solution and ROI",
        caption:"Mastering IT Challenges with RigvedIT",
        desc:"RigvedIT is your partner in conquering IT challenges. With our tailored solutions and expert guidance, we help businesses overcome obstacles, ensuring smooth operations in the digital landscape. Trust us to navigate the complexities of technology, so you can focus on what matters most – your success.",
        challengesBox:[
            {
                title:"Stagnant information often leads to obstructed workflows",
                SVGClass:'icon-services'
            },
            {
                title:"Redefining Your Future with Cutting-edge Digital Services",
                SVGClass:'icon-time'
            },
            {
                title:"Manual paperwork and voice based archaic experiences prove to be inefficient",
                SVGClass:'icon-persons'
            },
            {
                title:"Clogged Bandwidth of SalesTeams becouse of calls fromdealers, back-office, and retailers",
                SVGClass:'icon-graph'
            }
        ]
    },

    AboutSolutionSection:{
        title:"IntelliBridge is Birlasofts one-stop-shop portal created explicitly for dealers and distributors to provide them with all the information needed on the OEM products",
        desc:"This platform helps you in making informed decisions leading to higher revenue due to assortment availability as per customer needs:",
        imgSRC:challengesImage
    },

    investmentSection:[
        {
            per:30,
            desc:"Higher Timely Order Fulfillment"
        },
        {
            per:20,
            desc:"Improvement in Stock Replenishment"
        },
        {
            per:10,
            desc:"Increase in Revenue" 
        }
    ],

    dealerExperienceSection:{
        title:"One Stop Shop for Dealer Experience",
        caption:<>Your Dealer's<br/>Digital Ally</>,
        desc:"Revolutionizing Dealer Operations. With cutting-edge software and unwavering support, we're your trusted partner for streamlined dealership management. Experience efficiency like never before, only with RigvedIT.",
        Dealers:{
            title:"Dealer",
            imgSRC:TruconnectDealerMobile,
            DealerCards:[
                {
                    title:"Sales",
                    caption:"Insights for growing business",
                    list:[
                        'Asking rate, sales targets',
                        'Network performance',
                        'Lead management',
                        'Product launch announcements',
                        'Digitized order to cash cycle'
                    ]
                },
                {
                    title:"Logistics",
                    caption:"Seamless order execution",
                    list:[
                        'Order booking and status',
                        'Live location tracking',
                        'Delivery rating',
                        'Electronic proof of delivery'
                    ]
                },
                {
                    title:"Commercial",
                    caption:"Dealers finance management",
                    list:[
                        'Outstanding, available credit',
                        'Alerts for availing cash discount',
                        'Download invoice pdf, ledgers, credit notes'
                    ]
                },
                {
                    title:"Technical Services",
                    caption:"Help serve customers better",
                    list:[
                        'Service booking, enquiry handling',
                        'Digital onboarding of Channel partners',
                        'Self service tools'
                    ]
                },
            ]
        }
    },

    keyFeatures:{
        title:"Key Features",
        caption:"Unveiling RigvedIT's Key Features",
        desc:"The solution offers an enhanced and uniform user experience for the channel partners – on both the web and mobile applications. Some of its key features include:",
       centerText:"Key Features",
       featureContent:[
        'Manual paperwork and voice based archaic experiences proveto be inefficient',
        'Real-time multi-way communication',
        'Multi-lingual support',
        'Flexible integration between bot and wearable devices',
        'Support offline transactions in areas with poor network connectivity',
        'Push notifications to promote new campaigns and schemes using 6 machine learning algorithm',
        'Enhanced customer experience',
        'Instant data and analytics access to boost network performance',
        'Shipment tracking, order booking and live order status',
        'Analytics dashboards and smart reports'
       ]
        
    }
}