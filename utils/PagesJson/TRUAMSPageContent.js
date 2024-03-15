import TruamsBanner from "../../public/images/truamsMainBnr.webp";
import AboutTruams from "../../public/images/truCoeLeadThumb.webp";
import roundCircle from '../../public/images/roundGroup.svg'
import roundCircleShadow from '../../public/images/counterShapearrow.svg'
import roundCircleShadowGreen from '../../public/images/counterShapearrowgreen.svg'
import roundCircleShadowYellow from '../../public/images/counterShapearrowyellow.svg'
import roundCircleShadowPurple from '../../public/images/counterShapearrowpurple.svg'
import roundCircleShadowRed from '../../public/images/counterShapearrowred.svg'

export const TRUAMSPageContent={
  seo:{
    title:"",
    description:"",
    link:"",
    image:""
},
    banner:{
    title:"TRUAMS",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSRC:TruamsBanner
    },

    about:{
    title:"TRU COE lead Devops Support Framework",
    desc:"TRUAMS framework is having proactive, agile, and collaborative approach. By embracing continuous improvement, optimizing business processes, and effectively managing changes, framework maturity ensure their ERP and digital applications evolve in tandem with changing business needs",
     imgSRC:AboutTruams
    },

    serviceOfferSection:{
    offeringBox : [
            {
              mainTitle: "Proactive",
              lists: [
                "Proactively monitoring and addressing potential issues before they impact operations",
                "Regularly reviewing and updating systems to stay a head of technological challenges",
                "Anticipating and adapting to changing businessrequirements before they become critical"
              ],
            },
            {
              mainTitle: "KPI Driven",
              lists: [
                "End user satisfaction measured and monitored",
                "SLA’s& KPIs are agreed , governed , monitored and reported",
                "Q-o-Q and Y-o-Y improvements in all key parameters"
              ],
            },
            {
              mainTitle: "Agile & Collaborative",
              lists: [
                "Embracing an agile development and management app roachfor flexibility and adaptability",
                "Iteratively responding to evolving business needs with quick development cycles",
                "Prioritizing collaboration and flexibility to navigate changing project requirements.",
                "Ensuring open communication channels for add ressingissues promptly and gathering feedback",
                "Collaborating with stakeholders to gain a deep understanding of changing business requirements",
              ],
            },
            {
              mainTitle: "Continuous Improvements",
              lists: [
                "Establishing a culture of continuous improvement within the AMS team",
                "Regularly reviewing processes, identifyingbottlenecks, and seeking opportunities for optimization",
                "Using feedback loops to continuously enhance theefficiency and effectiveness of the AMS framework",
                "Leveraging analytics to identify areas for improve mentand implementing automation where applicable"
              ],
            },
            {
              mainTitle: "Effective Change Management",
              lists: [
                "Developing a comprehensive change management strategy to handle updates, enhancements, and modifications",
                "Communicating changes effectively to end-users, providing training and support for a smooth transition",
                "Incorporating user feedback to refine and improve thechange management process",
                "SME & COE’s involvement for a major business process change for outside in View",
              ],
            },
            {
              mainTitle: "Support Services Maturity",
              lists: [
                "Implementing practices that contribute to the maturity of the Customer Support framework",
                "Regularly assessing the effectiveness of the framework and making adjustments based on lessons learned.",
                "Ensuring that the framework aligns with industry best practices and standards for application management"
              ]
            }
          ]
    },

    outComesectionss:{
        title:"TRUAMS Framework Outcome",
        roundIMG:roundCircle,

        outComeContentLists:[
            {
                imgSRC:roundCircleShadow,
                title:"Reduce operational costs"
            },
            {
                imgSRC:roundCircleShadowGreen,
                title:"Increased User Satisfaction"
            },
            {
                imgSRC:roundCircleShadowRed,
                title:"Effective Change Management process for business and technologies changes"
            },
            {
                imgSRC:roundCircleShadowYellow,
                title:"Agile Business needs are catered via defined process"
            },
            {
                imgSRC:roundCircleShadowPurple,
                title:"Minimize impacts to business operations"
            },
        ]
    }
}