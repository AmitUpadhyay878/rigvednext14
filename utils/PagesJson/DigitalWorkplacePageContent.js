import digitalworkplacebanner from '../../public/images/digitalWorkplace.webp'
import digitalworkplaceabout from '../../public/images/empowerBanner.webp'

export const DigitalWorkplacePageContent={
    seo:{
        title:"",
        description:"",
        link:"",
        image:""
    },
    Banner: {
        title: 'Digital Workplace',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imgSRC:digitalworkplacebanner
    },
    Aboutus:{
      title:"Empower, Evolve: Digital Workplace Simplified",
      desc:"DigitalWorkplace Service sits as the face of any organization to its employees. Organizationalevolution, converging technology and human potential are all part of theexperience envelopes DWP scope of engagement. Our framework empowers teams withcollaboration, redefines work paradigms by effortlessly integratingcutting-edge tools, cloud-based platforms, and intuitive interfaces. All thewhile ensuring your Security and compliance process. Working closely with theconsumer of services and ensuring end to end service is what we bring to thetable with our engagements."  ,
        imgSRC:digitalworkplaceabout
    },

    DigitalCards: {
        title: 'Focus Areas',
        cardList: [
            {
                title: 'Integrated Helpdesk Services',
                desc: 'EndUser forms the nucleus of our service offering. A one-stop-shop experience forusers, with Integrated Run of infrastructure, applications, cloud or projectmanagement office (PMO)'
            },
            {
                title: 'Field Management Services',
                desc: 'FMS is an integral component of our overarching EUC (End User Computing) ecosystem, it aligns with our commitment to providing a seamless experience to the end users we intend to serve'
            },
            {
                title: 'Tools and Automation',
                desc: 'Value from automation comes with Customer Satisfaction Index (CSI), outcome based. We prioritize emphasis on processes alignment with the tools, rather than the other way around.'
            },
            {
                title: 'Collaboration Services',
                desc: 'We have integrated collaboration services within the foundational DWP (Digital Workplace) solutions by default. Our commitment extends to delivering end-to-end services encompassing everything from initiation, design, consulting, support, to migrations.'
            }
            
        ]
    },

    offering: {
        title: 'TRUWorkplace',
        caption: 'How it comes Together',
        desc: 'Acomplete E2E Framework for Digital Workplace Services that includes Helpdesk,FMS, Compliance and Service Management functions for End Users. This is asingle stop shop for all services that are consumed by Users. Be it traditionalDaaS or Modern consumption-based models we engage in ensuring singleaccountability for our customers while pushing Automation, Self Service, LEANand Shift Left agendas',
        offeringBox: [
            {
                mainTitle: 'IHD(Integrated HelpDesk)',
                lists: [
                    'Beit Infra, Apps, Cloud or any IT Service block the Integrated Helpdesk is firstpoint of contact with emphasis on First Time Resolution.'
                ]
            },
            {
                mainTitle: 'Field Management',
                lists: [
                    'FMS,AMC, Compliance and Asset Management are core functions of this group. Be itremote or at site operations this group works closely with IHD as well as theSME layer of IT Services for its delivery.'
                ]
            },
            {
                mainTitle: 'Collaboration',
                lists: [
                    'O365,GSuite, Conferencing, Sharepoint, Self Service etc. Fall under thecollaboration group of services. Be it any technology that enablesCollaboration for End Users this group ensures seamless support and handles allUser issues/requests centrally.'
                ]
            },
            {
                mainTitle: 'Tools and Automation',
                lists: [
                    'ITSM,Portals, MIS, Dashboards etc. are core to this group. This is the group thatenables the entire TRUWorkplace model to come together.'
                ]
            }
            
        ]
    },
}