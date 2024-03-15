import TruarchivalBanner from "../../public/images/truArchivalMainbnr.webp";
import AboutTruarchival from "../../public/images/scalableGrowth.webp";
import TreeViewBox from "../../public/images/treeView.svg";
export const TRUArchivalPageContent={
  seo:{
    title:"",
    description:"",
    link:"",
    image:""
},
    banner:{
            title:"TRUArchival",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSRC:TruarchivalBanner
    },
    about:{
        title:"Scalable Growth, Regulatory Compliance: Our Standardized SAP Database Archival Framework",
        desc:"By implementing a rigorous data archiving strategy, leveraging partitioning, and optimizing compression settings, our framework maintains a standardized approach to SAP database management that aligns with industry best practices.",
        imgSRC:AboutTruarchival
    },

     offeringBox : [
        {
          mainTitle: "Data Archiving and Retention",
          lists: [
            "Define a data retention policy: Determine how long data needs to be retained based on business and regulatory requirements.",
            "Implement data archiving: Regularly archive and remove outdated or unnecessary data from your SAP database. This can help in reducing the database size and improving performance.",
          ],
        },
        {
          mainTitle: "Partitioning and table Distribution",
          lists: [
            "Leverage SAP standard partitioning: Use SAP’s native partitioning features to distribute data across different storage locations based on specific criteria.",
            "Distribute tables intelligently: Consider distributing large tables across multiple storage locations to optimize I/O performance.",
          ],
        },
        {
          mainTitle: "Compression",
          lists: [
            "Enable SAP Standard table compression: Use table compression to reduce the storage footprint of your database.",
            "Regularly monitor and optimize compression settings based on data usage patterns.",
          ],
        },
        {
          mainTitle: "Purging and Cleanup Jobs",
          lists: [
            "Schedule regular database cleanup jobs: Define and schedule jobs to identify and remove obsolete or temporary data from the database.",
            "Monitor and optimize cleanup processes: Regularly review and optimize cleanup processes to ensure they are running efficiently.",
          ],
        },
        {
          mainTitle: "Performance Monitoring and Tuning",
          lists: [
            "Implement SAP standard performance monitoring tools: Use tools like SAP Cockpit to monitor database performance and identify bottlenecks",
            "Regularly tune database parameters: Adjust configuration settings based on performance monitoring results to optimize database performance.",
          ],
        },
        {
          mainTitle: "Backup and Recovery",
          lists: [
            "Establish a robust backup strategy: Regularly back up your SAP database to prevent data loss in case of hardware failures or other disasters.",
            "Test and validate recovery processes: Periodically test and validate your backup and recovery processes to ensure they are effective.",
          ],
        },
        {
          mainTitle: "Security and compliance",
          lists: [
            "Enforce data access controls: Implement role-based access controls to ensure that only authorized users can access and modify sensitive data.",
            "Regularly audit database activities: Conduct regular audits to ensure compliance with security policies and regulations.",
          ],
        },
        {
          mainTitle: "Regular System Updates",
          lists: [
            "Keep the SAP system up to date: Regularly apply software updates, patches, and service packs to benefit from performance improvements, bug fixes, and security enhancements.",
          ],
        },
        {
          mainTitle: "Capacity Planning",
          lists: [
            "Monitor database growth trends: Regularly analyze database growth trends to anticipate future capacity needs.",
            "Plan for scalability: Based on growth projections, plan for the scalability of your infrastructure to accommodate increased data volumes.",
          ],
        },
        {
          mainTitle: "Documentation and training",
          lists: [
            "Document best practices: Maintain documentation outlining best practices for database management in your SAP environment.",
            "Provide training: Ensure that your team is well-trained on database management best practices and stays updated on the latest features and improvements.",
          ],
        },
      ],

    Outcome:{
        title:"TRUArchival Outcome",
        imgSRC:TreeViewBox,
        treeViewBoxContentLists:[
            "Optimized Performance",
            "Storage Efficiency",
            "Enhanced Data Accessibility",
            "Extended System lifespan",
            "Cost Savings",
            "Compliance Adherence",
            "Improved migration timelines & Downtime",
        ]
    }
    

}