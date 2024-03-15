import banner from '../../public/images/enterpriceMainBanner.webp'
import aboutimg from '../../public/images/empoweringThumb.webp'
import solutionBanner from '../../public/images/solution-framework.webp'
export const ERPPageContent={
    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    Banner: {
        title: 'Enterprise Resource Planning',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imgSRC:banner
    },
    Aboutus:{
      title:"Empowering Growth: Journey to ERP Excellence",
      desc:"We take pride in our specialization —the adept management and leveraging/ optimization of Enterprise Resource Planning (ERP) landscapes. Our seasoned team is well-versed in navigating swiftly evolving technology, aligning OEM’s roadmap and cloud infrastructure terrain, consistently staying abreast of the latest trends. With a commitment toexcellence, we ensure that our clients' ERP systems are not only current but strategically positioned to thrive in the ever-changing technological landscape."  ,
        imgSRC:aboutimg
    },
    offering:{
        title:"Service Offerings",
        caption:"Service Spectrum: Your Path to Excellence",
        desc:"Explore our diverse range of service offerings meticulously designed to address your unique needs and propel your success forward.",
        offeringBox:[
            {
                mainTitle:"Transformation",
                lists:[
                    "Landscape Optimization and Planning",
                    "Transformation, Migration and Greenfield Implementation",
                    "Program Management and Governance",
                    "Integration Optimization"
                ]
            },
            {
                mainTitle:"Roll out, Upgrades & Enhancement",
                lists:[
                    "Lorem Ipsum is simply dummy text of",
                    "Lorem Ipsum is simply dummy text of",
                    "Lorem Ipsum is simply dummy text of",
                    "Lorem Ipsum is simply dummy text of"
                ]
            },
            {
                mainTitle:"Managed Services",
                lists:[
                    "Application Support Services",
                    "Shared Services",
                    "Tool Based Monitoring",
                    "Service Operations",
                    "Application Infra Management",
                    "24*7 Monitoring Services"
                ]
            },
            {
                mainTitle:"Value Added Services",
                lists:[
                    "Data Volume Management",
                    "Data Archival",
                    "Mobile enabled Infra Monitoring",
                    "Integration Assessment"
                ]
            },
        ]

    },
    solutionandframework:{
        title:"Solutions & Frameworks",
        caption:"Solution Frameworks: Guiding Success",
        desc:"",
        mainIMG:solutionBanner,
        List:[
            {
                title:"TRUAMS",
                desc:"TRUAMS places its emphasis on automation,integration, and the implementation of proactive continuous monitoring withinour solution framework. This approach is instrumental in providing businessusers with efficient services that adhere to ITIL compliance standards.",
                svgImgClass:"icon-list"
            },
            {
                title:"TRUArchival",
                desc:"TRUArchival offers customers to significantly cuttheir data volume ~50%. Organizations accumulate large volumes of datanowadays. TRUArchival achieves reduction in cost, eliminates storage issueswhile addressing compliance concerns.",
                svgImgClass:"icon-persons"
            }
        ]
    },
    SuccessStories:{
        title:"Success Stories",
        caption:"Inspiring Success Stories",
        desc:"Discover the remarkable journeys of individuals and businesses who turned challenges into triumphs, igniting inspiration and motivation along the way.",
    }
}