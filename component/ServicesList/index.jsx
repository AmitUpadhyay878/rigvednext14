import React from 'react';
import styles from './serviceslist.module.scss';


const ServicesList = ({ServicesData,extra=""}) => {

  return (
    <div className={`${styles.servicesRows} ${styles?.[extra]}`}>
    {ServicesData.map((service, index) => (
        <div className={`${styles.servicesCols}`}>
          <div className={styles.servicesBox} key={index}>
            <h4>{service.mainTitle}</h4>
            {service.lists && service.lists.length > 0 && (
              <ul>
                {service.lists?.map((list, listIndex) =>{ 
                  return(
                    <li key={listIndex} title={list}>
                        <span className={service.lists.length>1 ? styles.listDetails: ""}>{list}</span>
                    </li>
                  )
                }
                )}
              </ul>
            )}

            {service.mainContent && (
              <p>{service.mainContent}</p>
            )}
          </div>
        </div>
    ))}
    </div>
  );
};

export default ServicesList;