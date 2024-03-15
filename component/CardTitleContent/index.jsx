import React from 'react';
import styles from './cardtitlecontent.module.scss';



const CardTitleContent = ({cardData}) => {
  return (
    <>
      <div className={styles.cardContentRows}>
        {cardData.map((card, index) => (
          <div className={styles.cardContentCols} key={index}>
           
            <div className={styles.cardContentWrap}>
              <div className={styles.cardContentTitleWrap}>
                <h4>{card.title}</h4>
              </div>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTitleContent;
