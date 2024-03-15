import TruPlanBanner from "../../public/images/truPlanMainbnr.webp";
import TruPlanAbtbnr from "../../public/images/truPlanThumb.webp";
import businessChallenge from '../../public/images/businessChallengeBanner.webp'
import rightInfoBNR from '../../public/images/accesstorightBNR.webp'
import cementIndustryBanner from "../../public/images/offeringThumb.webp";
import salientFeaturesBg from "../../public/images/salient-features-bg.webp";

export const TruePlanPageContent={
    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    banner:{
        title:"TRUPlan",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imgSRC:TruPlanBanner
    },

    aboutSection:{
        title:"Planning Analytics Solution for Cement Industry",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgSRC:TruPlanAbtbnr
    },
    
    businessChallengesSection:{
        title:"BUSINESS CHALLENGES",
        imgSRC:businessChallenge,
    list:[
        'Large cement companies have an advantage in handling demand downturns due to economies of scale, operational efficiencies, and geographical diversification.',
        'Cement is essential for infrastructure and construction.',
        'Setting up a new cement plant requires significant capital investment (around 3 years of revenue).',
        'Power costs make up about 35% of cement production expenses.',
        'Cement market and consumption fluctuate with economic and climatic cycles.',
        'Challenges in the industry include fuel efficiency, unit power consumption, and availability of captive power.'
    ] },

    rightInfoSection:{
        title:"BUILDING AN INTEGRATED AND SUSTAINABLE WORLD BY LEVERAGING TECHNOLOGY",
        Rtitle:"ACCESS TO RIGHT INFORMATION",
        imgSRC:rightInfoBNR,
        boxsList:[
            "Forward-Looking View: It's important to have a forward- looking view of the business.",
            "Historic Data and Trends: Analyzing historic data  helps in understanding trends and patterns.",
            "Measure and Monitor:  Decision makers need to  measure and monitor their business effectively.",
            "Digging Down: The ability  to dig down and determine the root cause of a situation is crucial.",
            "Strong Analytical and  Reporting Capabilities: Having  robust analytical and reporting capabilities is essential."
        ]
    },

    ImgCardSection:{
        title:"RigvedIT Offering for Cement Industry",
        desc:"RigvedIT recognizes certain areas for optimization within the cement industry that can enable decision makers to get a sharper insight into their business. It is important for cement companies to have a strategic vision of their growth and create efficient operational plans to achieve those goals. Keeping this in mind, we offer the Planning Analytics Solution Model as an accelerator which is built on IBM Cognos platform. It is an accelerator, which will enable cement companies to do their Budgeting and Forecasting activities in an efficient manner.",
        imgSrc:cementIndustryBanner
    },

    salientFeaturesSection:{
        title:"Salient Features",
        caption:"Lorem Ipsum is simply dummy text of",
        desc:"A prepackaged Budgeting, Planning and Analytical tool specifically built for  the cement manufacturing companies in IBM Cognos, TM1. It includes the  following:",
        salientFeaturesBgIMG:salientFeaturesBg,
        list:[
            {
                title:"Manufacturing and Marketing processes with key areas covered",
                id:1
            },
            {
                title:"Preconfigured dimensions of  the plant, chart of accounts, cost centers, region hierarchy, products, etc.",
                id:2
            },
            {
                title:"Shorter budgeting cycle",
                id:3
            },
            {
                title:"Fully customizable solution  keeping pace with the  business dynamics of the  cement industry",
                id:4
            },
            {
                title:"Modular approach that  allows further scalability of the models",
                id:5
            },
            {
                title:"Shorter implementation  cycle, benefits of which can  be passed on to the customer",
                id:6
            },
            {
                title: "Unparalleled domain expertise",
                id:7
            }
        ]
    },

    blockSection:[
        {
            mainTitle:"Pre Build Module",
            lists: [
                "Production Planning ",
                "Power",
                "Landed Rate of",
                "Materials",
                "Mines",
                "Manufacturing",
                "Cost Logistics Cost",
                "Necked Cement  Realisation",
                "What-if-analysis",
              ],
       },
       {
        mainTitle: "Pre Build Module",
        lists: [
          "Upto 50% Reduction in  Budgeting Cycle",
          "Upto25%Increase in  Budget Accuracy  ",
          "Upto20%Cost Optimization in Freight  Charges",
          "Upto30% Cost  Optimization in Fixed Costs and Stores and Spares",
          "Upto 30%Cost  Optimization in Raw Material Costs",
        ],
      },
    ]
}